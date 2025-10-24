"use client"; // necessário para Client Component no Next.js

import { useEffect, useState } from "react";
import axios from "axios";

export default function Images() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Array ajustado com títulos e links personalizados
  const customData = [
    {
      title: "Festa Junina",
      url: "https://www.culturabrasil.com.br/festa-junina",
    },
    {
      title: "Carnaval do Rio",
      url: "https://www.culturabrasil.com.br/carnaval-rio",
    },
    {
      title: "Bumba Meu Boi",
      url: "https://www.culturabrasil.com.br/bumba-meu-boi",
    },
    {
      title: "Capoeira",
      url: "https://www.culturabrasil.com.br/capoeira",
    },
    {
      title: "Feira de Artesanato",
      url: "https://www.culturabrasil.com.br/feira-artesanato",
    },
    {
      title: "Samba no Pelourinho",
      url: "https://www.culturabrasil.com.br/samba-pelourinho",
    },
    {
      title: "Círio de Nazaré",
      url: "https://www.culturabrasil.com.br/cirio-nazare",
    },
    {
      title: "Cultura Indígena",
      url: "https://www.culturabrasil.com.br/cultura-indigena",
    },
  ];

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const res = await axios.get("https://api.unsplash.com/search/photos", {
          params: {
            query: "cultura brasileira",
            per_page: 8,
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

  if (loading) return <p className="text-center text-gray-600">Carregando imagens...</p>;

  return (
    <div className=" w-full p-10 gap-7 justify-center">
      <div className="mt-6">
        <h1 className="text-3xl font-bold text-black border-b-4  border-[#10783b] inline-block pb-2">
         Links rápidos
        </h1>
      </div>
      <div className="flex flex-wrap gap-6 justify-center border-t-1 pt-10 border-gray-400">
        {photos.map((p, index) => (
          <a
            key={p.id}
            href={customData[index]?.url || "https://www.culturabrasil.com.br"}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-[300px]"
          >
            <img
              src={p.urls.small}
              alt={p.alt_description ?? "Foto do Unsplash"}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4 bg-white">
              <h2 className="text-lg font-semibold text-gray-800">
                {customData[index]?.title || "Cultura Brasileira"}
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                {p.alt_description ?? "Imagem representando a cultura brasileira."}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}