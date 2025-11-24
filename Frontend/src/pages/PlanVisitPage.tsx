import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Map } from '../components/Map';
import { Clock, Ticket, Bus, AlertTriangle, Sun, Droplets } from 'lucide-react';
export function PlanVisitPage() {
  return <>
      <SEO title="Plan Your Visit" description="Essential information for visiting Anuradhapura: transport options, tickets, best times, dress code, and suggested itineraries." url="https://anuradhapura-heritage.com/plan" />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/pic/kuttam pokuna/k1.jpg" alt="Planning your visit to Anuradhapura" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            Plan Your Visit
          </h1>
          <p className="text-xl text-white/95 max-w-2xl mx-auto">
            Everything you need to know for an unforgettable experience
          </p>
        </div>
      </section>

      {/* Essential Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
              <Clock className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Best Time to Visit
              </h3>
              <p className="text-gray-600 mb-2">
                <strong>Best Season:</strong> April to October (dry season) offers favorable weather, clear skies, and excellent photography conditions.
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Time of Day:</strong> Early morning (6-9 AM) or late afternoon (4-6 PM) to avoid intense midday heat.
              </p>
              <p className="text-gray-600">
                <strong>Special Days:</strong> Poya (full moon) days feature vibrant ceremonies but expect large crowds.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-6 border border-secondary/20">
              <Ticket className="text-secondary mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Tickets & Entry
              </h3>
              <p className="text-gray-600 mb-2">
                <strong>Cultural Triangle Pass:</strong> Approximately $25 USD
                for foreign tourists, valid for all major sites.
              </p>
              <p className="text-gray-600">
                Purchase at the main ticket office near the Archaeological
                Museum or at major site entrances.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border border-accent/20">
              <Bus className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Getting Around
              </h3>
              <p className="text-gray-600 mb-2">
                <strong>Tuk-tuk:</strong> Most convenient for short trips
                between sites.
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Bicycle:</strong> Great for exploring nearby ruins at
                your own pace.
              </p>
              <p className="text-gray-600">
                <strong>Taxi:</strong> Best for longer distances and full-day
                tours.
              </p>
            </div>
          </div>

          {/* Dress Code & Rules */}
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
              Dress Code & Etiquette
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What to Wear
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Shoulders and knees must be covered at all sacred sites
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Light, breathable fabrics recommended for the heat
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>White clothing is traditional for temple visits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Bring socks for walking on hot stone surfaces</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Respectful Behavior
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Remove shoes and hats before entering sacred areas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Maintain quiet and respectful demeanor in temples
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Never pose with your back to Buddha statues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Ask permission before photographing people praying
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Safety Tips */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-16">
            <div className="flex items-start gap-4">
              <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Safety & Comfort Tips
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                  <div className="flex items-start gap-2">
                    <Sun className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span>
                      Bring sunhat, sunscreen, and sunglasses—the sun is intense
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Droplets className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                    <span>
                      Carry plenty of water—stay hydrated throughout your visit
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 mr-1">💊</span>
                    <span>
                      Pack a small first-aid kit with basic medications
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-600 mr-1">🚶</span>
                    <span>
                      Wear comfortable walking shoes—sites are extensive
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Suggested Itineraries */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
              Suggested Itineraries
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-primary rounded-xl p-8 shadow-lg">
                <div className="bg-primary text-white inline-block px-4 py-2 rounded-lg mb-4 font-semibold">
                  Half Day (4-5 hours)
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Essential Sites Tour
                </h3>
                <p className="text-gray-600 mb-6">
                  Perfect for visitors with limited time. Start at sunrise for
                  the best experience.
                </p>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-bold text-primary mr-3">1.</span>
                    <span>
                      <strong>Jaya Sri Maha Bodhi</strong> — Sacred Bodhi tree
                      (45 min)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-primary mr-3">2.</span>
                    <span>
                      <strong>Thuparamaya</strong> — Ancient stupa nearby (30
                      min)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-primary mr-3">3.</span>
                    <span>
                      <strong>Kuttam Pokuna</strong> — Beautiful Twin Ponds (30
                      min)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-primary mr-3">4.</span>
                    <span>
                      <strong>Ruwanwelisaya</strong> — Magnificent white stupa
                      (1 hour)
                    </span>
                  </li>
                </ol>
              </div>

              <div className="bg-white border-2 border-secondary rounded-xl p-8 shadow-lg">
                <div className="bg-secondary text-white inline-block px-4 py-2 rounded-lg mb-4 font-semibold">
                  Full Day (8-10 hours)
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Complete Heritage Tour
                </h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive tour covering all major sites. Use a tuk-tuk or
                  taxi for transport.
                </p>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-bold text-secondary mr-3">1.</span>
                    <span>
                      <strong>Jaya Sri Maha Bodhi</strong> — Start at sunrise (1
                      hour)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-secondary mr-3">2.</span>
                    <span>
                      <strong>Ruwanwelisaya</strong> — White stupa (1 hour)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-secondary mr-3">3.</span>
                    <span>
                      <strong>Archaeological Museum</strong> — Context &
                      artifacts (1 hour)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-secondary mr-3">4.</span>
                    <span>
                      <strong>Jetavanaramaya</strong> — Massive brick stupa (1
                      hour)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-secondary mr-3">5.</span>
                    <span>
                      <strong>Abhayagiri Monastery</strong> — Extensive complex
                      (2 hours)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-secondary mr-3">6.</span>
                    <span>
                      <strong>Kuttam Pokuna</strong> — Twin Ponds at sunset (45
                      min)
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
              Interactive Map
            </h2>
            <Map />
            <p className="text-center text-gray-600 mt-4">
              Click on markers to learn more about each site and get directions
            </p>
          </div>

          {/* Beyond the Ancient City */}
          <div className="bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 rounded-xl p-10 border-t-4 border-accent">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 text-center">
              Beyond the Ancient City
            </h2>
            <p className="text-center text-gray-600 mb-10 text-lg">
              While the archaeological sites are the main attraction, Anuradhapura offers additional enriching experiences
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-3">🦌</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Wildlife Watching
                </h3>
                <p className="text-gray-600">
                  Explore nearby national parks for elephant sightings, exotic birds, and diverse wildlife in their natural habitat.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-3">🏘️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Village Tours
                </h3>
                <p className="text-gray-600">
                  Experience authentic rural Sri Lankan life with village walks, traditional cooking demonstrations, and local interactions.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Traditional Crafts
                </h3>
                <p className="text-gray-600">
                  Visit craft workshops to witness traditional pottery, wood carving, and textile weaving techniques passed down through generations.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-3">🧘</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Ayurvedic Wellness
                </h3>
                <p className="text-gray-600">
                  Experience authentic 3,000-year-old healing traditions with Ayurvedic massages, herbal treatments, and wellness programs.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-3">🦅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Bird Watching
                </h3>
                <p className="text-gray-600">
                  Discover over 200 bird species around the ancient tanks and wetlands, including rare endemic and migratory species.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-3xl mb-3">📸</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Photography Tours
                </h3>
                <p className="text-gray-600">
                  Capture stunning ancient architecture, golden hour light on stupas, and vibrant cultural ceremonies with expert photography guides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
}