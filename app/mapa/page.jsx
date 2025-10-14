'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Header from "@/Components/Header";

const Map = dynamic(() => import('@/app/components/Map'), { ssr: false });

const MapPage = () => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto pt-5 pb-10">
        <Map />
      </div>
    </>
  );
};

export default MapPage;
