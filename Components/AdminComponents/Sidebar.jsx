import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 sm:pl-14 py-3 border border-black">
        {/* <Image src={assets.logo} width={120} alt='' /> */}
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className=" w-[50% sm:w-[80%] absolute right-0">
          <Link href='/admin/addNotice' className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <IoAddCircleOutline className="text-3xl"/> <p>Adicionar Noticia</p>
          </Link>
          <div className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <IoAddCircleOutline className="text-3xl"/> <p>Adicionar Eventos</p>
          </div>
          <div className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <IoAddCircleOutline className="text-3xl"/> <p>Adicionar Editais</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
