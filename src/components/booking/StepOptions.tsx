import React from 'react';
import type { Tour } from '../../types';
import { useBooking } from '../../contexts/BookingContext';
import { useLocale } from '../../contexts/LocaleContext';
import { SINGLE_SUPPLEMENT_RATE } from '../../utils/pricing';
import { Button } from '../ui/Button';

interface StepOptionsProps {
  tour: Tour;
  onContinue: () => void;
  onBack: () => void;
}

const roomOptions = [
{ value: 'double', label: 'One double room', detail: 'Standard for couples. No supplement.' },
{ value: 'twin', label: 'Twin beds', detail: 'Two single beds in one room. No supplement.' },
{
  value: 'single',
  label: 'Single occupancy',
  detail: `One room per adult. Hotels charge close to the double rate, so a ${Math.round(SINGLE_SUPPLEMENT_RATE * 100)}% supplement applies.`
}] as
const;

export function StepOptions({ tour, onContinue, onBack }: StepOptionsProps) {
  const { draft, updateDraft } = useBooking();
  const { formatPrice } = useLocale();

  function toggleExtra(id: string) {
    updateDraft({
      extras: draft.extras.includes(id) ?
      draft.extras.filter((item) => item !== id) :
      [...draft.extras, id]
    });
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Anything to add?</h2>
        <p className="mt-2 text-ink-soft">
          Nothing here is pre-selected and nothing is required. Every price is per person and updates the total on
          the right as you choose.
        </p>
      </div>

      {tour.type === 'round' &&
      <fieldset>
          <legend className="text-sm font-semibold text-ink">Room preference</legend>
          <div className="mt-3 space-y-3">
            {roomOptions.map((option) =>
          <label
            key={option.value}
            className={[
            'flex cursor-pointer gap-3 rounded-2xl border p-4 transition-colors duration-150 ease-smooth',
            draft.roomPreference === option.value ?
            'border-jungle-600 bg-jungle-50' :
            'border-sand-200 bg-white hover:border-sand-400'].
            join(' ')}>
            
                <input
              type="radio"
              name="room"
              value={option.value}
              checked={draft.roomPreference === option.value}
              onChange={() => updateDraft({ roomPreference: option.value })}
              className="mt-1 h-4 w-4 border-sand-400 text-jungle-700 focus:ring-clay-500" />
            
                <span>
                  <span className="block text-sm font-medium text-ink">{option.label}</span>
                  <span className="mt-0.5 block text-sm text-ink-soft">{option.detail}</span>
                </span>
              </label>
          )}
          </div>
        </fieldset>
      }

      <fieldset>
        <legend className="text-sm font-semibold text-ink">Optional extras</legend>
        <div className="mt-3 space-y-3">
          {tour.extras.map((extra) =>
          <label
            key={extra.id}
            className={[
            'flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition-colors duration-150 ease-smooth',
            draft.extras.includes(extra.id) ?
            'border-jungle-600 bg-jungle-50' :
            'border-sand-200 bg-white hover:border-sand-400'].
            join(' ')}>
            
              <input
              type="checkbox"
              checked={draft.extras.includes(extra.id)}
              onChange={() => toggleExtra(extra.id)}
              className="mt-1 h-4 w-4 rounded border-sand-400 text-jungle-700 focus:ring-clay-500" />
            
              <span className="flex-1">
                <span className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-sm font-medium text-ink">{extra.label}</span>
                  <span className="text-sm font-semibold text-ink">
                    +{formatPrice(extra.pricePerPerson)} per person
                  </span>
                </span>
                <span className="mt-1 block text-sm text-ink-soft">{extra.description}</span>
              </span>
            </label>
          )}
        </div>
      </fieldset>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-ink">
          Requests for your itinerary <span className="font-normal text-ink-muted">(optional)</span>
        </span>
        <textarea
          value={draft.traveler.notes}
          onChange={(event) => updateDraft({ traveler: { ...draft.traveler, notes: event.target.value } })}
          rows={4}
          placeholder="Dietary needs, mobility considerations, a hotel you already booked, an extra stop…"
          className="w-full rounded-xl border border-sand-300 bg-white px-3.5 py-3 text-sm text-ink placeholder:text-ink-muted" />
        
      </label>

      <div className="flex flex-wrap gap-3 border-t border-sand-200 pt-6">
        <Button onClick={onContinue} size="lg" variant="accent">
          Continue to your details
        </Button>
        <Button onClick={onBack} size="lg" variant="ghost">
          Back
        </Button>
      </div>
    </div>);

}