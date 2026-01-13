'use client';

import { useState } from 'react';
import { ChevronLeft, User, Mail, Phone, MessageSquare } from 'lucide-react';
import type { BookingData } from '@/app/booking/page';

type CustomerInfoProps = {
  data: BookingData;
  onSubmit: (data: Partial<BookingData>) => void;
  onBack: () => void;
};

export default function CustomerInfo({ data, onSubmit, onBack }: CustomerInfoProps) {
  const [formData, setFormData] = useState({
    customerName: data.customerName,
    customerEmail: data.customerEmail,
    customerPhone: data.customerPhone,
    notes: data.notes,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Name is required';
    }

    if (!formData.customerEmail.trim()) {
      newErrors.customerEmail = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.customerEmail)) {
      newErrors.customerEmail = 'Invalid email format';
    }

    if (!formData.customerPhone.trim()) {
      newErrors.customerPhone = 'Phone is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.customerPhone)) {
      newErrors.customerPhone = 'Invalid phone format (e.g., 507-720-0522)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

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
        Your <span className="text-gradient">Information</span>
      </h2>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="card space-y-6">
          {/* Name */}
          <div>
            <label className="flex items-center space-x-2 text-white font-semibold mb-2">
              <User size={18} className="text-gold-600" />
              <span>Full Name *</span>
            </label>
            <input
              type="text"
              value={formData.customerName}
              onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-gold-600 focus:outline-none transition-colors"
              placeholder="John Doe"
            />
            {errors.customerName && (
              <p className="text-red-500 text-sm mt-1">{errors.customerName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center space-x-2 text-white font-semibold mb-2">
              <Mail size={18} className="text-gold-600" />
              <span>Email *</span>
            </label>
            <input
              type="email"
              value={formData.customerEmail}
              onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-gold-600 focus:outline-none transition-colors"
              placeholder="john@example.com"
            />
            {errors.customerEmail && (
              <p className="text-red-500 text-sm mt-1">{errors.customerEmail}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="flex items-center space-x-2 text-white font-semibold mb-2">
              <Phone size={18} className="text-gold-600" />
              <span>Phone *</span>
            </label>
            <input
              type="tel"
              value={formData.customerPhone}
              onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-gold-600 focus:outline-none transition-colors"
              placeholder="507-720-0522"
            />
            {errors.customerPhone && (
              <p className="text-red-500 text-sm mt-1">{errors.customerPhone}</p>
            )}
          </div>

          {/* Notes */}
          <div>
            <label className="flex items-center space-x-2 text-white font-semibold mb-2">
              <MessageSquare size={18} className="text-gold-600" />
              <span>Special Requests (Optional)</span>
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={4}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-gold-600 focus:outline-none transition-colors resize-none"
              placeholder="Any special requests or notes for your barber..."
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-primary w-full">
            Continue to Confirmation
          </button>
        </div>
      </form>
    </div>
  );
}

