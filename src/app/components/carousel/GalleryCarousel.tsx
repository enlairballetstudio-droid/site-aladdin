'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaWebAwesome } from "react-icons/fa6";

type ImageType = {
  src: string;
  alt: string;
};

type GalleryCarouselProps = {
  images: ImageType[];
  onImageClick: (image: ImageType, index: number) => void;
};

export default function GalleryCarousel({ images, onImageClick }: GalleryCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const scrollPositionRef = useRef(0);
  const isPausedRef = useRef(false);
  const animationIdRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number>(0);
  const scrollSpeed = 0.3;
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollContainer = containerRef.current;

  // Event handlers
  const handleMouseDown = useCallback((e: MouseEvent) => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - scrollContainer.offsetLeft;
    scrollLeftRef.current = scrollContainer.scrollLeft;
    isPausedRef.current = true;
    if (document.body) {
      document.body.style.cursor = 'grabbing';
    }
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const scrollContainer = containerRef.current;
    if (!isDraggingRef.current || !scrollContainer) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startXRef.current) * 2;
    scrollContainer.scrollLeft = scrollLeftRef.current - walk;
    scrollPositionRef.current = scrollLeftRef.current - walk;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    if (document.body) {
      document.body.style.cursor = 'grab';
    }
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }
    autoScrollTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 2000);
  }, []);

  // Touch event handlers
  const handleTouchStart = useCallback((e: TouchEvent) => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;
    isDraggingRef.current = true;
    startXRef.current = e.touches[0].pageX - scrollContainer.offsetLeft;
    scrollLeftRef.current = scrollContainer.scrollLeft;
    isPausedRef.current = true;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    const scrollContainer = containerRef.current;
    if (!isDraggingRef.current || !scrollContainer) return;
    e.preventDefault();
    const x = e.touches[0].pageX - scrollContainer.offsetLeft;
    const walk = (x - startXRef.current) * 2;
    scrollContainer.scrollLeft = scrollLeftRef.current - walk;
    scrollPositionRef.current = scrollLeftRef.current - walk;
  }, []);

  const handleTouchEnd = useCallback(() => {
    isDraggingRef.current = false;
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }
    autoScrollTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 2000);
  }, []);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    const containerWidth = scrollContainer.scrollWidth / 2;

    const animateScroll = (timestamp: number) => {
      if (!lastTimestampRef.current) lastTimestampRef.current = timestamp;
      const deltaTime = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;

      if (!isPausedRef.current && !isDraggingRef.current) {
        scrollPositionRef.current = (scrollPositionRef.current + (scrollSpeed * deltaTime) / 16);
        
        if (scrollPositionRef.current >= containerWidth) {
          scrollPositionRef.current = 0;
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft = scrollPositionRef.current;
        }
      }
      
      const id = requestAnimationFrame(animateScroll);
      animationIdRef.current = id;
    };

    const startScrolling = () => {
      if (animationIdRef.current === null) {
        const id = requestAnimationFrame(animateScroll);
        animationIdRef.current = id;
      }
    };

    const stopScrolling = () => {
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }
    };

    // Add event listeners
    scrollContainer.addEventListener('mousedown', handleMouseDown as EventListener);
    document.addEventListener('mousemove', handleMouseMove as EventListener);
    document.addEventListener('mouseup', handleMouseUp);
    
    scrollContainer.addEventListener('touchstart', handleTouchStart as EventListener, { passive: false });
    scrollContainer.addEventListener('touchmove', handleTouchMove as EventListener, { passive: false });
    scrollContainer.addEventListener('touchend', handleTouchEnd as EventListener);

    startScrolling();

    return () => {
      stopScrolling();
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
      
      scrollContainer.removeEventListener('mousedown', handleMouseDown as EventListener);
      document.removeEventListener('mousemove', handleMouseMove as EventListener);
      document.removeEventListener('mouseup', handleMouseUp);
      
      scrollContainer.removeEventListener('touchstart', handleTouchStart as EventListener);
      scrollContainer.removeEventListener('touchmove', handleTouchMove as EventListener);
      scrollContainer.removeEventListener('touchend', handleTouchEnd as EventListener);
      
      if (document.body) {
        document.body.style.cursor = '';
      }
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp, handleTouchStart, handleTouchMove, handleTouchEnd]);

  return (
    <div 
      ref={containerRef}
      className="flex pb-6 scrollbar-hide select-none touch-none"
      style={{
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        cursor: 'grab',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch',
        width: '100%',
        minWidth: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
        padding: '0 16px'
      }}
    >
      {images.map((image, index) => (
        <div 
          key={index} 
          className="group relative flex-shrink-0 w-72 h-96 rounded-2xl shadow-lg cursor-pointer overflow-hidden"
          style={{
            scrollSnapAlign: 'start',
            flex: '0 0 auto',
            marginRight: '1.5rem',
            width: '288px',
            height: '384px'
          }}
          onClick={() => onImageClick(image, index)}
        >
          <div className="absolute inset-0 transform origin-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <FaWebAwesome className="w-12 h-12 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
