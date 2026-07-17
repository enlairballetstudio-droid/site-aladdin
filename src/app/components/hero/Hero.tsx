'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn, staggerContainer, textVariant, buttonHover, buttonTap } from '@/app/animations';
import { theme } from '@/app/theme/theme';

interface HeroProps {
  font: { className: string };
}

export default function Hero({ font }: HeroProps) {
  return (
    <motion.section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#13284a] via-[#2f5d9b] to-[#7fbfdc] py-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Image
        src="/imagens/hero-fundo.webp"
        alt="Bailarina no espetáculo Cinderela"
        fill
        priority
        sizes="100vw"
        className="scale-x-[-1] object-cover object-center opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#102442]/95 via-[#1d4d81]/80 to-[#8dc9e3]/30" />
      <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#d8b45a]/25 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#ccecf8]/25 blur-3xl" />

      <motion.div className="container relative z-10 mx-auto px-6 py-16 md:py-24" variants={staggerContainer(0.1, 0.2)}>
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <motion.div className="text-center lg:w-1/2 lg:text-left" variants={fadeIn('right')}>
            <motion.p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#f9e7ae]" variants={textVariant(0.1)}>
              Espetáculo 2026
            </motion.p>
            <motion.h1 className={`${font.className} mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl`} variants={textVariant(0.2)}>
              Cinderela: <span className="text-[#f3d47c]"><br className='max-md:hidden'/>O encanto da <br className='max-md:hidden'/> meia-noite</span>
            </motion.h1>
            <motion.p className="mb-8 max-w-2xl text-xl leading-relaxed text-[#e8f6fc] lg:text-2xl" variants={textVariant(0.4)}>
              Quando o tempo toca meia-noite, só a magia de quem acredita continua a brilhar.
            </motion.p>
            <motion.div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start" variants={fadeIn({ direction: 'up', delay: 0.6 })}>
              <motion.a
                href="https://diversosingressos.com.br/event/ec7114db-7351-43e5-9521-7592db374b33"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-[#e6c667] to-[#c99d3c] px-8 py-4 text-center text-lg font-bold text-[#17375f] shadow-lg"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                Comprar ingressos
              </motion.a>
              <motion.a
                href="#sobre"
                className="rounded-full border-2 px-8 py-4 text-center text-lg font-semibold text-white"
                style={{ borderColor: theme.colors.secondary, background: 'rgba(255,255,255,0.08)' }}
                whileHover={{ ...buttonHover, backgroundColor: 'rgba(255,255,255,0.16)' }}
                whileTap={buttonTap}
              >
                Saiba mais
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div className="relative w-full max-w-lg lg:w-1/2" variants={fadeIn({ direction: 'up', delay: 0.8 })}>
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-[#d8b45a] via-[#ccecf8] to-[#4c86bd] opacity-80 blur-lg" />
            <div className="relative overflow-hidden rounded-[1.7rem] border border-white/40 bg-[#244b79] shadow-2xl">
              <Image
                src="/galeria/hero.jpeg"
                alt="Cinderela no palco"
                width={1200}
                height={1200}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-square w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14243d]/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
