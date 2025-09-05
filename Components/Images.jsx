"use client"; // necessário para Client Component no Next.js

import { useEffect, useState } from "react";
import axios from "axios";

export default function Images() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const res = await axios.get("https://api.unsplash.com/photos/random", {
          params: { count: 8 },
          headers: {
            Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
          },
        });

        setPhotos(res.data);
      } catch (err) {
        console.error("Erro ao buscar imagens do Unsplash:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPhotos();
  }, []);

  if (loading) return <p>Carregando imagens...</p>;

  return (
    <div className=" w-full p-10 gap-7 justify-center">
      {/* Título */}
      <h1 className="text-2xl font-bold text-black-700  pb-4">Imagens</h1>

      {/* Grid de imagens */}
      <div className="flex flex-wrap gap-5   justify-center">
        {photos.map((p) => (
          <a
            key={p.id}
            href={p.links.html}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-[300px] h-[400px]"
          >
            <img
              src={p.urls.small}
              alt={p.alt_description ?? "Foto do Unsplash"}
              className="w-full h-full"
            />
          </a>
        ))}
      </div>

    
    </div>
  );
}