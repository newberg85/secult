import Header from "@/Components/Header";
import Slide from "@/Components/Slide";
import Image from "next/image";
import Link from "next/link";

import { GiWhiteBook } from "react-icons/gi";
import Images from "./Images";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className=" grid-rows-[20px_1fr_20px] items-center min-h-screen gap-16 font[Montserrat]">
      <Header />
      <header className="flex flex-col items-center w-full p-8">
        <p className="text-3xl justify-center items-center font-bold text-[#005A24] text-wrap">
          Serviços com qualidade, cuidado e compromisso em cada detalhe.{" "}
        </p>
      </header>
      <div className="w-full flex flex-col lg:flex-row lg:justify-around p-8 sm:p-4">
        <div className="w-[300px] h-[300px] hidden sm:block">
          <Image
            alt="servicos"
            src="/secult-serviços.png"
            width={"300"}
            height={"300"}
            priority
          />
        </div>
        <div className="justify-center lg:flex flex-col gap-2 w-full lg:w-96">
          <h2 className="text-xl font-bold justify-between pe-8">
            Conheça nossa agenda
          </h2>
          <p className="flex justify-center lg:justify-between text-justify pe-8 font-light">
            Acompanhe de perto tudo o que acontece em nossa cidade! Nossa agenda
            reúne os principais eventos culturais, turísticos e artísticos,
            oferecendo opções para todos os gostos e idades. Aqui você encontra
            shows, feiras, exposições, festivais, oficinas, apresentações e
            muito mais.
          </p>

          <div className="justify-between pe-8">
            <Link href="">
              <button className="bg-[#1B7E44] p-2 text-white rounded-xs font-semibold">
                Conheça nossa agenda
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Images />
      <Footer />
    </div>
  );
}
