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
          <p>O preço do ingresso extra varia de acordo com o lote:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>1º Lote: R$45,00 (10/09 até 10/10 ou enquanto não esgotarem)</li>
            <li>2º Lote: R$50,00 (11/10 até 20/10 ou enquanto não esgotarem)</li>
            <li>3º Lote: R$55,00 (21/10 até 02/11 ou enquanto não esgotarem)</li>
          </ul>
          <p className="text-sm text-gray-600 mt-2">
            Obs: Preços acima são referentes a meia entrada, exclusivo para:
            <br />• Alunos e familiares da En L'air Centro de Dança.
            <br />• Beneficiários de acordo com a Lei Federal nº 12933/2013.
          </p>
        </div>
      ),
      icon: <FaTicketAlt className="text-[#2f5d9b]" />
    },
    {
      question: 'As cadeiras são numeradas? Onde posso comprar os ingressos?',
      answer: (
        <div className="space-y-2">
          <p>Sim! As cadeiras serão numeradas por sessão, garantindo seu conforto e melhor organização.</p>
          <p>Para o seu melhor conforto e maior organização, as vendas dos ingressos serão feitas exclusivamente em plataforma online através da <a href="https://www.diversosingressos.com.br/" target="_blank" rel="noopener noreferrer" className="text-[#2f5d9b] font-semibold hover:underline">Diversos Ingressos</a>.</p>
        </div>
      ),
      icon: <FaQuestionCircle className="text-[#d8b45a]" />
    },
    {
      question: 'Quais são as condições para comprar o meu Kit Cinderela 2026?',
      answer: (
        <div className="space-y-3">
          <p>Escolha a condição de pagamento que melhor funciona para a sua família:</p>
          <div className="rounded-lg border-l-4 border-[#2f5d9b] bg-[#dceff8] p-4">
            <p className="font-semibold text-[#17375f]">Condições especiais do Kit Cinderela 2026:</p>
            <ul className="mt-3 space-y-2">
              <li><strong>À vista no PIX:</strong> R$729,00.</li>
              <li><strong>Parcelado no PIX:</strong> 4x de R$189,00, com a primeira parcela ainda em julho.</li>
              <li><strong>Resposta até 10/08:</strong> 3x de R$255,00.</li>
              <li><strong>Cartão de crédito:</strong> R$799,00 em até 12x, com juros do cartão.</li>
            </ul>
          </div>
          <p className="font-semibold text-[#2f5d9b]">Garanta sua inscrição dentro do prazo para aproveitar a condição que preferir.</p>
          <p className="rounded-lg bg-gradient-to-r from-[#2f5d9b] to-[#4c86bd] p-3 text-center text-lg font-bold text-white">
            GARANTA JÁ O SEU KIT CINDERELA 2026!
          </p>
        </div>
      ),
      icon: <FaShoppingBag className="text-[#d8b45a]" />
    },
    {
      question: 'Eu danço mais de uma modalidade. Tenho que pagar mais de um Kit?',
      answer: (
        <div className="space-y-2">
          <p>Não. O aluno que dançar mais de uma modalidade pagará um único Kit Cinderela 2026 e o valor adicional de cada figurino extra.</p>
          <p className="font-semibold">Figurino extra: consulte valores diretamente conosco.</p>
        </div>
      ),
      icon: <FaUsers className="text-[#2f5d9b]" />
    },
    {
      question: 'Irmãs tem desconto no Kit Cinderela 2026?',
      answer: (
        <div className="space-y-2">
          <p>Sim! Para quem tem irmã é concedido um desconto de 15% no valor total.</p>
          <div className="bg-[#dceff8] p-3 rounded-lg mt-2">
            <p className="font-semibold text-[#2f5d9b]">Valor para duas irmãs:</p>
            <p className="line-through text-gray-500">DE: R$1.385,00</p>
            <p className="text-xl font-bold text-[#2f5d9b]">POR: R$1.177,25 (15% de desconto)</p>
          </div>
        </div>
      ),
      icon: <FaTag className="text-[#d8b45a]" />
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
        <h2 className="text-4xl md:text-6xl font-aladin h-fit font-bold mb-4 bg-gradient-to-r from-[#2f5d9b] to-[#4c86bd] bg-clip-text text-transparent">
          Perguntas Frequentes
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Tire suas dúvidas sobre o evento, ingressos e kits do Espetáculo Cinderela 2026
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
