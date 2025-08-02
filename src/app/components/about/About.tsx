'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Aladin } from 'next/font/google';
import { 
  fadeIn, 
  staggerContainer, 
  textVariant,
  cardHover,
  cardTap
} from '@/app/animations';
import { HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";
import { useEffect, useState } from 'react';

// Importe as imagens
const showcaseImg = '/imagens/about.webp';

interface AboutProps {
  font: {
    className: string;
  };
}

const About: React.FC<AboutProps> = ({ font }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is touch-enabled (mobile/tablet)
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add resize listener for responsive behavior
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  return (
    <section 
      id="sobre" 
      className="py-28 relative overflow-hidden bg-gradient-to-b from-purple-50 to-white"
    >
      {/* Decorative elements */}
      <motion.div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse' as const,
          ease: 'easeInOut'
        }}
      />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Image */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            variants={fadeIn({ direction: 'right', delay: 0.2 })}
          >
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
              whileHover={cardHover}
              whileTap={cardTap}
            >
              <Image
                src={showcaseImg}
                alt="Cenas do espetáculo"
                width={600}
                height={950}
                className="w-full h-full object-cover"
                priority
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent transition-opacity duration-500 ${
                isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`} />
              <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 ${
                isMobile 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0'
              }`}>
                <h3 className="text-2xl font-bold mb-2">Espetáculo 2024</h3>
                <p className="text-purple-100">Tema - A bela adormecida</p>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -left-4 -top-4 w-24 h-24 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse' as const,
                ease: 'easeInOut'
              }}
            />
            <motion.div 
              className="absolute -right-6 -bottom-6 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 -z-10"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse' as const,
                ease: 'easeInOut',
                delay: 1
              }}
            />
          </motion.div>
          
          {/* Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={fadeIn({ direction: 'left', delay: 0.4 })}
          >
            <motion.div 
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
              }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-sm font-bold px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-blue-900 shadow-md">
                Sobre o Espetáculo
              </span>
            </motion.div>
            
            <motion.h2 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 ${font.className} text-blue-700`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }
              }}
              viewport={{ once: true }}
            >
              Uma Jornada Mágica pelo Mundo de Aladdin
            </motion.h2>
            
            <div className="space-y-6 text-gray-700">
              <motion.p 
                className="text-lg  text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }
                }}
                viewport={{ once: true }}
              >
                No En L'air, cada espetáculo é mais do que uma simples apresentação — é a celebração de um ano 
                inteiro de aprendizado, dedicação e superação.
              </motion.p>
              
              
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-xl mt-10 border border-purple-50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-5">
                  <div className="text-4xl text-yellow-400 max-md:hidden">✨</div>
                  <div>
                    <p className="font-bold text-xl md:text-2xl mb-3 text-blue-700">
                      Espetáculo 2025
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Ver na plateia quem elas amam faz o coração bater como um tapete voador: 
                      leve, mágico e cheio de emoção. 
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Data do Evento */}
                <motion.div 
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-50 p-4 shadow-2xl border border-blue-100 transform transition-all duration-500 hover:scale-[1.02]"
                  whileHover={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                >
                  <div className="absolute -right-6 -top-6 w-32 h-32 bg-blue-200 rounded-full opacity-20 -z-0"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-md">
                        <HiOutlineCalendar className="text-3xl text-white" />
                      </div>
                      <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-700">
                        Data do Espetáculo
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-xl font-bold text-blue-900">23 de Novembro</p>
                      <p className="text-xl font-semibold text-blue-800">2025</p>
                      <div className="mt-auto pt-4 border-t border-blue-200">
                        <div className='w-full h-[48px] flex items-center justify-center border-blue-600 border-2 rounded-2xl px-4 mt-4'>
                          <p className="text-blue-600 text-lg font-semibold">Domingo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Local do Evento */}
                <motion.div 
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-4 shadow-2xl border border-blue-100 transform transition-all duration-500 hover:scale-[1.02]"
                  whileHover={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                >
                  <div className="absolute -left-6 -bottom-6 w-40 h-40 bg-blue-200 rounded-full opacity-20 -z-0"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-md">
                        <HiOutlineLocationMarker className="text-3xl text-white" />
                      </div>
                      <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-700">
                        Local do Evento
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-xl font-bold text-blue-900">Centro Cultural Pio XII                      </p>
                      <p className="text-blue-800">Rua Alvarenga Peixoto, 1679, Santo Agostinho</p>
                      <div className="pt-4 mt-4 border-t border-blue-200">
                        <a 
                          href="https://www.google.com/maps/place/Teatro+Pio+XII/@-19.9277776,-43.9598811,17z/data=!3m1!4b1!4m6!3m5!1s0xa69768c14a787d:0x9eab0763ac3dbaab!8m2!3d-19.9277776!4d-43.9573062!16s%2Fg%2F1th4bmrj?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center w-full gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                        >
                          <HiOutlineLocationMarker className="text-xl" />
                          Ver no Mapa
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
               
                
               
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
