import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { theme } from '@/app/theme/theme';
import { buttonHover, buttonTap } from '@/app/animations';
import Link from 'next/link';

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
      text: 'Experiência Completa',
      description: 'Desde os ensaios até a apresentação, momentos únicos que geram memórias afetivas e positivas.',
      icon: '🌟',
      bgColor: 'bg-gradient-to-br from-purple-500 to-blue-600'
    },
    {
      text: 'Figurino Autêntico',
      description: '01 figurino autêntico do personagem da turma, confeccionado 1 a 1 por nossa equipe de fadas costureiras, com adereços de cabelo.',
      icon: '👗',
      bgColor: 'bg-gradient-to-br from-pink-500 to-blue-600'
    },
    {
      text: 'Apresentação encantadora',
      description: 'Apresentação no palco profissional, com produção digna de Superstar.',
      icon: '🎭',
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-700'
    },
    {
      text: 'Vídeo Memorável',
      description: 'Guarde pra sempre registros dessa experiência única que gera valor para as outras gerações.',
      icon: '🎥',
      bgColor: 'bg-gradient-to-br from-yellow-400 to-blue-600'
    },
    {
      text: 'T-Shirt Espetáculo',
      description: 'Uma T-Shirt exclusiva para entrar no clima e ficar na moda En L\'air Aladdin.',
      icon: '👕',
      bgColor: 'bg-gradient-to-br from-green-400 to-blue-600'
    },
    {
      text: '2 Ingressos Garantidos',
      description: 'Dois ingressos inclusos para você levar os seus convidados especiais e curtirem juntos essa experiência inesquecível.',
      icon: '🎟️',
      bgColor: 'bg-gradient-to-br from-orange-400 to-blue-500'
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
      title: 'Bailarino Contratado',
      description: 'Bailarino para a apresentação.',
      icon: '🩰',
      bgColor: 'bg-gradient-to-br from-blue-600 to-blue-700'
    },
    {
      title: 'Segurança',
      description: 'Evento tranquilo e seguro',
      icon: '🛡️',
      bgColor: 'bg-gradient-to-br from-blue-600 to-blue-700'
    },
    {
      title: 'Vídeo Maker Profissional',
      description: 'Registro em vídeo de alta qualidade.',
      icon: '🎬',
      bgColor: 'bg-gradient-to-br from-blue-600 to-blue-700'
    },
    {
      title: 'Direitos Autorais',
      description: 'Tudo em conformidade',
      icon: '📝',
      bgColor: 'bg-gradient-to-br from-blue-600 to-blue-700'
    }
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
        </motion.div>

        {/* Included Items Section */}
        <div className="mb-16">
          <div className="w-full max-w-2xl mx-auto bg-blue-50/70 p-6 sm:p-8 rounded-2xl shadow-inner backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Viva a Magia do seu Filho(a)!</h3>
            <div className="flex flex-col gap-4">
              {includedItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  variants={fadeIn('right', index * 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-20px" }}
                >
                  <FaCheckCircle className="text-blue-500 w-5 h-5 flex-shrink-0 mr-4" />
                  <div>
                    <p className="text-gray-700">
                      <span className="font-semibold text-gray-800">{item.title}:</span>
                      <span className="text-gray-600 text-sm"> {item.description}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-14 w-full max-w-4xl text-center mx-auto">
          <p 
            className={`text-xl md:text-3xl font-semibold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-600`}
          >
           Em 2025 evoluímos a experiência, para você desfrutar o melhor do nosso espetáculo. 
          </p>
          <p className="text-xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
           O Que Está Incluso no Seu Kit Aladin 2025
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="relative overflow-hidden group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col items-center text-center"
                variants={fadeIn('up', idx * 0.08)}
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
                <div className="relative z-10 w-full flex flex-col items-center gap-2">
                  <div 
                    className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-3xl transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-6 ${feature.bgColor} text-white mb-2`}
                    style={{
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                  >
                    <span className="drop-shadow-md">{feature.icon}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-gray-800 mb-1">{feature.text}</p>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing Cards Section */}
        <motion.div 
          className="max-w-6xl mx-auto grid grid-cols-1 max-md:flex max-md:flex-col-reverse items-center md:grid-cols-2 gap-8 "
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* PIX Card - Redesigned */}
          <motion.div 
            className="bg-white rounded-3xl shadow-lg overflow-hidden relative border-2 border-green-500 transform hover:scale-105 transition-transform duration-300"
            variants={item}
          >
            <div className="absolute top-0 right-0 bg-green-500 text-white text-sm font-bold px-6 py-2 rounded-bl-2xl shadow-md">
              MAIS POPULAR
            </div>
            
            <div className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Pagamento com PIX</h3>
                <p className="text-green-600 font-semibold">Com Desconto Exclusivo</p>
              </div>
              <div className="text-center bg-green-50 rounded-2xl p-6 mb-6">
                <p className="text-6xl max-md:text-4xl font-extrabold text-green-700 my-2">
                  4x <span className="text-4xl">de</span> R$ 174,25
                </p>
                <p className="text-md font-semibold text-green-800">
                  Ou R$ 697,00 à vista
                </p>
              </div>

              <div className="text-center text-sm text-gray-600 mb-6 bg-gray-100 p-3 rounded-lg">
                <p><span className="font-bold">Válido para pagamentos até 14/08.</span></p>
                <p className="mt-2">Ingressos à venda a partir de <span className="font-bold">01 de setembro.</span></p>
              </div>
              
              

              <Link href="https://wa.me/5531997777994" target="_blank">
              <motion.button 
                className="w-full py-4 px-6 rounded-xl font-bold text-white text-lg bg-green-600 hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Pagar com PIX
              </motion.button>
              </Link>
              
              <div className="mt-4 text-center text-xs text-gray-500">
                <a href="#" className="hover:underline flex items-center justify-center gap-1">
                  <FaWhatsapp />
                  <Link href="https://wa.me/5531997777994" target="_blank">Dúvidas? Fale conosco</Link>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Credit Card Card - Redesigned */}
          <motion.div 
            className="bg-white rounded-3xl shadow-lg overflow-hidden relative border-2 border-gray-200 transform hover:scale-105 transition-transform duration-300"
            variants={item}
          >
            <div className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Cartão de Crédito</h3>
                <p className="text-blue-600 font-semibold">Parcele em até 12x com juros</p>
              </div>
              
              <div className="text-center bg-blue-50 rounded-2xl p-6 mb-6">
                <p className="text-6xl max-md:text-4xl font-extrabold text-blue-700 my-2">
                  12x <span className="text-4xl">de</span> R$ 71,24
                </p>
                <p className="text-md font-semibold text-blue-800">
                  Ou R$ 697,00 à vista
                </p>
              </div>

              <div className="text-center text-sm text-gray-600 mb-6 bg-gray-100 p-3 rounded-lg">
                 <p>Ingressos à venda a partir de <span className="font-bold">01 de setembro.</span></p>
              </div>
              
              
              
              <Link href="https://chk.eduzz.com/E05X652DWX" target="_blank">
              <motion.button 
                className="w-full py-4 px-6 rounded-xl font-bold text-white text-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Pagar com Cartão
              </motion.button>
              </Link>
              
              <div className="mt-4 text-center text-xs text-gray-500">
                <a href="#" className="hover:underline flex items-center justify-center gap-1">
                  <FaWhatsapp />
                  <Link href="https://wa.me/5531997777994" target="_blank">Dúvidas? Fale conosco</Link>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
