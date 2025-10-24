"use client";

import React, { useState, useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import dynamic from "next/dynamic";
import { useMap } from "react-leaflet";

// Corrigir ícones do Leaflet (funciona no Next)
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Importação dinâmica para o Next.js
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

// Corrige problemas de resize no mapa
const MapResizer = ({ selectedLocation }) => {
  const map = useMap();
  const hasResized = useRef(false);

  useEffect(() => {
    if (
      map &&
      typeof map.invalidateSize === "function" &&
      !hasResized.current
    ) {
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
        "Nossa sede principal em Fortaleza, onde coordenamos nossas atividades culturais.",
      imageUrl: "https://via.placeholder.com/300x200?text=Sede+Principal",
    },
    {
      id: 2,
      position: [-3.885, -38.69],
      title: "Agente Cultural 1",
      description: "Um espaço vibrante para eventos culturais e artísticos.",
      imageUrl: "https://via.placeholder.com/300x200?text=Agente+Cultural+1",
    },
    {
      id: 3,
      position: [-3.895, -38.68],
      title: "Agente Cultural 2",
      description:
        "Centro de promoção da cultura local com exposições e oficinas.",
      imageUrl: "https://via.placeholder.com/300x200?text=Agente+Cultural+2",
    },
  ];

  const centerPosition = [-3.891569073223997, -38.68633435573424];

  const clearSelection = () => setSelectedLocation(null);

  if (!isMounted) {
    return (
      <div className="relative h-[80vh] w-full flex items-center justify-center">
        <div className="text-gray-500">Carregando mapa...</div>
      </div>
    );
  }

  return (
    // ⬇️ ocupa toda a tela abaixo do cabeçalho
    <div
      className="relative w-full"
      style={{
        height: "calc(100vh - 200px)", // ajuste conforme a altura total do seu header
      }}
    >
      <MapContainer
        center={centerPosition}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
                map.flyTo(location.position, 15, { duration: 1 });
                setSelectedLocation(location);
              },
            }}
          >
            <Popup>
              <div className="text-sm">
                <strong>{location.title}</strong>
                <br />
                {location.description}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Painel lateral responsivo */}
      {selectedLocation && (
        <div
          className="fixed top-[160px] right-0 h-[calc(100vh-160px)] w-80 bg-white p-4 overflow-auto shadow-lg z-[1000] border-l border-gray-200
          max-sm:w-full max-sm:h-[50vh] max-sm:top-auto max-sm:bottom-0 transition-all"
          aria-live="polite"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[#10783B]">
              {selectedLocation.title}
            </h2>
            <button
              onClick={clearSelection}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
              aria-label="Fechar barra lateral"
            >
              ×
            </button>
          </div>
          <img
            src={selectedLocation.imageUrl}
            alt={selectedLocation.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <p className="text-gray-700">{selectedLocation.description}</p>
        </div>
      )}
    </div>
  );
};

export default Map;
