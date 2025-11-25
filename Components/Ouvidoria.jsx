"use client";
import React from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, addDoc } from "firebase/firestore";
import docRef from "firebase/firestore";
import { db } from "../lib/firebase";

const Ouvidoria = () => {


  const myPromisse = new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucess = true;
      if (sucess) {
        resolve("Mensagem enviada com sucesso!");
      } else {
        reject("Erro ao enviar mensagem!");
      }
    }, 3000);
  });

  const notify = () => toast.promise(myPromisse, {
    pending: 'Enviando mensagem...',
    success: 'Mensagem enviada com sucesso!',
    error: 'Erro ao enviar mensagem!'
  });

  const notifyError = () => toast.error("Erro ao enviar mensagem! Preencha todos os campos!", {
    autoClose: 4000,
  });

    const [email, setEmail] = React.useState("");
    const [mensagem, setMensagem] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

    try {


      if(!email || !mensagem) {
        notifyError();
        setLoading(false);
        return;
      }
   
      const  docRef = await addDoc(collection(db, "manifestacoes"), {
        email,
        mensagem,
      });

      notify();

      setEmail(""); 
      setMensagem("");



    } catch (error) {
        console.error("Erro ao enviar mensagem: ", error);
        notify();
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center font-[Montserrat] px-6 sm:px-10 md:px-20 lg:px-32 py-10 mb-20">
      {/* Seção de título e introdução */}
      <div className="flex flex-col justify-center items-center text-center max-w-4xl mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#10783B] mb-7">
          Ouvidoria
        </h1>

        <h3 className="font-bold text-2xl sm:text-3xl mb-3 text-[#10783B]">
          O que é ouvidoria?
        </h3>

        <p className="text-justify font-normal text-base sm:text-lg leading-relaxed">
          A Ouvidoria é o canal oficial de diálogo entre você e a Secretaria.
          Aqui você pode registrar sugestões, elogios, solicitações, denúncias e
          reclamações. Nosso compromisso é ouvir, acompanhar cada manifestação e
          buscar soluções, garantindo transparência e melhoria contínua dos
          serviços públicos.
        </p>

        <div className="mt-6">
          <Link href="">
            <button className="bg-[#1B7E44] hover:bg-[#045023] p-3 text-white rounded-md font-medium px-10 transition-colors duration-200">
              Registrar manifestação
            </button>
          </Link>
        </div>
      </div>

      {/* Formulário */}
      <div className="w-full max-w-3xl">
        <form
          onSubmit={handleSubmit}
          className="border-2 border-gray-300 p-6 sm:p-10 flex flex-col gap-5 rounded-lg shadow-md bg-white"
        >
          <h2 className="text-xl sm:text-2xl text-center text-[#fc8a0e] font-semibold mb-6">
            Registre aqui sua manifestação
          </h2>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            className="p-3 border-2 border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#fc8a0e]"
          />

          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Descreva o problema"
            className="p-3 border-2 border-gray-300 rounded-lg w-full h-48 sm:h-60 resize-none focus:outline-none focus:ring-2 focus:ring-[#fc8a0e]"
          ></textarea>

          <button
            type="submit"
            className="bg-[#10783b] hover:bg-[#045023] text-white rounded-md p-3 w-full sm:w-64 mx-auto cursor-pointer transition-colors duration-200"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
          <ToastContainer limit={1} position="top-center"/>
        </form>
      </div>
    </div>
  );
};

export default Ouvidoria;
