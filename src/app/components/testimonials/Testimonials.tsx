'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cardHover, staggerTestimonials, testimonialItem, textVariant } from '@/app/animations';

interface TestimonialCardProps {
  readonly name: string;
  readonly role: string;
  readonly avatar: string;
  readonly content: string;
  readonly rating: number;
}

function TestimonialCard({ name, role, avatar, content, rating }: TestimonialCardProps) {
  return (
    <motion.article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-lg"
      variants={testimonialItem}
      whileHover={cardHover}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#eef9fe] to-[#fdf8e8] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-[#7fbfdc] bg-[#eef9fe]">
            <Image
              src={avatar}
              alt={`Avatar ilustrativo de ${name}`}
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-lg font-bold text-[#17375f]">{name}</p>
            <p className="text-sm text-slate-600">{role}</p>
          </div>
        </div>

        <div className="mb-6 flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index} aria-hidden="true" className={index < rating ? 'text-xl text-[#d8b45a]' : 'text-xl text-slate-200'}>
              ★
            </span>
          ))}
        </div>

        <div className="relative flex-grow border-l-2 border-[#d8b45a] pl-6 text-justify text-slate-700">
          <span aria-hidden="true" className="absolute -left-1.5 -top-4 font-serif text-6xl leading-none text-[#d8b45a]/25">
            “
          </span>
          <p className="relative z-10">{content}</p>
          <span aria-hidden="true" className="absolute -bottom-10 right-0 font-serif text-6xl leading-none text-[#d8b45a]/25">
            ”
          </span>
        </div>
      </div>
    </motion.article>
  );
}

interface TestimonialsProps {
  readonly font: { className: string };
}

const testimonials: readonly TestimonialCardProps[] = [
  {
    name: 'Ana Clara',
    role: 'Mãe da Sofia',
    avatar: '/avatars/ana-clara.svg',
    content: 'Ver minha filha brilhar no palco foi uma das melhores experiências da nossa vida. A produção foi impecável e a alegria dela não tem preço!',
    rating: 5,
  },
  {
    name: 'Carlos Eduardo',
    role: 'Pai da Laura',
    avatar: '/avatars/carlos-eduardo.svg',
    content: "A dedicação da equipe do En L'air é impressionante. Minha filha se desenvolveu muito e o espetáculo foi mágico, superou todas as expectativas!",
    rating: 5,
  },
];

export default function Testimonials({ font }: TestimonialsProps) {
  return (
    <section className="content-visibility-auto relative overflow-hidden bg-gradient-to-b from-[#eef9fe] to-white py-20 md:py-32">
      <div aria-hidden="true" className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d8b45a]/15 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <motion.div
          className="mb-16 text-center md:mb-20"
          variants={textVariant(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <h2 className={`mb-6 text-4xl font-bold text-[#2f5d9b] md:text-5xl lg:text-6xl ${font.className}`}>
            O Que Dizem Quem Já Viveu Essa Magia
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-700">
            Depoimentos de pais e alunos que já fizeram parte dos nossos espetáculos
          </p>
        </motion.div>

        <motion.div
          className="relative z-10 mx-auto grid max-w-[900px] grid-cols-1 gap-8 md:grid-cols-2"
          variants={staggerTestimonials}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
