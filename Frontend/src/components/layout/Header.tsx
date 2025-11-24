import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/about',
    label: 'About'
  }, {
    path: '/sights',
    label: 'Sights'
  }, {
    path: '/plan',
    label: 'Plan Visit'
  }, {
    path: '/gallery',
    label: 'Gallery'
  }, {
    path: '/contact',
    label: 'Book Guide'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                Anuradhapura
              </div>
              <div className="text-xs text-gray-500">Ancient City</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(link.path) ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                {link.label}
              </Link>)}
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden py-4 border-t">
            {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive(link.path) ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                {link.label}
              </Link>)}
          </nav>}
      </div>
    </header>;
}