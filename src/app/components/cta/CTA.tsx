'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaMapMarkerAlt, FaTicketAlt, FaWhatsapp } from 'react-icons/fa';
import { buttonHover, buttonTap } from '@/app/animations';
import { theme } from '@/app/theme/theme';

interface CTAProps {
  font: { className: string };
}

export default function CTA({ font }: CTAProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#14243d] via-[#28568e] to-[#6baed0] py-24 md:py-32">
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#d8b45a]/25 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#ccecf8]/20 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className={`${font.className} mx-auto max-w-5xl text-4xl font-bold leading-tight text-white md:text-6xl`}>Pronto para viver <span className="text-[#f3d47c]">o encanto da meia-noite</span>?</h2>
        <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-[#e8f6fc]">Garanta uma experiência cheia de magia, dança e memórias que vão acompanhar sua família para sempre.</p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <motion.div whileHover={buttonHover} whileTap={buttonTap}><Link href="#precos" className="flex items-center justify-center rounded-full bg-[#d8b45a] px-8 py-4 text-lg font-bold text-[#17375f]">Garantir meu kit <FaArrowRight className="ml-3" /></Link></motion.div>
          <motion.a href="https://wa.me/5531997777994" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full border-2 px-8 py-4 text-lg font-semibold text-white" style={{ borderColor: theme.colors.secondary }} whileHover={buttonHover} whileTap={buttonTap}><FaWhatsapp className="mr-3" />Falar pelo WhatsApp</motion.a>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-left backdrop-blur-sm"><FaTicketAlt className="mb-4 text-2xl text-[#f3d47c]" /><p className="font-bold text-[#f3d47c]">Data</p><p className="mt-1 text-lg text-white">02 de novembro de 2026</p></div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-left backdrop-blur-sm"><FaMapMarkerAlt className="mb-4 text-2xl text-[#f3d47c]" /><p className="font-bold text-[#f3d47c]">Local</p><p className="mt-1 text-lg text-white">Teatro Municipal de Ibirité</p><p className="text-sm text-white/70">Rua Silveira, 47 — São Geraldo, Ibirité</p></div>
        </div>
      </div>
    </section>
  );
}
