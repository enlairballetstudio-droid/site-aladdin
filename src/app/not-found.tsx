import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#dceff8] to-white px-4 py-12">
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-[#2f5d9b] mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Página Não Encontrada</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ops! Parece que você se perdeu no caminho do baile. A página que você está procurando não existe ou foi movida.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2f5d9b] hover:bg-[#244b79] md:py-4 md:text-lg md:px-10 transition-colors duration-200"
        >
          Voltar para o Início
        </Link>

        <div className="mt-12 text-sm text-gray-500">
          <p>Não consegue encontrar o que procura? Entre em contato conosco.</p>
        </div>
      </div>
    </main>
  );
}
