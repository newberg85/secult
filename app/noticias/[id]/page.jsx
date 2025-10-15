"use client";
import { blog_data } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Image from "next/image";
import React, { useEffect, useState, use } from "react";

const Page = ({ params }) => {
  const { id } = use(params); // resolve o Promise de params
  const [data, setData] = useState(null);

  useEffect(() => {
    const found = blog_data.find((item) => item.id === Number(id));
    if (found) setData(found);
  }, [id]);

  return data ? (
    <div >
        {/* className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28" */}
      <Header />
      <div className="text-center my-24">
        <h1 className="text-2xl sm:text-5xl font-semibold max-w[700px] mx-auto">{data.title}</h1>
      </div>

      <div className="mx-5 max-w-[800px] md:mx-auto  mb-10">
        <Image src={data.image} width={1280} height={720} alt=""/>
        <h1 className="my-8 text-[26px] font-semibold">Introdução</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">Step 1: Self-Reflectionm and Goal Settings</h3>
        <p className="my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto saepe ipsa aspernatur ipsum commodi magnam vero natus ab, enim eos sint, praesentium dolor? Quae eius ipsa ex aliquam hic doloribus!</p>
      </div>

      <Footer />
    </div>
  ) : null;
};

export default Page;
