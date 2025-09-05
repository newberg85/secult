import Header from "@/Components/Header";
import Slide from "@/Components/Slide";
import Image from "next/image";
import Link from "next/link";

import { GiWhiteBook } from 'react-icons/gi';

export default function Home() {
  return (
    <div className="font-sans grid-rows-[20px_1fr_20px] items-center min-h-screen pb-20 gap-16 font[Montsserat]">
      <Header />
      <header className="flex flex-col items-center w-full p-8">
        <p className="text-3xl justify-center items-center font-bold text-[#005A24]">
          Serviços com qualidade, cuidado <br></br>e compromisso em cada
          detalhe.{" "}
        </p>
      </header>
      <div className="w-full justify-around flex">
        <div className="w-[300px] h-[300px]">
          <Image
            alt="servicos"
            src="/capa.png"
            width={"300"}
            height={"300"}
            priority
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold justify-between pe-8">
            Conheça nossa agenda
          </h2>
          <p className="justify-between text-justify pe-8 font-light ">
            Acompanhe de perto tudo o que acontece em nossa cidade! <br />
            Nossa agenda reúne os principais eventos culturais, <br />
            turísticos e artísticos, oferecendo opções para todos <br />
            os gostos e idades. Aqui você encontra shows, feiras, <br />
            exposições, festivais, oficinas, apresentações e muito mais.
          </p>

          <div className="justify-between pe-8 ">
            <Link href="">
              <button className="bg-[#1B7E44] p-2 text-white rounded-xs font-semibold">
                {" "}
                Conheça nossa agenda
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-4 px-62">
        <div className="bg-gray-300 w-76 h-50 rounded-sm">
          <GiWhiteBook className="flex text-[#1B7E44] w-16 h-16 justify-center' items-center"/>
          <Link href="">
            <div className=" text-[#1B7E44] font-bold p-2">Cursos</div>
            <div className="text-[#4B4B4B] p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
          </Link>
        </div>


               <div className="bg-gray-300 w-76 h-50 rounded-sm">
          <GiWhiteBook />
          <Link href="">
            <div className=" text-[#1B7E44] font-bold p-2">Cursos</div>
            <div className="text-[#4B4B4B] p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
          </Link>
          
        </div>


               <div className="bg-gray-300 w-76 h-50 rounded-sm">
          <GiWhiteBook />
          <Link href="">
            <div className=" text-[#1B7E44] font-bold p-2">Cursos</div>
            <div className="text-[#4B4B4B] p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
          </Link>
          
        </div>


               <div className="bg-gray-300 w-76 h-50 rounded-sm">
          <GiWhiteBook />
          <Link href="">
            <div className=" text-[#1B7E44] font-bold p-2">Cursos</div>
            <div className="text-[#4B4B4B] p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
          </Link>
          
        </div>

               <div className="bg-gray-300 w-76 h-50 rounded-sm">
          <GiWhiteBook />
          <Link href="">
            <div className=" text-[#1B7E44] font-bold p-2">Cursos</div>
            <div className="text-[#4B4B4B] p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
          </Link>
          
        </div>

               <div className="bg-gray-300 w-76 h-50 rounded-sm">
          <GiWhiteBook />
          <Link href="">
            <div className=" text-[#1B7E44] font-bold p-2">Cursos</div>
            <div className="text-[#4B4B4B] p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
          </Link>
          
        </div>


      </div>
    </div>
  );
}
