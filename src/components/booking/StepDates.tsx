import React, { useState } from 'react';
import { CalendarDaysIcon, CheckCircle2Icon, LoaderIcon, TriangleAlertIcon } from 'lucide-react';
import type { Tour } from '../../types';
import { useBooking } from '../../contexts/BookingContext';
import { useLocale } from '../../contexts/LocaleContext';
import { isOnRequestDate, minBookingDate } from '../../utils/pricing';
import { Button } from '../ui/Button';

type AvailabilityState = 'idle' | 'checking' | 'available' | 'on-request';

interface StepDatesProps {
  tour: Tour;
  onContinue: () => void;
}

export function StepDates({ tour, onContinue }: StepDatesProps) {
  const { draft, updateDraft } = useBooking();
  const { formatDate } = useLocale();
  const [availability, setAvailability] = useState<AvailabilityState>('idle');
  const [error, setError] = useState<string | null>(null);

  const totalTravelers = draft.adults + draft.children;

  function handleCheck() {
    if (!draft.startDate) {
      setError('Choose a start date so we can check the team and vehicles for those days.');
      return;
    }
    if (draft.adults < 1) {
      setError('At least one adult must travel on the booking.');
      return;
    }
    setError(null);
    setAvailability('checking');
    window.setTimeout(() => {
      setAvailability(isOnRequestDate(draft.startDate) ? 'on-request' : 'available');
    }, 900);
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">When would you like to travel?</h2>
        <p className="mt-2 text-ink-soft">
          Tell us your start date and who is coming. We check guide and vehicle availability before you enter any
          personal details.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium text-ink">Start date</span>
          <div className="relative max-w-xs">
            <CalendarDaysIcon
              aria-hidden="true"
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
            
            <input
              type="date"
              value={draft.startDate}
              min={minBookingDate()}
              onChange={(event) => {
                updateDraft({ startDate: event.target.value });
                setAvailability('idle');
              }}
              className="w-full rounded-xl border border-sand-300 bg-white px-3 py-3 text-sm text-ink" />
            
          </div>
          <span className="mt-1.5 block text-xs text-ink-muted">
            We need at least 7 days' notice to arrange guides, permits and hotels.
          </span>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Adults (12+)</span>
          <select
            value={draft.adults}
            onChange={(event) => {
              updateDraft({ adults: Number(event.target.value) });
              setAvailability('idle');
            }}
            className="w-full rounded-xl border border-sand-300 bg-white px-3 py-3 text-sm text-ink">
            
            {[1, 2, 3, 4, 5, 6].map((count) =>
            <option key={count} value={count}>
                {count}
              </option>
            )}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Children (2–11)</span>
          <select
            value={draft.children}
            onChange={(event) => {
              updateDraft({ children: Number(event.target.value) });
              setAvailability('idle');
            }}
            className="w-full rounded-xl border border-sand-300 bg-white px-3 py-3 text-sm text-ink">
            
            {[0, 1, 2, 3, 4].map((count) =>
            <option key={count} value={count}>
                {count}
              </option>
            )}
          </select>
          <span className="mt-1.5 block text-xs text-ink-muted">
            Children travel at 40% off the adult rate. Infants under 2 are free.
          </span>
        </label>
      </div>

      {error &&
      <p role="alert" className="flex items-start gap-2 rounded-xl border border-clay-300 bg-clay-100 p-4 text-sm text-clay-600">
          <TriangleAlertIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
          {error}
        </p>
      }

      {availability === 'available' &&
      <p className="flex items-start gap-2 rounded-xl border border-jungle-200 bg-jungle-50 p-4 text-sm text-jungle-700">
          <CheckCircle2Icon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            <strong className="font-semibold">Available.</strong> {tour.title} can start on{' '}
            {formatDate(draft.startDate)} for {totalTravelers} {totalTravelers === 1 ? 'traveller' : 'travellers'}.
          </span>
        </p>
      }

      {availability === 'on-request' &&
      <div className="rounded-xl border border-clay-300 bg-clay-100 p-4 text-sm text-ink-soft">
          <p className="flex items-start gap-2 font-medium text-clay-600">
            <TriangleAlertIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
            That date is on request, not instantly confirmable.
          </p>
          <p className="mt-2">
            Our vehicles are committed to existing departures that day. You can still continue and we will
            confirm within one working day before charging anything — or pick a different start date.
          </p>
        </div>
      }

      <div className="flex flex-wrap gap-3 border-t border-sand-200 pt-6">
        {availability === 'idle' || availability === 'checking' ?
        <Button onClick={handleCheck} size="lg" variant="accent" disabled={availability === 'checking'}>
            {availability === 'checking' &&
          <LoaderIcon aria-hidden="true" className="h-4 w-4 animate-spin" />
          }
            {availability === 'checking' ? 'Checking availability…' : 'Check availability'}
          </Button> :

        <Button onClick={onContinue} size="lg" variant="accent">
            Continue to options
          </Button>
        }
      </div>
    </div>);

}