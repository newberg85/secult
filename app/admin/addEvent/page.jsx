"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LuImagePlus } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";



const Page = () => {




const myPromisse = new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucess = true;
      if (sucess) {
        resolve("Evento cadastrado com sucesso!");
      } else {
        reject("Erro ao cadastrar evento!");
      }
    }, 3000);
  });

  const notify = () => toast.promise(myPromisse, {
    pending: 'Cadastrando evento...',
    success: 'Evento cadastrado com sucesso!',
    error: 'Erro ao cadastrar evento!'
  });




  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [loading, setLoading] = useState(false);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);


    try {
      
      
      let imageUrl = "";
      console.log("enviando imagem");
      if (image) {
        const formData = new FormData();
        formData.append("file", image);

        formData.append("categoriaUpload", "eventos");

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
         if (data.url) {
          imageUrl = data.url;
          console.log("Imagem enviada com sucesso:", imageUrl);
         }
      }



       await addDoc(collection(db, "eventos"), {
        titulo,
        descricao,
        categoria,
        image: imageUrl,
      }); 

      notify();

      setTitulo("");
      setPreview(null);
      setDescricao("");
      setCategoria("");
      setImage(null);
      setPreview(null);


    } catch (error) {
       console.error("Erro ao adicionar Evento:", error);
        notify();
        setLoading(false);
    }
    finally{
      setLoading(false);
    }

  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 to-gray-900 flex items-center justify-center p-6 font-[Montserrat]">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-xl p-8 w-full max-w-[650px] transition-all duration-500 hover:shadow-2xl">
        <form  onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src="/logo-positiva.png"
              width={150}
              height={80}
              alt="Logo Positiva"
              className="drop-shadow-lg"
            />
          </div>

          {/* Título */}
          <h1 className="text-3xl font-extrabold text-white text-center mb-2 tracking-wide">
            Cadastro de Evento
          </h1>

          {/* Upload de Imagem */}
          <div className="flex flex-col">
            <label className="text-white text-base mb-2">
              Adicionar Imagem
            </label>

            <label
              htmlFor="image"
              className="relative flex items-center justify-center w-full h-40 bg-white/10 border border-green-300/50 rounded-xl cursor-pointer hover:bg-white/20 transition duration-300"
            >
              {preview ? (
                <Image
                  src={preview}
                  alt="Prévia da imagem"
                  fill
                  className="object-cover rounded-xl"
                />
              ) : (
                <LuImagePlus className="w-16 h-16 text-white/70" />
              )}
            </label>

            <input
              onChange={handleImageChange}
              type="file"
              id="image"
              accept="image/*"
              hidden
              required
            />
          </div>

          {/* Título da Notícia */}
          <div>
            <label className="text-white text-base mb-2 block">
              Título do Evento
            </label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Escreva o título"
              className="w-full p-3 bg-white/10 border border-green-400/40 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition-all"
              required
            />
          </div>

          {/* Descrição */}
          <div>
            <label className="text-white text-base mb-2 block">
              Descrição do Evento
            </label>
            <textarea
              placeholder="Escreva o conteúdo"
              rows={6}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="w-full p-3 bg-white/10 border border-green-400/40 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition-all resize-none"
              required
            />
          </div>

          {/* Categoria */}
          <div>
            <label className="text-white text-base mb-2 block">Categoria</label>
            <select
              name="category"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="w-full p-3 bg-white/10 border border-green-400/40 rounded-lg text-white focus:ring-2 focus:ring-green-400 focus:outline-none transition-all"
            >
              <option value="" disabled className="bg-gray-700 text-white">
                selecione uma categoria
              </option>
              <option value="Cultura" className="bg-gray-700 text-white">
                Cultura
              </option>
              <option value="Turismo" className="bg-gray-700 text-white">
                Turismo
              </option>
              <option value="Evento" className="bg-gray-700 text-white">
                Evento
              </option>
            </select>
          </div>

          {/* Botão */}
          <button
            disabled={loading}
            type="submit"
            className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300 shadow-md hover:shadow-lg"
          >
            {loading ? "Cadastrando..." : "Cadastrar Evento"}
          </button>
          <ToastContainer limit={1} position="top-center"/>
        </form>
      </div>
    </div>
  );
};

export default Page;
