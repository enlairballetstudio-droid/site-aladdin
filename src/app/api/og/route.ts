import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function GET(request: NextRequest) {
  const html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <title>Unique Ballet - Uma volta ao mundo na ponta dos pés</title>
        <meta name="description" content="Um espetáculo inesquecível no Teatro Paulo Autran. Dia 14 de Dezembro de 2025 às 16:00. Garanta já o seu ingresso!" />
        
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unique-ballet.vercel.app/" />
        <meta property="og:title" content="Unique Ballet - Uma volta ao mundo na ponta dos pés" />
        <meta property="og:description" content="Um espetáculo inesquecível no Teatro Paulo Autran. Dia 14 de Dezembro de 2025 às 16:00." />
        <meta property="og:image" content="https://unique-ballet.vercel.app/imagens/hero-mobile.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Unique Ballet - Uma volta ao mundo na ponta dos pés" />
        <meta property="og:site_name" content="Unique Ballet" />
        <meta property="og:locale" content="pt_BR" />

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://unique-ballet.vercel.app/" />
        <meta property="twitter:title" content="Unique Ballet - Uma volta ao mundo na ponta dos pés" />
        <meta property="twitter:description" content="Dia 14/12/2025 às 16:00. Um espetáculo inesquecível no Teatro Paulo Autran." />
        <meta property="twitter:image" content="https://unique-ballet.vercel.app/imagens/hero-mobile.jpeg" />
        
        <meta http-equiv="refresh" content="0; url=/" />
      </head>
      <body>
        <p>Redirecionando para <a href="/">página inicial</a>...</p>
      </body>
    </html>
  `;

  return new NextResponse(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
