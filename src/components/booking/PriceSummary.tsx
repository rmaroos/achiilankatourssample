import React from 'react';
import { InfoIcon } from 'lucide-react';
import type { BookingDraft, Tour } from '../../types';
import { buildQuote } from '../../utils/pricing';
import { useLocale } from '../../contexts/LocaleContext';

interface PriceSummaryProps {
  tour: Tour;
  draft: BookingDraft;
}

export function PriceSummary({ tour, draft }: PriceSummaryProps) {
  const { formatPrice, formatDate, currency } = useLocale();
  const quote = buildQuote(tour, draft);

  return (
    <section
      aria-label="Price summary"
      className="rounded-2xl border border-sand-200 bg-white p-6 shadow-card">
      
      <div className="flex gap-4">
        <img src={tour.image} alt="" className="h-16 w-20 shrink-0 rounded-xl object-cover" />
        <div>
          <h2 className="font-display text-lg font-semibold leading-snug text-ink">{tour.title}</h2>
          <p className="mt-0.5 text-xs text-ink-muted">{tour.durationLabel}</p>
        </div>
      </div>

      <dl className="mt-5 space-y-2 border-t border-sand-200 pt-5 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-ink-muted">Start date</dt>
          <dd className="text-right font-medium text-ink">
            {draft.startDate ? formatDate(draft.startDate) : 'Not selected'}
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-ink-muted">Travellers</dt>
          <dd className="text-right font-medium text-ink">
            {draft.adults} {draft.adults === 1 ? 'adult' : 'adults'}
            {draft.children > 0 ? `, ${draft.children} ${draft.children === 1 ? 'child' : 'children'}` : ''}
          </dd>
        </div>
      </dl>

      <dl className="mt-5 space-y-3 border-t border-sand-200 pt-5 text-sm">
        {quote.lines.map((line) =>
        <div key={line.id} className="flex justify-between gap-4">
            <dt className="text-ink-soft">
              {line.label}
              {line.detail && <span className="block text-xs text-ink-muted">{line.detail}</span>}
            </dt>
            <dd className="shrink-0 font-medium text-ink">{formatPrice(line.amount)}</dd>
          </div>
        )}
      </dl>

      <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-sand-200 pt-5">
        <p className="font-display text-lg font-semibold text-ink">Total</p>
        <p className="text-right">
          <span className="font-display text-2xl font-semibold text-ink">{formatPrice(quote.total)}</span>
          <span className="block text-xs text-ink-muted">
            {formatPrice(quote.perPerson)} per traveller · charged in USD
          </span>
        </p>
      </div>

      <p className="mt-4 flex items-start gap-2 rounded-xl bg-jungle-50 p-3 text-xs leading-relaxed text-jungle-700">
        <InfoIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
        This is the full price. Taxes and service charges are already included and nothing is added at the
        payment step.
        {currency.code !== 'USD' && ' Your bank applies its own rate when converting from USD.'}
      </p>
    </section>);

}