'"use client"';

import React from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col items-center w-full border-b-[1px] border-solid border-[#D9D9D9] font-[Montserrat] z-50">
      {/* Acessibilidade*/}
      <div className="bg-[#10783B] w-full p-0 text-white z-40">
        Acessibilidade
      </div>
      {/* Menu principal */}
      <nav className="container mx-auto py-4 px-4 flex  sm:flex-row justify-between items-center z-30">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <Image
            src="/secult.png"
            alt="Descrição da imagem"
            width={200}
            height={100}
          />
        </div>

        <ul className="flex space-x-4 font-semibold text-sm z-20 p-2 items-center">
          <Link href="/">
            <li className="text-[#4B4B4B] hover:text-[#1B7E44]">Home</li>
          </Link>
          <Link href="/pages/Servicos">
            <li className="text-[#4B4B4B] hover:text-[#1B7E44]">Serviços</li>
          </Link>
          <Link href="">
            <li className="text-[#4B4B4B] hover:text-[#1B7E44]">Cultura</li>
          </Link>
          <Link href="">
            <li className="text-[#4B4B4B] hover:text-[#1B7E44]">Turismo</li>
          </Link>
          <Link href="">
            <li className="text-[#4B4B4B] hover:text-[#1B7E44]">Ouvidoria</li>
          </Link>
          <div className="flex items-center">
            <input
              className="h-8 border-solid border-[2px] border-[#1B7E44] border-r-0 rounded-l-md py-1 px-3 focus:outline-none text-gray-700"
              type="text"
              placeholder="Pesquisar..."
            />
            <button className="h-8 bg-[#1B7E44] p-2 rounded-r-md border-solid border-[2px] border-l-0 border-[#1B7E44]">
              <FaSearch size={15} color="#FAFBFC" />
            </button>
          </div>
        </ul>
      </nav>

      {/* Menu flutuante */}
      <div className="items-center justify-between justify-items-center bg-[#1B7E44] w-[1000px] transform translate-y-[10px] p-1 z-50">
        <ul className="flex space-x-28">
          <Link href="">
            <li className="text-white hover:text-[#333333]">Institucional</li>
          </Link>
          <Link href="">
            <li className="text-white hover:text-[#333333]">Política</li>
          </Link>
          <Link href="">
            <li className="text-white hover:text-[#333333]">Editais</li>
          </Link>
          <Link href="">
            <li className="text-white hover:text-[#333333]">Equipamentos</li>
          </Link>
          <Link href="">
            <li className="text-white hover:text-[#333333]">Serviços</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
