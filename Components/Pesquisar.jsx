"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ placeholder = "Pesquisar..." }) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  // Quando abre o overlay, dá foco automático e esc fecha
  useEffect(() => {
    if (open) inputRef.current?.focus();

    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="hidden sm:flex items-center">
        <input
          className="h-8 border-solid border-[2px] border-[#1B7E44] border-r-0 rounded-l-md py-1 px-3 focus:outline-none text-gray-700"
          type="text"
          placeholder={placeholder}
        />
        <button className="h-8 bg-[#1B7E44] p-2 rounded-r-md border-solid border-[2px] border-l-0 border-[#1B7E44]">
          <FaSearch size={15} color="#FAFBFC" />
        </button>
      </div>


      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir busca"
        className="sm:hidden p-2 rounded-full bg-[#1B7E44] shadow-md border border-[#1B7E44]"
      >
        <FaSearch size={15} color="#FAFBFC" />
      </button>

 
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-24"
          aria-modal="true"
          role="dialog"
        >
          {/* FUNDO COM BORRÃO */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          />

          {/* CAIXA DE BUSCA */}
          <div className="relative w-[92%] max-w-xl sm:hidden">
            <div className="flex items-center rounded-md overflow-hidden shadow-lg bg-white border border-gray-200">
              <FaSearch className="ml-3 text-gray-500" />
              <input
                ref={inputRef}
                aria-label="Pesquisar (mobile)"
                className="bg-transparent outline-none w-full px-3 py-2 text-sm"
                placeholder={placeholder}
              />
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#1B7E44]"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
