import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import moment from "moment";

// Load Poppins font
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins',
});

// URL base para imagens e links
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://enlair-danca.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: `A Magia de Aladdin e Jasmine - En L'air Centro de Dança`,
  description: "Espetáculo de dança infantil inspirado no clássico da Disney. Uma experiência mágica com nossos talentosos alunos no palco. Garanta seu ingresso!",
  keywords: [
    "espetáculo de dança infantil", 
    "aulas de dança para crianças", 
    "balé infantil", 
    "escola de dança", 
    "espetáculo Aladdin", 
    "dança infantil", 
    "matrículas abertas dança",
    "dança para crianças",
    "escola de dança profissional",
    "Centro Cultural Pio XII"
  ],
  authors: [
    { name: "En L'air Centro de Dança", url: baseUrl },
  ],
  creator: "En L'air Centro de Dança",
  publisher: "En L'air Centro de Dança",
  openGraph: {
    title: `A Magia de Aladdin e Jasmine - En L'air Centro de Dança`,
    description: "Espetáculo de dança infantil inspirado no clássico da Disney. Uma experiência mágica com nossos talentosos alunos no palco. Garanta seu ingresso!",
    url: `${baseUrl}`,
    siteName: "En L'air Centro de Dança",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Unique Ballet - Uma volta ao mundo na ponta dos pés",
      },
    ],
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `Unique Ballet ${moment().format("YYYY")} - Uma volta ao mundo na ponta dos pés`,
    description: "Dia 14/12/2025 às 16:00. Um espetáculo inesquecível no Teatro Paulo Autran. Garanta já o seu ingresso!",
    images: ["/imagens/hero-mobile.jpeg"],
  },
  manifest: '/site.webmanifest',
  themeColor: '#ffffff',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
    shortcut: ['/favicon.ico'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" data-theme="light">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
