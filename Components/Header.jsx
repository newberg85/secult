'"use client"';

import React from 'react'
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

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
          <a href=""><li className="text-[#4B4B4B] hover:text-[#1B7E44]">Home</li></a>
          <a href="/pages/Servicos"><li className="text-[#4B4B4B] hover:text-[#1B7E44]">Serviços</li></a>
          <a href=""><li className="text-[#4B4B4B] hover:text-[#1B7E44]">Cultura</li></a>
          <a href=""><li className="text-[#4B4B4B] hover:text-[#1B7E44]">Turismo</li></a>
          <a href=""><li className="text-[#4B4B4B] hover:text-[#1B7E44]">Ouvidoria</li></a>
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
          <a href=""><li className="text-white hover:text-[#333333]">Institucional</li></a>
          <a href=""><li className="text-white hover:text-[#333333]">Política</li></a>
          <a href=""><li className="text-white hover:text-[#333333]">Editais</li></a>
          <a href=""><li className="text-white hover:text-[#333333]">Equipamentos</li></a>
          <a href=""><li className="text-white hover:text-[#333333]">Serviços</li></a>
        </ul>
      </div>
    </header>
  )
}

export default Header