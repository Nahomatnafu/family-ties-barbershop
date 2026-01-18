'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const galleryImages = [
  '/assets/barbershop-images/barbershop-image-001.jpg',
  '/assets/barbershop-images/alex/alex_cut_01.jpg',
  '/assets/barbershop-images/barbershop-image-003.jpg',
  '/assets/barbershop-images/barbershop-image-004.jpg',
  '/assets/barbershop-images/barbershop-image-005.jpg',
  '/assets/barbershop-images/barbershop-image-006.jpg',
  '/assets/barbershop-images/barbershop-image-007.jpg',
  '/assets/barbershop-images/barbershop-image-011.jpg',
  '/assets/barbershop-images/barbershop-image-012.jpg',
  '/assets/barbershop-images/barbershop-image-013.jpg',
  '/assets/barbershop-images/barbershop-image-014.jpg',
  '/assets/barbershop-images/barbershop-image-015.jpg',
  '/assets/barbershop-images/barbershop-image-016.jpg',
  '/assets/barbershop-images/barbershop-image-017.jpg',
  '/assets/barbershop-images/barbershop-image-018.jpg',
  '/assets/barbershop-images/barbershop-image-019.jpg',
  '/assets/barbershop-images/barbershop-image-020.jpg',
  '/assets/barbershop-images/barbershop-image-021.jpg',
  '/assets/barbershop-images/barbershop-image-022.jpg',
  '/assets/barbershop-images/barbershop-image-024.jpeg',
  '/assets/barbershop-images/barbershop-image-025.jpeg',
  '/assets/barbershop-images/barbershop-image-026.jpeg',
  '/assets/barbershop-images/barbershop-image-027.jpeg',
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">
            OUR <span className="text-gradient">WORK</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Precision cuts, expert fades, and premium grooming. See the Family Ties difference.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gold-600 transition-colors"
            >
              <X size={32} />
            </button>
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
              <Image
                src={selectedImage}
                alt="Selected image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

