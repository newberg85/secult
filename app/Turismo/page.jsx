import Header from "@/Components/Header";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/Components/Footer";



export default function Home() {
  return (
    <div className="grid-rows-[20px_1fr_20px] items-center min-h-screen font-[Montserrat]">
      <Header />
      <div className="flex flex-col w-full p-10">
        <div className="flex flex-row ps-32 gap-4 items-center">
          <div className="">
              <h1 className="text-[#1B7E44] text-2xl font-bold">Maranguape pelo mapa!</h1>
            <p className="text-justify font-light">

              Navegue pelo nosso mapa e conheça os lugares que <br />
              fazem de Maranguape um destino único. De trilhas <br />
              a museus, cada ponto revela uma parte da nossa <br />
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
              priority
            />
          </div>
        </div>
      </div>
     
    <div className=" w-full p-10 gap-7 justify-center">
      <div className=" w-full p-10 gap-7 justify-center">
        <div className="w-[220px]">
          <h1 className="text-2xl font-bold text-black-700 ml-[93px]  pb-2 border-b-5  border-solid border-[#10783B] font-[Montserrat] ">
           Pontos Turisticos
          </h1>
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