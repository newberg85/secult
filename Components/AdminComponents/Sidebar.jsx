import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineAdd } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="min-h-screen p-6 font-[Montserrat]">
      <div className="px-2 sm:pl-14 py-3">
        {/* <Image src={assets.logo} width={120} alt='' /> */}
      </div>

      <h1 className="flex justify-center items-center text-2xl font-bold pb-8 text-gray-800 drop-shadow-md">
        Funções do Admin!
      </h1>

      <div className="w-full relative py-0 space-y-8">
        {/* CARD BASE GLASS */}
        {[
          {
            title: "Cadastre Notícias!",
            desc: "Cadastre aqui as principais notícias do município",
            link: "/admin/addNotice",
            btn: "Adicionar Notícias",
          },
          {
            title: "Cadastre Eventos!",
            desc: "Cadastre aqui os principais eventos do município",
            link: "/admin/addEvent",
            btn: "Adicionar Eventos",
          },
          {
            title: "Cadastre Editais!",
            desc: "Cadastre aqui os principais editais do município",
            link: "/admin/addEdital",
            btn: "Adicionar Editais",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="max-w-7xl mx-auto bg-white/20 backdrop-blur-xl border border-white/30
                       shadow-xl rounded-2xl p-6 flex flex-col sm:flex-row justify-between 
                       items-center gap-6 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-800">{item.title}</h1>
              <p className="text-gray-700">{item.desc}</p>
            </div>

            <Link
              href={item.link}
              className="flex items-center justify-center gap-3 font-medium 
                         px-6 py-3 text-white bg-gradient-to-r from-green-700 to-green-900 
                         rounded-xl shadow-lg hover:shadow-green-500/40 
                         hover:from-green-600 hover:to-green-800 transition-all 
                         min-w-[220px] h-[60px]"
            >
              <MdOutlineAdd className="text-2xl" />
              <p className="text-lg text-white">{item.btn}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
