'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef } from 'react';
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Description } from "@mui/icons-material";

function SlideEvents() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);



  const data = [
    {
      id: "1",
      image: "capa.png",
      title: "Assalto no Penedo",
      description: "Esse dia foi louco",
    },
    {
      id: "2",
      image: "https://www.imaterial.art.br/wp-content/uploads/2025/01/banner-imaterial-frete-gratis-brasil-desktop.jpg.webp",
      title: "Assalto na Jubaia",
      description: "",
    },
    {
      id: "3",
      image: "https://www.imaterial.art.br/wp-content/uploads/2023/09/banner-imaterial-justo-desktop.jpg.webp",
      title: "Assalto no Itapebussu",
      description: "",
    },
    {
      id: "4",
      image: "https://artesdocarlos.com.br/wp-content/uploads/2024/07/2.png",
       title: "Assalto no Amanari",
      description: "",
    },
    { 
      id: "5",
      image: "https://www.imaterial.art.br/wp-content/uploads/2025/01/banner-imaterial-frete-gratis-brasil-desktop.jpg.webp",
      title: "Assalto no Centro",
      description: "",
    },
    {
      id: "6",
      image: "https://artesdocarlos.com.br/wp-content/uploads/2024/07/2.png",
      title: "Assalto no Maranguape",
      description: "",
    },
  ];

  return (
    <div className="relative w-full py-12 px-4 min-h-screen flex items-center bg-gray-50">
      <div className="max-w-6xl mx-auto w-full justify-center items-center relative">
        
        {/* Título */}
        <h2 className="text-3xl font-bold text-[#10783b] not-target:text-center mb-1">Últimos eventos</h2>
        <div className="w-[150] bg-[#ffa124] h-1 justify-center ml-[500] mb-10"></div>
        
        <div className="relative">
          {/* Botão Esquerdo */}
          <button 
            ref={navigationPrevRef}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center bg-[transparent] rounded-full shadow-lg  transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#10783b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carrossel */}
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 20,
              stretch: 10,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            modules={[EffectCoverflow, Navigation, Pagination]}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            className="w-full py-12 px-16"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id} className="w-full max-w-lg rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={item.image} 
                  alt="slider" 
                  className="w-full h-[500px] object-cover border-2  border-[#ffa124]"
                />
                <div className="absolute bottom-0 left-0 w-full h-[170] bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10 p-3">
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="text-base text-gray-300 ">{item.description}</p>
                </div>      
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botão Direito */}
          <button 
            ref={navigationNextRef}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 flex items-center justify-center bg-[transparent] rounded-full shadow-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#10783b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Paginação */}
          <div className="custom-pagination flex justify-center space-x-2 mt-6"></div>
        </div>
      </div>

      <style jsx>{`
        .swiper-slide {
          transition: transform 0.3s ease;
        }
        .swiper-slide:hover {
          transform: scale(1.05);
        }
        .custom-pagination {
          position: relative;
          bottom: 0;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #10783b;
          transform: scale(1.2);
        }
        
        /* Ajustes para responsividade */
        @media (max-width: 768px) {
          .swiper {
            padding-left: 8px;
            padding-right: 8px;
          }
          
          button {
            width: 12px;
            height: 12px;
          }
          
          button svg {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default SlideEvents;