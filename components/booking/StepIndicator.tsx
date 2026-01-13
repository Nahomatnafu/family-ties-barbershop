import { Check } from 'lucide-react';

type Step = {
  number: number;
  title: string;
};

type StepIndicatorProps = {
  steps: Step[];
  currentStep: number;
};

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="relative">
      {/* Progress Line */}
      <div className="absolute top-5 left-0 right-0 h-0.5 bg-zinc-800">
        <div
          className="h-full bg-gold-600 transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />
      </div>

      {/* Steps */}
      <div className="relative flex justify-between">
        {steps.map((step) => {
          const isCompleted = step.number < currentStep;
          const isCurrent = step.number === currentStep;

          return (
            <div key={step.number} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  isCompleted
                    ? 'bg-gold-600 text-black'
                    : isCurrent
                    ? 'bg-gold-600 text-black ring-4 ring-gold-600/30'
                    : 'bg-zinc-800 text-zinc-500'
                }`}
              >
                {isCompleted ? <Check size={20} /> : step.number}
              </div>
              <span
                className={`mt-2 text-xs sm:text-sm font-medium transition-colors ${
                  isCurrent ? 'text-gold-600' : isCompleted ? 'text-white' : 'text-zinc-500'
                }`}
              >
                {step.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

