'use client';

import dynamic from 'next/dynamic';
import { Playfair_Display } from 'next/font/google';
import Hero from './components/hero/Hero';
import MotionPreferences from './components/motion/MotionPreferences';
import { theme } from './theme/theme';

const About = dynamic(() => import('./components/about/About'));
const Showcase = dynamic(() => import('./components/showcase/Showcase'));
const PremiumGallery = dynamic(() => import('./components/carousel/PremiumGallery'));
const Pricing = dynamic(() => import('./components/pricing/Pricing'));
const FAQ = dynamic(() => import('./components/faq/faq'));
const Testimonials = dynamic(() => import('./components/testimonials/Testimonials'));
const CTA = dynamic(() => import('./components/cta/CTA'));
const Footer = dynamic(() => import('./components/footer/Footer'));

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
});

export default function Home() {
  return (
    <MotionPreferences>
      <div className={`${playfairDisplay.variable} font-sans`}>
        <Hero font={playfairDisplay} />
        <About font={playfairDisplay} />
        <Showcase font={playfairDisplay} />
        <PremiumGallery font={playfairDisplay} />
        <Pricing font={playfairDisplay} />
        <FAQ />
        <Testimonials font={playfairDisplay} />
        <CTA font={playfairDisplay} />
        <Footer font={playfairDisplay} />

        <style>{`
          :root {
            --color-primary: ${theme.colors.primary};
            --color-secondary: ${theme.colors.secondary};
            --color-accent: ${theme.colors.accent};
            --color-dark: ${theme.colors.dark};
            --color-light: ${theme.colors.light};
            --font-primary: ${theme.fonts.primary};
            --font-secondary: ${theme.fonts.secondary};
          }

          body {
            font-family: var(--font-secondary);
            color: #1f385a;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            background-color: ${theme.colors.light};
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-primary), var(--font-secondary), serif;
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
            .container { padding: 0 2rem; }
          }

          ${theme.globalStyles}
        `}</style>
      </div>
    </MotionPreferences>
  );
}
