import React from 'react';
import { PencilIcon } from 'lucide-react';
import type { Tour } from '../../types';
import { useBooking } from '../../contexts/BookingContext';
import { useLocale } from '../../contexts/LocaleContext';
import { buildQuote, isOnRequestDate } from '../../utils/pricing';
import { Button } from '../ui/Button';

interface StepReviewProps {
  tour: Tour;
  onContinue: () => void;
  onBack: () => void;
  onEdit: (step: number) => void;
}

export function StepReview({ tour, onContinue, onBack, onEdit }: StepReviewProps) {
  const { draft } = useBooking();
  const { formatDate, formatPrice } = useLocale();
  const quote = buildQuote(tour, draft);
  const selectedExtras = tour.extras.filter((extra) => draft.extras.includes(extra.id));

  const sections = [
  {
    title: 'Trip',
    step: 0,
    rows: [
    { label: 'Tour', value: `${tour.title} · ${tour.durationLabel}` },
    { label: 'Start date', value: formatDate(draft.startDate) },
    {
      label: 'Travellers',
      value: `${draft.adults} ${draft.adults === 1 ? 'adult' : 'adults'}${draft.children > 0 ? `, ${draft.children} ${draft.children === 1 ? 'child' : 'children'}` : ''}`
    }]

  },
  {
    title: 'Options',
    step: 1,
    rows: [
    ...(tour.type === 'round' ?
    [{ label: 'Room', value: draft.roomPreference === 'single' ? 'Single occupancy' : draft.roomPreference === 'twin' ? 'Twin beds' : 'One double room' }] :
    []),
    {
      label: 'Extras',
      value: selectedExtras.length > 0 ? selectedExtras.map((extra) => extra.label).join(', ') : 'None added'
    },
    { label: 'Requests', value: draft.traveler.notes.trim() || 'None' }]

  },
  {
    title: 'Your details',
    step: 2,
    rows: [
    { label: 'Name', value: `${draft.traveler.firstName} ${draft.traveler.lastName}` },
    { label: 'Email', value: draft.traveler.email },
    { label: 'Phone', value: draft.traveler.phone },
    { label: 'Country', value: draft.traveler.country }]

  }];


  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Check everything before you pay</h2>
        <p className="mt-2 text-ink-soft">
          Nothing is charged yet. Change anything you need to — the price below is what you will pay in full.
        </p>
      </div>

      {isOnRequestDate(draft.startDate) &&
      <p className="rounded-xl border border-clay-300 bg-clay-100 p-4 text-sm text-ink-soft">
          Your start date is on request. We will confirm it in writing within one working day. If we cannot run
          the tour on that date, you are refunded in full, without a fee.
        </p>
      }

      <div className="space-y-5">
        {sections.map((section) =>
        <section key={section.title} className="rounded-2xl border border-sand-200 bg-white p-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-lg font-semibold text-ink">{section.title}</h3>
              <button
              type="button"
              onClick={() => onEdit(section.step)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-jungle-700 underline decoration-jungle-200 underline-offset-4 hover:decoration-jungle-700">
              
                <PencilIcon aria-hidden="true" className="h-3.5 w-3.5" />
                Edit
              </button>
            </div>
            <dl className="mt-4 space-y-2.5 text-sm">
              {section.rows.map((row) =>
            <div key={row.label} className="grid gap-1 sm:grid-cols-[160px_1fr]">
                  <dt className="text-ink-muted">{row.label}</dt>
                  <dd className="text-ink">{row.value}</dd>
                </div>
            )}
            </dl>
          </section>
        )}
      </div>

      <section className="rounded-2xl border border-sand-200 bg-white p-6">
        <h3 className="font-display text-lg font-semibold text-ink">Price breakdown</h3>
        <dl className="mt-4 space-y-2.5 text-sm">
          {quote.lines.map((line) =>
          <div key={line.id} className="flex justify-between gap-4">
              <dt className="text-ink-soft">{line.label}</dt>
              <dd className="font-medium text-ink">{formatPrice(line.amount)}</dd>
            </div>
          )}
          <div className="flex justify-between gap-4 border-t border-sand-200 pt-3 text-base">
            <dt className="font-display font-semibold text-ink">Total to pay</dt>
            <dd className="font-display text-xl font-semibold text-ink">{formatPrice(quote.total)}</dd>
          </div>
        </dl>
        <p className="mt-3 text-xs text-ink-muted">
          All taxes and service charges included. Free cancellation up to 21 days before departure; 50% refundable
          up to 7 days before.
        </p>
      </section>

      <div className="flex flex-wrap gap-3 border-t border-sand-200 pt-6">
        <Button onClick={onContinue} size="lg" variant="accent">
          Go to payment
        </Button>
        <Button onClick={onBack} size="lg" variant="ghost">
          Back
        </Button>
      </div>
    </div>);

}