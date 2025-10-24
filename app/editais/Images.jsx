"use client"; // necessário para Client Component no Next.js

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";


export default function Images() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Array ajustado com títulos e links personalizados
  const customData = [
    {
      title: "Festa Junina",
      url: "https://www.culturabrasil.com.br/festa-junina",
      alt_description: "Lutadores de capoeira lutando capoeira, enquanto outras pessoas os olham lutando capoeira",
    },
    {
      title: "Carnaval do Rio",
      url: "https://www.culturabrasil.com.br/carnaval-rio",
      alt_description: "Boneco demoniaco que parece que vai te pegar debaixo da cama, pqp bixo desgraçado",
    },
    {
      title: "Bumba Meu Boi",
      url: "https://www.culturabrasil.com.br/bumba-meu-boi",
      alt_description: "muleke de 9 anos, que vai ser influenciado ao mal por conta de um tal de berg, chefe do Penedo",
    },
  ];

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const res = await axios.get("https://api.unsplash.com/search/photos", {
          params: {
            query: "cultura brasileira",
            per_page: 3,

            if(mostrarImagens){
                per_page: 8
            }
          },
          headers: {
            Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
          },
        });

        setPhotos(res.data.results);
      } catch (err) {
        console.error("Erro ao buscar imagens do Unsplash:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPhotos();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Carregando Editais...</p>;

  return (
    <div className="flex flex-col w-full p-8 gap-9 justify-center mb-[100]">
       <div className="flex flex-col justify-center items-center p-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-[#0C743A] text-center" width={49} height={49} viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M18 4v3h3a1 1 0 0 1 1 1v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1m2 14a1 1 0 1 1-2 0V9h2zM6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m2 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1" clipRule="evenodd"></path></svg>
                <h2 className="text-black font-bold text-3xl text-center mt-5">Últimos Editais</h2>
        </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {photos.map((p, index) => (
          <div key={p.id} className="">
          <a
            
            href={customData[index]?.url || "https://www.culturabrasil.com.br"}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-[250px]"
          >
            <img
              src={p.urls.small}
              alt={p.alt_description ?? "Foto do Unsplash"}
              className="w-full h-[210px] object-cover"
            />
          </a>
          <div>
            <p className="text-base text-gray-700 mt-2
            w-[250] text-justify">
                {customData[index]?.alt_description ?? "Imagem representando a cultura brasileira."}
            </p>
          </div>
          </div>
        ))}
      </div>

          <div className="text-center pe-8 ">
            <Link href="">
              <button className="bg-[#fc8a0e] px-6 py-2 text-white rounded-xs font-semibold">
                Ver todas
              </button>
            </Link>
          </div>

    </div>
  );
}