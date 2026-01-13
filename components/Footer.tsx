import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';
import { businessInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/assets/barbershop-images/logo/family-ties-logo-v01.jpg"
                alt="Family Ties Barbershop"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="font-display text-2xl text-gold-600">FAMILY TIES</span>
            </Link>
            <p className="text-zinc-400 mb-4 max-w-md">
              North Mankato's premier barbershop. Precision cuts, expert grooming, and a commitment to style and community.
            </p>
            <div className="flex space-x-4">
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-gold-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-gold-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg text-gold-600 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-zinc-400 hover:text-white transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-zinc-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg text-gold-600 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-zinc-400">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>{businessInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-zinc-400">
                <Phone size={20} className="flex-shrink-0" />
                <a href={`tel:${businessInfo.phone}`} className="hover:text-white transition-colors">
                  {businessInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Family Ties Barbershop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

