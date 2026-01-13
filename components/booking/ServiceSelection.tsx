import { Check, Clock, DollarSign, ChevronLeft } from 'lucide-react';
import { services } from '@/lib/data';

type ServiceSelectionProps = {
  selectedServiceId: string | null;
  onSelect: (serviceId: string) => void;
  onBack: () => void;
};

export default function ServiceSelection({ selectedServiceId, onSelect, onBack }: ServiceSelectionProps) {
  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-zinc-400 hover:text-gold-600 transition-colors mb-8"
      >
        <ChevronLeft size={20} />
        <span>Back</span>
      </button>

      <h2 className="font-display text-3xl text-center mb-8">
        Select Your <span className="text-gradient">Service</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => {
          const isSelected = selectedServiceId === service.id;

          return (
            <button
              key={service.id}
              onClick={() => onSelect(service.id)}
              className={`card text-left relative transition-all duration-300 ${
                isSelected ? 'ring-2 ring-gold-600 bg-gold-600/5' : 'hover:border-gold-600/50'
              }`}
            >
              {/* Selected Indicator */}
              {isSelected && (
                <div className="absolute top-4 right-4 bg-gold-600 text-black rounded-full p-1">
                  <Check size={16} />
                </div>
              )}

              {/* Service Info */}
              <h3 className="font-display text-2xl text-white mb-2">{service.name}</h3>
              <p className="text-zinc-400 text-sm mb-4">{service.description}</p>

              {/* Price & Duration */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <div className="flex items-center space-x-1 text-gold-600 font-bold text-xl">
                  <DollarSign size={18} />
                  <span>{service.price}</span>
                </div>
                <div className="flex items-center space-x-1 text-zinc-400 text-sm">
                  <Clock size={16} />
                  <span>{service.duration} min</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

