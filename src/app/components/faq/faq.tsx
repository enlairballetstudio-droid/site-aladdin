'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaTicketAlt, FaShoppingBag, FaUsers, FaTag, FaQuestionCircle } from 'react-icons/fa';
import { theme } from '@/app/theme/theme';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  icon: React.ReactNode;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: 'Os ingressos estão incluídos no meu Kit? Quanto vai custar?',
      answer: (
        <div className="space-y-2">
          <p>Os participantes têm direito à entrada liberada e mais dois ingressos de cortesia.</p>
          <p>O preço do ingresso extra varia, de acordo com o lote:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>1º Lote: R$40,00</li>
            <li>2º Lote: R$45,00</li>
            <li>3º Lote: R$50,00</li>
          </ul>
          <p className="text-sm text-gray-600 mt-2">
            Obs: Preços acima são referentes a meia entrada, exclusivo para:
            <br />• Alunos e familiares da En L'air Centro de Dança.
            <br />• Beneficiários de acordo com a Lei Federal nº 12933/2013.
          </p>
        </div>
      ),
      icon: <FaTicketAlt className="text-purple-600" />
    },
    {
      question: 'As cadeiras são numeradas? Onde posso comprar os ingressos?',
      answer: (
        <div className="space-y-2">
          <p>As cadeiras não são numeradas, mas estamos buscando uma plataforma segura para fazer os próximos eventos dessa forma.</p>
          <p>Para o seu melhor conforto e maior organização, as vendas dos ingressos serão feitas exclusivamente em plataforma online.</p>
        </div>
      ),
      icon: <FaQuestionCircle className="text-blue-600" />
    },
    {
      question: 'Até quando poderei comprar o meu Kit Aladdin 2025?',
      answer: (
        <div className="space-y-3">
          <p>Para construir este mundo mágico, temos prazos e por isso quanto antes você se inscrever, melhor será para todos nós!</p>
          <p>Por isso fazemos condições exclusivas para quem se antecipa e garante mais cedo o seu Kit Aladdin 2025.</p>
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <p className="font-semibold">O preço normal do Kit Aladdin 2025 é R$997,00 mas até dia 14 de agosto você terá:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>R$300,00 de desconto parcelando em até 4x no pix</li>
            </ul>
            <div className="mt-3 p-3 bg-white rounded-md">
              <p className="line-through text-gray-500">DE: R$997,00</p>
              <p className="text-xl font-bold text-purple-700">POR: 4x de R$174,25 ou R$697,00 à vista</p>
            </div>
            <p className="mt-2 text-sm">Ainda teremos a opção de pagamento feito no cartão de crédito por até 12x de R$71,24.</p>
          </div>
          <p className="font-semibold text-purple-700">Por isso faça a inscrição o quanto antes para não perder essa oportunidade!</p>
          <p className="text-center text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-lg">
            GARANTA JÁ O SEU KIT ALADDIN 2025 COM CONDIÇÕES ESPECIAIS!
          </p>
        </div>
      ),
      icon: <FaShoppingBag className="text-amber-600" />
    },
    {
      question: 'Eu danço mais de uma modalidade. Tenho que pagar mais de um Kit?',
      answer: (
        <div className="space-y-2">
          <p>Não. O aluno que dançar mais de uma modalidade pagará um único Kit Aladdin 2025 e o valor adicional de cada figurino extra, a seguir:</p>
          <p className="font-semibold">Figurino extra: até 12 parcelas de R$39,50 ou R$395,00 à vista, já considerando desconto de 16,6%.</p>
        </div>
      ),
      icon: <FaUsers className="text-green-600" />
    },
    {
      question: 'Irmãs tem desconto no Kit Aladdin 2025?',
      answer: (
        <div className="space-y-2">
          <p>Sim para quem tem irmã é concedido um desconto de 15% equivalente a R$209,10 de desconto totalizando um valor final de R$1.184,90 para os dois kits.</p>
        </div>
      ),
      icon: <FaTag className="text-red-500" />
    }
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" id="faq">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-6xl font-aladin h-fit font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
          Perguntas Frequentes
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Tire suas dúvidas sobre o evento, ingressos e kits do Espetáculo Aladdin 2025
        </p>
      </motion.div>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
          >
            <button
              className={`w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none transition-colors ${activeIndex === index ? 'bg-purple-50' : 'hover:bg-gray-50'}`}
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-${index}`}
            >
              <div className="flex items-center">
                <span className="mr-3 text-xl">
                  {item.icon}
                </span>
                <span className="font-medium text-gray-800 text-lg max-md:text-[1rem]">{item.question}</span>
              </div>
              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-500"
              >
                <FaChevronDown />
              </motion.span>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  id={`faq-${index}`}
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 0, height: 0 }
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 text-gray-700">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
