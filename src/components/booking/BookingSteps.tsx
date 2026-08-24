import React from 'react';
import { CheckIcon } from 'lucide-react';

interface BookingStepsProps {
  steps: string[];
  current: number;
  onSelect: (index: number) => void;
  furthestReached: number;
}

export function BookingSteps({ steps, current, onSelect, furthestReached }: BookingStepsProps) {
  return (
    <nav aria-label="Booking progress">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-3">
        {steps.map((label, index) => {
          const isComplete = index < current;
          const isCurrent = index === current;
          const canNavigate = index <= furthestReached;
          return (
            <li key={label} className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => canNavigate && onSelect(index)}
                disabled={!canNavigate}
                aria-current={isCurrent ? 'step' : undefined}
                className={[
                'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors duration-150 ease-smooth',
                isCurrent ?
                'border-jungle-800 bg-jungle-800 font-semibold text-sand-50' :
                isComplete ?
                'border-jungle-200 bg-jungle-50 text-jungle-700 hover:border-jungle-600' :
                'border-sand-300 bg-white text-ink-muted',
                canNavigate ? 'cursor-pointer' : 'cursor-not-allowed'].
                join(' ')}>
                
                <span
                  className={[
                  'inline-flex h-5 w-5 items-center justify-center rounded-full text-xs font-semibold',
                  isCurrent ? 'bg-white/20 text-sand-50' : isComplete ? 'bg-jungle-700 text-white' : 'bg-sand-200 text-ink-muted'].
                  join(' ')}>
                  
                  {isComplete ? <CheckIcon aria-hidden="true" className="h-3 w-3" /> : index + 1}
                </span>
                {label}
              </button>
              {index < steps.length - 1 &&
              <span aria-hidden="true" className="hidden h-px w-5 bg-sand-300 sm:block" />
              }
            </li>);

        })}
      </ol>
    </nav>);

}