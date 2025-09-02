import React from "react";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";


 const  Footer = () => {
  return (
    <footer className="mt-auto">
      
      <div className="bg-[#10783B] text-white">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-c:grid-cols-2 md:grid-cols-4 gap-9">
         
          <div>
            <img src="/logo-positivo.png" alt="Logo" className="mb-4" />
            <p className="mb-4 leading-7">
              Promovendo o acesso à cultura, fortalecendo as tradições e
              valorizando a identidade do nosso povo.
            </p>
            <div className="flex space-x-4 text-xl">
              <a href="https://www.instagram.com/secultmpe/" target="_blank"><FaInstagram /></a>
              <a href="" target="_blank"><FaYoutube /></a>
              <a href="" target="_blank"><FaFacebook /></a>
            </div>
          </div>

          
          <section>
            <h3 className="text-xl font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 leading-10">
              <li><a href="#" className="hover:underline">Como Funciona</a></li>
              <li><a href="#" className="hover:underline">Projetos em Destaque</a></li>
              <li><a href="#" className="hover:underline">Parcerias</a></li>
              <li><a href="#" className="hover:underline">Relação com a Comunidade</a></li>
            </ul>
          </section>

         
          <section>
            <h3 className="text-xl font-semibold mb-4">Informações</h3>
            <ul className="space-y-2 leading-10">
              <li><a href="#" className="hover:underline">Eventos</a></li>
              <li><a href="#" className="hover:underline">Podcast</a></li>
              <li><a href="#" className="hover:underline">Convide um Amigo</a></li>
            </ul>
          </section>

          
          <section>
            <h3 className=" text-xl font-semibold mb-4">Mais acessados</h3>
            <ul className="space-y-2 leading-10">
              <li><a href="#" className="hover:underline">Prefeitura</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
            </ul>
          </section>
        </div>
      </div>

      
      <div className="bg-[#FF8A00] text-white flex flex-col md:flex-row justify-between items-center px-6 py-4">
        <p>@2025 Secult Maranguape. Todos os Direitos Reservados</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Políticas de privacidade</a>
          <a href="#" className="hover:underline">Termos e condições</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
