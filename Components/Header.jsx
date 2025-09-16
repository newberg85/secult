"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineFontSize } from "react-icons/ai";
import { Pesquisar } from "./Pesquisar";


const Header = () => {
  // linkando caminhos para ficarem ativos
  const pathname = usePathname();
  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // menu de acessiblidade
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState(false);

  const changeFont = (delta) => {
    setFontSize((prev) => Math.max(12, prev + delta));
    document.documentElement.style.fontSize = `${fontSize + delta}px`;
  };

  const toggleContrast = () => {
    setContrast(!contrast);
    document.body.classList.toggle("high-contrast");
  };

  return (
    <header className="flex flex-col items-center w-full border-b-[1px] border-solid border-[#D9D9D9] font-[Montserrat] z-50">
      <div className="bg-[#10783B] w-full p-2 text-white z-40 flex justify-between items-center px-20">
        {/* Texto à esquerda */}
        <span className="font-extralight text-xs">
          PREFEITURA DE MARANGUAPE | PORTAL DA TRANSPARÊNCIA
        </span>

        {/* Botões à direita */}
        <div className="flex items-center space-x-3">
          <button onClick={() => changeFont(-2)} className="hover:underline">
            A-
          </button>
          <button onClick={() => setFontSize(14)} className="hover:underline">
            A
          </button>
          <button onClick={() => changeFont(2)} className="hover:underline">
            A+
          </button>
          <button onClick={toggleContrast} className="hover:underline">
            ◐
          </button>
        </div>
      </div>

      {/* Menu principal */}
      <nav className="container mx-auto py-4 px-4 flex sm:flex-row justify-between items-center z-30">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <Image
            src="/secult.png"
            alt="Descrição da imagem"
            width={200}
            height={100}
          />
        </div>

        <ul className="flex space-x-4 font-semibold text-sm z-20 p-2 items-center">
          <Link href="/" className="">
            <li
              className={`high-contrasttext-[#4B4B4B] hover:text-[#1B7E44] ${
                isActiveLink("/")
                  ? "text-[#1B7E44] font-bold border-b-2 border-[#1B7E44]"
                  : ""
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="/servicos">
            <li
              className={`text-[#4B4B4B] hover:text-[#1B7E44] ${
                isActiveLink("/servicos")
                  ? "text-[#1B7E44] font-bold border-b-2 border-[#1B7E44]"
                  : ""
              }`}
            >
              Serviços
            </li>
          </Link>
          <Link href="/cultura">
            <li
              className={`text-[#4B4B4B] hover:text-[#1B7E44] ${
                isActiveLink("/cultura")
                  ? "text-[#1B7E44] font-bold border-b-2 border-[#1B7E44]"
                  : ""
              }`}
            >
              Cultura
            </li>
          </Link>
          <Link href="/Turismo">
            <li
              className={`text-[#4B4B4B] hover:text-[#1B7E44] ${
                isActiveLink("/Turismo")
                  ? "text-[#1B7E44] font-bold border-b-2 border-[#1B7E44]"
                  : ""
              }`}
            >
              Turismo
            </li>
          </Link>
          <Link href="/Ouvidoria">
            <li
              className={`text-[#4B4B4B] hover:text-[#1B7E44] ${
                isActiveLink("/Ouvidoria")
                  ? "text-[#1B7E44] font-bold border-b-2 border-[#1B7E44]"
                  : ""
              }`}
            >
              Ouvidoria
            </li>
          </Link>
          <Pesquisar />
        </ul>
      </nav>

      {/* Menu flutuante */}
      <div className="items-center justify-between justify-items-center bg-[#1B7E44] w-full max-w-[1000px] transform translate-y-[10px] p-1 z-50 rounded-sm">
        <ul className="flex justify-center space-x-4 sm:space-x-8 md:space-x-16 lg:space-x-28 text-sm">
          <Link href="/institucional">
            <li
              className={`text-white hover:text-[#333333] ${
                isActiveLink("/institucional") ? "font-bold underline" : ""
              }`}
            >
              Institucional
            </li>
          </Link>
          <Link href="/politica">
            <li
              className={`text-white hover:text-[#333333] ${
                isActiveLink("/politica") ? "font-bold underline" : ""
              }`}
            >
              Política
            </li>
          </Link>
          <Link href="/editais">
            <li
              className={`text-white hover:text-[#333333] ${
                isActiveLink("/editais") ? "font-bold underline" : ""
              }`}
            >
              Editais
            </li>
          </Link>
          <Link href="/equipamentos">
            <li
              className={`text-white hover:text-[#333333] ${
                isActiveLink("/equipamentos") ? "font-bold underline" : ""
              }`}
            >
              Equipamentos
            </li>
          </Link>
          <Link href="/servicos">
            <li
              className={`text-white hover:text-[#333333] ${
                isActiveLink("/servicos") ? "font-bold underline" : ""
              }`}
            >
              Serviços
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
