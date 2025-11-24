import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { Button } from './ui/Button';
interface SightHeroProps {
  name: string;
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}
export function SightHero({
  name,
  image,
  coordinates
}: SightHeroProps) {
  const getDirectionsUrl = () => {
    return `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
  };
  return <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            {name}
          </h1>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center text-white/90 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg">
              <MapPin size={18} className="mr-2" />
              <span className="text-sm">
                {coordinates.lat.toFixed(4)}°N, {coordinates.lng.toFixed(4)}°E
              </span>
            </div>
            <Button href={getDirectionsUrl()} variant="primary" size="sm" className="bg-white text-primary hover:bg-gray-100">
              <ExternalLink size={18} className="mr-2" />
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </div>;
}