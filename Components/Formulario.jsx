"use client";

import React from "react";
import Image from "next/image";

const Formulario = () => {
  return (
    <header className="flex flex-col items-center w-full border-b-[1px] border-solid pb-20 border-[#D9D9D9] font-[Montserrat] z-50">
      <div className="bg-[#FF8A00] w-full p-2 text-white flex flex-col items-center px-10">
        <h1 className="font-bold">Formulários Disponíveis</h1>
        <p className="text-sm mt-2 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex justify-center items-center w-full mt-2">
          <div className="flex items-center space-x-5">
            <Image
              alt="servicos"
              src="/moldura-img2.png"
              width={300}
              height={300}
              priority
              className="object-contain"
            />
            <Image
              alt="servicos"
              src="/moldura-img.png"
              width={250}
              height={250}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Formulario;