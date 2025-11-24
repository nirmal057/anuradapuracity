export interface Sight {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string[];
  practicalInfo: {
    bestTime: string;
    entryFee: string;
    rules: string[];
    nearby: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  image: string;
  gallery: string[];
}
export const sightsData: Sight[] = [{
  id: 'bodhi-tree',
  name: 'Jaya Sri Maha Bodhi',
  shortDescription: "The sacred Bodhi tree, a sapling from the original tree under which Buddha attained enlightenment. Planted in 236 BCE, it's the world's oldest documented tree.",
  fullDescription: [
    'The Jaya Sri Maha Bodhi stands as one of the most sacred relics in Buddhist history. This ancient fig tree in the Mahamevnāwa Gardens is believed to be the southern branch of the historical Bodhi Tree in Bodh Gaya, India, under which Siddhartha Gautama attained enlightenment.',
    'Brought to Sri Lanka in 236 BCE by Sangamitta Theri, the daughter of the great Emperor Ashoka of India, this tree holds the distinction of being the oldest living human-planted tree in the world with a documented planting date. For over 2,200 years, it has been carefully tended and protected by successive generations.',
    'The tree is surrounded by golden railings and protected platforms where thousands of pilgrims gather daily to offer flowers, light oil lamps, and meditate. The spiritual atmosphere is palpable, with the constant murmur of prayers and the fragrance of incense filling the air.',
    'The site represents an unbroken lineage of Buddhist practice and devotion spanning millennia. Its survival through wars, invasions, and natural disasters is considered miraculous by devotees, reinforcing its sacred status in Theravāda Buddhism.'
  ],
  practicalInfo: {
    bestTime: 'Early morning (6-9 AM) or late afternoon (4-6 PM) to avoid midday heat and crowds. Poya (full moon) days are especially sacred but very crowded.',
    entryFee: 'Included in the Anuradhapura Cultural Triangle ticket ($25 USD for foreign tourists, valid for same day)',
    rules: ['Remove shoes and hats before entering sacred grounds', 'Dress modestly - shoulders and knees must be covered, white clothing preferred', 'Maintain silence and respectful behavior', 'No photography of the tree from certain angles', 'Do not touch or damage any part of the tree'],
    nearby: 'Brazen Palace ruins (ancient royal palace, 3-minute walk), Thuparamaya stupa (first Buddhist stupa in Sri Lanka, 5-minute walk)'
  },
  coordinates: {
    lat: 8.3433,
    lng: 80.4037
  },
  image: '/pic/jaya sri maha bodhi/j1.jpg',
  gallery: [
    '/pic/jaya sri maha bodhi/j1.jpg',
    '/pic/jaya sri maha bodhi/j2.jpg',
    '/pic/jaya sri maha bodhi/j3.jpg',
    '/pic/jaya sri maha bodhi/j4.jpg',
    '/pic/jaya sri maha bodhi/j5.jpg'
  ]
}, {
  id: 'ruwanwelisaya',
  name: 'Ruwanwelisaya Stupa',
  shortDescription: 'A magnificent white hemispherical stupa built by King Dutugemunu around 140 BCE. Contains sacred Buddha relics and stands as a testament to ancient engineering prowess.',
  fullDescription: [
    "Ruwanwelisaya, also known as Mahathupa (the Great Stupa) and Swarnamali Chaitya (Golden Garland), is one of the tallest and most revered ancient monuments in the world. Built by the legendary King Dutugemunu in approximately 140 BCE, it stands as a symbol of Sinhalese Buddhist pride and architectural achievement.",
    'The stupa currently reaches 103 meters (338 feet) in height with a circumference of 290 meters. Originally built to a height of 91 meters, subsequent renovations have enhanced its grandeur. The gleaming white dome is visible from miles away, serving as a beacon for pilgrims and travelers.',
    'The most distinctive feature is the procession of hundreds of elephant sculptures that form a decorative frieze around the base. Each elephant is carved in a unique pose, creating a dynamic visual narrative. According to legend, King Dutugemunu built this stupa to enshrine Buddha relics, including the right collar bone.',
    'The construction represents a remarkable feat of ancient engineering. Millions of bricks were used, and the foundation extends deep into the earth to support the massive weight. The site remains one of the holiest pilgrimage destinations in Sri Lanka, especially during the Poson festival.'
  ],
  practicalInfo: {
    bestTime: 'Sunrise (6-7 AM) for stunning golden light on the white dome, or sunset (5:30-6:30 PM) for cooler temperatures. Avoid midday heat.',
    entryFee: 'Included in the Anuradhapura Cultural Triangle ticket',
    rules: ['Remove shoes and hats before entering the sacred compound', 'Walk clockwise (Buddhist tradition) around the stupa', 'Dress modestly with covered shoulders and knees', 'Maintain quiet and respectful demeanor - this is an active worship site', 'No climbing on the structure'],
    nearby: 'Mirisawetiya stupa (10-minute walk), Anuradhapura Folk Museum (showcases cultural artifacts, 10-minute walk), Basawakkulama Tank (ancient reservoir)'
  },
  coordinates: {
    lat: 8.3489,
    lng: 80.3964
  },
  image: '/pic/ruwanwanwaliseya/pic 1.jpg',
  gallery: [
    '/pic/ruwanwanwaliseya/pic 1.jpg',
    '/pic/ruwanwanwaliseya/p2.jpg',
    '/pic/ruwanwanwaliseya/p3.jpg',
    '/pic/ruwanwanwaliseya/p4.jpg',
    '/pic/ruwanwanwaliseya/p5.jpg',
    '/pic/ruwanwanwaliseya/p6.jpg'
  ]
}, {
  id: 'jetavanaramaya',
  name: 'Jetavanaramaya Stupa',
  shortDescription: 'One of the tallest ancient brick structures in the world. Built in the 3rd century CE, it originally stood at 122 meters and required 93 million bricks.',
  fullDescription: [
    'Jetavanaramaya stands as a monument to human ambition and ancient engineering excellence. Built by King Mahasena (273-301 CE) in the 3rd century, this colossal brick stupa was originally approximately 122 meters (400 feet) tall, making it the third tallest structure in the ancient world at its time.',
    'The scale is staggering: the structure is built entirely from an estimated 93.3 million baked bricks, making it one of the largest brick structures ever constructed. The base diameter measures 112 meters, and the foundation alone is 8 meters deep, resting on bedrock to support the immense weight.',
    'Archaeological excavations have revealed sophisticated construction techniques including an advanced drainage system with underground channels to prevent water damage, and a unique dome structure that has withstood earthquakes for nearly two millennia. The bricks were made to precise specifications and bonded without modern cement.',
    'The stupa was part of the Jetavana monastery complex, which housed thousands of monks and served as a major center of Buddhist learning. Chinese pilgrim Faxian visited in 412 CE and wrote of the monastery\'s magnificence. Today, though partially ruined, it remains an awe-inspiring testament to ancient Sri Lankan civilization.'
  ],
  practicalInfo: {
    bestTime: 'Early morning (6-8 AM) before tour groups arrive, or late afternoon (4-6 PM) for dramatic lighting and photography',
    entryFee: 'Included in the Anuradhapura Cultural Triangle ticket',
    rules: ['Remove footwear at the entrance to the sacred compound', 'Dress modestly with covered shoulders and knees', 'Stay on designated paths - do not walk on ancient foundations', 'Do not climb on the structure', 'Bring water and sun protection - limited shade available'],
    nearby: 'Anuradhapura Archaeological Museum (artifacts and history, 10-minute walk), Abhayagiri Monastery complex (15-minute walk), ancient hospital ruins'
  },
  coordinates: {
    lat: 8.3547,
    lng: 80.4031
  },
  image: '/pic/jethawanaramaya/j1.jpg',
  gallery: [
    '/pic/jethawanaramaya/j1.jpg',
    '/pic/jethawanaramaya/j2.jpg',
    '/pic/jethawanaramaya/j3.jpg',
    '/pic/jethawanaramaya/j4.jpg',
    '/pic/jethawanaramaya/j5.jpg'
  ]
}, {
  id: 'abhayagiri',
  name: 'Abhayagiri Monastery Complex',
  shortDescription: 'A vast ancient monastery spanning 235 hectares. Once housed 5,000 monks and served as an international center of Buddhist learning for over 1,000 years.',
  fullDescription: [
    'Abhayagiri Monastery was one of the greatest monastic institutions in the ancient world. Founded in the 1st century BCE by King Valagamba, it grew to become a sprawling complex covering approximately 235 hectares (580 acres), housing up to 5,000 monks at its zenith.',
    'The monastery was unique in ancient Sri Lanka for embracing multiple Buddhist traditions - Theravada, Mahayana, and Vajrayana Buddhism all coexisted and flourished here. This made it an international center of Buddhist learning, attracting scholars and pilgrims from India, China, Java, and beyond.',
    'The centerpiece is the Abhayagiri Dagoba, originally standing at 100 meters (though earthquake damage reduced its height). The complex includes remarkable features: the exquisite Samadhi Buddha statue (depicting meditation), the famous Moonstone at the entrance (considered the finest example of this art form), sophisticated refectories, libraries, meditation halls, and hospitals.',
    'The Twin Ponds (Kuttam Pokuna) within the complex showcase advanced hydraulic engineering with sophisticated filtration systems using sand and gravel. Chinese pilgrim Faxian (5th century CE) and Xuanzang (7th century CE) both documented the monastery\'s scholarly activities, vast library, and thousands of resident monks.'
  ],
  practicalInfo: {
    bestTime: 'Morning hours (7-10 AM) for pleasant weather, fewer crowds, and excellent photography light. Plan for 2-3 hours to explore the extensive complex.',
    entryFee: 'Included in the Anuradhapura Cultural Triangle ticket',
    rules: ['Remove shoes at all sacred structures and Buddha statues', 'Dress modestly - shoulders and knees covered', 'Bring plenty of water, sun hat, and sunscreen - the site is vast with limited shade', 'Respect meditation areas and active worship sites', 'Hire a guide for deeper historical understanding (available at entrance)'],
    nearby: 'Jetavanaramaya stupa (15-minute walk), Lankarama stupa (10-minute walk), Ratna Prasada (gem palace with intricate stone carvings, within complex)'
  },
  coordinates: {
    lat: 8.3644,
    lng: 80.3981
  },
  image: '/pic/abhayagiriya/a1.jpg',
  gallery: [
    '/pic/abhayagiriya/a1.jpg',
    '/pic/abhayagiriya/a2.jpg',
    '/pic/abhayagiriya/a3.jpg',
    '/pic/abhayagiriya/a4.jpg',
    '/pic/abhayagiriya/a5.jpg'
  ]
}, {
  id: 'twin-ponds',
  name: 'Kuttam Pokuna (Twin Ponds)',
  shortDescription: 'Exquisitely crafted ancient bathing pools with sophisticated filtration systems. A masterpiece of hydraulic engineering from the 6th-8th century CE.',
  fullDescription: [
    'Kuttam Pokuna, meaning "Twin Ponds" or "Twin Pools," represents the pinnacle of ancient Sri Lankan hydraulic engineering and architectural aesthetics. Built between the 6th and 8th centuries CE within the Abhayagiri monastery complex, these bathing tanks served the monastery\'s thousands of monks.',
    'The larger pond measures 132 feet (40 meters) in length and 51 feet (15.5 meters) in width, while the smaller one is 91 feet (28 meters) long. Both are approximately 14 feet (4.3 meters) deep. They are connected by an underground conduit, creating a unified water circulation system.',
    'The engineering is remarkably sophisticated: water entered through makara (mythical sea creature) spouts, passed through multiple filtration chambers using sand and gravel layers, ensuring crystal-clear water for ritual bathing. The drainage system prevented stagnation and flooding.',
    'The aesthetic details are breathtaking: beautifully proportioned stone steps descend into the pools, ornate five-headed cobra (naga) sculptures guard the entrances, and the precision-cut stone work showcases extraordinary craftsmanship. The serene setting, surrounded by trees and ancient ruins, makes this one of Anuradhapura\'s most peaceful and photogenic locations.'
  ],
  practicalInfo: {
    bestTime: 'Late afternoon (4-6 PM) for beautiful golden light illuminating the stone, or early morning (7-9 AM) for peaceful atmosphere with few visitors',
    entryFee: 'Included in the Anuradhapura Cultural Triangle ticket (part of Abhayagiri complex)',
    rules: ['Do not enter or touch the water - these are protected archaeological monuments', 'Watch your step on ancient stone surfaces - they can be slippery', 'Respect the historical and religious significance', 'Photography is permitted and encouraged', 'Quiet voices to maintain the peaceful atmosphere'],
    nearby: 'Abhayagiri Dagoba (5-minute walk), Samadhi Buddha statue (one of Sri Lanka\'s finest Buddha sculptures, 10-minute walk), Ratna Prasada ruins (5-minute walk)'
  },
  coordinates: {
    lat: 8.3625,
    lng: 80.3992
  },
  image: '/pic/kuttam pokuna/k1.jpg',
  gallery: [
    '/pic/kuttam pokuna/k1.jpg',
    '/pic/kuttam pokuna/k2.jpg',
    '/pic/kuttam pokuna/k3.jpg',
    '/pic/kuttam pokuna/k4.jpg'
  ]
}, {
  id: 'thuparamaya',
  name: 'Thuparamaya Stupa',
  shortDescription: 'The first Buddhist stupa built in Sri Lanka (3rd century BCE). Houses the sacred right collarbone relic of Buddha and showcases the earliest Buddhist architecture.',
  fullDescription: [
    'Thuparamaya holds the distinguished honor of being the very first dagoba (stupa) constructed in Sri Lanka following the introduction of Buddhism to the island. Built during the reign of King Devanampiya Tissa in the 3rd century BCE, it marks a pivotal moment in Sri Lankan history.',
    'This historic monument was specifically built to enshrine the right collarbone relic of the Buddha, making it one of the most sacred Buddhist relics in Sri Lanka. The relic was brought to the island by Arahat Mahinda, son of Emperor Ashoka, who introduced Buddhism to Sri Lanka.',
    'The stupa features an elegant bell-shaped design characteristic of early Buddhist architecture. It is surrounded by graceful stone pillars arranged in concentric circles, creating a unique "vatadage" (circular relic house) structure that became a template for later Sri Lankan architecture.',
    'The current structure has been restored multiple times over the centuries, with the most recent renovations preserving its white dome appearance. The site offers a serene atmosphere and represents the earliest phase of Buddhist architectural development in the country.'
  ],
  practicalInfo: {
    bestTime: 'Early morning (6-8 AM) for peaceful atmosphere, or late afternoon (4-5 PM). Less crowded than other major sites.',
    entryFee: 'Included in the Anuradhapura Cultural Triangle ticket',
    rules: ['Remove shoes before entering the sacred compound', 'Dress modestly with shoulders and knees covered', 'Walk clockwise around the stupa', 'Maintain silence and respectful behavior', 'No climbing on the structure or pillars'],
    nearby: 'Jaya Sri Maha Bodhi (5-minute walk), Brazen Palace ruins (3-minute walk), Ruvanwelisaya (10-minute walk)'
  },
  coordinates: {
    lat: 8.3441,
    lng: 80.4025
  },
  image: '/pic/thuparamaya/t1.jpg',
  gallery: [
    '/pic/thuparamaya/t1.jpg',
    '/pic/thuparamaya/t2.jpg',
    '/pic/thuparamaya/t3.jpg',
    '/pic/thuparamaya/t4.jpg'
  ]
}, {
  id: 'isurumuniya',
  name: 'Isurumuniya Temple',
  shortDescription: 'An ancient rock temple famous for exquisite 6th century stone carvings, including the celebrated "Isurumuniya Lovers" sculpture. Features water gardens and natural rock formations.',
  fullDescription: [
    'Isurumuniya Temple represents a unique blend of natural rock formations and architectural ingenuity. Carved into a massive rock outcrop, this ancient Buddhist temple dates back to the reign of King Devanampiya Tissa in the 3rd century BCE, though its most famous carvings are from the 6th century CE.',
    'The temple is world-renowned for its exquisite stone carvings, particularly the "Isurumuniya Lovers" sculpture - a romantic relief depicting a couple in intimate embrace. This masterpiece of ancient Sri Lankan art is celebrated for its naturalistic portrayal and emotional depth, unusual for religious art of its time.',
    'Other notable carvings include the "Royal Family" relief showing elephants playing in water, and the "Man and Horse" sculpture. These works demonstrate the exceptional skill of ancient stone carvers and provide insights into court life and artistic sensibilities of the period.',
    'The temple complex features beautiful water gardens with lotus ponds fed by natural springs, creating a peaceful sanctuary. The combination of rock-cut architecture, sacred space, artistic treasures, and natural beauty makes Isurumuniya one of Anuradhapura\'s most enchanting sites.'
  ],
  practicalInfo: {
    bestTime: 'Late afternoon (3-5 PM) for beautiful light on the rock carvings and pleasant temperatures',
    entryFee: 'Separate entrance fee of approximately 200 LKR (about $1 USD) for foreign tourists',
    rules: ['Remove shoes before entering temple buildings', 'Dress modestly', 'Photography allowed but be respectful near worship areas', 'Do not touch the ancient carvings', 'The famous sculptures are now housed in a museum building on site'],
    nearby: 'Tissa Wewa (ancient reservoir with sunset views, 5-minute walk), Royal Palace ruins (10-minute walk)'
  },
  coordinates: {
    lat: 8.3389,
    lng: 80.4011
  },
  image: '/pic/isurumuniya/i1.jpg',
  gallery: [
    '/pic/isurumuniya/i1.jpg',
    '/pic/isurumuniya/i2.jpg',
    '/pic/isurumuniya/i3.jpg',
    '/pic/isurumuniya/i4.jpg'
  ]
}, {
  id: 'mihintale',
  name: 'Mihintale',
  shortDescription: 'The sacred mountain where Buddhism was first introduced to Sri Lanka in 247 BCE. Located 12km from Anuradhapura, it features 1,840 steps, multiple stupas, and breathtaking views.',
  fullDescription: [
    'Mihintale is revered as the birthplace of Buddhism in Sri Lanka and one of the island\'s most sacred pilgrimage sites. It was here, in 247 BCE, that Arahat Mahinda (son of Indian Emperor Ashoka) met King Devanampiya Tissa during a royal hunting expedition and introduced Buddhism to the Sinhalese kingdom.',
    'The mountain peak sanctuary is accessed by climbing 1,840 granite steps that wind up through forest and past ancient monuments. The ascent, while challenging, is a spiritual journey that pilgrims have undertaken for over 2,200 years. Rest platforms along the way feature inscriptions and small shrines.',
    'At various levels, visitors encounter remarkable archaeological treasures: the Ambasthala Dagoba (marking the exact spot where Mahinda met the king), the Mahaseya Dagoba (containing relics of Arahat Mahinda), ancient hospital ruins with stone medicinal troughs, monks\' refectories with massive stone rice boats, and meditation caves.',
    'The summit rewards climbers with the Et Vehera dagoba and panoramic views across the ancient landscape - forests, tanks, and distant stupas of Anuradhapura. The site comes alive during Poson Poya (June full moon), when hundreds of thousands of pilgrims commemorate the arrival of Buddhism with night-long ceremonies.'
  ],
  practicalInfo: {
    bestTime: 'Very early morning (5-7 AM) before heat and crowds, or late afternoon (4-6 PM) for sunset. Avoid midday climbing. Poson Poya (June) for festivals but expect massive crowds.',
    entryFee: 'Separate ticket required (approximately 500 LKR / $2.50 USD for foreign tourists)',
    rules: ['Remove shoes at all sacred structures', 'Dress modestly with covered shoulders and knees', 'Bring water - limited facilities on the mountain', 'Allow 2-3 hours for full exploration', 'Wear comfortable shoes for climbing', 'Start early to avoid afternoon heat'],
    nearby: 'Located 12 km east of Anuradhapura (20-minute drive), Kaludiya Pokuna forest monastery (5 km away)'
  },
  coordinates: {
    lat: 8.3506,
    lng: 80.5069
  },
  image: '/pic/mihinthalaya/m1.jpg',
  gallery: [
    '/pic/mihinthalaya/m1.jpg',
    '/pic/mihinthalaya/m2.jpg',
    '/pic/mihinthalaya/m3.jpg'
  ]
}];
export const getSightById = (id: string): Sight | undefined => {
  return sightsData.find(sight => sight.id === id);
};
export const getSightJsonLd = (sight: Sight) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: sight.name,
    description: sight.shortDescription,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Anuradhapura',
      addressCountry: 'LK'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: sight.coordinates.lat,
      longitude: sight.coordinates.lng
    },
    image: sight.image,
    url: `https://anuradhapura-heritage.com/sights/${sight.id}`
  };
};