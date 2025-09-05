'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react'

import { register } from "swiper/element/bundle";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
register();

function Slide() {
  const data = [
    {
      id: "1",
      image:
        "capa.png",
    },
    {
      id: "2",
      image:
        "https://www.imaterial.art.br/wp-content/uploads/2025/01/banner-imaterial-frete-gratis-brasil-desktop.jpg.webp",
    },
    {
      id: "3",
      image:
        "https://www.imaterial.art.br/wp-content/uploads/2023/09/banner-imaterial-justo-desktop.jpg.webp",
    },
    {
      id: "4",
      image: "https://artesdocarlos.com.br/wp-content/uploads/2024/07/2.png",
    },
  ];

  return (
    <div className="-z-10" >
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="slider" className="slide-item w-full h-[650px] object-cover"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slide