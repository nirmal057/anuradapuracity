import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
export function Footer() {
  return <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              Anuradhapura — Ancient City
            </h3>
            <p className="text-gray-300 mb-4">
              Discover the sacred stupas, ancient monasteries, and rich heritage
              of Sri Lanka's first capital. A UNESCO World Heritage site with
              over 2,000 years of history.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <MapPin size={16} />
              <span>North Central Province, Sri Lanka</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/sights" className="text-gray-300 hover:text-accent transition-colors">
                  Main Sights
                </Link>
              </li>
              <li>
                <Link to="/plan" className="text-gray-300 hover:text-accent transition-colors">
                  Plan Your Visit
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-accent transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Book a Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:info@anuradhapura-heritage.com" className="hover:text-accent transition-colors">
                  info@anuradhapura-heritage.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+94251234567" className="hover:text-accent transition-colors">
                  +94 25 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-sm text-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              © {new Date().getFullYear()} Anuradhapura Heritage Tourism. All
              rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <span>Images: Unsplash</span>
              <span>•</span>
              <a href="https://whc.unesco.org/en/list/200/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                UNESCO World Heritage
              </a>
              <span>•</span>
              <a href="https://en.wikipedia.org/wiki/Anuradhapura" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                Wikipedia
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}