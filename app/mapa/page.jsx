"use client"; // Mark as Client Component

import React from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import { useEffect } from 'react';
import Header from "@/Components/Header";
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Dynamically import react-leaflet components with SSR disabled
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

const MapPage = () => {
  // Ensure Leaflet is only accessed in the browser
  useEffect(() => {
    // This runs only on the client side
  }, []);

  const position = [-3.891569073223997, -38.68633435573424]; // London coordinates

  return (
    <><Header />
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>
            Nossa sede!<br /> Click to explore.
          </Popup>
        </Marker>
      </MapContainer>
    </div></>
  );
};

export default MapPage;