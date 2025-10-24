"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Formulario = () => {
  const data = [
    {
      id: "1",
      image: "moldura-img.png",
    },
    {
      id: "2",
      image: "moldura-img.png",
    },
    {
      id: "3",
      image: "moldura-img.png",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full font-[Montserrat] z-50 sm:flex my-10">
      <div className="bg-[#FF8A00] w-full p-2 text-white flex h-[500px] items-center justify-center px-10 sm:flex flex-col">
        <div className="flex justify-center items-center mt-2 w-full sm:flex flex-col lg:flex-row">
          <div className="w-[100%] lg:w-[50%] text-center lg:text-left">
            <h1 className="font-bold text-2xl">Formulários Disponíveis</h1>
            <p className="text-sm lg:text-xl mt-2 mb-4  lg:w-[60%] sm:w[100%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex items-center justify-center w-[60%]">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={2}
              coverflowEffect={{
                rotate: 0,
                stretch: -20,
                depth: 300, // Aumenta a profundidade para destacar os slides de trás
                modifier: 1.5, // Ajusta a intensidade do efeito
                scale: 0.7, // Escala menor para slides fora do centro
                slideShadows: false,
              }}
             
              modules={[EffectCoverflow, Pagination]}
                breakpoints={{
                0: { slidesPerView: 1 },  
                768: { slidesPerView: 2 }, 
              }}
              className=""
            >
              {data.map((item) => (
                <SwiperSlide key={item.id} className="">
                  <div className="h-full flex items-center justify-around border-none">
                    <img src={item.image} className="rounded-lg" alt={`Slide ${item.id}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;