import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { sightsData } from '../data/sightsData';
// Fix for default marker icons in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});
export function Map() {
  const center: [number, number] = [8.35, 80.4]; // Anuradhapura center
  return <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="w-full h-full">
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {sightsData.map(sight => <Marker key={sight.id} position={[sight.coordinates.lat, sight.coordinates.lng]}>
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold text-base mb-1">{sight.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {sight.shortDescription}
                </p>
                <a href={`/sights/${sight.id}`} className="text-primary hover:underline text-sm font-medium">
                  Learn more →
                </a>
              </div>
            </Popup>
          </Marker>)}
      </MapContainer>
    </div>;
}