'use client';

import dynamic from 'next/dynamic';
import { Aladin } from 'next/font/google';
import { theme } from './theme/theme';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { textVariant } from './animations';

// Import components with SSR disabled for better performance
const Hero = dynamic(() => import('./components/hero/Hero'), { ssr: false });
const About = dynamic(() => import('./components/about/About'), { ssr: false });
const Showcase = dynamic(() => import('./components/showcase/Showcase'), { ssr: false });
const Pricing = dynamic(() => import('./components/pricing/Pricing'), { ssr: false });
const Testimonials = dynamic(() => import('./components/testimonials/Testimonials'), { ssr: false });
const CTA = dynamic(() => import('./components/cta/CTA'), { ssr: false });
const Footer = dynamic(() => import('./components/footer/Footer'), { ssr: false });
const PremiumGallery = dynamic(() => import('./components/carousel/PremiumGallery'), { ssr: false });
const FAQ = dynamic(() => import('./components/faq/faq'), { ssr: false });

// Load Aladin font
const aladin = Aladin({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-aladin',
});

export default function Home() {
  // Add global styles
  useEffect(() => {
    // Add custom properties to root
    const root = document.documentElement;
    root.style.setProperty('--color-primary', theme.colors.primary);
    root.style.setProperty('--color-secondary', theme.colors.secondary);
    root.style.setProperty('--color-accent', theme.colors.accent);
    root.style.setProperty('--color-dark', theme.colors.dark);
    root.style.setProperty('--color-light', theme.colors.light);
  }, []);

  return (
    <div className={`${aladin.variable} font-sans`}>
     
      <Hero font={aladin} />
      <About font={aladin} />
      <Showcase font={aladin} />
      <PremiumGallery font={aladin} />
      <Pricing font={aladin} />
      <FAQ />
      <Testimonials font={aladin} />
      <CTA font={aladin} />
      <Footer font={aladin} />

      {/* Global styles */}
      <style jsx global>{`
        :root {
          --font-primary: ${theme.fonts.primary};
          --font-secondary: ${theme.fonts.secondary};
        }
        
        body {
          font-family: var(--font-secondary);
          color: #333;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          background-color: ${theme.colors.light};
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-primary), var(--font-secondary), sans-serif;
          line-height: 1.2;
          margin-top: 0;
        }
        
        .container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        @media (min-width: 768px) {
          .container {
            padding: 0 2rem;
          }
        }
        
        ${theme.globalStyles}
      `}</style>
    </div>
  );
}