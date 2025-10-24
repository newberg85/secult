'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Header from "@/Components/Header";

const Map = dynamic(() => import('@/app/components/Map'), { ssr: false });

const MapPage = () => {
  return (
    <>
      <Header />
      <div className=" mx-auto  ">
        <Map />
      </div>
    </>
  );
};

export default MapPage;
