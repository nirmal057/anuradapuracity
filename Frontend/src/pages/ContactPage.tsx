import React from 'react';
import { SEO } from '../components/ui/SEO';
import { ContactForm } from '../components/ContactForm';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
export function ContactPage() {
  return <>
      <SEO title="Book a Guide" description="Contact us to book an experienced local guide for your Anuradhapura visit. Get personalized tours with deep historical insights." url="https://anuradhapura-heritage.com/contact" />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://live.staticflickr.com/65535/53561515595_c8e7c5e8a7_k.jpg" alt="Book a guide for Anuradhapura" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            Book a Local Guide
          </h1>
          <p className="text-xl text-white/95 max-w-2xl mx-auto">
            Experience Anuradhapura with knowledgeable guides who bring history
            to life
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-8 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Phone
                      </h3>
                      <a href="tel:+94251234567" className="text-gray-600 hover:text-primary transition-colors">
                        +94 25 123 4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Email
                      </h3>
                      <a href="mailto:info@anuradhapura-heritage.com" className="text-gray-600 hover:text-primary transition-colors break-all">
                        info@anuradhapura-heritage.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MessageSquare className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        WhatsApp
                      </h3>
                      <a href="https://wa.me/94251234567" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                        Chat with us instantly
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Location
                      </h3>
                      <p className="text-gray-600">
                        Anuradhapura
                        <br />
                        North Central Province
                        <br />
                        Sri Lanka
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Why Book a Guide?
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Deep historical knowledge and local insights</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Navigate sites efficiently and avoid crowds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Learn stories and legends not in guidebooks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Customized tours based on your interests</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How much does a guide cost?
              </h3>
              <p className="text-gray-600">
                Guide fees vary based on group size and tour duration. Half-day
                tours typically range from $30-50 USD, while full-day tours are
                $60-100 USD. Contact us for exact pricing.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do guides speak English?
              </h3>
              <p className="text-gray-600">
                Yes, all our recommended guides are fluent in English. Many also
                speak other languages including German, French, and Japanese.
                Let us know your language preference when booking.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How far in advance should I book?
              </h3>
              <p className="text-gray-600">
                We recommend booking at least 2-3 days in advance, especially
                during peak tourist season (December-March). However, we can
                often accommodate last-minute requests.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What's included in the tour?
              </h3>
              <p className="text-gray-600">
                Guide services include historical commentary, site navigation,
                and local insights. Transportation, entrance fees, and meals are
                typically not included but can be arranged.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can tours be customized?
              </h3>
              <p className="text-gray-600">
                Absolutely! We can tailor tours to your interests, whether
                you're focused on archaeology, Buddhism, photography, or
                specific sites. Just let us know your preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>;
}