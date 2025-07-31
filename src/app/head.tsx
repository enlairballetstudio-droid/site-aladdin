import { Metadata } from 'next';
import moment from 'moment';

// URL base para imagens e links
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://unique-ballet.vercel.app';

export default function Head() {
  return (
    <>
      <title>{`Unique Ballet ${moment().format("YYYY")} - Uma volta ao mundo na ponta dos pés`}</title>
      <meta name="description" content="Um espetáculo inesquecível no Teatro Paulo Autran. Dia 14 de Dezembro de 2025 às 16:00. Garanta já o seu ingresso!" />
      <meta name="keywords" content="espetáculo teatral, teatro em Curitiba, Teatro Paulo Autran, peça de teatro, eventos culturais, ingressos teatro" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={`Unique Ballet ${moment().format("YYYY")} - Uma volta ao mundo na ponta dos pés`} />
      <meta property="og:description" content="Um espetáculo inesquecível no Teatro Paulo Autran. Dia 14 de Dezembro de 2025 às 16:00. Local: Shopping Novo Batel, Curitiba - PR" />
      <meta property="og:image" content={`${baseUrl}/imagens/hero-mobile.jpeg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Unique Ballet - Uma volta ao mundo na ponta dos pés" />
      <meta property="og:site_name" content="Unique Ballet" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={baseUrl} />
      <meta property="twitter:title" content={`Unique Ballet ${moment().format("YYYY")} - Uma volta ao mundo na ponta dos pés`} />
      <meta property="twitter:description" content="Dia 14/12/2025 às 16:00. Um espetáculo inesquecível no Teatro Paulo Autran. Garanta já o seu ingresso!" />
      <meta property="twitter:image" content={`${baseUrl}/imagens/hero-mobile.jpeg`} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
      <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  );
}
