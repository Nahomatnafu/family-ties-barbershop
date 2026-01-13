import Link from 'next/link';
import { Scissors, Clock, DollarSign } from 'lucide-react';
import { services } from '@/lib/data';

export default function Services() {
  return (
    <section id="services" className="section-container bg-black">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">
          OUR <span className="text-gradient">SERVICES</span>
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Premium grooming services tailored to your style and needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="card group">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-gold-600/10 p-3 rounded-lg group-hover:bg-gold-600/20 transition-colors">
                <Scissors className="text-gold-600" size={24} />
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end space-x-1 text-gold-600 font-bold text-2xl">
                  <DollarSign size={20} />
                  <span>{service.price}</span>
                </div>
                <div className="flex items-center justify-end space-x-1 text-zinc-500 text-sm mt-1">
                  <Clock size={14} />
                  <span>{service.duration} min</span>
                </div>
              </div>
            </div>

            <h3 className="font-display text-2xl text-white mb-3">{service.name}</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">{service.description}</p>

            <Link
              href={`/booking?service=${service.id}`}
              className="inline-block w-full text-center bg-gold-600/10 hover:bg-gold-600 text-gold-600 hover:text-black font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Book This
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

