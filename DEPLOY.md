# Anuradhapura Heritage Website

A modern, responsive website showcasing the ancient city of Anuradhapura, Sri Lanka's first capital and UNESCO World Heritage Site.

## 🚀 Quick Start

### Local Development
```bash
cd Frontend
npm install
npm run dev
```

### Build for Production
```bash
cd Frontend
npm run build
```

## 📦 Deploying to Netlify

### Option 1: Netlify UI (Recommended)
1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Netlify will auto-detect the `netlify.toml` configuration
6. Click "Deploy site"

### Option 2: Netlify CLI
```bash
npm install -g netlify-cli
cd Frontend
npm run build
netlify deploy --prod
```

### Build Settings (already configured in netlify.toml)
- **Base directory:** `Frontend`
- **Build command:** `npm install && npm run build`
- **Publish directory:** `Frontend/dist`

## 🌐 Features

- ✅ Modern glassmorphism UI
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ 8 sacred monuments with detailed information
- ✅ Interactive gallery with local images
- ✅ SEO optimized
- ✅ Fast performance with Vite

## 🛠️ Tech Stack

- React 18.3.1
- TypeScript
- Vite 5.2.0
- Tailwind CSS 3.4.17
- React Router 6.26.2
- Lucide Icons

## 📝 License

© 2025 Anuradhapura Heritage
