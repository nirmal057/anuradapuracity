export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B4513', // Ancient Saddle Brown
          dark: '#654321',
          light: '#A0522D',
          50: '#FDF5E6',
          100: '#F5E6D3',
          200: '#E8CDA8',
          300: '#DBB47D',
          400: '#CD9B52',
          500: '#8B4513',
          600: '#6D3610',
          700: '#4F270C',
          800: '#321808',
          900: '#1E0F05',
        },
        secondary: {
          DEFAULT: '#2C1810', // Deep Ancient Brown
          dark: '#1A0F0A',
          light: '#3D2314',
        },
        accent: {
          DEFAULT: '#CD853F', // Ancient Peru Gold
          dark: '#B8895E',
          light: '#DEB887',
          50: '#FFF8F0',
          100: '#FFEFD6',
          200: '#FFE0AD',
          300: '#FFD084',
          400: '#FFC15B',
          500: '#CD853F',
          600: '#B87333',
          700: '#8B5A2B',
          800: '#5E3C1C',
          900: '#321E0E',
        },
        ancient: {
          stone: '#D2B48C', // Tan stone
          bronze: '#CD7F32',
          terracotta: '#E2725B',
          sage: '#9CAF88',
          ochre: '#CC7722',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Cinzel', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'ancient-gradient': 'linear-gradient(135deg, #f5f5f4 0%, #e7e5e4 50%, #d6d3d1 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(139, 69, 19, 0.9) 0%, rgba(44, 24, 16, 0.85) 100%)',
        'stone-pattern': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\"><rect fill=\"%23f5f5f4\" width=\"100\" height=\"100\"/><circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"none\" stroke=\"%238B4513\" stroke-width=\"0.5\" opacity=\"0.1\"/></svg>')",
        'mesh-gradient': 'radial-gradient(at 40% 20%, rgba(205, 133, 63, 0.25) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139, 69, 19, 0.25) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(210, 180, 140, 0.25) 0px, transparent 50%)',
      },
      boxShadow: {
        'ancient': '0 4px 6px -1px rgba(139, 69, 19, 0.1), 0 2px 4px -1px rgba(139, 69, 19, 0.06)',
        'ancient-lg': '0 10px 15px -3px rgba(139, 69, 19, 0.1), 0 4px 6px -2px rgba(139, 69, 19, 0.05)',
        'glass': '0 8px 32px 0 rgba(139, 69, 19, 0.1)',
        'glow': '0 0 20px rgba(205, 133, 63, 0.3), 0 0 40px rgba(205, 133, 63, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}