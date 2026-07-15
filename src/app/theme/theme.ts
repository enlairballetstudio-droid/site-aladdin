const theme = {
  colors: {
    primary: '#2F5D9B',
    secondary: '#D8B45A',
    accent: '#A9D9EE',
    dark: '#14243D',
    light: '#F4FAFF',
    white: '#FFFFFF',
    black: '#000000',
  },
  fonts: {
    primary: 'var(--font-playfair-display)',
    secondary: '"Poppins", sans-serif',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  animations: {
    float: 'float 6s ease-in-out infinite',
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    shimmer: 'shimmer 2s infinite',
  },
  globalStyles: `
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-16px); }
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }

    .text-stroke {
      -webkit-text-stroke: 1px #D8B45A;
      color: transparent;
    }

    .magic-hover { transition: transform 0.3s ease, filter 0.3s ease; }
    .magic-hover:hover {
      transform: translateY(-5px);
      filter: drop-shadow(0 5px 15px rgba(216, 180, 90, 0.3));
    }
  `,
};

export { theme };
