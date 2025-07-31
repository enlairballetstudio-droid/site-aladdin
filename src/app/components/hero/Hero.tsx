'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { fadeIn, staggerContainer, textVariant, buttonHover, buttonTap, pulseAnimation, floatingAnimation } from '@/app/animations';

interface HeroProps {
  font: {
    className: string;
  };
}

export default function Hero({ font }: HeroProps) {
  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
     <video autoPlay loop muted className="absolute top-0 left-0 z-[5] w-full h-full object-cover opacity-65">
        <source src="/imagens/video-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 overflow-hidden z-[10] bg-gradient-to-b from-purple-950 to-purple-900 opacity-60"/>
        
     
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute z-[10] top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 15, 0],
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="absolute z-[10] top-1/3 right-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            delay: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 10, 0],
            y: [0, -15, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{
            duration: 18,
            delay: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Floating Stars */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-300 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            opacity: Math.random() * 0.5 + 0.1,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 5,
          }}
        />
      ))}

      <motion.div 
        className="relative z-10 container mx-auto px-6 py-16 md:py-24 lg:py-32"
        variants={staggerContainer(0.1, 0.2)}
      >
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 lg:pr-12"
            variants={fadeIn('right')}
          >
            <motion.h1 
              className={`${font.className}  text-4xl md:text-6xl lg:text-[5rem] font-bold text-white mb-6 leading-tight`}
              variants={textVariant(0.2)}
            >
              A Magia de <span className="text-yellow-400">Aladdin</span> e <span className="text-pink-400">Jasmine</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto lg:mx-0"
              variants={textVariant(0.4)}
            >
              Uma experiência encantadora de dança que vai te levar em uma jornada mágica pelo mundo de Agrabah.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={fadeIn({ direction: 'up', delay: 0.6 })}
            >
              <motion.button 
                className="relative overflow-hidden group bg-gradient-to-r from-yellow-400 to-yellow-600 text-purple-900 font-bold py-4 px-8 rounded-full text-lg shadow-lg"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                <Link href="#ingressos">
                  <span className="relative z-10">Comprar Ingressos</span>
                </Link>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </motion.button>
              <motion.button 
                className="relative overflow-hidden group border-2 border-white text-white font-semibold py-4 px-8 rounded-full text-lg"
                whileHover={{
                  ...buttonHover,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
                whileTap={buttonTap}
              >
                <Link href="#sobre">
                  <span className="relative z-10">Saiba Mais</span>
                </Link>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="lg:w-1/2 relative"
            variants={fadeIn({ direction: 'up', delay: 0.8 })}
          >
            <motion.div 
              className="relative"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <div className="absolute -inset-2 w-[100%]  bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-3xl opacity-75 blur-lg -z-10 animate-pulse"></div>
              <motion.div 
                className="relative bg-purple-800 w-[100%] h-1/3 rounded-2xl overflow-hidden shadow-2xl transform hover:rotate-0 transition-transform duration-500"
                initial={{ rotate: -2 }}
                whileHover={{
                  rotate: 0,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                }}
              >
                <Image
                  src="/imagens/aladin.webp"
                  alt="Aladdin e Jasmine no tapete voador"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0  bg-gradient-to-t  from-purple-900 via-transparent to-transparent opacity-80"></div>
                
               
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      
    

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 z-[11] left-[50%-2rem] transform -translate-x-1/2"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Role para baixo</span>
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </motion.section>
  );
};
