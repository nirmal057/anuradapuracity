import React, { useState, Component } from 'react';
import { Button } from './ui/Button';
import { MessageSquare } from 'lucide-react';
export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    groupSize: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };
  const whatsappUrl = `https://wa.me/94251234567?text=${encodeURIComponent(`Hi, I want to book a guide for Anuradhapura on ${formData.date || '[date]'}`)}`;
  return <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Guide</h2>

      {submitted && <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          Thank you! We'll contact you soon to confirm your booking.
        </div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number (optional)
            </label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Date *
            </label>
            <input type="date" id="date" name="date" required value={formData.date} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" />
          </div>
        </div>

        <div>
          <label htmlFor="groupSize" className="block text-sm font-medium text-gray-700 mb-2">
            Group Size *
          </label>
          <select id="groupSize" name="groupSize" required value={formData.groupSize} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors">
            <option value="">Select group size</option>
            <option value="1-2">1-2 people</option>
            <option value="3-5">3-5 people</option>
            <option value="6-10">6-10 people</option>
            <option value="10+">More than 10 people</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Additional Information
          </label>
          <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Tell us about your interests, special requirements, or questions..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button type="submit" variant="primary" className="flex-1">
            Submit Request
          </Button>
          <Button href={whatsappUrl} variant="secondary" className="flex-1 bg-green-600 hover:bg-green-700 focus:ring-green-600">
            <MessageSquare size={18} className="mr-2" />
            Quick WhatsApp
          </Button>
        </div>
      </form>
    </div>;
}