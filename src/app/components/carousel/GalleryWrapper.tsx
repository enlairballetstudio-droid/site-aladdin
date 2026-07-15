'use client';

import { useEffect, useMemo, useState } from 'react';
import GalleryCarousel from './GalleryCarousel';
import ImageModal from './ImageModal';

type GalleryImage = {
  readonly src: string;
  readonly alt: string;
};

type GalleryWrapperProps = {
  readonly originalImages: readonly GalleryImage[];
};

export default function GalleryWrapper({ originalImages }: GalleryWrapperProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = useMemo(() => [...originalImages, ...originalImages], [originalImages]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const openModal = (image: GalleryImage, index: number) => {
    const originalIndex = index % originalImages.length;
    setSelectedImage(originalImages[originalIndex]);
    setCurrentIndex(originalIndex);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  const navigate = (direction: 'prev' | 'next') => {
    const nextIndex = direction === 'next'
      ? (currentIndex + 1) % originalImages.length
      : (currentIndex - 1 + originalImages.length) % originalImages.length;

    setCurrentIndex(nextIndex);
    setSelectedImage(originalImages[nextIndex]);
  };

  return (
    <>
      <GalleryCarousel images={images} onImageClick={openModal} />
      <ImageModal
        isOpen={selectedImage !== null}
        selectedImage={selectedImage}
        currentIndex={currentIndex}
        totalImages={originalImages.length}
        onClose={closeModal}
        onNavigate={navigate}
      />
    </>
  );
}
