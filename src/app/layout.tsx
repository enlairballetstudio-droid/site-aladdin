import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://enlair-danca.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Cinderela: O Encanto da Meia-Noite | En L\'air Centro de Dança',
  description: 'Espetáculo de dança Cinderela 2026 do En L\'air Centro de Dança. Quando o tempo toca meia-noite, a magia de quem acredita continua a brilhar.',
  keywords: ['espetáculo Cinderela', 'dança infantil', 'balé infantil', 'espetáculo de dança 2026', 'En L\'air Centro de Dança', 'Teatro Municipal de Ibirité'],
  authors: [{ name: 'En L\'air Centro de Dança', url: baseUrl }],
  creator: 'En L\'air Centro de Dança',
  publisher: 'En L\'air Centro de Dança',
  openGraph: {
    title: 'Cinderela: O Encanto da Meia-Noite | En L\'air Centro de Dança',
    description: 'Uma experiência mágica de dança para acreditar nos sonhos.',
    url: baseUrl,
    siteName: 'En L\'air Centro de Dança',
    images: [{ url: '/galeria/hero.jpeg', width: 1200, height: 1200, alt: 'Cinderela — espetáculo En L\'air 2026' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cinderela: O Encanto da Meia-Noite | En L\'air Centro de Dança',
    description: 'Uma experiência mágica de dança para acreditar nos sonhos.',
    images: ['/galeria/hero.jpeg'],
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }, { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }, { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.ico'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#2f5d9b',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className="scroll-smooth" data-theme="light"><body className={`${poppins.variable} font-sans antialiased`}>{children}</body></html>;
}
