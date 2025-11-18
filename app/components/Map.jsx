"use client";

import React, { useState, useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import dynamic from "next/dynamic";
import { useMap } from "react-leaflet";

// Corrigir ícones do Leaflet
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

// Importação dinâmica para evitar SSR
const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
);
const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), {
  ssr: false,
});
const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), {
  ssr: false,
});

// Corrige resize do mapa
const MapResizer = ({ selectedLocation }) => {
  const map = useMap();
  const hasResized = useRef(false);

  useEffect(() => {
    if (map && typeof map.invalidateSize === "function" && !hasResized.current) {
      setTimeout(() => {
        map.invalidateSize();
        hasResized.current = true;
      }, 200);
    }
  }, [map, selectedLocation]);

  return null;
};

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const locations = [
    {
      id: 1,
      position: [-3.891569073223997, -38.68633435573424],
      title: "Sede Principal",
      description:
        "Nossa sede principal em Fortaleza, onde coordenamos nossas atividades culturais, eventos, oficinas e exposições.",
      imageUrl: "https://via.placeholder.com/600x400?text=Sede+Principal",
      address: "Rua Exemplo, 123 - Centro, Fortaleza/CE",
      activities: "Eventos culturais, oficinas, exposições",
    },
    {
      id: 2,
      position: [-3.885, -38.69],
      title: "Agente Cultural 1",
      description: "Um espaço vibrante para eventos culturais e artísticos.",
      imageUrl: "https://via.placeholder.com/600x400?text=Agente+Cultural+1",
      address: "Av. Cultural, 456 - Aldeota",
      activities: "Shows, feiras, performances",
    },
    {
      id: 3,
      position: [-3.895, -38.68],
      title: "Agente Cultural 2",
      description:
        "Centro de promoção da cultura local com exposições e oficinas.",
      imageUrl: "https://via.placeholder.com/600x400?text=Agente+Cultural+2",
      address: "Praça das Artes, s/n - Praia de Iracema",
      activities: "Exposições, workshops, teatro",
    },
  ];

  const centerPosition = [-3.891569073223997, -38.68633435573424];
  const headerHeight = 160; // Ajuste conforme seu header

  const clearSelection = () => setSelectedLocation(null);

  if (!isMounted) {
    return (
      <div className="relative h-[80vh] w-full flex items-center justify-center bg-gray-50">
        <div className="text-gray-500 animate-pulse">Carregando mapa...</div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full"
      style={{
        height: `calc(100vh - ${headerHeight}px)`,
      }}
    >
      <MapContainer
        center={centerPosition}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapResizer selectedLocation={selectedLocation} />

        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            eventHandlers={{
              click: (e) => {
                const map = e.target._map;
                map.flyTo(location.position, 16, { duration: 1.2 });
                setSelectedLocation(location);
              },
            }}
          >
            <Popup>
              <div className="text-sm font-medium">
                <strong>{location.title}</strong>
                <br />
                {location.description}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Barra Lateral Estilizada */}
      {selectedLocation && (
        <>
          {/* Overlay em mobile */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[998] sm:hidden transition-opacity"
            onClick={clearSelection}
          />

          {/* Painel lateral */}
          <div
            className={`
              fixed right-0 z-[999] flex flex-col bg-white shadow-2xl
              transition-all duration-300 ease-out
              border-l border-gray-200

              /* Desktop: do topo ao fundo */
              top-[${headerHeight}px] h-[calc(100vh-${headerHeight}px)] w-96

              /* Mobile: slide-up do rodapé */
              max-sm:w-full max-sm:h-[75vh] max-sm:rounded-t-3xl
              max-sm:top-auto max-sm:bottom-0
              ${selectedLocation ? "max-sm:translate-y-0" : "max-sm:translate-y-full"}
            `}
            style={{
              top: `${headerHeight}px`,
              height: `calc(100vh - ${headerHeight}px)`,
            }}
          >
            {/* Cabeçalho fixo */}
            <div className="sticky top-0 bg-white z-10 border-b border-gray-100 p-5 pb-4">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-[#10783B] tracking-tight pr-4">
                  {selectedLocation.title}
                </h2>
                <button
                  onClick={clearSelection}
                  className="p-2 rounded-full hover:bg-gray-100 transition-all group"
                  aria-label="Fechar painel"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 group-hover:text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Conteúdo com rolagem */}
            <div className="flex-1 overflow-y-auto p-5 pt-0 space-y-6">
              {/* Imagem com gradiente */}
              <div className="relative -mx-5 -mt-5 mb-5 overflow-hidden">
                <img
                  src={selectedLocation.imageUrl}
                  alt={selectedLocation.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Descrição */}
              <p className="text-gray-700 leading-relaxed text-base">
                {selectedLocation.description}
              </p>

              {/* Informações adicionais */}
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#10783B] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-800">Endereço</p>
                    <p>{selectedLocation.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#10783B] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1h3a1 1 0 110 2h-3v1.5a.5.5 0 01-1 0V6H7a1 1 0 110-2h3V3a1 1 0 011-1zM6 8a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-800">Atividades</p>
                    <p>{selectedLocation.activities}</p>
                  </div>
                </div>
              </div>

              {/* Botão de ação */}
              <button className="w-full mt-8 bg-[#10783B] text-white py-3.5 rounded-xl font-semibold text-base hover:bg-[#0e5f2e] transition-all transform hover:scale-[1.01] active:scale-100 shadow-md">
                Ver Mais Detalhes
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Map;