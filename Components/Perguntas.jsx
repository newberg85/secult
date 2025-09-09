"use client";

import React from "react";
import Image from "next/image";

const Perguntas = () => {
  return (
    <div>
      <div className="w-full p-10 gap-7 justify-center">
        <div className=" w-full p-10 gap-7 justify-center">
          <div className="w-[220px]">
            <h1 className="text-2xl font-bold text-black-700 ml-[93px]  pb-2 border-b-5  border-solid border-[#10783B] font-[Montserrat] ">
              Principais duvidas
            </h1>
            <div className="flex flex-wrap gap-5 justify-center border-t-1 pt-10 border-gray-400"></div>
          </div>
        </div>
        <div>Como acesso os editais da Secult</div>
      </div>
    </div>
  );
};

export default Perguntas;
