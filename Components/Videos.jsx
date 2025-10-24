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

  // Skeleton array
  const skeletonArray = Array.from({ length: 4 });

  return (
    <div className="w-full py-10 flex justify-center">
      <div className="w-full max-w-7xl px-4 md:px-0">
        <div className="">
          <h1 className="text-2xl font-bold text-black pb-2 border-b-4 border-[#10783B] font-[Montserrat] inline-block">
            Vídeos
          </h1>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex gap-5 border-t border-gray-400 mt-0 pt-4">
          {loading
            ? skeletonArray.map((_, idx) => (
                <div
                  key={idx}
                  className="w-full h-48 bg-gray-300 rounded-md animate-pulse"
                ></div>
              ))
            : videos.map((video) => (
                <div
                  key={video.id.videoId}
                  className="w-full h-full justify-center"
                >
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
          {loading ? (
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {skeletonArray.map((_, idx) => (
                <SwiperSlide key={idx}>
                  <div className="w-full h-60 bg-gray-300 rounded-md animate-pulse"></div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
}
