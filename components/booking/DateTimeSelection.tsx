'use client';

import { useState } from 'react';
import { ChevronLeft, Calendar, Clock } from 'lucide-react';
import { format, addDays, isSameDay } from 'date-fns';

type DateTimeSelectionProps = {
  barberId: string;
  selectedDate: Date | null;
  selectedTime: string | null;
  onSelect: (date: Date, time: string) => void;
  onBack: () => void;
};

export default function DateTimeSelection({
  barberId,
  selectedDate,
  selectedTime,
  onSelect,
  onBack,
}: DateTimeSelectionProps) {
  const [currentDate, setCurrentDate] = useState<Date | null>(selectedDate);

  // Generate next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => addDays(new Date(), i));

  // Available time slots (9 AM - 7 PM, every 30 minutes)
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM',
  ];

  const handleTimeSelect = (time: string) => {
    if (currentDate) {
      onSelect(currentDate, time);
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
        Pick <span className="text-gradient">Date & Time</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Date Selection */}
        <div className="card">
          <div className="flex items-center space-x-2 mb-4">
            <Calendar className="text-gold-600" size={20} />
            <h3 className="font-display text-xl">Select Date</h3>
          </div>
          <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
            {dates.map((date) => {
              const isSelected = currentDate && isSameDay(date, currentDate);
              const isSunday = date.getDay() === 0;

              return (
                <button
                  key={date.toISOString()}
                  onClick={() => !isSunday && setCurrentDate(date)}
                  disabled={isSunday}
                  className={`p-4 rounded-lg border transition-all ${
                    isSunday
                      ? 'bg-zinc-900/50 border-zinc-800 text-zinc-600 cursor-not-allowed'
                      : isSelected
                      ? 'bg-gold-600 border-gold-600 text-black'
                      : 'bg-zinc-900 border-zinc-800 text-white hover:border-gold-600'
                  }`}
                >
                  <div className="text-sm font-semibold">{format(date, 'EEE')}</div>
                  <div className="text-2xl font-bold">{format(date, 'd')}</div>
                  <div className="text-xs">{format(date, 'MMM')}</div>
                  {isSunday && <div className="text-xs mt-1">Closed</div>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Selection */}
        <div className="card">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="text-gold-600" size={20} />
            <h3 className="font-display text-xl">Select Time</h3>
          </div>
          {!currentDate ? (
            <p className="text-zinc-500 text-center py-8">Please select a date first</p>
          ) : (
            <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
              {timeSlots.map((time) => {
                const isSelected = selectedTime === time;

                return (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className={`p-3 rounded-lg border transition-all ${
                      isSelected
                        ? 'bg-gold-600 border-gold-600 text-black font-bold'
                        : 'bg-zinc-900 border-zinc-800 text-white hover:border-gold-600'
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

