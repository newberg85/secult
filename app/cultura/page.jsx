import Header from "@/Components/Header";
import Slide from "@/Components/Slide";
import Image from "next/image";
import Link from "next/link";

import { GiWhiteBook } from 'react-icons/gi';
import Footer from "@/Components/Footer";
import SlideEvents from "@/Components/SlideEvents";

export default function Home() {
  return (
    <div className="font-sans w-full grid-rows-[20px_1fr_20px] items-center min-h-screen  gap-16 font[Montserrat] relative">
      <Header />

        <div className="bg-[#FFA124] w-full flex justify-between items-center p-10 gap-9">
          <div className="">
            <h1 className="justify-center items-center font-bold text-[#005A24] text-5xl">Agenda Cultural</h1>
            <p className="text-white text-justify">Aqui você encontra o espaço onde a cultura<br/> pulsa todos os dias, conectando pessoas à <br/> arte, à música e às expressões que fazem da <br/> cidade um palco vivo de criatividade e<br/> diversidade.</p>
          </div>
          <div className="">
            

            <img
              src="/secult-serviços.png"
              alt={ "Foto do Unsplash"}
              className="w-[900] h-[500] object-cover"
            />
            </div>

        </div>

      <SlideEvents />

       <div className=" w-full p-10 gap-7 justify-center">
      <div className="w-[220px] ">
        <h1 className="text-2xl font-bold  text-[#10783b] ml-[93px]  pb-2 border-b-5  border-solid border-[#10783b] font-[Montserrat] ">
         Calendário
        </h1>
      </div>
      <div className="flex flex-wrap gap-6 justify-center border-t-1 pt-10 border-gray-400">
      
      </div>
    </div>

      <Footer />
    </div>
    );
}