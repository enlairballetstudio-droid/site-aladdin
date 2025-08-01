'use client';

import { useState } from 'react';
import GalleryCarousel from './GalleryCarousel';
import ImageModal from './ImageModal';

type GalleryWrapperProps = {
  originalImages: { src: string; alt: string }[];
};

export default function GalleryWrapper({ originalImages }: GalleryWrapperProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [...originalImages, ...originalImages];

  const openModal = (image: { src: string; alt: string }, index: number) => {
    const originalIndex = index % originalImages.length;
    setSelectedImage(originalImages[originalIndex]);
    setCurrentIndex(originalIndex);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigate = (direction: 'prev' | 'next') => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % originalImages.length;
    } else {
      newIndex = (currentIndex - 1 + originalImages.length) % originalImages.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(originalImages[newIndex]);
  };

  return (
    <>
      <GalleryCarousel 
        images={images}
        onImageClick={openModal}
      />
      
      <ImageModal 
        isOpen={!!selectedImage}
        selectedImage={selectedImage}
        currentIndex={currentIndex}
        totalImages={originalImages.length}
        onClose={closeModal}
        onNavigate={navigate}
      />
    </>
  );
}
