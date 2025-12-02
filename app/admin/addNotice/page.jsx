"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LuImagePlus } from "react-icons/lu";
import { db } from "@/lib/firebase"; // Import Firebase config
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify"; // Optional: For user feedback
import "react-toastify/dist/ReactToastify.css"; // Optional: For toast styling

const Page = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Cultura");
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
      if (!image || !title || !description || !category) {
        toast.error("Por favor, preencha todos os campos.");
        setLoading(false);
        return;
      }

      // Upload image to Firebase Storage
      const imageRef = ref(storage, `news_images/${image.name}-${Date.now()}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);

      // Save news data to Firestore
      const newsData = {
        title,
        description,
        category,
        imageUrl,
        createdAt: new Date().toISOString(),
      };

      await addDoc(collection(db, "news"), newsData);

      // Success feedback
      toast.success("Notícia cadastrada com sucesso!");
      
      // Reset form
      setImage(null);
      setPreview(null);
      setTitle("");
      setDescription("");
      setCategory("Cultura");
      e.target.reset(); // Reset the form inputs
    } catch (error) {
      console.error("Erro ao cadastrar notícia:", error);
      toast.error("Erro ao cadastrar notícia. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 to-gray-500 flex items-center justify-center p-6 font-[Montserrat]">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-xl p-8 w-full max-w-[650px] transition-all duration-500 hover:shadow-2xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
            Cadastro de Notícia
          </h1>

          {/* Upload de Imagem */}
          <div className="flex flex-col">
            <label className="text-white text-base mb-2">
              Adicionar Imagem
            </label>
            <label
              htmlFor="image"
              className="relative flex items-center justify-center wbundled full h-40 bg-white/10 border border-green-300/50 rounded-xl cursor-pointer hover:bg-white/20 transition duration-300"
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
              Título da Notícia
            </label>
            <input
              type="text"
              placeholder="Escreva o título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 bg-white/10 border border-green-400/40 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition-all"
              required
            />
          </div>

          {/* Descrição */}
          <div>
            <label className="text-white text-base mb-2 block">
              Descrição da Notícia
            </label>
            <textarea
              placeholder="Escreva o conteúdo"
              rows={6}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 bg-white/10 border border-green-400/40 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition-all resize-none"
              required
            />
          </div>

          {/* Categoria */}
          <div>
            <label className="text-white text-base mb-2 block">Categoria</label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 bg-white/10 border border-green-400/40 rounded-lg text-white focus:ring-2 focus:ring-green-400 focus:outline-none transition-all"
            >
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
            type="submit"
            disabled={loading}
            className={`w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-300 shadow-md hover:shadow-lg ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Adicionando..." : "Adicionar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;