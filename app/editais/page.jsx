import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import React from "react";
import Images from "./Images";


export default function Home() {
  return (
    <div className=" grid-rows-[20px_1fr_20px] items-center min-h-screen gap-16 font[Montserrat]">
      <Header/>
        <div className="w-full bg-gray-100 h-[170] p-11">
            <h1 className="text-[#005A38] text-5xl font-semibold pb-1">Editais e Seleção</h1>
            <div className="border-3 w-[110] border-[#FC8A0E]"></div>
        </div>

        <div className="w-full">
                <Images />
        </div>
      <Footer />
    </div>
    );
}