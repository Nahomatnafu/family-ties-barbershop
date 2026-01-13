'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { businessInfo } from '@/lib/data';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/barbershop-images/barbershop-image-001.jpg"
          alt="Family Ties Barbershop"
          fill
          priority
          quality={90}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight">
          <span className="text-white">PRECISION.</span>{' '}
          <span className="text-gradient">STYLE.</span>{' '}
          <span className="text-white">FAMILY.</span>
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-zinc-300 mb-12 max-w-3xl mx-auto font-light">
          North Mankato's home for premium haircuts and grooming.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/booking"
            className="btn-primary w-full sm:w-auto text-lg px-10 py-4"
          >
            Book Appointment
          </Link>
          <a
            href={`tel:${businessInfo.phone}`}
            className="btn-secondary w-full sm:w-auto text-lg px-10 py-4 flex items-center justify-center space-x-2"
          >
            <Phone size={20} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold-600 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gold-600 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

