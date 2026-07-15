import GalleryWrapper from './GalleryWrapper';

const originalImages = [1, 2, 3, 4, 6, 7].map((id) => ({
  src: `/galeria/making-${id}.webp`,
  alt: `Making of do espetáculo Cinderela — foto ${id}`,
}));

interface PremiumGalleryProps {
  font: { className: string };
}

export default function PremiumGallery({ font }: PremiumGalleryProps) {
  return (
    <section className="content-visibility-auto relative overflow-hidden bg-white py-20">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#eef9fe] to-transparent" />
      <div className="relative">
        <div className="mb-16 px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#b4872e]">Por trás da magia</p>
          <h2 className={`text-4xl tracking-wide text-[#2f5d9b] md:text-5xl ${font.className}`}>Making off — Espetáculo 2025</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Cada detalhe é preparado para transformar sonho em memória.</p>
        </div>
        <GalleryWrapper originalImages={originalImages} />
      </div>
    </section>
  );
}
