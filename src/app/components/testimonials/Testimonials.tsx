'use client';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  fadeIn, 
  staggerContainer, 
  textVariant, 
  cardHover, 
  cardTap, 
  staggerTestimonials, 
  testimonialItem 
} from '@/app/animations';

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, avatar, content, rating, index }) => {
  return (
    <motion.div 
      className="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col relative overflow-hidden group"
      whileHover={cardHover}
      whileTap={cardTap}
      variants={testimonialItem}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <motion.div 
          className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400"
          whileHover={{ rotate: 5, scale: 1.05 }}
        >
          <Image 
            src={avatar} 
            alt={name}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div>
          <h4 className="font-bold text-lg text-purple-900">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      
      <div className="mb-6 flex">
        {[...Array(5)].map((_, i) => (
          <motion.span 
            key={i}
            className="text-xl"
            initial={{ scale: 1 }}
            whileHover={{ 
              scale: 1.3,
              rotate: i % 2 === 0 ? 10 : -10,
              transition: { type: 'spring', stiffness: 500 }
            }}
            style={{ 
              color: i < rating ? '#F59E0B' : '#E5E7EB',
              display: 'inline-block',
              marginRight: '2px'
            }}
          >
            ★
          </motion.span>
        ))}
      </div>
      
      <motion.div 
        className="text-gray-700 flex-grow text-justify relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:h-[calc(100%-1rem)] before:w-0.5 before:bg-gradient-to-b before:from-yellow-400 before:to-pink-500 before:rounded-full"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ 
          opacity: 1, 
          x: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }}
        viewport={{ once: true }}
      >
        <span className="text-6xl leading-none text-gray-200 absolute -top-2 left-0 font-serif">"</span>
        <p className="relative z-10 pl-2">{content}</p>
        <span className="text-6xl leading-none text-gray-200 absolute -bottom-6 right-2 font-serif">"</span>
      </motion.div>
      </div>
    </motion.div>
  );
};

interface TestimonialsProps {
  font: {
    className: string;
  };
}

const Testimonials: React.FC<TestimonialsProps> = ({ font }) => {
  const testimonials = [
    {
      name: 'Ana Clara',
      role: 'Mãe da Sofia',
      avatar: '/images/testimonials/1.jpg',
      content: 'Ver minha filha brilhar no palco foi uma das melhores experiências da nossa vida. A produção foi impecável e a alegria dela não tem preço!',
      rating: 5
    },
    {
      name: 'Carlos Eduardo',
      role: 'Pai da Laura',
      avatar: '/images/testimonials/2.jpg',
      content: 'A dedicação da equipe do En L\'air é impressionante. Minha filha se desenvolveu muito e o espetáculo foi mágico, superou todas as expectativas!',
      rating: 5
    },
    {
      name: 'Mariana Santos',
      role: 'Ex-aluna',
      avatar: '/images/testimonials/3.jpg',
      content: 'Participar do espetáculo foi transformador. Aprendi muito, fiz amizades incríveis e levo essa experiência para toda a vida. Recomendo muito!',
      rating: 5
    },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      {/* Decorative elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      />
      
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'url("/images/arabesque-pattern.png")',
            backgroundSize: '500px',
            opacity: 0.05
          }} 
        />
      </div>
      
      <motion.div 
        className="container mx-auto px-4 relative"
        variants={staggerTestimonials}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="text-center mb-20"
          variants={textVariant(0.2)}
        >
          <motion.h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${font.className} text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            }}
            viewport={{ once: true }}
          >
            O Que Dizem Quem Já Viveu Essa Magia
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }
            }}
            viewport={{ once: true }}
          >
            Depoimentos de pais e alunos que já fizeram parte dos nossos espetáculos
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
          ))}
        </div>
        
      </motion.div>
      
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
