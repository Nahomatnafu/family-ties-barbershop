'use client';

import { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';

type CalendlyWidgetProps = {
  barberId: string;
  onBack: () => void;
};

// Calendly URLs for each barber
const calendlyUrls: Record<string, string> = {
  alex: 'https://calendly.com/brownsuger956/30min?primary_color=ffac00',
  donnie: '', // Will add when you provide it
  ty: '', // Will add when you provide it
  mike: '', // Will add when you provide it
};

export default function CalendlyWidget({ barberId, onBack }: CalendlyWidgetProps) {
  const calendlyUrl = calendlyUrls[barberId];

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  if (!calendlyUrl) {
    return (
      <div>
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-zinc-400 hover:text-gold-600 transition-colors mb-8"
        >
          <ChevronLeft size={20} />
          <span>Back</span>
        </button>

        <div className="card text-center py-12">
          <h2 className="font-display text-3xl mb-4">
            Calendly Not Set Up Yet
          </h2>
          <p className="text-zinc-400 mb-6">
            This barber's scheduling system is being configured. Please check back soon or select a different barber.
          </p>
          <button
            onClick={onBack}
            className="btn-primary"
          >
            Choose Different Barber
          </button>
        </div>
      </div>
    );
  }

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
        Pick Your <span className="text-gradient">Date & Time</span>
      </h2>

      {/* Calendly Inline Widget */}
      <div className="card p-0 overflow-hidden">
        <div
          className="calendly-inline-widget"
          data-url={calendlyUrl}
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>

      <div className="mt-6 text-center text-zinc-400 text-sm">
        <p>After booking, you'll receive a confirmation email with all the details.</p>
      </div>
    </div>
  );
}

