"use client";

import React, { useState } from "react";
import { assets } from "@/Assets/assets";
import Image from "next/image";

const page = () => {
  const [image, setImage] = useState(false);

  return (
    <>
      <div className="bg-gray-50 flex items-center justify-center">
        <div className="bg-white shadow rounded-lg p-4 flex justify-center items-center w-[700px]">
          <form className="pt-5 px-5 sm:pt-12 sm:pl-16 font-[Montserrat] flex flex-col justify-center">
            <p className="text-xl">Adicionar Imagem</p>
            <label htmlFor="image flex w-full">
              <Image
                className="mt-4 flex items-cneter justify-center"
                src={!image ? assets.upload_area : URL.createObjectURL(image)}
                width={140}
                height={70}
                alt=""
              />
            </label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
              required
            />
            <p className="text-xl mt-4">Titulo da Noticia</p>
            <input
              className="w-full sm:w-[500px] mt-4 px-4 py-3 shadow bg-gray-100"
              type="text"
              placeholder="Escreva aqui"
              required
            />
            <p className="text-xl mt-4">Descrição da Noticia</p>
            <textarea
              className="w-full sm:w-[500px] mt-4 px-4 py-3 shadow bg-gray-100"
              type="text"
              placeholder="Escreva o conteudo"
              rows={6}
              required
            />
            <p className="text-xl mt-4">Categoria</p>
            <select
              name="category"
              className="mt-4 px-4 py-3 shadow bg-gray-100 w-full"
            >
              <option value="Cultura">Cultura</option>
              <option value="Turismo">Turismo</option>
              <option value="Evento">Evento</option>
            </select>
            <br />
            <button
              type="submit"
              className="mt-8 h-12 bg-green-800 text-white rounded-xl w-full"
            >
              Adicionar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
