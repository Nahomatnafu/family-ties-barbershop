'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/booking', label: 'Book Now' },
    { href: '/#services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/#about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/assets/barbershop-images/logo/family-ties-logo-v01.jpg"
              alt="Family Ties Barbershop"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="font-display text-2xl text-gold-600">FAMILY TIES</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-gold-600 transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:507-720-0522" className="flex items-center space-x-2 text-white hover:text-gold-600 transition-colors">
              <Phone size={18} />
              <span className="font-medium">507-720-0522</span>
            </a>
            <Link href="/booking" className="btn-primary">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-gold-600 transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-md border-t border-zinc-800">
          <nav className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white hover:text-gold-600 transition-colors py-2 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:507-720-0522"
              className="flex items-center space-x-2 text-white hover:text-gold-600 transition-colors py-2"
            >
              <Phone size={18} />
              <span className="font-medium">507-720-0522</span>
            </a>
            <Link
              href="/booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block btn-primary text-center mt-4"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

