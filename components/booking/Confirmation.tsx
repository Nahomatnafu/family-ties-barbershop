'use client';

import { useState } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { Check, Calendar, User, Scissors, Mail, Phone, Edit2, Loader2 } from 'lucide-react';
import type { BookingData } from '@/app/booking/page';
import { barbers, services } from '@/lib/data';

type ConfirmationProps = {
  bookingData: BookingData;
  onEdit: (step: number) => void;
};

export default function Confirmation({ bookingData, onEdit }: ConfirmationProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const barber = barbers.find(b => b.id === bookingData.barberId);
  const service = services.find(s => s.id === bookingData.serviceId);

  const handleConfirm = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        setIsConfirmed(true);
      } else {
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isConfirmed) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="card">
          <div className="bg-gold-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-black" />
          </div>
          <h2 className="font-display text-4xl mb-4">BOOKING CONFIRMED!</h2>
          <p className="text-zinc-400 text-lg mb-8">
            Your appointment has been successfully booked. You'll receive a confirmation email shortly.
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-8">
            <p className="text-white mb-2">
              <strong>Barber:</strong> {barber?.name}
            </p>
            <p className="text-white mb-2">
              <strong>Service:</strong> {service?.name}
            </p>
            <p className="text-white mb-2">
              <strong>Date:</strong> {bookingData.date && format(bookingData.date, 'EEEE, MMMM d, yyyy')}
            </p>
            <p className="text-white">
              <strong>Time:</strong> {bookingData.time}
            </p>
          </div>
          <Link href="/" className="btn-primary inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="font-display text-3xl text-center mb-8">
        Review & <span className="text-gradient">Confirm</span>
      </h2>

      <div className="card space-y-6">
        {/* Barber */}
        <div className="flex items-start justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-start space-x-3">
            <User className="text-gold-600 mt-1" size={20} />
            <div>
              <p className="text-zinc-500 text-sm">Barber</p>
              <p className="text-white font-semibold text-lg">{barber?.name}</p>
            </div>
          </div>
          <button
            onClick={() => onEdit(1)}
            className="text-gold-600 hover:text-gold-500 transition-colors"
          >
            <Edit2 size={18} />
          </button>
        </div>

        {/* Service */}
        <div className="flex items-start justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-start space-x-3">
            <Scissors className="text-gold-600 mt-1" size={20} />
            <div>
              <p className="text-zinc-500 text-sm">Service</p>
              <p className="text-white font-semibold text-lg">{service?.name}</p>
              <p className="text-zinc-400 text-sm">${service?.price} • {service?.duration} min</p>
            </div>
          </div>
          <button
            onClick={() => onEdit(2)}
            className="text-gold-600 hover:text-gold-500 transition-colors"
          >
            <Edit2 size={18} />
          </button>
        </div>

        {/* Date & Time */}
        <div className="flex items-start justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-start space-x-3">
            <Calendar className="text-gold-600 mt-1" size={20} />
            <div>
              <p className="text-zinc-500 text-sm">Date & Time</p>
              <p className="text-white font-semibold text-lg">
                {bookingData.date && format(bookingData.date, 'EEEE, MMMM d, yyyy')}
              </p>
              <p className="text-zinc-400 text-sm">{bookingData.time}</p>
            </div>
          </div>
          <button
            onClick={() => onEdit(3)}
            className="text-gold-600 hover:text-gold-500 transition-colors"
          >
            <Edit2 size={18} />
          </button>
        </div>

        {/* Customer Info */}
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <User className="text-gold-600" size={16} />
              <p className="text-white">{bookingData.customerName}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="text-gold-600" size={16} />
              <p className="text-white">{bookingData.customerEmail}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="text-gold-600" size={16} />
              <p className="text-white">{bookingData.customerPhone}</p>
            </div>
          </div>
          <button
            onClick={() => onEdit(4)}
            className="text-gold-600 hover:text-gold-500 transition-colors"
          >
            <Edit2 size={18} />
          </button>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          disabled={isSubmitting}
          className="btn-primary w-full flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              <span>Confirming...</span>
            </>
          ) : (
            <span>Confirm Booking</span>
          )}
        </button>
      </div>
    </div>
  );
}

