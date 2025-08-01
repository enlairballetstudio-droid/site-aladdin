import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
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
      text: 'Confeccionado 1 a 1 por nossa equipe de fadas costureiras',
      icon: '🧵',
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    { 
      text: 'Adereço de cabelo',
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
    {
      title: 'Ator ou Atriz Contratado(a)',
      description: 'Performance profissional para o espetáculo',
      icon: '🎭',
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
        </motion.div>

        <motion.div 
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* PIX Card */}
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl overflow-hidden relative z-10"
            variants={item}
            whileHover={cardHover}
            whileTap={cardTap}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-500/5" />
            
            <div className="relative z-10 p-8">
              <div className="flex items-center justify-center mb-6">
                <motion.span 
                  className="inline-flex items-center text-sm font-bold px-6 py-2 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg mr-2">💸</span>
                  PAGAMENTO VIA PIX
                </motion.span>
              </div>
              
              <p className="text-2xl font-bold mb-6 text-center text-gray-800">
                Aproveite o desconto de 10%
              </p>
              
              <motion.div 
                className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-center">
                  <div className="text-5xl max-md:text-4xl font-bold mb-2 text-green-700">
                    R$ 717,30
                  </div>
                  <p className="text-green-600 text-sm line-through mb-1">
                    De: R$ 797,00
                  </p>
                  <p className="text-green-800 text-sm font-semibold mb-4">
                    Economize R$ 79,70
                  </p>
                  <div className="bg-green-100 rounded-lg p-3 mt-4">
                    <p className="text-green-700 text-sm font-medium">
                      Válido para pagamentos até 14/08
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.button 
                className="w-full mt-6 py-4 px-6 rounded-xl font-bold text-white text-lg bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                Pagar com PIX
              </motion.button>
              
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-green-600">
                <FaWhatsapp className="text-green-500" />
                <span>Dúvidas? Fale conosco pelo WhatsApp</span>
              </div>
            </div>
          </motion.div>

          {/* Cartão de Crédito Card */}
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl overflow-hidden relative z-10"
            variants={item}
            whileHover={cardHover}
            whileTap={cardTap}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-500/5" />
            
            <div className="relative z-10 p-8">
              <div className="flex items-center justify-center mb-6">
                <motion.span 
                  className="inline-flex items-center text-sm font-bold px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg mr-2">💳</span>
                  CARTÃO DE CRÉDITO
                </motion.span>
              </div>
              
              <p className="text-2xl font-bold mb-6 text-center text-gray-800">
                Parcele em até 12x sem juros
              </p>
              
              <motion.div 
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-5xl max-md:text-4xl font-bold mb-2 text-blue-700">
                    12x de R$ 79,70
                  </div>
                  <p className="text-blue-600 text-sm mb-1">
                    Total: R$ 956,40
                  </p>
                  <p className="text-blue-800 text-sm font-semibold mb-4">
                    Ou R$ 797,00 à vista
                  </p>
                  
                </div>
                
              </motion.div>
              <div className=" rounded-lg p-3 mt-4">
                    
                  </div>
              <motion.button 
                className="w-full mt-6 py-4 px-6 rounded-xl font-bold text-white text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                Pagar com Cartão
              </motion.button>
              
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-blue-600">
                <FaWhatsapp className="text-green-500" />
                <span>Dúvidas? Fale conosco pelo WhatsApp</span>
              </div>
            </div>
          </motion.div>
          
          {/* Features Section */}
          <div className="mt-16 col-span-2 w-full max-w-[900px] mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
              O Que Está Incluso no Seu Pacote
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {/* Primeiro Card: três primeiros itens */}
  <motion.div
    className="relative overflow-hidden group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 h-full"
    variants={fadeIn('up', 0)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ 
      y: -8,
      scale: 1.02,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    }}
  >
    <div className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
    <div className="relative z-10 w-full flex flex-col gap-4">
      {[0,1,2].map(i => (
        <div key={i} className="flex items-center gap-4">
          <div 
            className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white`}
            style={{
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
          >
            <span className="drop-shadow-md">{features[i].icon}</span>
          </div>
          <p className="text-gray-700 group-hover:text-gray-900 transition-colors font-medium text-left mt-1">
            {features[i].text}
          </p>
        </div>
      ))}
    </div>
  </motion.div>

  {/* Segundo Card: dois últimos itens */}
  <motion.div
    className="relative overflow-hidden group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 h-full"
    variants={fadeIn('up', 0.1)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ 
      y: -8,
      scale: 1.02,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    }}
  >
    <div className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
    <div className="relative z-10 w-full flex flex-col gap-4">
      {[3,4].map(i => (
        <div key={i} className="flex items-center gap-4">
          <div 
            className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white`}
            style={{
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
          >
            <span className="drop-shadow-md">{features[i].icon}</span>
          </div>
          <p className="text-gray-700 group-hover:text-gray-900 transition-colors font-medium text-left mt-1">
            {features[i].text}
          </p>
        </div>
      ))}
      {/* Vídeo memorável */}
      <div className="flex items-center gap-4">
        <div 
          className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white`}
          style={{
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          }}
        >
          <span className="drop-shadow-md">🎥</span>
        </div>
        <p className="text-gray-700 group-hover:text-gray-900 transition-colors font-medium text-left mt-1">
          Vídeo memorável
        </p>
      </div>
    </div>
  </motion.div>
</div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
