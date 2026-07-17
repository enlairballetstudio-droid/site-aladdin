'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiOutlineCalendar, HiOutlineLocationMarker } from 'react-icons/hi';
import { fadeIn, staggerContainer } from '@/app/animations';

interface AboutProps {
  font: { className: string };
}

export default function About({ font }: AboutProps) {
  return (
    <section id="sobre" className="relative overflow-hidden bg-gradient-to-b from-[#eef9fe] to-white py-28">
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#b8e0f1]/35 blur-3xl" />
      <div className="container relative mx-auto px-4">
        <motion.div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20" variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }}>
          <motion.div className="relative w-full lg:w-1/2" variants={fadeIn({ direction: 'right', delay: 0.2 })}>
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#d8b45a]/50 to-[#a9d9ee]/50 blur-xl" />
            <div className="relative overflow-hidden rounded-[1.6rem] shadow-2xl">
              <Image src="/galeria/about.jpeg" alt="Bailarina do espetáculo Cinderela" width={700} height={950} className="h-full w-full object-cover" priority />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#14243d]/75 to-transparent px-7 pb-7 pt-24 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f3d47c]">Espetáculo 2026</p>
                <p className={`${font.className} mt-1 text-3xl`}>Cinderela</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="w-full lg:w-1/2" variants={fadeIn({ direction: 'left', delay: 0.35 })}>
            <span className="mb-6 inline-block rounded-full bg-gradient-to-r from-[#d8b45a] to-[#edd68a] px-6 py-2 text-sm font-bold text-[#17375f] shadow-md">Sobre o espetáculo</span>
            <h2 className={`${font.className} mb-7 text-4xl font-bold text-[#28568e] md:text-6xl`}>Uma noite onde sonhos ganham vida</h2>
            <p className="text-lg leading-relaxed text-slate-700">
              No En L&apos;air, cada espetáculo celebra um ano inteiro de aprendizado, dedicação e superação. Em Cinderela, nossas bailarinas convidam você a acreditar na magia que permanece mesmo depois da meia-noite.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="rounded-2xl border border-[#cce4f2] bg-white p-6 shadow-lg">
                <div className="mb-5 flex items-center gap-3 text-[#2f5d9b]"><span className="rounded-xl bg-[#dceff8] p-3"><HiOutlineCalendar className="text-3xl" /></span><h3 className="text-xl font-bold">Data do Espetáculo</h3></div>
                <p className="text-3xl font-bold text-[#17375f]">02 de Novembro</p>
                <p className="mt-2 text-lg font-semibold text-[#2f5d9b]">Segunda-feira • 2026</p>
                <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
                  <p><span className="font-semibold">Horário:</span> Sessão única às 15:00</p>
                  <p><span className="font-semibold">Ingressos:</span> vendas a partir de 12/09, às 14:00</p>
                </div>
              </article>
              <article className="rounded-2xl border border-[#cce4f2] bg-white p-6 shadow-lg">
                <div className="mb-5 flex items-center gap-3 text-[#2f5d9b]"><span className="rounded-xl bg-[#dceff8] p-3"><HiOutlineLocationMarker className="text-3xl" /></span><h3 className="text-xl font-bold">Local do evento</h3></div>
                <p className="text-lg font-bold text-[#17375f]">Teatro Municipal de Ibirité</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">Rua Silveira, 47 — São Geraldo, Ibirité</p>
                <a href="https://www.google.com/maps/search/?api=1&query=Teatro+Municipal+de+Ibirite+Rua+Silveira+47" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-xl bg-[#2f5d9b] px-4 py-2 font-semibold text-white transition-colors hover:bg-[#244b79]">Ver no mapa</a>
              </article>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
