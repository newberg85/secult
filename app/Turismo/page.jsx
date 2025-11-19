import Header from "@/Components/Header";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/Components/Footer";



export default function Home() {
  return (
    <div className="grid-rows-[20px_1fr_20px] items-center min-h-screen font-[Montserrat]">
      <Header />
      <div className="flex flex-col w-full px-10 py-4 justify-between">
        <div className="flex flex-col md:flex-row md:px-32 items-center justify-between">
          <div className="">
              <h1 className="text-[#1B7E44] text-2xl md:text-3xl font-bold">Maranguape pelo mapa!</h1>
            <p className="text-justify  font-light">

              Navegue pelo nosso mapa e conheça os lugares que <br className="hidden md:block"/>
              fazem de Maranguape um destino único. De trilhas <br className="hidden md:block"/>
              a museus, cada ponto revela uma parte da nossa <br className="hidden md:block"/>
              história, cultura e belezas naturais.
            </p>
            <div className="py-3">
              <Link href="/mapa">
                <button className="bg-[#1B7E44] p-2 text-white rounded-xs font-semibold">
                  Conheça os pontos turísticos
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-none">
            <Image
              alt="servicos"
              src="/Turismo.png"
              width={700} 
              height={700}
              className="md:h-[500px] md:w-[500px] object-contain" 
              priority
            />
          </div>
        </div>
      </div>
     
    <div className=" w-full px-10 py-3 gap-7 justify-center">
      <div className=" w-full px-10 py-3 gap-7 justify-center">
        <div className="mt-3">
          <h1 className="text-3xl font-bold text-black md:border-b-4  md:border-[#10783b] inline-block pb-2">
           Pontos Turisticos
          </h1>
          <div className="md:hidden h-1 bg-[#10783b] w-[110] mx-auto md:ml-[70]"></div>
        </div>
        <div className="flex flex-wrap gap-5 justify-center border-t-1 pt-10 border-gray-400 px-8">
          <div className="bg-gray-200 w-[275px] h-[275px] rounded-sm"> 
            Praça capistrano de abreu
          </div>
           <div className="bg-gray-200 w-[275px] h-[275px] rounded-sm"> 
            Praça capistrano de abreu
          </div>
           <div className="bg-gray-200 w-[275px] h-[275px] rounded-sm"> 
            Praça capistrano de abreu
          </div>
        </div>
        </div>

    </div>
    <Footer />
    </div>
    
  );
} 