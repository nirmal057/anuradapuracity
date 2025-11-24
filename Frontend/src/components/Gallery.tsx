import React, { useState, lazy } from 'react';
import { X } from 'lucide-react';
import { galleryData } from '../data/galleryData';
export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryData.length);
    }
  };
  const goToPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryData.length) % galleryData.length);
    }
  };
  return <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryData.map((image, index) => <div key={image.id} onClick={() => openLightbox(index)} className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
            <img src={image.url} alt={image.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {image.title}
                </h3>
                <p className="text-white/90 text-sm">{image.location}</p>
              </div>
            </div>
          </div>)}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors" aria-label="Close lightbox">
            <X size={32} />
          </button>

          <button onClick={e => {
        e.stopPropagation();
        goToPrev();
      }} className="absolute left-4 text-white hover:text-gray-300 transition-colors text-4xl" aria-label="Previous image">
            ‹
          </button>

          <button onClick={e => {
        e.stopPropagation();
        goToNext();
      }} className="absolute right-4 text-white hover:text-gray-300 transition-colors text-4xl" aria-label="Next image">
            ›
          </button>

          <div className="max-w-6xl w-full" onClick={e => e.stopPropagation()}>
            <img src={galleryData[selectedImage].url} alt={galleryData[selectedImage].title} className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold mb-2">
                {galleryData[selectedImage].title}
              </h3>
              <p className="text-gray-300 mb-1">
                {galleryData[selectedImage].caption}
              </p>
              <p className="text-sm text-gray-400">
                {galleryData[selectedImage].credit}
              </p>
            </div>
          </div>
        </div>}
    </>;
}