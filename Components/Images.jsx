"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Images() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p className="text-center p-4">Carregando imagens...</p>;

  return (



    

    <div className="w-full px-4 py-10 flex justify-center">
      <div className="w-full max-w-7xl">
        {/* título com borda verde e deslocamento à direita */}
        <div className=" pl-4 sm:pl-8 md:pl-12">
          <h1 className="text-2xl font-bold text-black pb-2 border-b-4 border-[#10783B] font-[Montserrat] inline-block">
            Imagens
          </h1>
        </div>

        {/* grid centralizado */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-6 border-t border-gray-300">
            {photos.map((p) => (
              <a
                key={p.id}
                href={p.links.html}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={p.urls.small}
                  alt={p.alt_description ?? "Foto do Unsplash"}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
