"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase"; // 🔥 certifique-se de que esse caminho está certo

export default function SearchBar({ placeholder = "Pesquisar..." }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [allData, setAllData] = useState([]);
  const inputRef = useRef(null);

  // 🔹 Carrega todos os dados ao montar
  useEffect(() => {
    const fetchData = async () => {
      const snap = await getDocs(collection(db, "seu_nome_da_colecao"));
      const data = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setAllData(data);
    };
    fetchData();
  }, []);

  // 🔹 Foco automático + ESC fecha overlay
  useEffect(() => {
    if (open) inputRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // 🔹 Filtro em tempo real
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = allData.filter((item) =>
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase())
    );

    setResults(filtered);
  }, [query, allData]);

  const handleSearch = () => {
    if (query.trim() === "") return;
    console.log("Buscando:", query);
  };

  return (
    <>
      {/* DESKTOP */}
      <div role="search" className="hidden sm:flex flex-col items-start relative">
        <div className="flex items-center w-full">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="h-8 border-solid border-[2px] border-[#1B7E44] border-r-0 rounded-l-md py-1 px-3 focus:outline-none text-gray-700"
            type="text"
            placeholder={placeholder}
            aria-label="Campo de pesquisa"
          />
          <button
            onClick={handleSearch}
            className="h-8 bg-[#1B7E44] p-2 rounded-r-md border-solid border-[2px] border-l-0 border-[#1B7E44]"
            aria-label="Executar busca"
          >
            <FaSearch size={15} color="#FAFBFC" />
          </button>
        </div>

        {/* RESULTADOS */}
        {results.length > 0 && (
          <div className="absolute top-10 left-0 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
            {results.map((item) => (
              <div
                key={item.id}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
              >
                {item.nome || item.titulo || item.email || "Sem nome"}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MOBILE */}
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
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          />

          <div className="relative w-[92%] max-w-xl sm:hidden">
            <div className="flex items-center rounded-md overflow-hidden shadow-lg bg-white border border-gray-200">
              <FaSearch className="ml-3 text-gray-500" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
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

            {/* RESULTADOS MOBILE */}
            {results.length > 0 && (
              <div className="mt-2 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {results.map((item) => (
                  <div
                    key={item.id}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                  >
                    {item.nome || item.titulo || item.email || "Sem nome"}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
