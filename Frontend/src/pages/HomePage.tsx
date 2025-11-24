import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Users, Clock, BookOpen, Landmark } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SEO } from '../components/ui/SEO';
import { sightsData } from '../data/sightsData';
export function HomePage() {
  const featuredSights = sightsData.slice(0, 6);
  return <>
      <SEO title="Anuradhapura — Sacred Ancient City | UNESCO World Heritage Site | Sri Lanka" description="Explore Anuradhapura, Sri Lanka's first capital (4th century BCE - 11th century CE). Visit sacred Jaya Sri Maha Bodhi, magnificent stupas, ancient monasteries. Complete visitor guide with maps and travel tips." url="https://anuradhapura-heritage.com" />

      {/* Hero Section with Modern Aesthetic */}
      <section className="relative h-[95vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background with parallax effect */}
        <div className="absolute inset-0">
          <img 
            src="/pic/ruwanwanwaliseya/pic 1.jpg" 
            alt="Anuradhapura Ancient City Sacred Stupas" 
            className="w-full h-full object-cover scale-105 animate-[float_6s_ease-in-out_infinite]" 
          />
          {/* Modern gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/70 to-primary-dark/85" />
          {/* Mesh gradient overlay */}
          <div className="absolute inset-0 bg-mesh-gradient opacity-40" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          {/* Modern decorative element */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Landmark size={16} className="text-accent-200" />
              <span className="text-sm text-white/90 font-medium">UNESCO World Heritage Site</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-black text-white mb-6 leading-tight tracking-tight drop-shadow-2xl animate-fade-in">
            Anuradhapura
          </h1>
          <p className="text-2xl md:text-3xl font-display text-accent-200 mb-6 tracking-wide animate-slide-up">
            The Sacred Ancient City
          </p>
          <p className="text-lg md:text-xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed font-light animate-slide-up">
            Journey through 2,300 years of Buddhist heritage. From the world's oldest living tree to colossal stupas 
            rising above ancient ruins — discover Sri Lanka's first kingdom and spiritual heart.
          </p>
          
          <div className="mb-10 flex flex-wrap justify-center gap-6 text-white/90 text-sm">
            <div className="glass-card-dark px-4 py-2 rounded-full flex items-center gap-2">
              <Clock size={18} className="text-accent-300" />
              <span className="font-medium">4th Century BCE - 11th Century CE</span>
            </div>
            <div className="glass-card-dark px-4 py-2 rounded-full flex items-center gap-2">
              <MapPin size={18} className="text-accent-300" />
              <span className="font-medium">205 km north of Colombo</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button 
              href="/sights" 
              variant="primary" 
              size="lg" 
              className="btn-gradient group"
            >
              <span>Explore Sacred Sites</span>
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              href="/about" 
              variant="outline" 
              size="lg" 
              className="glass-card border-2 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-md"
            >
              <BookOpen size={20} className="mr-2" />
              <span>Discover History</span>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction with Modern Glass Card */}
      <section className="py-24 bg-gradient-to-b from-stone-50 via-amber-50/30 to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="badge badge-primary text-base px-4 py-2 mb-4 inline-block">Ancient Heritage</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-primary mb-4">
                Ancient Capital of Kings
              </h2>
              <div className="gradient-line w-32 mx-auto"></div>
            </div>
            
            <div className="glass-card rounded-3xl p-8 md:p-12 accent-border hover-glow">
              <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-6">
                Anuradhapura stands as Sri Lanka's most sacred ancient city, a <strong className="text-primary font-semibold">UNESCO World Heritage Site</strong> 
                where history and spirituality intertwine. For over <strong className="text-primary font-semibold">1,400 years</strong> (4th century BCE to 1017 CE), 
                it served as the island's capital, witnessing the rise of Buddhist civilization and remarkable achievements in art, 
                architecture, and hydraulic engineering.
              </p>
              <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-6">
                Located in Sri Lanka's North Central Province, approximately <strong className="text-primary font-semibold">205 km north of Colombo</strong>, 
                the city houses some of the world's most impressive ancient monuments: towering stupas that once rivaled the pyramids, 
                sophisticated irrigation systems still in use today, and the Jaya Sri Maha Bodhi — the sacred Bodhi tree planted in 236 BCE, 
                making it the <strong className="text-primary font-semibold">oldest documented tree on Earth</strong>.
              </p>
              <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
                Today, Anuradhapura remains a living pilgrimage site where thousands gather daily to worship at ancient shrines, 
                while travelers from across the globe marvel at its archaeological wonders and spiritual atmosphere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sacred Sites with Modern Cards */}
      <section className="py-24 bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge badge-accent text-base px-4 py-2 mb-4 inline-block">Sacred Heritage</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary mb-4">
              Sacred Monuments & Sites
            </h2>
            <div className="gradient-line w-32 mx-auto mb-6"></div>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Eight essential monuments and sacred sites that define Anuradhapura's spiritual and architectural legacy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredSights.map((sight, index) => (
              <Link 
                key={sight.id} 
                to={`/sights/${sight.id}`}
                className="modern-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="image-overlay aspect-[4/3]">
                  <img 
                    src={sight.image} 
                    alt={sight.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="badge bg-white/90 backdrop-blur-sm text-primary border-0 shadow-lg">
                      Sacred Site
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {sight.name}
                  </h3>
                  <p className="text-stone-600 leading-relaxed mb-4 line-clamp-3">
                    {sight.shortDescription}
                  </p>
                  <div className="flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                    <span>Explore Details</span>
                    <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button 
              href="/sights" 
              variant="outline" 
              size="lg" 
              className="btn-gradient text-white border-0"
            >
              Discover All 8 Sacred Sites
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Essential Visitor Information with Modern Glass Cards */}
      <section className="py-24 bg-gradient-to-b from-stone-50 to-white mesh-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge badge-primary text-base px-4 py-2 mb-4 inline-block">Visitor Guide</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary mb-4">
              Plan Your Journey
            </h2>
            <div className="gradient-line w-32 mx-auto mb-6"></div>
            <p className="text-xl text-stone-600">Essential information for visiting the ancient city</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-8 accent-border hover-glow group">
              <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                <MapPin size={44} className="text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-4">Getting There</h3>
              <p className="text-stone-700 mb-6 leading-relaxed">
                Located 205 km (127 miles) north of Colombo. Accessible by comfortable train journey (4-5 hours), 
                bus (5 hours), or private vehicle (3.5 hours via A9 highway).
              </p>
              <Link to="/plan" className="inline-flex items-center text-accent font-semibold hover:text-accent-dark group">
                Transport Guide 
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="glass-card rounded-2xl p-8 accent-border hover-glow group">
              <div className="mb-6 p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                <Calendar size={44} className="text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-4">Best Time to Visit</h3>
              <p className="text-stone-700 mb-6 leading-relaxed">
                Early morning (6-9 AM) offers cooler temperatures and golden light. Dry season (April-October) is ideal. 
                Poya (full moon) days are sacred but crowded.
              </p>
              <Link to="/plan" className="inline-flex items-center text-accent font-semibold hover:text-accent-dark group">
                Planning Tips 
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="glass-card rounded-2xl p-8 accent-border hover-glow group">
              <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                <Users size={44} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-4">Expert Guides</h3>
              <p className="text-stone-700 mb-6 leading-relaxed">
                Knowledgeable local guides bring ancient history to life with stories of kings, monks, and 
                architectural marvels spanning 23 centuries.
              </p>
              <Link to="/contact" className="inline-flex items-center text-accent font-semibold hover:text-accent-dark group">
                Book a Guide 
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action with Modern Design */}
      <section className="relative py-32 overflow-hidden">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 mesh-gradient opacity-90" />
        
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="glass-card rounded-3xl p-12 md:p-16 accent-border">
            <span className="badge bg-white/90 backdrop-blur-sm text-primary border-0 shadow-lg text-base px-4 py-2 mb-6 inline-block">
              Start Your Journey
            </span>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Walk Through 2,300 Years of History
            </h2>
            
            <p className="text-xl md:text-2xl text-stone-700 mb-10 leading-relaxed max-w-3xl mx-auto">
              Discover the sacred monuments, ancient ruins, and spiritual heritage that make Anuradhapura 
              a UNESCO World Heritage Site
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                href="/plan" 
                variant="primary" 
                size="lg" 
                className="btn-gradient text-white border-0 shadow-glow group"
              >
                Plan Your Visit
                <Calendar size={20} className="ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                href="/contact" 
                variant="outline" 
                size="lg" 
                className="glass-card border-2 border-primary text-primary hover:bg-primary hover:text-white group"
              >
                Book Expert Guide
                <Users size={20} className="ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-stone-300/30">
              <div className="flex flex-wrap justify-center gap-8 text-sm text-stone-600">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="font-medium">UNESCO Heritage Site</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-medium">8 Sacred Monuments</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="font-medium">Expert Local Guides</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
}