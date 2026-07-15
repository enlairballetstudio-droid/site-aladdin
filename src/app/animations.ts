import type { Variants } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right';

interface FadeInOptions {
  readonly direction?: Direction;
  readonly delay?: number;
  readonly duration?: number;
}

const TRANSITION_EASE = [0.22, 1, 0.36, 1] as const;

export const fadeIn = (options: FadeInOptions | Direction = {}): Variants => {
  const direction = typeof options === 'string' ? options : (options.direction ?? 'up');
  const delay = typeof options === 'string' ? 0 : (options.delay ?? 0);
  const duration = typeof options === 'string' ? 0.55 : (options.duration ?? 0.55);
  const distance = 28;

  return {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { delay, duration, ease: TRANSITION_EASE },
    },
  };
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0.1): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

export const textVariant = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: TRANSITION_EASE },
  },
});

export const zoomIn = (delay = 0, duration = 0.5): Variants => ({
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { delay, duration, ease: TRANSITION_EASE },
  },
});

export const buttonHover = {
  scale: 1.025,
  transition: { type: 'spring', stiffness: 360, damping: 22 },
};

export const buttonTap = {
  scale: 0.98,
  transition: { type: 'spring', stiffness: 440, damping: 26 },
};

export const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 5,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: 'mirror' as const,
  },
};

export const pulseAnimation = {
  scale: [1, 1.025, 1],
  transition: {
    duration: 3,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: 'mirror' as const,
  },
};

export const cardHover = {
  y: -4,
  boxShadow: '0 20px 40px -20px rgba(23, 55, 95, 0.35)',
  transition: { type: 'spring', stiffness: 300, damping: 24, mass: 0.7 },
};

export const cardTap = {
  scale: 0.985,
  transition: { type: 'spring', stiffness: 440, damping: 28 },
};

export const staggerTestimonials: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export const testimonialItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: TRANSITION_EASE },
  },
};
