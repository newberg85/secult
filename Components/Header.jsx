"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import Pesquisar from "@/Components/Pesquisar";
import { usePathname } from "next/navigation";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Active link logic
  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Accessibility menu
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
    <header className="flex flex-col items-center w-full border-b-[1px] border-solid border-[#D9D9D9] font-[Montserrat] z-50 order-1">
      {/* Top bar */}
      <div className="bg-[#10783B] w-full p-2 text-white z-40 flex justify-between items-center px-4 md:px-20">
        <span className="font-extralight text-xs ">
          PREFEITURA DE MARANGUAPE | PORTAL DA TRANSPARÊNCIA
        </span>
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

      {/* Main navigation */}
      <nav className="container mx-auto py-4 px-4 flex flex-col sm:flex-row justify-between items-center z-30">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <Image
            src="/secult.png"
            alt="Descrição da imagem"
            width={200}
            height={100}
          />
          {/* Hamburger button for mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-gray-700 focus:outline-none text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Search bar - outside menu on mobile */}
        <div className="sm:hidden mt-4 w-full">

          <Pesquisar />
        </div>

        {/* Desktop menu */}
        <ul className="hidden sm:flex space-x-4 font-semibold text-sm z-20 p-2 items-center">
          <Link href="/">
            <li
              className={`text-[#4B4B4B] hover:text-[#1B7E44] ${
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
          <Link href="/turismo">
            <li
              className={`text-[#4B4B4B] hover:text-[#1B7E44] ${
                isActiveLink("/turismo")
                  ? "text-[#1B7E44] font-bold border-b-2 border-[#1B7E44]"
                  : ""
              }`}
            >
              Turismo
            </li>
          </Link>
          <Link href="/ouvidoria">
            <li
              className={`text-[#4B4B4B] hover:text-[#1B7E44] ${
                isActiveLink("/ouvidoria")
                  ? "text-[#1B7E44] font-bold border-b-2 border-[#1B7E44]"
                  : ""
              }`}
            >
              Ouvidoria
            </li>
          </Link>
         <Pesquisar />
        </ul>
        


        {/* Mobile menu */}
        {isOpen && (
          <ul className="sm:hidden flex flex-col space-y-3 bg-white shadow-lg px-4 py-4 w-full">
            <Link href="/">
              <li
                className={`text-[#4B4B4B] hover:text-[#1B7E44] ${
                  isActiveLink("/")
                    ? "text-[#1B7E44] font-bold border-b-2 border-[#1B7E44]"
                    : ""
                }`}
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
              >
                Cultura
              </li>
            </Link>
            <Link href="/turismo">
              <li
                className={`text-[#4B4B4B] hover:text-[#1B7E44] ${
                  isActiveLink("/turismo")
                    ? "text-[#1B7E44] font-bold border-b-2 border-[#1B7E44]"
                    : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Turismo
              </li>
            </Link>
            <Link href="/ouvidoria">
              <li
                className={`text-[#4B4B4B] hover:text-[#1B7E44] ${
                  isActiveLink("/ouvidoria")
                    ? "text-[#1B7E44] font-bold border-b-2 border-[#1B7E44]"
                    : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Ouvidoria
              </li>
            </Link>
          </ul>
        )}
      </nav>

      {/* Floating menu */}
      <div className="bg-[#1B7E44] w-full max-w-[1000px] transform translate-y-[10px] p-1 z-50 rounded-sm hidden sm:block">
        <ul className="flex flex-wrap justify-center space-x-8 text-sm">
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
}