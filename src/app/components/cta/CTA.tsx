import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Aladin } from 'next/font/google';
import Link from 'next/link';
import { theme } from '@/app/theme/theme';
import { FaWhatsapp, FaMapMarkerAlt, FaClock, FaTicketAlt, FaArrowRight } from 'react-icons/fa';
import { buttonHover, buttonTap } from '@/app/animations';

interface CTAProps {
  font: {
    className: string;
  };
}

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: i * 0.1,
    },
  }),
};

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100,
      mass: 0.5
    }
  }
};

const fadeIn = {
  hidden: {
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Botão primário - Estilo e animação
const primaryButton = {
  initial: {
    boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)'
  },
  hover: {
    y: -2,
    boxShadow: '0 6px 20px rgba(0,0,0,0.16)',
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  },
  tap: {
    y: 1,
    scale: 0.99,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  }
};

// Botão secundário - Estilo e animação
const secondaryButton = {
  initial: {
    background: 'rgba(255,255,255,0.05)'
  },
  hover: {
    y: -2,
    background: 'rgba(255,255,255,0.1)',
    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  },
  tap: {
    y: 1,
    scale: 0.99
  }
};

const cardHover = {
  hover: {
    y: -4,
    borderColor: 'rgba(251, 191, 36, 0.5)',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15
    }
  }
};

const CTA: React.FC<CTAProps> = ({ font }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.dark} 100%), url('/images/cta-bg.jpg') center/cover no-repeat`,
        backgroundBlendMode: 'overlay',
        position: 'relative'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("/images/arabesque-pattern-gold.png")',
          backgroundSize: '800px'
        }}
      />

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        custom={0.5}
      >
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={fadeInUp}
        >
          <motion.h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${font.className}`}
            style={{
              color: theme.colors.secondary,
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}
            variants={fadeInUp}
          >
            Pronto para Viver Essa{' '}
            <span className="text-yellow-300">Experiência Mágica</span>?
          </motion.h2>

          <motion.p
            className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            As vagas são limitadas! Garanta agora mesmo o lugar da sua filha no espetáculo mais encantador do ano.
            <span className="block mt-3 text-yellow-200 font-medium">
              Promoção especial por tempo limitado! 🎉
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={fadeInUp}
          >
            <motion.button
              className="relative overflow-hidden group bg-gradient-to-r from-yellow-400 to-yellow-600 text-purple-900 font-bold py-4 px-8 rounded-full text-lg shadow-lg"
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              <Link href="#ingressos">
                <span className="relative z-10 max-md:text-sm flex items-center">
                  Garantir Minha Vaga Agora
                  <FaArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </motion.button>
            <motion.button
              className="relative overflow-hidden group border-2  font-semibold py-4 px-12 rounded-full text-lg"
              style={{
                borderColor: theme.colors.secondary,
                color: theme.colors.secondary,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)'
              }}
              whileHover={{
                ...buttonHover,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
              whileTap={buttonTap}
            >
              <Link href="#sobre">
                <span

                  className="relative z-10 max-md:text-sm  flex items-center">
                  <FaWhatsapp className="mr-3 text-xl " />
                  Falar pelo WhatsApp</span>
              </Link>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            variants={container}
          >
            <motion.div
              className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={cardHover.hover}
            >
              <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-yellow-400 text-xl bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors">
                <FaClock />
              </div>
              <div className="text-left">
                <p className="text-yellow-400 font-bold text-lg mb-1">Duração</p>
                <p className="text-white/90">2 Horas de Pura Magia</p>
                <p className="text-sm text-white/60 mt-1">Tempo perfeito para uma experiência inesquecível</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={cardHover.hover}
            >
              <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-yellow-400 text-xl bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors">
                <FaTicketAlt />
              </div>
              <div className="text-left">
                <p className="text-yellow-400 font-bold text-lg mb-1">Data</p>
                <p className="text-white/90">Domingo, 23 de Novembro de 2025</p>
                <p className="text-sm text-white/60 mt-1">Chegue 30 minutos antes</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={cardHover.hover}
            >
              <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-yellow-400 text-xl bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors">
                <FaMapMarkerAlt />
              </div>
              <div className="text-left">
                <p className="text-yellow-400 font-bold text-lg mb-1">Local</p>
                <p className="text-white/90">Centro Cultural Pio XII</p>
                <p className="text-sm text-white/60">Rua Alvarenga Peixoto, 1679, Santo Agostinho</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"
      />
      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"
      />

      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 -left-16 w-64 h-64 rounded-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            background: `radial-gradient(circle, ${theme.colors.accent} 0%, transparent 70%)`,
            filter: 'blur(50px)',
          }}
        />

        <motion.div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
          style={{
            background: `radial-gradient(circle, ${theme.colors.secondary} 0%, transparent 70%)`,
            filter: 'blur(60px)',
          }}
        />
      </div>
    </section>
  );
};

export default CTA;
