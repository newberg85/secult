import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineAdd } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="px-2 sm:pl-14 py-3">
        {/* <Image src={assets.logo} width={120} alt='' /> */}
      </div>

      <h1 className="flex justify-center items-center text-2xl font-bold pb-6 font-[Montserrat]">
        Funções do admin!
      </h1>

      <div className="w-full relative py-0 space-y-6">
        {/* Notícias */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow rounded-lg p-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Cadastre Notícias!
              </h1>
              <p className="text-gray-600">
                Cadastre aqui as principais notícias do município
              </p>
            </div>
            <Link
              href="/admin/addNotice"
              className="flex items-center justify-center gap-3 font-medium 
                         px-5 py-3 text-white bg-green-800 rounded-md 
                         hover:bg-green-700 transition-all 
                         min-w-[240px] h-[60px]"
            >
              <MdOutlineAdd className="text-2xl" />
              <p className="text-lg text-white">Adicionar Notícias</p>
            </Link>
          </div>
        </div>

        {/* Eventos */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow rounded-lg p-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Cadastre Eventos!
              </h1>
              <p className="text-gray-600">
                Cadastre aqui os principais eventos do município
              </p>
            </div>
            <Link
              href="/admin/addEvent"
              className="flex items-center justify-center gap-3 font-medium 
                         px-5 py-3 text-white bg-green-800 rounded-md 
                         hover:bg-green-700 transition-all 
                         min-w-[240px] h-[60px]"
            >
              <MdOutlineAdd className="text-2xl" />
              <p className="text-lg text-white">Adicionar Eventos</p>
            </Link>
          </div>
        </div>

        {/* Editais */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow rounded-lg p-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Cadastre Editais!
              </h1>
              <p className="text-gray-600">
                Cadastre aqui os principais editais do município
              </p>
            </div>
            <Link
              href="/admin/addEdital"
              className="flex items-center justify-center gap-3 font-medium 
                         px-5 py-3 text-white bg-green-800 rounded-md 
                         hover:bg-green-700 transition-all 
                         min-w-[240px] h-[60px]"
            >
              <MdOutlineAdd className="text-2xl" />
              <p className="text-lg text-white">Adicionar Editais</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
