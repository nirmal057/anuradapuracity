import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Award, Building, Users, Globe, BookOpen, Droplets, Crown, TreePine } from 'lucide-react';
export function AboutPage() {
  return <>
      <SEO 
        title="About Anuradhapura — Complete History & Cultural Significance | Ancient Capital Sri Lanka" 
        description="Discover Anuradhapura's 2,300-year history: from prehistoric settlement to Buddhist golden age. Learn about ancient kings, hydraulic engineering, UNESCO heritage status, and spiritual importance." 
        url="https://anuradhapura-heritage.com/about" 
      />

      {/* Modern Hero Section */}
      <section className="relative h-[70vh] sm:h-[60vh] min-h-[400px] sm:min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/pic/anuradhapura/a1.jpg" 
            alt="Ruwanwelisaya Stupa Anuradhapura" 
            className="w-full h-full object-cover scale-105 animate-[float_6s_ease-in-out_infinite]" 
          />
          <div className="absolute inset-0 mesh-gradient" />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="badge bg-white/90 backdrop-blur-sm text-primary border-0 shadow-lg text-sm sm:text-base px-4 sm:px-5 py-2 sm:py-2.5 mb-4 sm:mb-6 inline-block animate-fade-in">
            UNESCO World Heritage Site Since 1982
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl animate-slide-up">
            ANURADHAPURA
          </h1>
          <div className="gradient-line w-24 sm:w-32 mx-auto mb-4 sm:mb-6 animate-scale-in"></div>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display text-accent-100 tracking-wide drop-shadow-lg animate-fade-in px-4">
            2,300 Years of Sacred History
          </p>
        </div>
      </section>

      {/* Modern Introduction */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-stone-50 via-white to-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="badge badge-primary text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 inline-block">About the Ancient City</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-3 sm:mb-4 px-4">
              The Sacred Ancient City
            </h2>
            <div className="gradient-line w-24 sm:w-32 mx-auto"></div>
          </div>

          <div className="glass-card rounded-3xl p-10 md:p-16 accent-border mb-12 hover-glow">
            <p className="text-xl md:text-2xl text-stone-700 leading-relaxed mb-8 font-body">
              <strong className="text-primary font-semibold">Anuradhapura</strong>, located in Sri Lanka's North Central Province approximately{' '}
              <strong className="text-primary font-semibold">205 km north of Colombo</strong>, stands as one of the most remarkable ancient cities 
              in the world. Designated as a <strong className="text-primary font-semibold">UNESCO World Heritage Site</strong> in 1982, it is revered 
              as the "Sacred City of Anuradhapura" — a testament to over two millennia of Buddhist civilization.
            </p>
            <p className="text-xl md:text-2xl text-stone-700 leading-relaxed mb-8 font-body">
              For more than <strong className="text-primary font-semibold">1,400 years</strong> (from approximately the 4th century BCE until 1017 CE), 
              Anuradhapura served as the capital of the Sinhalese kingdom, making it one of the{' '}
              <strong className="text-primary font-semibold">oldest continuously inhabited cities</strong> in the world. It was a major center of political power, religious devotion, and 
              architectural innovation in South Asia.
            </p>
            <p className="text-xl md:text-2xl text-stone-700 leading-relaxed font-body">
              The city is highly significant to <strong className="text-primary font-semibold">Theravāda Buddhism</strong>. Many of Sri Lanka's 
              earliest and most important Buddhist temples, monasteries, and stupas are located here. At the heart of this sacred 
              landscape stands the <strong className="text-primary font-semibold">Jaya Sri Maha Bodhi</strong> — a Bodhi tree believed to be a 
              cutting from the very tree under which the Buddha attained enlightenment, making it the{' '}
              <strong className="text-primary font-semibold">oldest documented tree on Earth</strong> (planted 236 BCE).
            </p>
          </div>
        </div>
      </section>

      {/* Modern Heritage Stats Grid */}
      <section className="py-20 bg-gradient-to-b from-stone-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-8 accent-border hover-glow group">
              <div className="mb-5 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                <Award className="text-primary" size={48} />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">
                UNESCO Heritage
              </h3>
              <p className="text-stone-600 font-body leading-relaxed">
                Inscribed in 1982 as "Sacred City of Anuradhapura" for its outstanding universal cultural value.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 accent-border hover-glow group">
              <div className="mb-5 p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                <Crown className="text-accent" size={48} />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">
                Royal Capital
              </h3>
              <p className="text-stone-600 font-body leading-relaxed">
                Served as Sri Lanka's capital for over 1,400 years (4th century BCE - 11th century CE).
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 accent-border hover-glow group">
              <div className="mb-5 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                <TreePine className="text-secondary" size={48} />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">
                Sacred Bodhi Tree
              </h3>
              <p className="text-stone-600 font-body leading-relaxed">
                Home to the world's oldest documented tree (236 BCE), a living link to Buddha's enlightenment.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 accent-border hover-glow group">
              <div className="mb-5 p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                <Users className="text-primary" size={48} />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">
                Living Pilgrimage
              </h3>
              <p className="text-stone-600 font-body leading-relaxed">
                Thousands of Buddhist pilgrims visit daily, especially during Poya (full moon) ceremonies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Historical Timeline */}
      <section className="py-24 bg-gradient-to-b from-white to-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge badge-accent text-base px-4 py-2 mb-4 inline-block">2,300 Years of Heritage</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary mb-4">
              Historical Timeline
            </h2>
            <div className="gradient-line w-32 mx-auto mb-6"></div>
            <p className="text-xl text-stone-600 font-body">
              Key moments in the evolution of a sacred civilization
            </p>
          </div>

          <div className="space-y-10">
            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-40 text-right pt-1">
                <span className="text-2xl md:text-3xl font-display font-bold text-primary">900-600 BCE</span>
              </div>
              <div className="flex-grow border-l-4 border-primary pl-8 pb-8">
                <h3 className="text-2xl font-display font-semibold text-primary mb-3">
                  Prehistoric Settlement
                </h3>
                <p className="text-lg text-stone-700 font-body leading-relaxed">
                  Archaeological evidence shows the area was inhabited as early as 900-600 BCE, with early settlements 
                  establishing the foundations for what would become one of Asia's greatest cities.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-40 text-right pt-1">
                <span className="text-2xl md:text-3xl font-display font-bold text-accent">4th Century BCE</span>
              </div>
              <div className="flex-grow border-l-4 border-accent pl-8 pb-8">
                <h3 className="text-2xl font-display font-semibold text-primary mb-3">
                  Foundation as Capital
                </h3>
                <p className="text-lg text-stone-700 font-body leading-relaxed">
                  King Pandukabhaya (437-367 BCE) establishes Anuradhapura as the capital of the Sinhalese kingdom, 
                  initiating urban planning with defensive walls, gates, and quarters for trade and religious activities.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-40 text-right pt-1">
                <span className="text-2xl md:text-3xl font-display font-bold text-primary">236 BCE</span>
              </div>
              <div className="flex-grow border-l-4 border-primary pl-8 pb-8">
                <h3 className="text-2xl font-display font-semibold text-primary mb-3">
                  The Sacred Bodhi Tree Arrives
                </h3>
                <p className="text-lg text-stone-700 font-body leading-relaxed">
                  Sangamitta Theri, daughter of Emperor Ashoka, brings a sapling from the historical Bodhi Tree in Bodh Gaya 
                  (under which Buddha attained enlightenment). Planted in the Mahamevnāwa Gardens, it becomes the oldest 
                  living human-planted tree with a documented planting date.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-40 text-right pt-1">
                <span className="text-2xl md:text-3xl font-display font-bold text-accent">140 BCE</span>
              </div>
              <div className="flex-grow border-l-4 border-accent pl-8 pb-8">
                <h3 className="text-2xl font-display font-semibold text-primary mb-3">
                  Ruwanwelisaya Completed
                </h3>
                <p className="text-lg text-stone-700 font-body leading-relaxed">
                  King Dutugemunu completes construction of the magnificent Ruwanwelisaya stupa (103 meters tall), 
                  enshrining sacred Buddha relics. The structure features hundreds of unique elephant sculptures and 
                  becomes a central pilgrimage destination.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-40 text-right pt-1">
                <span className="text-2xl md:text-3xl font-display font-bold text-primary">1st Century BCE</span>
              </div>
              <div className="flex-grow border-l-4 border-primary pl-8 pb-8">
                <h3 className="text-2xl font-display font-semibold text-primary mb-3">
                  Abhayagiri Monastery Founded
                </h3>
                <p className="text-lg text-stone-700 font-body leading-relaxed">
                  King Valagamba establishes Abhayagiri Monastery, which grows to cover 235 hectares and house 5,000 monks. 
                  It becomes an international center of Buddhist learning, embracing Theravada, Mahayana, and Vajrayana traditions.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-40 text-right pt-1">
                <span className="text-2xl md:text-3xl font-display font-bold text-accent">3rd Century CE</span>
              </div>
              <div className="flex-grow border-l-4 border-accent pl-8 pb-8">
                <h3 className="text-2xl font-display font-semibold text-primary mb-3">
                  Jetavanaramaya Built
                </h3>
                <p className="text-lg text-stone-700 font-body leading-relaxed">
                  King Mahasena (273-301 CE) constructs Jetavanaramaya, one of the tallest brick structures ever built at 
                  122 meters. Using 93 million baked bricks, it becomes the third tallest structure in the ancient world.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-40 text-right pt-1">
                <span className="text-2xl md:text-3xl font-display font-bold text-primary">6th-8th Century</span>
              </div>
              <div className="flex-grow border-l-4 border-primary pl-8 pb-8">
                <h3 className="text-2xl font-display font-semibold text-primary mb-3">
                  Hydraulic Engineering Peak
                </h3>
                <p className="text-lg text-stone-700 font-body leading-relaxed">
                  Construction of sophisticated irrigation systems including the Twin Ponds (Kuttam Pokuna) with advanced 
                  filtration. Large reservoirs (tanks) and channels showcase world-class ancient engineering.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-40 text-right pt-1">
                <span className="text-2xl md:text-3xl font-display font-bold text-accent">993-1017 CE</span>
              </div>
              <div className="flex-grow border-l-4 border-accent pl-8 pb-8">
                <h3 className="text-2xl font-display font-semibold text-primary mb-3">
                  Decline as Capital
                </h3>
                <p className="text-lg text-stone-700 font-body leading-relaxed">
                  Repeated invasions by South Indian powers (including the Chola conquest in 993 CE) lead to Anuradhapura's 
                  decline as the political capital. The royal seat moves to Polonnaruwa by 1017 CE.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-40 text-right pt-1">
                <span className="text-2xl md:text-3xl font-display font-bold text-primary">19th-20th Century</span>
              </div>
              <div className="flex-grow border-l-4 border-primary pl-8 pb-8">
                <h3 className="text-2xl font-display font-semibold text-primary mb-3">
                  Rediscovery & Preservation
                </h3>
                <p className="text-lg text-stone-700 font-body leading-relaxed">
                  British colonial administration undertakes archaeological surveys. The site becomes better known globally 
                  and systematic preservation begins.
                </p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-40 text-right pt-1">
                <span className="text-2xl md:text-3xl font-display font-bold text-accent">1982</span>
              </div>
              <div className="flex-grow border-l-4 border-accent pl-8">
                <h3 className="text-2xl font-display font-semibold text-primary mb-3">
                  UNESCO World Heritage Status
                </h3>
                <p className="text-lg text-stone-700 font-body leading-relaxed">
                  Anuradhapura is inscribed as a UNESCO World Heritage site, officially recognizing its outstanding 
                  universal value to human civilization and ensuring international protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural & Religious Significance */}
      <section className="py-20 bg-stone-50 stone-texture">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="mb-6 flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              Cultural & Religious Importance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-ancient-lg border-l-4 border-primary">
              <BookOpen className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                Buddhist Sacred Heart
              </h3>
              <p className="text-stone-700 font-body leading-relaxed mb-3">
                Anuradhapura is one of Theravāda Buddhism's most sacred sites globally. The Jaya Sri Maha Bodhi tree, 
                monasteries, and stupas containing Buddha relics make it a major pilgrimage destination.
              </p>
              <p className="text-stone-700 font-body leading-relaxed">
                The city witnessed the flourishing of Buddhist learning, with monasteries like Abhayagiri attracting 
                scholars from India, China, and Southeast Asia for over a millennium.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-ancient-lg border-l-4 border-accent">
              <Droplets className="text-accent mb-4" size={40} />
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                Engineering Marvels
              </h3>
              <p className="text-stone-700 font-body leading-relaxed mb-3">
                The city's irrigation works and reservoirs are considered among the greatest achievements of ancient 
                hydraulic engineering, designed to manage the dry-zone climate.
              </p>
              <p className="text-stone-700 font-body leading-relaxed">
                Sophisticated filtration systems, underground conduits, and massive storage tanks demonstrate 
                advanced technical knowledge that sustained a thriving urban population for centuries.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-ancient-lg border-l-4 border-secondary">
              <Building className="text-secondary mb-4" size={40} />
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                Architectural Achievement
              </h3>
              <p className="text-stone-700 font-body leading-relaxed mb-3">
                The stupas of Anuradhapura rank among the largest brick structures ever constructed, rivaling ancient 
                world wonders in scale and sophistication.
              </p>
              <p className="text-stone-700 font-body leading-relaxed">
                Intricate stone carvings (moonstones, guard stones), sophisticated urban planning with defensive walls, 
                and monumental architecture showcase extraordinary artistic and technical skill.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-ancient-lg border-l-4 border-primary">
              <Globe className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                Global Heritage Value
              </h3>
              <p className="text-stone-700 font-body leading-relaxed mb-3">
                As part of Sri Lanka's "Cultural Triangle" of ancient cities, Anuradhapura represents one of the oldest 
                continuously inhabited cities in the world.
              </p>
              <p className="text-stone-700 font-body leading-relaxed">
                Its preservation offers invaluable insights into ancient South Asian civilization, Buddhist culture, 
                urban development, and technological innovation spanning over two millennia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Relevance */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-xl p-10 md:p-14 border-t-4 border-primary shadow-ancient-lg">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Anuradhapura Today
            </h2>
            <div className="space-y-4 text-lg text-stone-700 font-body leading-relaxed">
              <p>
                Today, many of the ancient ruins are carefully preserved and managed for both religious pilgrimage 
                and cultural tourism. The site forms a vital part of Sri Lanka's national identity and continues to 
                be an active center of Buddhist worship.
              </p>
              <p>
                Visitors experience a unique combination of <strong className="text-primary">archaeological wonder</strong> and 
                <strong className="text-primary"> living spiritual tradition</strong>. Monks still meditate in ancient monasteries, 
                pilgrims circumambulate sacred stupas, and daily rituals continue practices that date back centuries.
              </p>
              <p>
                For travelers, Anuradhapura offers deep historical exploration (over two thousand years), spiritual 
                significance for Buddhist pilgrims, remarkable architecture emerging from lush vegetation, and insights 
                into ancient engineering and urban planning — making it an essential destination for anyone interested in 
                world heritage, archaeology, or Buddhist culture.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>;
}