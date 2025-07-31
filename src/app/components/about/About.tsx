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

// Importe as imagens
const showcaseImg = '/imagens/about.webp';

interface AboutProps {
  font: {
    className: string;
  };
}

const About: React.FC<AboutProps> = ({ font }) => {
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
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-2">Espetáculo 2025</h3>
                <p className="text-purple-100">Uma experiência inesquecível de dança</p>
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
              <span className="inline-block text-sm font-bold px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-purple-900 shadow-md">
                Sobre o Espetáculo
              </span>
            </motion.div>
            
            <motion.h2 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 ${font.className} bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent`}
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
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
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
              
              <motion.p 
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }
                }}
                viewport={{ once: true }}
              >
                Nossa equipe se empenha em criar uma experiência única e inesquecível para cada bailarina, 
                proporcionando um momento de encantamento e conquista.
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
                  <div className="text-4xl text-yellow-400">✨</div>
                  <div>
                    <h3 className="font-bold text-xl md:text-2xl mb-3 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                      Espetáculo 2025
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Ver na plateia quem elas amam faz o coração bater como um tapete voador: 
                      leve, mágico e cheio de emoção. Em meio à magia de Aladdin e Jasmine, 
                      cada olhar brilha como um desejo realizado.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-white p-6 rounded-2xl shadow-lg border border-purple-50 hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <h4 className="font-bold text-purple-800 mb-3 text-lg">QUANDO SERÁ?</h4>
                  <p className="text-lg text-gray-800">
                    <span className="block text-2xl font-bold text-purple-600 mb-1">Domingo</span>
                    <span className="text-xl font-semibold">23 de novembro de 2025</span>
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-white p-6 rounded-2xl shadow-lg border border-purple-50 hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <h4 className="font-bold text-purple-800 mb-3 text-lg">ONDE SERÁ?</h4>
                  <div className="space-y-1">
                    <p className="text-xl font-semibold text-purple-600">Centro Cultural Pio XII</p>
                    <p className="text-gray-700">Rua Alvarenga Peixoto, 1679</p>
                    <p className="text-gray-600">Santo Agostinho</p>
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
