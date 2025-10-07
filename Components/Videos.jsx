"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              q: "Cultura Maranguapense",
              type: "video",
              maxResults: 4,
              key: "AIzaSyB37eNZ9pghNLO4CxlGBapjCm1FVXR_7g4",
            },
          }
        );

        setVideos(res.data.items);
      } catch (err) {
        console.error("Erro ao buscar vídeos do YouTube:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  if (loading) return <p className="text-center p-4">Carregando vídeos...</p>;

  return (
    <div className="w-full p-10">
      <div className=" pl-4 sm:pl-8 md:pl-12">
        <h1 className="text-2xl font-bold text-black pb-2 border-b-4 border-[#10783B] font-[Montserrat] inline-block">
          Vídeos
        </h1>
      </div>
      <div className="border-t-1 pt-10 border-gray-400 w-full"></div>
      {/* Desktop / Tablet: linha normal */}
      <div className="hidden md:flex gap-5 border-t border-gray-400 mt-0 pt-4">
        {videos.map((video) => (
          <div key={video.id.videoId} className="w-full h-full justify-center">
            <iframe
              className="rounded-md"
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {/* Mobile: carrossel */}
      <div className="md:hidden mt-4">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id.videoId}>
              <iframe
                className="w-full h-60 rounded-md"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
