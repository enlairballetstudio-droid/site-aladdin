import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowUp, FaWhatsapp } from 'react-icons/fa';

interface FooterProps {
  font: {
    className: string;
  };
}

const Footer: React.FC<FooterProps> = ({ font }) => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  } as const;
  
  const linkItem = {
    hidden: { opacity: 0, x: -10 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300
      }
    },
  } as const;
  
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b pb-4 from-gray-900 to-gray-950 text-white pt-20">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
        >
          {/* Logo and About */}
          <motion.div 
            className="lg:col-span-2"
            variants={item}
          >
            <div className="flex items-center mb-8">
              <motion.div 
                className="mr-6"
                whileHover={{ rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className='w-40 h-20 relative'>
                  <Image
                    src="/imagens/logo-en.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>
            <motion.p 
              className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed"
              variants={item}
            >
              Transformando vidas através da dança e criando memórias inesquecíveis no palco da vida.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              variants={item}
            >
              {[
                { name: 'instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/enlaircentrodedanca?igsh=MXdnanJtd2JieGFzYg%3D%3D&utm_source=qr' },
                { name: 'whatsapp', icon: <FaWhatsapp />, href: 'https://wa.me/5531997777994' },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-all duration-300 group"
                  aria-label={social.name}
                  whileHover={{ y: -3, scale: 1.1, backgroundColor: 'rgba(251, 191, 36, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{social.name}</span>
                  <span className="text-gray-300 group-hover:text-yellow-400 transition-colors">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div variants={item}>
            
            <motion.ul 
              className="space-y-3 hidden"
              variants={container}
            >
              {['Início', 'Sobre', 'Modalidades', 'Horários', 'Contato'].map((link) => (
                <motion.li key={link} variants={linkItem}>
                  <Link href={`#${link.toLowerCase().replace('í', 'i')}`}>
                    <span className="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-lg group relative cursor-pointer">
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={item}>
            <h3 className="text-xl font-bold mb-6 text-yellow-400 tracking-wider">Entre em Contato</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-6 h-6 mr-4 mt-1 text-yellow-400 flex-shrink-0" />
                <span className='text-gray-300'>Av: Sinfrônio Brochado 861 Loja 3 Barreiro BH Mg</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="w-5 h-5 mr-4 text-yellow-400" />
                <a href="tel:31997777994" className="text-gray-300 hover:text-yellow-400 transition-colors">31 99777-7994</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-4 text-yellow-400" />
                <a href="mailto:enlaircd@gmail.com" className="text-gray-300 hover:text-yellow-400 transition-colors">enlaircd@gmail.com</a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-800 mt-20 pt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p>© {currentYear} En L'air Centro de Dança. Todos os direitos reservados.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <Link 
              href="/politica-de-privacidade" 
              className="hover:text-yellow-400 transition-colors hover:underline"
            >
              Política de Privacidade
            </Link>
            <span className="text-gray-600">•</span>
            <Link 
              href="/termos-de-uso" 
              className="hover:text-yellow-400 transition-colors hover:underline"
            >
              Termos de Uso
            </Link>
          </div>
        </motion.div>
        
        {/* Back to top button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-yellow-500 hover:bg-yellow-400 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Voltar ao topo"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
