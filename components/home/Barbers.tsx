import Link from 'next/link';
import Image from 'next/image';
import { barbers } from '@/lib/data';

export default function Barbers() {
  return (
    <section id="barbers" className="section-container bg-black">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">
          MEET THE <span className="text-gradient">BARBERS</span>
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Four master barbers, one commitment: delivering the best cut every time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {barbers.map((barber) => (
          <div key={barber.id} className="card group">
            {/* Barber Image */}
            <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
              <Image
                src={barber.image}
                alt={barber.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            {/* Barber Info */}
            <h3 className="font-display text-3xl text-white mb-2">{barber.name}</h3>
            <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{barber.bio}</p>

            {/* Specialties */}
            <div className="mb-4">
              <p className="text-gold-600 font-semibold text-xs uppercase mb-2">Specialties</p>
              <div className="flex flex-wrap gap-2">
                {barber.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="bg-gold-600/10 text-gold-600 text-xs px-3 py-1 rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Book Button */}
            <Link
              href={`/booking?barber=${barber.id}`}
              className="inline-block w-full text-center bg-gold-600/10 hover:bg-gold-600 text-gold-600 hover:text-black font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Book with {barber.name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

