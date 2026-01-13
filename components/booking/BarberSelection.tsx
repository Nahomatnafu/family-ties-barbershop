import Image from 'next/image';
import { Check } from 'lucide-react';
import { barbers } from '@/lib/data';

type BarberSelectionProps = {
  selectedBarberId: string | null;
  onSelect: (barberId: string) => void;
};

export default function BarberSelection({ selectedBarberId, onSelect }: BarberSelectionProps) {
  return (
    <div>
      <h2 className="font-display text-3xl text-center mb-8">
        Choose Your <span className="text-gradient">Barber</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {barbers.map((barber) => {
          const isSelected = selectedBarberId === barber.id;

          return (
            <button
              key={barber.id}
              onClick={() => onSelect(barber.id)}
              className={`card text-left relative overflow-hidden transition-all duration-300 ${
                isSelected ? 'ring-2 ring-gold-600 bg-gold-600/5' : 'hover:border-gold-600/50'
              }`}
            >
              {/* Selected Indicator */}
              {isSelected && (
                <div className="absolute top-4 right-4 bg-gold-600 text-black rounded-full p-1">
                  <Check size={16} />
                </div>
              )}

              {/* Barber Image */}
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={barber.image}
                  alt={barber.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>

              {/* Barber Info */}
              <h3 className="font-display text-2xl text-white mb-2">{barber.name}</h3>
              <p className="text-zinc-400 text-sm mb-3">{barber.bio}</p>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2">
                {barber.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="bg-gold-600/10 text-gold-600 text-xs px-2 py-1 rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

