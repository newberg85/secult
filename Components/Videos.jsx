"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await axios.get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            part: "snippet",
            q: "Cultura Maranguapense", // termo da busca
            type: "video",
            maxResults: 4,
            key: "AIzaSyB37eNZ9pghNLO4CxlGBapjCm1FVXR_7g4", // 🔑 sua API key
          },
        });

        setVideos(res.data.items);
      } catch (err) {
        console.error("Erro ao buscar vídeos do YouTube:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  if (loading) return <p>Carregando vídeos...</p>;

  return (
    <div className="w-full p-10 ">
        <div className=" ml-[90px] w-[140px] border-b-5 border-solid border-[#10783B]">
        <h1 className="text-2xl font-bold text-black-700 font-[Montserrat] ml-8 w-[40px] justify-center pb-2">Videos</h1> 
        </div>
    <div className="flex gap-5 border-t-1 border-gray-400">
      
      {videos.map((video) => (
        <div key={video.id.videoId} className="w-full h-fulljustify-center pt-10">
          <iframe className="rounded-md"
            width="90%"
            height="200"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
    </div>
  );
}
