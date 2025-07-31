import { Metadata } from 'next';
import { redirect } from 'next/navigation';

// Redireciona para a página inicial
export default function RootLayout() {
  redirect('/');
  return null;
}

// Mantém as meta tags na raiz do domínio
export const metadata: Metadata = {
  title: 'Unique Ballet - Uma volta ao mundo na ponta dos pés',
  description: 'Um espetáculo inesquecível no Teatro Paulo Autran. Dia 14 de Dezembro de 2025 às 16:00.',
  openGraph: {
    title: 'Unique Ballet - Uma volta ao mundo na ponta dos pés',
    description: 'Um espetáculo inesquecível no Teatro Paulo Autran. Dia 14 de Dezembro de 2025 às 16:00.',
    images: ['/imagens/hero-mobile.jpeg'],
    type: 'website',
    url: 'https://unique-ballet.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unique Ballet - Uma volta ao mundo na ponta dos pés',
    description: 'Dia 14/12/2025 às 16:00. Um espetáculo inesquecível no Teatro Paulo Autran.',
    images: ['/imagens/hero-mobile.jpeg'],
  },
};
