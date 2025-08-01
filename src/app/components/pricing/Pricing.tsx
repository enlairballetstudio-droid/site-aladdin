import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaWhatsapp } from 'react-icons/fa';
import { theme } from '@/app/theme/theme';
import { buttonHover, buttonTap } from '@/app/animations';

// Animation variants
const fadeIn = (direction: string = 'up', delay: number = 0) => ({
  hidden: {
    y: direction === 'up' ? 40 : -40,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 100,
      delay,
    },
  },
});

const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0.1) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Animation variants

interface PricingProps {
  font: {
    className: string;
  };
}

const Pricing: React.FC<PricingProps> = ({ font }) => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  
  const features = [
    { 
      text: 'Figurino Autêntico do personagem da turma',
      icon: '👗',
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    { 
      text: 'Confeccionado 1 a 1 por nossa equipe',
      icon: '🧵',
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    { 
      text: 'Adereços de cabelo (venda, não aluguel)',
      icon: '👑',
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    { 
      text: 'Apresentação no palco profissional',
      icon: '🎭',
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    { 
      text: 'Produção digna de Superstar',
      icon: '✨',
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600'
    }
  ];

  const includedItems = [
    {
      title: 'Teatro e Cenografia',
      description: 'Espaço mágico do mundo de Aladdin',
      icon: '🏰',
      bgColor: 'bg-gradient-to-br from-blue-600 to-blue-700'
    },
    {
      title: 'Equipe Técnica',
      description: 'Profissionais dedicados',
      icon: '👨‍💼',
      bgColor: 'bg-gradient-to-br from-blue-600 to-blue-700'
    },
    {
      title: 'Recepção',
      description: 'Atendimento especializado',
      icon: '💁‍♀️',
      bgColor: 'bg-gradient-to-br from-blue-600 to-blue-700'
    },
    {
      title: 'Segurança',
      description: 'Evento tranquilo e seguro',
      icon: '🛡️',
      bgColor: 'bg-gradient-to-br from-blue-600 to-blue-700'
    },
    {
      title: 'Vídeo Memorável',
      description: 'Gravação profissional',
      icon: '🎥',
      bgColor: 'bg-gradient-to-br from-blue-600 to-blue-700'
    },
    {
      title: 'Direitos Autorais',
      description: 'Tudo em conformidade',
      icon: '📝',
      bgColor: 'bg-gradient-to-br from-blue-600 to-blue-700'
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  // Card interaction variants
  const cardHover = {
    scale: 1.02,
    y: -5,
    transition: { type: 'spring', stiffness: 300, damping: 15 },
  };

  const cardTap = {
    scale: 0.98,
    transition: { type: 'spring', stiffness: 500, damping: 15 },
  };

  return (
    <section 
      id="ingressos" 
      className="py-20 relative overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("/images/arabesque-pattern-gold.png")',
          backgroundSize: '800px',
          opacity: 0.1
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-100 text-blue-700 px-6 py-2 rounded-full mb-6 text-sm font-medium"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <FaStar className="mr-2 text-yellow-400" />
            O momento mais especial do ano!
          </motion.div>
          
          <h2 
            className={`text-4xl md:text-6xl font-aladin mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-600`}
          >
            Quer Ter Memórias Inesquecíveis?
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-12">
            A experiência de estar no palco, vivendo a magia de Aladdin e Jasmine é <span className="font-bold text-blue-600">inesquecível</span>. 
            Um momento único que fica para sempre na memória do seu filho(a).
          </p>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Tudo que está incluso:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {includedItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
                  variants={fadeIn('right', index * 0.08)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <div className={`absolute inset-0 ${item.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div 
                      className={`w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-3xl transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-6 ${item.bgColor} text-white`}
                      style={{
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                      }}
                    >
                      <span className="drop-shadow-md">{item.icon}</span>
                    </div>
                    <h4 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-gray-900 transition-colors">{item.title}</h4>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Pricing Card */}
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl overflow-hidden relative z-10"
            variants={item}
            whileHover={cardHover}
            whileTap={cardTap}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-500/5" />
            
            <div className="relative z-10 p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <motion.span 
                    className="inline-flex items-center text-sm font-bold px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-600 text-white shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaStar className="mr-2 text-yellow-300" />
                    Pacote Completo
                  </motion.span>
                </div>
                
              </div>
              
              <p className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                Tudo Incluído para Você Brilhar
              </p>
              
              <motion.div 
                className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-center">
                  <p className="text-sm text-blue-600 mb-2 font-medium">Valor Total do Pacote</p>
                  <div className="text-5xl max-md:text-4xl font-bold mb-2 text-blue-700">
                    R$ 1.299,90
                  </div>
                  <p className="text-blue-500 text-sm">
                    Ou 12x de R$ 108,32 no cartão
                  </p>
                </div>
              </motion.div>
              
              <motion.button 
                className="w-full mt-6 py-4 px-6 max-md:px-2 rounded-xl font-bold text-white text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                Garanta Sua Vaga Agora
              </motion.button>
              
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-blue-600">
                <FaWhatsapp className="text-green-500" />
                <span>Dúvidas? Fale conosco pelo WhatsApp</span>
              </div>
            </div>
          </motion.div>
          
          {/* Features Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
              O Que Está Incluso no Seu Pacote
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 h-full"
                  variants={fadeIn('up', index * 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <div className={`absolute inset-0 ${feature.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="relative z-10 w-full flex flex-col items-start gap-4">
                    <div 
                      className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-3xl transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-6 ${feature.bgColor} text-white`}
                      style={{
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                      }}
                    >
                      <span className="drop-shadow-md">{feature.icon}</span>
                    </div>
                    <p className="text-gray-700 group-hover:text-gray-900 transition-colors font-medium text-left mt-1">
                      {feature.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
