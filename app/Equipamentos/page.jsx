import Header from "@/Components/Header";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className="grid-rows-[20px_1fr_20px] items-center min-h-screen gap-16 font-[Montserrat] bg-gray-50">
      <Header />

      {/* Título */}
      <header className="flex flex-col items-center w-full p-8 text-center">
        <p className="text-2xl sm:text-3xl font-bold text-[#005A24]">
          Conheça nossos equipamentos
        </p>
      </header>

      {/* Container dos cards */}
      <div className="flex flex-col items-center gap-8 px-6 sm:px-10 md:px-20 py-8">
        {/* Card 1 */}
        <div className="bg-white border-l-4 border-green-700 p-6 rounded-lg shadow-md w-full max-w-2xl flex flex-col justify-between text-center">
          <h2 className="text-lg sm:text-xl font-bold text-green-700 mb-2">
            Biblioteca Pública de Maranguape
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
            A Biblioteca Pública de Maranguape é um importante polo cultural,
            oferecendo uma rica coleção de livros e recursos para promover a
            educação e o engajamento comunitário na região.
          </p>
          <div className="flex justify-center">
            <Link href="">
              <button className="bg-[#1B7E44] px-4 py-2 text-white rounded-md font-semibold hover:bg-[#145c32] transition">
                Saiba mais
              </button>
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border-l-4 border-green-700 p-6 rounded-lg shadow-md w-full max-w-2xl flex flex-col justify-between text-center">
          <h2 className="text-lg sm:text-xl font-bold text-green-700 mb-2">
            Biblioteca Artística
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
            A Biblioteca Artística de Maranguape é um refúgio criativo, exibindo
            arte e literatura locais, inspirando a expressão artística e a
            apreciação cultural entre moradores e visitantes.
          </p>
          <div className="flex justify-center">
            <Link href="">
              <button className="bg-[#1B7E44] px-4 py-2 text-white rounded-md font-semibold hover:bg-[#145c32] transition">
                Saiba mais
              </button>
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border-l-4 border-green-700 p-6 rounded-lg shadow-md w-full max-w-2xl flex flex-col justify-between text-center">
          <h2 className="text-lg sm:text-xl font-bold text-green-700 mb-2">
            Casa Chico Anysio
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
            A Casa de Chico Anysio é uma homenagem emocionante ao lendário
            humorista, apresentando um arquivo biográfico, figurinos e
            marionetes que destacam seu notável legado e contribuições para o
            entretenimento brasileiro.
          </p>
          <div className="flex justify-center">
            <Link href="">
              <button className="bg-[#1B7E44] px-4 py-2 text-white rounded-md font-semibold hover:bg-[#145c32] transition">
                Saiba mais
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
