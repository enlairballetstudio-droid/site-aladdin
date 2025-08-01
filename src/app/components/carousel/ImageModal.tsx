'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type ImageType = {
  src: string;
  alt: string;
};

type ImageModalProps = {
  isOpen: boolean;
  selectedImage: ImageType | null;
  currentIndex: number;
  totalImages: number;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
};

export default function ImageModal({ 
  isOpen, 
  selectedImage, 
  currentIndex, 
  totalImages, 
  onClose, 
  onNavigate 
}: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigate('next');
      } else if (e.key === 'ArrowLeft') {
        onNavigate('prev');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen || !selectedImage) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" 
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Fechar"
        >
          <FaTimes size={28} />
        </button>
        
        <button 
          onClick={(e) => { e.stopPropagation(); onNavigate('prev'); }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all z-10"
          aria-label="Imagem anterior"
        >
          <FaChevronLeft size={24} />
        </button>
        
        <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={1200}
            height={800}
            className="max-w-full max-h-[80vh] object-contain"
            priority
          />
        </div>
        
        <button 
          onClick={(e) => { e.stopPropagation(); onNavigate('next'); }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all z-10"
          aria-label="Próxima imagem"
        >
          <FaChevronRight size={24} />
        </button>
        
        <div className="text-white text-center mt-4 text-lg">
          {selectedImage.alt} ({currentIndex + 1} de {totalImages})
        </div>
      </div>
    </div>
  );
}
