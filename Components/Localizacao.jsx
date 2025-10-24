"use client";
import React from "react";
import Image from "next/image";

export default function AccordionUsage() {
  return (
    <div className="w-full py-10 flex justify-center">
      <div className="w-full max-w-7xl px-4 md:px-0">
        <div className="">
          <h1 className="text-2xl font-bold text-black pb-2 border-b-4 border-[#10783B] font-[Montserrat] inline-block">
            Como Chegar?
          </h1>
        </div>
        <div className="border-t-1 pt-10 border-gray-400 w-full"></div>

        <div className="flex gap-5">
          <div className="w-full h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.617773716676!2d-38.688874224154254!3d-3.891807744027037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0ab0069283c9b%3A0x7e66f4f240da7335!2sSecretaria%20de%20Cultura%20de%20Maranguape%20-%20SECULT!5e0!3m2!1spt-BR!2sbr!4v1757547761766!5m2!1spt-BR!2sbr"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
