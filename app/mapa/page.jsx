"use client"; // Mark as Client Component

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import Header from "@/Components/Header";
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Configuração do ícone padrão do Leaflet
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Importação dinâmica dos componentes do react-leaflet
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);
const useMap = dynamic(
  () => import('react-leaflet').then((mod) => mod.useMap),
  { ssr: false }
);

// Componente para forçar a atualização do tamanho do mapa
const MapResizer = ({ selectedLocation }) => {
  const map = useMap();
  useEffect(() => {
    // Força o redimensionamento do mapa quando a barra lateral aparece/desaparece
    setTimeout(() => {
      map.invalidateSize();
    }, 300); // Pequeno atraso para garantir que o DOM esteja atualizado
  }, [selectedLocation, map]);
  return null;
};

const MapPage = () => {
  // Estado para armazenar a localização selecionada
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Lista de locais com imagem e descrição
  const locations = [
    {
      id: 1,
      position: [-3.891569073223997, -38.68633435573424], // Fortaleza, CE
      popupText: "Nossa sede principal!<br /> Conheça",
      title: "Sede Principal",
      description: "Nossa sede principal em Fortaleza, onde coordenamos nossas atividades culturais.",
      imageUrl: "https://via.placeholder.com/300x200?text=Sede+Principal",
    },
    {
      id: 2,
      position: [-3.885, -38.690], // Outro ponto próximo
      popupText: "Agente Cultural 1<br /> Visite-nos!",
      title: "Agente Cultural 1",
      description: "Um espaço vibrante para eventos culturais e artísticos.",
      imageUrl: "https://via.placeholder.com/300x200?text=Agente+Cultural+1",
    },
    {
      id: 3,
      position: [-3.895, -38.680], // Mais um ponto próximo
      popupText: "Agente Cultural 2<br /> Saiba mais",
      title: "Agente Cultural 2",
      description: "Centro de promoção da cultura local com exposições e oficinas.",
      imageUrl: "https://via.placeholder.com/300x200?text=Agente+Cultural+2",
    },
  ];

  // Centro inicial do mapa
  const centerPosition = [-3.891569073223997, -38.68633435573424];

  // Função para limpar a seleção
  const clearSelection = () => {
    setSelectedLocation(null);
  };

  // Debug: Logar quando uma localização é selecionada
  useEffect(() => {
    console.log('Localização selecionada:', selectedLocation);
  }, [selectedLocation]);

  return (
    <>
      <Header />
      <div className="relative h-[70vh] w-full max-w-7xl mx-auto pt-5 pb-10">
        {/* Mapa com tamanho limitado */}
        <div className="h-full w-full rounded-sm shadow-lg">
          <MapContainer
            center={centerPosition}
            zoom={13}
            style={{ height: '70vh', width: '100%' }}
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
                  click: () => {
                    console.log('Marcador clicado:', location.title); // Debug
                    setSelectedLocation(location);
                  },
                }}
              >
                <Popup>
                  <div dangerouslySetInnerHTML={{ __html: location.popupText }} />
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        {/* Barra lateral no lado direito - mesma altura do mapa, com animação */}
        {selectedLocation && (
          <div
            className={`fixed top-[170px] right-0 h-[70vh] w-80 bg-gray-100 p-4 overflow-auto shadow-lg z-[1000] transition-transform duration-300 ease-in-out transform ${
              selectedLocation ? 'translate-x-0' : 'translate-x-full'
            }`}
            aria-live="polite"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#10783B]">{selectedLocation.title}</h2>
              <button
                onClick={clearSelection}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
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
    </>
  );
};

export default MapPage;