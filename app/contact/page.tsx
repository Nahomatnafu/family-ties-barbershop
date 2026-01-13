'use client';

import { useState } from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Send } from 'lucide-react';
import { businessInfo } from '@/lib/data';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">
            GET IN <span className="text-gradient">TOUCH</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Have questions? Want to book? Reach out to us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card">
            <h2 className="font-display text-3xl mb-6">Send Us a Message</h2>
            
            {isSubmitted && (
              <div className="bg-gold-600/10 border border-gold-600 text-gold-600 rounded-lg p-4 mb-6">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-gold-600 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-gold-600 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-gold-600 focus:outline-none transition-colors"
                  placeholder="507-720-0522"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Message *</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-gold-600 focus:outline-none transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <Send size={18} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="bg-gold-600/10 p-4 rounded-lg flex-shrink-0">
                  <MapPin className="text-gold-600" size={28} />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white mb-2">Visit Us</h3>
                  <p className="text-zinc-300 mb-2">{businessInfo.address}</p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(businessInfo.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-600 hover:text-gold-500 font-semibold"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="bg-gold-600/10 p-4 rounded-lg flex-shrink-0">
                  <Phone className="text-gold-600" size={28} />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white mb-2">Call Us</h3>
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="text-zinc-300 text-lg hover:text-gold-600 transition-colors"
                  >
                    {businessInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="bg-gold-600/10 p-4 rounded-lg flex-shrink-0">
                  <Clock className="text-gold-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl text-white mb-3">Hours</h3>
                  <div className="space-y-2 text-zinc-300">
                    <div className="flex justify-between">
                      <span className="font-semibold">Mon - Fri</span>
                      <span>{businessInfo.hours.monday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Saturday</span>
                      <span>{businessInfo.hours.saturday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Sunday</span>
                      <span className="text-zinc-500">{businessInfo.hours.sunday}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="card">
              <h3 className="font-display text-2xl text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href={businessInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-600/10 hover:bg-gold-600 text-gold-600 hover:text-black p-4 rounded-lg transition-all"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href={businessInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-600/10 hover:bg-gold-600 text-gold-600 hover:text-black p-4 rounded-lg transition-all"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="h-[400px] rounded-lg overflow-hidden border border-zinc-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2844.5!2d-94.0372!3d44.1686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f7d4e8e8e8e8e8%3A0x0!2s407%20Range%20St%2C%20North%20Mankato%2C%20MN!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

