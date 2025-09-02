import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex flex-col items-center w-full border-b-[1px] border-solid border-[#D9D9D9] font-[Montserrat] z-[1000px]">
      {/* Acessibilidade*/}
      <div>
        
      </div>
      {/* menu*/}
      <div className="bg-[#10783B] w-full p-2 text-white">Acessibilidade</div>
      <nav className="container mx-auto py-4 px-4 flex justify-between items-center">
        
      <div>
      <Image
        src="/secult.png" 
        alt="Descrição da imagem"
        width={200}
        height={100} 
      />
    </div>
        <ul className="flex space-x-4 font-semibold text-sm">
          <a href=""><li className="text-[#4B4B4B] hover:text-[#1B7E44]">Home</li></a>
          <a href="SwiperComponent.js"><li className="text-[#4B4B4B] hover:text-[#1B7E44]">Serviços</li></a>
          <a href=""><li className="text-[#4B4B4B] hover:text-[#1B7E44]">Cultura</li></a>
          <a href=""><li className="text-[#4B4B4B] hover:text-[#1B7E44]">Turismo</li></a>
          <a href=""><li className="text-[#4B4B4B] hover:text-[#1B7E44]">Ouvidoria</li></a>
        </ul>
      </nav>
      {/* menu nflutuante*/}
    <div className=" items-center justify-between justify-items-center bg-[#1B7E44] w-[1000px] transform translate-y-[10px] p-1">
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