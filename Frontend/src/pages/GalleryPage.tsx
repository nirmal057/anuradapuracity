import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Gallery } from '../components/Gallery';
export function GalleryPage() {
  return <>
      <SEO title="Photo Gallery" description="Explore stunning images of Anuradhapura's ancient monuments, sacred sites, and architectural marvels." url="https://anuradhapura-heritage.com/gallery" />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/f5/5e/e9/abhayagiri-dagoba.jpg" alt="Anuradhapura photo gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            Photo Gallery
          </h1>
          <p className="text-xl text-white/95 max-w-2xl mx-auto">
            Discover the beauty and grandeur of Anuradhapura through images
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Gallery />
        </div>
      </section>

      {/* Image Credits */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
            Image Credits
          </h2>
          <p className="text-gray-600">
            All images showcase authentic Anuradhapura monuments and sacred sites.
            We are grateful to the talented photographers who have captured the
            beauty of Anuradhapura.
          </p>
        </div>
      </section>
    </>;
}