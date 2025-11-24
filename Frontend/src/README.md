# Anuradhapura — Ancient City Tourism Website

A complete, fast, and mobile-friendly tourism website for Anuradhapura, Sri Lanka's ancient capital and UNESCO World Heritage site.

## Features

- **Responsive Design**: Mobile-first, works perfectly on all devices
- **7 Main Pages**: Home, About, Sights, Sight Details, Plan Visit, Gallery, Contact
- **Interactive Map**: Leaflet integration with OpenStreetMap (no API costs)
- **SEO Optimized**: Meta tags, Open Graph, JSON-LD structured data
- **Accessible**: WCAG AA compliant, keyboard navigation, alt text
- **Fast Performance**: Lazy loading, optimized images, minimal dependencies
- **Contact Forms**: Email form + WhatsApp quick booking

## Tech Stack

- **React 18** with TypeScript
- **React Router v6** for navigation
- **Tailwind CSS** for styling
- **Leaflet** for interactive maps
- **React Helmet** for SEO
- **Framer Motion** for smooth animations

## Project Structure

```
/src
  /components
    /layout
      Header.tsx          # Navigation with mobile menu
      Footer.tsx          # Footer with links and credits
      Layout.tsx          # Main layout wrapper
    /ui
      Button.tsx          # Reusable button component
      Card.tsx            # Sight card component
      SEO.tsx             # SEO meta tags helper
    SightHero.tsx         # Hero section for sight details
    ContactForm.tsx       # Contact/booking form
    Gallery.tsx           # Photo gallery with lightbox
    Map.tsx               # Interactive Leaflet map
  /pages
    HomePage.tsx          # Landing page
    AboutPage.tsx         # History and significance
    SightsPage.tsx        # Grid of all sights
    SightDetailPage.tsx   # Individual sight details
    PlanVisitPage.tsx     # Visitor information
    GalleryPage.tsx       # Photo gallery
    ContactPage.tsx       # Contact and booking
  /data
    sightsData.ts         # Content for all 5 main sights
    galleryData.ts        # Gallery images with captions
  App.tsx                 # Router setup
  index.tsx               # Entry point
  index.css               # Global styles + fonts
```

## Content Included

### 5 Major Sights (with full detail pages):
1. **Jaya Sri Maha Bodhi** - Sacred Bodhi tree (236 BC)
2. **Ruwanwelisaya** - Great white stupa
3. **Jetavanaramaya** - Massive brick stupa
4. **Abhayagiri Monastery** - Extensive monastery complex
5. **Kuttam Pokuna** - Twin Ponds

### Each Sight Includes:
- Hero image with coordinates
- Full historical description (4 paragraphs)
- Practical information (best time, fees, rules, nearby sites)
- Photo gallery (3 images)
- JSON-LD structured data
- "Get Directions" button to Google Maps

### Additional Features:
- Suggested itineraries (half-day and full-day)
- Transport guide (tuk-tuk, bicycle, taxi)
- Dress code and etiquette
- Safety tips
- Interactive map with all site markers
- Photo gallery (12 images with captions)
- Contact form with WhatsApp integration
- FAQ section

## Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn

### Install Dependencies

```bash
npm install react-router-dom
npm install react-helmet
npm install leaflet react-leaflet
npm install @types/leaflet
npm install lucide-react
```

### Development

```bash
npm start
```

The site will open at `http://localhost:3000`

## Deployment

### Option 1: Netlify (Recommended)

1. Push code to GitHub repository
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
4. Deploy!

### Option 2: Vercel

1. Push code to GitHub repository
2. Import project in Vercel
3. Deploy automatically

### Option 3: GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/anuradhapura",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## Content Management

### To Update Sight Information:
Edit `/src/data/sightsData.ts`

### To Update Gallery Images:
Edit `/src/data/galleryData.ts`

### To Update Contact Information:
Edit `/src/components/layout/Footer.tsx` and `/src/pages/ContactPage.tsx`

## Image Optimization

Current images are from Unsplash. For production:

1. **Replace with your own photos** for authenticity
2. **Optimize images**:
   - Hero images: 1920x1080px, 150-300KB (WebP format)
   - Sight images: 800x600px, 80-150KB
   - Thumbnails: 400x300px, 40-80KB
3. **Use image CDN** like Cloudinary or imgix for automatic optimization
4. **Add proper alt text** for accessibility

## SEO Checklist

- ✅ Meta titles and descriptions on all pages
- ✅ Open Graph tags for social sharing
- ✅ JSON-LD structured data for sights
- ✅ Canonical URLs
- ✅ Semantic HTML (h1, h2, h3 hierarchy)
- ✅ Alt text for all images
- ✅ Mobile-friendly and responsive
- ✅ Fast loading times

### To Add Google Analytics:

1. Get your GA4 tracking ID
2. Add to `public/index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Accessibility Features

- ✅ Semantic HTML structure
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Focus visible on interactive elements
- ✅ Color contrast WCAG AA compliant
- ✅ Alt text for all images
- ✅ Responsive text sizing
- ✅ Skip to main content link (can be added)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Enable compression** on your hosting (Gzip/Brotli)
2. **Use CDN** for static assets
3. **Enable caching** headers
4. **Lazy load images** (already implemented)
5. **Minify CSS/JS** (automatic in production build)

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: '#C84B31',    // Terracotta
  secondary: '#2D4739',  // Deep green
  accent: '#D4A574',     // Warm gold
}
```

### Fonts
Edit `index.css` to change fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

### Layout
Edit `components/layout/Layout.tsx` for global layout changes

## Support & Maintenance

### Regular Updates Needed:
- Ticket prices (check annually)
- Contact information
- Opening hours
- New attractions or sites
- Gallery images

### Technical Maintenance:
- Update dependencies: `npm update`
- Security patches: `npm audit fix`
- Test on new browser versions

## Credits & Sources

- **Historical Information**: UNESCO World Heritage Centre, Wikipedia
- **Images**: Unsplash (replace with your own for production)
- **Maps**: OpenStreetMap via Leaflet
- **Icons**: Lucide React

## License

This project is provided as-is for tourism promotion of Anuradhapura. Please ensure you have proper rights to any images used in production.

## Contact

For technical support or questions about this website:
- Email: info@anuradhapura-heritage.com
- Phone: +94 25 123 4567

---

Built with ❤️ for promoting Sri Lanka's cultural heritage