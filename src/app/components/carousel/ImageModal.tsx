'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

type ImageType = {
  readonly src: string;
  readonly alt: string;
};

type ImageModalProps = {
  readonly isOpen: boolean;
  readonly selectedImage: ImageType | null;
  readonly currentIndex: number;
  readonly totalImages: number;
  readonly onClose: () => void;
  readonly onNavigate: (direction: 'prev' | 'next') => void;
};

export default function ImageModal({
  isOpen,
  selectedImage,
  currentIndex,
  totalImages,
  onClose,
  onNavigate,
}: ImageModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNavigate('next');
      if (event.key === 'ArrowLeft') onNavigate('prev');
    };

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen || !selectedImage || typeof document === 'undefined') return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={selectedImage.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden overscroll-contain bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-5xl flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 z-20 rounded-full bg-black/70 p-3 text-white transition-colors hover:bg-black focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Fechar imagem"
        >
          <FaTimes size={24} />
        </button>

        <button
          type="button"
          onClick={() => onNavigate('prev')}
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition-colors hover:bg-black focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Imagem anterior"
        >
          <FaChevronLeft size={24} />
        </button>

        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          width={1400}
          height={1000}
          sizes="100vw"
          className="min-h-0 max-h-[calc(100dvh-6rem)] w-auto max-w-full rounded-xl object-contain"
          priority
        />

        <button
          type="button"
          onClick={() => onNavigate('next')}
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition-colors hover:bg-black focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Próxima imagem"
        >
          <FaChevronRight size={24} />
        </button>

        <p className="mt-3 text-center text-sm text-white sm:text-base">
          {selectedImage.alt} ({currentIndex + 1} de {totalImages})
        </p>
      </div>
    </div>,
    document.body,
  );
}
