const theme = {
  colors: {
    primary: '#3B1B80', // Deep purple
    secondary: '#FFD700', // Gold
    accent: '#FF6B6B', // Coral
    dark: '#1A0B35', // Deep purple-black
    light: '#F8F1FF', // Light lavender
    white: '#FFFFFF',
    black: '#000000',
  },
  fonts: {
    primary: '"Aladin", cursive',
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
      0% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0px); }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
    
    @keyframes shimmer {
      0% { background-position: -1000px 0; }
      100% { background-position: 1000px 0; }
    }
    
    .text-stroke {
      -webkit-text-stroke: 1px #FFD700;
      text-stroke: 1px #FFD700;
      color: transparent;
    }
    
    .magic-hover {
      transition: all 0.3s ease;
    }
    
    .magic-hover:hover {
      transform: translateY(-5px);
      filter: drop-shadow(0 5px 15px rgba(255, 215, 0, 0.3));
    }
  `
};

export { theme };
