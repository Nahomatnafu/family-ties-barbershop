'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import StepIndicator from '@/components/booking/StepIndicator';
import BarberSelection from '@/components/booking/BarberSelection';
import ServiceSelection from '@/components/booking/ServiceSelection';
import DateTimeSelection from '@/components/booking/DateTimeSelection';
import CustomerInfo from '@/components/booking/CustomerInfo';
import Confirmation from '@/components/booking/Confirmation';

export type BookingData = {
  barberId: string | null;
  serviceId: string | null;
  date: Date | null;
  time: string | null;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  notes: string;
};

function BookingContent() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    barberId: null,
    serviceId: null,
    date: null,
    time: null,
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    notes: '',
  });

  // Pre-fill from URL params
  useEffect(() => {
    const barber = searchParams.get('barber');
    const service = searchParams.get('service');

    if (barber || service) {
      setBookingData(prev => ({
        ...prev,
        ...(barber && { barberId: barber }),
        ...(service && { serviceId: service }),
      }));
    }
  }, [searchParams]);

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const steps = [
    { number: 1, title: 'Choose Barber' },
    { number: 2, title: 'Select Service' },
    { number: 3, title: 'Pick Date & Time' },
    { number: 4, title: 'Your Info' },
    { number: 5, title: 'Confirmation' },
  ];

  return (
    <div className="min-h-screen bg-black pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">
            BOOK YOUR <span className="text-gradient">APPOINTMENT</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            Follow the steps below to schedule your visit
          </p>
        </div>

        {/* Step Indicator */}
        <StepIndicator steps={steps} currentStep={currentStep} />

        {/* Step Content */}
        <div className="mt-12">
          {currentStep === 1 && (
            <BarberSelection
              selectedBarberId={bookingData.barberId}
              onSelect={(barberId) => {
                updateBookingData({ barberId });
                nextStep();
              }}
            />
          )}

          {currentStep === 2 && (
            <ServiceSelection
              selectedServiceId={bookingData.serviceId}
              onSelect={(serviceId) => {
                updateBookingData({ serviceId });
                nextStep();
              }}
              onBack={prevStep}
            />
          )}

          {currentStep === 3 && (
            <DateTimeSelection
              barberId={bookingData.barberId!}
              selectedDate={bookingData.date}
              selectedTime={bookingData.time}
              onSelect={(date, time) => {
                updateBookingData({ date, time });
                nextStep();
              }}
              onBack={prevStep}
            />
          )}

          {currentStep === 4 && (
            <CustomerInfo
              data={bookingData}
              onSubmit={(data) => {
                updateBookingData(data);
                nextStep();
              }}
              onBack={prevStep}
            />
          )}

          {currentStep === 5 && (
            <Confirmation
              bookingData={bookingData}
              onEdit={(step) => setCurrentStep(step)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black pt-32 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-600 mx-auto mb-4"></div>
          <p className="text-zinc-400">Loading booking system...</p>
        </div>
      </div>
    }>
      <BookingContent />
    </Suspense>
  );
}
