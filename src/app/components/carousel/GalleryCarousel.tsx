'use client';

import { useCallback, useEffect, useRef, type PointerEvent as ReactPointerEvent } from 'react';
import Image from 'next/image';
import { FaWebAwesome } from 'react-icons/fa6';

type GalleryImage = {
  readonly src: string;
  readonly alt: string;
};

type GalleryCarouselProps = {
  readonly images: readonly GalleryImage[];
  readonly onImageClick: (image: GalleryImage, index: number) => void;
};

const SCROLL_SPEED_PX_PER_SECOND = 18;
const RESUME_DELAY_MS = 2000;
const DRAG_THRESHOLD_PX = 8;

export default function GalleryCarousel({ images, onImageClick }: GalleryCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const autoScrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const scrollPositionRef = useRef(0);
  const lastTimestampRef = useRef(0);
  const isDraggingRef = useRef(false);
  const didDragRef = useRef(false);
  const isPausedRef = useRef(false);
  const isInViewRef = useRef(false);
  const isPageVisibleRef = useRef(true);
  const prefersReducedMotionRef = useRef(false);

  const shouldAutoScroll = useCallback(
    () =>
      isInViewRef.current &&
      isPageVisibleRef.current &&
      !prefersReducedMotionRef.current &&
      !isPausedRef.current &&
      !isDraggingRef.current,
    [],
  );

  const stopAnimation = useCallback(() => {
    if (animationIdRef.current !== null) {
      cancelAnimationFrame(animationIdRef.current);
      animationIdRef.current = null;
    }
  }, []);

  const startAnimation = useCallback(() => {
    const container = containerRef.current;
    if (!container || animationIdRef.current !== null || !shouldAutoScroll()) return;

    const loopWidth = container.scrollWidth / 2;
    if (loopWidth <= 0) return;

    const animate = (timestamp: number) => {
      if (!shouldAutoScroll()) {
        animationIdRef.current = null;
        return;
      }

      if (lastTimestampRef.current === 0) lastTimestampRef.current = timestamp;

      const elapsedSeconds = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;
      scrollPositionRef.current += SCROLL_SPEED_PX_PER_SECOND * elapsedSeconds;

      if (scrollPositionRef.current >= loopWidth) scrollPositionRef.current = 0;

      container.scrollLeft = scrollPositionRef.current;
      animationIdRef.current = requestAnimationFrame(animate);
    };

    lastTimestampRef.current = 0;
    animationIdRef.current = requestAnimationFrame(animate);
  }, [shouldAutoScroll]);

  const synchronizeAnimation = useCallback(() => {
    if (shouldAutoScroll()) {
      startAnimation();
      return;
    }

    stopAnimation();
  }, [shouldAutoScroll, startAnimation, stopAnimation]);

  const resumeAfterInteraction = useCallback(() => {
    if (autoScrollTimeoutRef.current) clearTimeout(autoScrollTimeoutRef.current);

    autoScrollTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
      synchronizeAnimation();
    }, RESUME_DELAY_MS);
  }, [synchronizeAnimation]);

  const handlePointerDown = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;

      const container = containerRef.current;
      if (!container) return;

      isDraggingRef.current = true;
      didDragRef.current = false;
      isPausedRef.current = true;
      startXRef.current = event.clientX;
      scrollLeftRef.current = container.scrollLeft;
      synchronizeAnimation();
    },
    [synchronizeAnimation],
  );

  const handlePointerMove = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container || !isDraggingRef.current) return;

    const distance = event.clientX - startXRef.current;
    if (Math.abs(distance) > DRAG_THRESHOLD_PX) {
      if (!didDragRef.current) {
        didDragRef.current = true;
        container.setPointerCapture(event.pointerId);
      }
      event.preventDefault();
    }

    if (!didDragRef.current) return;

    const nextPosition = Math.max(0, scrollLeftRef.current - distance * 1.5);
    container.scrollLeft = nextPosition;
    scrollPositionRef.current = nextPosition;
  }, []);

  const handlePointerEnd = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      if (container?.hasPointerCapture(event.pointerId)) container.releasePointerCapture(event.pointerId);

      isDraggingRef.current = false;
      resumeAfterInteraction();
    },
    [resumeAfterInteraction],
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => {
      prefersReducedMotionRef.current = mediaQuery.matches;
      synchronizeAnimation();
    };
    const updatePageVisibility = () => {
      isPageVisibleRef.current = !document.hidden;
      synchronizeAnimation();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting;
        synchronizeAnimation();
      },
      { threshold: 0.1 },
    );

    updateMotionPreference();
    updatePageVisibility();
    observer.observe(container);
    mediaQuery.addEventListener('change', updateMotionPreference);
    document.addEventListener('visibilitychange', updatePageVisibility);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', updateMotionPreference);
      document.removeEventListener('visibilitychange', updatePageVisibility);
      stopAnimation();
      if (autoScrollTimeoutRef.current) clearTimeout(autoScrollTimeoutRef.current);
    };
  }, [stopAnimation, synchronizeAnimation]);

  return (
    <div
      ref={containerRef}
      aria-label="Galeria deslizante de bastidores"
      className="flex w-full min-w-full touch-pan-y select-none gap-6 overflow-x-auto px-4 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
    >
      {images.map((image, index) => (
        <button
          key={`${image.src}-${index}`}
          type="button"
          className="group relative h-96 w-72 shrink-0 overflow-hidden rounded-2xl text-left shadow-lg outline-none transition-transform duration-300 hover:scale-[1.02] focus-visible:ring-4 focus-visible:ring-[#d8b45a]"
          onClick={() => {
            if (!didDragRef.current) onImageClick(image, index);
          }}
        >
          <Image src={image.src} alt={image.alt} fill draggable={false} className="object-cover" sizes="288px" />
          <span aria-hidden="true" className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
            <FaWebAwesome className="h-12 w-12 text-[#f3d47c] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </span>
        </button>
      ))}
    </div>
  );
}
