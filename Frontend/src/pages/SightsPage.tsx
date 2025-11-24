import React from 'react';
import { Card } from '../components/ui/Card';
import { SEO } from '../components/ui/SEO';
import { sightsData } from '../data/sightsData';
export function SightsPage() {
  return <>
      <SEO title="Sacred Sights & Monuments" description="Explore the main attractions of Anuradhapura including Jaya Sri Maha Bodhi, Ruwanwelisaya, Jetavanaramaya, Abhayagiri, and Kuttam Pokuna." url="https://anuradhapura-heritage.com/sights" />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/ee/95/f4/jetavanaramaya.jpg" alt="Ancient monuments of Anuradhapura" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            Sacred Sights
          </h1>
          <p className="text-xl text-white/95 max-w-2xl mx-auto">
            Discover the magnificent stupas, ancient monasteries, and sacred
            sites of Anuradhapura
          </p>
        </div>
      </section>

      {/* Sights Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sightsData.map(sight => <Card key={sight.id} image={sight.image} title={sight.name} description={sight.shortDescription} ctaText="Explore Details" ctaLink={`/sights/${sight.id}`} imageAlt={sight.name} />)}
          </div>
        </div>
      </section>

      {/* Visitor Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            Visiting Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Dress Code
              </h3>
              <p className="text-gray-600">
                Shoulders and knees must be covered at all sacred sites. White
                clothing is traditional for temple visits.
              </p>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Footwear
              </h3>
              <p className="text-gray-600">
                Remove shoes before entering sacred areas. Bring socks for
                comfort on hot stone surfaces.
              </p>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Photography
              </h3>
              <p className="text-gray-600">
                Photography is generally allowed, but be respectful. Never pose
                with your back to Buddha statues.
              </p>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Best Time
              </h3>
              <p className="text-gray-600">
                Visit early morning (6-9 AM) or late afternoon (4-6 PM) to avoid
                midday heat and crowds.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>;
}