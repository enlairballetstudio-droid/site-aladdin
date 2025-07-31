'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Animation variants
const fadeIn = (direction: 'up' | 'down' = 'up', delay = 0.1) => ({
  hidden: { 
    y: direction === 'up' ? 40 : -40,
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
      delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

const staggerContainer = (staggerChildren = 0.1, delayChildren = 0.1) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

const cardHover = {
  y: -10,
  transition: {
    type: 'spring',
    stiffness: 400,
    damping: 10,
  },
};

const cardTap = {
  scale: 0.98,
  transition: {
    type: 'spring',
    stiffness: 500,
    damping: 30,
  },
};

// Mock gallery images
const galleryImages = [
  { id: 1, src: '/imagens/2024/1.webp', alt: 'Cena do espetáculo', category: 'performance' },
  { id: 2, src: '/imagens/2024/2.webp', alt: 'Ensaios', category: 'rehearsal' },
  { id: 3, src: '/imagens/2024/3.webp', alt: 'Bailarinas em cena', category: 'performance' },
  { id: 4, src: '/imagens/2024/4.webp', alt: 'Cenografia', category: 'scenery' },
  { id: 5, src: '/imagens/2024/5.webp', alt: 'Figurinos', category: 'costumes' },
  { id: 6, src: '/imagens/2024/6.webp', alt: 'Momento mágico', category: 'performance' },
];

const categories = [
  { id: 'all', name: 'Todas' },
  { id: 'performance', name: 'Apresentações' },
  { id: 'rehearsal', name: 'Ensaios' },
  { id: 'scenery', name: 'Cenários' },
  { id: 'costumes', name: 'Figurinos' },
];

interface GalleryImageType {
  id: number;
  src: string;
  alt: string;
  category: string;
}

interface ShowcaseProps {
  font: {
    className: string;
  };
}

const Showcase: React.FC<ShowcaseProps> = ({ font }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImageType | null>(null);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  const handleImageClick = (image: GalleryImageType) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-purple-900 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn('up')}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className={`${font.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4`}>
            Galeria de Fotos
          </h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
          Evento realizado em 2024
            <span className="block mt-3 text-yellow-200 font-medium">
              Tema "A bela adormecida"
            </span>
          </p>
        </motion.div>

        {/* Category Filters
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-white text-purple-900 shadow-lg shadow-purple-500/30'
                  : 'bg-purple-800/50 text-white hover:bg-purple-800/70 border border-purple-700/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div> */}

        {/* Image Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer(0.05, 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {filteredImages.map((image) => (
              <motion.div 
                key={image.id}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeIn('up')}
                whileHover={cardHover}
                whileTap={cardTap}
                onClick={() => handleImageClick(image)}
                layout
              >
                <div className="aspect-w-16 aspect-h-9 bg-purple-100 rounded-2xl overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
            
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More Button */}
        {/* <motion.div 
          className="text-center mt-12"
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Mais Fotos
          </motion.button>
        </motion.div> */}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute -top-12 right-0 text-white hover:text-purple-300 transition-colors"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative elements */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </section>
  );
};



export default Showcase;
