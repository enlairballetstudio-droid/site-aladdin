import GalleryWrapper from './GalleryWrapper'

const originalImages = [
  { src: '/imagens/making/1.webp', alt: 'Edições Anteriores' },
  { src: '/imagens/making/2.webp', alt: 'Edições Anteriores' },
  { src: '/imagens/making/3.webp', alt: 'Edições Anteriores' },
  { src: '/imagens/making/4.webp', alt: 'Edições Anteriores' },
  { src: '/imagens/making/5.webp', alt: 'Edições Anteriores' },
  { src: '/imagens/making/6.webp', alt: 'Edições Anteriores' },
  { src: '/imagens/making/7.webp', alt: 'Edições Anteriores' },
  { src: '/imagens/making/8.webp', alt: 'Edições Anteriores' }, 
  { src: '/imagens/making/9.webp', alt: 'Edições Anteriores' },

];


interface ShowcaseProps {
  font: {
    className: string;
  };
}

export default function PremiumGallery({ font }: ShowcaseProps) {
  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <div>
        <div className="text-center mb-16">
          <h2 className={`text-4xl max-md:hidden md:text-5xl tracking-wide text-blue-600 mb-4 ${font.className}`}>
            Making Of - Espetáculo 2024
          </h2>
          <h2 className={`text-4xl md:hidden md:text-5xl whitespace-pre-line tracking-wide text-blue-600 mb-4 ${font.className}`}>
            Making Of {"\n"} Espetáculo 2024
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tema - A bela adormecida
          </p>
        </div>
        
        <GalleryWrapper 
          originalImages={originalImages}
        />
      </div>
    </section>
  );
}
