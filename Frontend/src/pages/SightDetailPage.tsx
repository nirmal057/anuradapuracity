import React, { lazy } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Clock, DollarSign, AlertCircle, MapPin } from 'lucide-react';
import { SightHero } from '../components/SightHero';
import { SEO } from '../components/ui/SEO';
import { getSightById, getSightJsonLd } from '../data/sightsData';
export function SightDetailPage() {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const sight = id ? getSightById(id) : undefined;
  if (!sight) {
    return <Navigate to="/sights" replace />;
  }
  const jsonLd = getSightJsonLd(sight);
  return <>
      <SEO title={sight.name} description={sight.shortDescription} image={sight.image} url={`https://anuradhapura-heritage.com/sights/${sight.id}`} jsonLd={jsonLd} />

      <SightHero name={sight.name} image={sight.image} coordinates={sight.coordinates} />

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12">
            {sight.fullDescription.map((paragraph, index) => <p key={index} className="text-lg text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>)}
          </div>

          {/* Practical Information */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Practical Information
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Clock className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Best Time to Visit
                  </h3>
                  <p className="text-gray-600">
                    {sight.practicalInfo.bestTime}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <DollarSign className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Entry Fee
                  </h3>
                  <p className="text-gray-600">
                    {sight.practicalInfo.entryFee}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <AlertCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Important Rules
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {sight.practicalInfo.rules.map((rule, index) => <li key={index}>{rule}</li>)}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Nearby Attractions
                  </h3>
                  <p className="text-gray-600">{sight.practicalInfo.nearby}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Photo Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sight.gallery.map((image, index) => <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg shadow-md">
                  <img src={image} alt={`${sight.name} - Image ${index + 1}`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>)}
            </div>
          </div>
        </div>
      </section>
    </>;
}