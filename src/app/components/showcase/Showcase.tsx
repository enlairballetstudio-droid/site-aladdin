'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [1, 2, 3, 4, 5, 8,  9, 10, 11, 12, 13, 14].map((id) => ({
  id,
  src: `/galeria/galeria-${id}.webp`,
  alt: `Registro do espetáculo Cinderela — foto ${id}`,
}));

interface ShowcaseProps {
  font: { className: string };
}

export default function Showcase({ font }: ShowcaseProps) {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[number] | null>(null);

  return (
    <section className="content-visibility-auto relative overflow-hidden bg-gradient-to-br from-[#17375f] via-[#2f5d9b] to-[#6baed0] py-20 text-white">
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#d8b45a]/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#f5dda0]">Cinderela</p>
          <h2 className={`${font.className} mb-4 text-4xl font-bold md:text-6xl`}>Galeria de fotos</h2>
          <p className="mx-auto max-w-2xl text-lg text-[#e8f6fc]">Momentos que já fazem parte da magia do nosso espetáculo.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <motion.button key={image.id} type="button" onClick={() => setSelectedImage(image)} className="group relative overflow-hidden rounded-2xl text-left shadow-lg focus:outline-none focus:ring-4 focus:ring-[#f3d47c]" whileHover={{ y: -8 }} whileTap={{ scale: 0.98 }} aria-label={`Ampliar ${image.alt}`}>
              <Image src={image.src} alt={image.alt} width={700} height={500} className="h-64 w-full object-cover transition duration-500 group-hover:scale-110" />
              <span className="absolute inset-0 bg-gradient-to-t from-[#14243d]/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)}>
            <motion.div className="relative w-full max-w-5xl" initial={{ scale: 0.94 }} animate={{ scale: 1 }} exit={{ scale: 0.94 }} onClick={(event) => event.stopPropagation()}>
              <button type="button" onClick={() => setSelectedImage(null)} className="mb-3 ml-auto block rounded-full bg-white/15 px-4 py-2 font-semibold text-white focus:outline-none focus:ring-2 focus:ring-white">Fechar</button>
              <Image src={selectedImage.src} alt={selectedImage.alt} width={1400} height={1000} className="max-h-[80vh] w-full rounded-xl object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
