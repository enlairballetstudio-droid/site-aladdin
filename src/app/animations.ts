import { Variants } from 'framer-motion';

interface FadeInOptions {
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  type?: string;
  duration?: number;
}

export const fadeIn = (options: FadeInOptions | 'up' | 'down' | 'left' | 'right' = {}): Variants => {
  // Backward compatibility with string direction
  const direction = typeof options === 'string' ? options : (options.direction || 'up');
  const delay = typeof options === 'object' ? (options.delay || 0) : 0;
  const type = typeof options === 'object' ? (options.type || 'tween') : 'tween';
  const duration = typeof options === 'object' ? (options.duration || 0.8) : 0.8;
  
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0.1): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay = 0) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const zoomIn = (delay = 0, duration = 0.5) => ({
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const buttonHover = {
  scale: 1.05,
  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  transition: {
    type: 'spring',
    stiffness: 400,
    damping: 10,
  },
};

export const buttonTap = {
  scale: 0.98,
  transition: {
    type: 'spring',
    stiffness: 400,
    damping: 20,
  },
};

export const floatingAnimation = {
  y: ['0%', '-5%', '0%'],
  transition: {
    duration: 4,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: 'reverse' as const,
  },
};

export const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: 'reverse' as const,
  },
};

export const cardHover = {
  y: -8,
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
  transition: {
    type: 'spring',
    stiffness: 400,
    damping: 15,
    mass: 0.5
  }
};

export const cardTap = {
  scale: 0.96,
  transition: {
    type: 'spring',
    stiffness: 600,
    damping: 20,
    mass: 0.8
  }
};

export const staggerTestimonials = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      when: 'beforeChildren',
      staggerDirection: 1
    }
  }
};

export const testimonialItem = {
  hidden: { 
    opacity: 0,
    y: 25,
    scale: 0.98
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 18,
      mass: 0.8,
      velocity: 2
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15
    }
  }
};
