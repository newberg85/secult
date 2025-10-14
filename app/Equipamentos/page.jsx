import Header from "@/Components/Header";
import Slide from "@/Components/Slide";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className=" grid-rows-[20px_1fr_20px] items-center min-h-screen gap-16 font[Montserrat]">
      <Header />
      <header className="flex flex-col items-center w-full p-8">
        <p className="text-3xl justify-center items-center font-bold text-[#005A24]">
          Conheça nosssos equipamentos
        </p>
      </header>
      <div className="flex justify-center items-center py-5">
        <div className="bg-white border-l-4 border-green-700 p-4 rounded shadow w-2xl h-46 flex flex-col justify-center">
          <h2 className="text-lg font-bold text-green-700 p-2">
            Biblioteca Pública de Maranguape
          </h2>
          <p className="text-center p-1">
            A Biblioteca Pública de Maranguape é um importante polo cultural,
            oferecendo uma rica coleção de livros e recursos para promover a
            educação e o engajamento comunitário na região.
          </p>
          <div className="justify-between items-end">
            <Link href="">
              <button className="bg-[#1B7E44] p-1 text-white rounded-xs font-semibold">
                {" "}
                Saiba mais
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-5">
        <div class="bg-white border-l-4 border-green-700 p-4 rounded shadow w-2xl h-46 flex flex-col justify-center">
          <h2 class="text-lg font-bold text-green-700 p-2">
            Artistica
          </h2>
          <p class="text-center p-1">
           A Biblioteca Artística de Maranguape é um refúgio criativo, exibindo arte e literatura locais, inspirando a expressão artística e a apreciação cultural entre moradores e visitantes.
          </p>
          <div className="justify-between items-end">
            <Link href="">
              <button className="bg-[#1B7E44] p-1 text-white rounded-xs font-semibold">
                {" "}
                Saiba mais
              </button>
            </Link>
          </div>
        </div>
      </div>

            <div className="flex justify-center items-center py-5">
        <div class="bg-white border-l-4 border-green-700 p-4 rounded shadow w-2xl h-46 flex flex-col justify-center">
          <h2 class="text-lg font-bold text-green-700 p-2">
            Casa Chico Anisio
          </h2>
          <p class="text-center p-1">
            A Casa de Chico Anysio é uma homenagem emocionante ao lendário humorista, apresentando um arquivo biográfico, figurinos e marionetes que destacam seu notável legado e contribuições para o entretenimento brasileiro.
          </p>
          <div className="justify-between items-end">
            <Link href="">
              <button className="bg-[#1B7E44] p-1 text-white rounded-xs font-semibold">
                {" "}
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
