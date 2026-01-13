import { MapPin, Phone, Clock } from 'lucide-react';
import { businessInfo } from '@/lib/data';

export default function Location() {
  return (
    <section id="location" className="section-container bg-zinc-950">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">
          VISIT <span className="text-gradient">US</span>
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Located in the heart of North Mankato. Stop by or book ahead.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map */}
        <div className="h-[400px] lg:h-[500px] rounded-lg overflow-hidden border border-zinc-800">
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

        {/* Info */}
        <div className="flex flex-col justify-center space-y-8">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <div className="bg-gold-600/10 p-4 rounded-lg flex-shrink-0">
              <MapPin className="text-gold-600" size={28} />
            </div>
            <div>
              <h3 className="font-display text-2xl text-white mb-2">Address</h3>
              <p className="text-zinc-300 text-lg">{businessInfo.address}</p>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(businessInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-gold-600 hover:text-gold-500 font-semibold"
              >
                Get Directions →
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <div className="bg-gold-600/10 p-4 rounded-lg flex-shrink-0">
              <Phone className="text-gold-600" size={28} />
            </div>
            <div>
              <h3 className="font-display text-2xl text-white mb-2">Phone</h3>
              <a
                href={`tel:${businessInfo.phone}`}
                className="text-zinc-300 text-lg hover:text-gold-600 transition-colors"
              >
                {businessInfo.phone}
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start space-x-4">
            <div className="bg-gold-600/10 p-4 rounded-lg flex-shrink-0">
              <Clock className="text-gold-600" size={28} />
            </div>
            <div>
              <h3 className="font-display text-2xl text-white mb-3">Hours</h3>
              <div className="space-y-2 text-zinc-300">
                <div className="flex justify-between gap-8">
                  <span className="font-semibold">Mon - Fri</span>
                  <span>{businessInfo.hours.monday}</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span className="font-semibold">Saturday</span>
                  <span>{businessInfo.hours.saturday}</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span className="font-semibold">Sunday</span>
                  <span className="text-zinc-500">{businessInfo.hours.sunday}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

