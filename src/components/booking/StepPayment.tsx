import React, { useState } from 'react';
import { LockIcon, LoaderIcon, MessageCircleIcon, TriangleAlertIcon } from 'lucide-react';
import type { Tour } from '../../types';
import { useBooking } from '../../contexts/BookingContext';
import { useLocale } from '../../contexts/LocaleContext';
import { buildQuote } from '../../utils/pricing';
import { Button } from '../ui/Button';
import { WHATSAPP_URL } from '../layout/WhatsAppButton';

interface StepPaymentProps {
  tour: Tour;
  onPaid: () => void;
  onBack: () => void;
}

type PaymentState = 'idle' | 'processing' | 'failed';

const DECLINE_CARD = '4000000000000002';

export function StepPayment({ tour, onPaid, onBack }: StepPaymentProps) {
  const { draft } = useBooking();
  const { formatPrice } = useLocale();
  const quote = buildQuote(tour, draft);

  const [card, setCard] = useState({ name: '', number: '', expiry: '', cvc: '' });
  const [state, setState] = useState<PaymentState>('idle');
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const digits = card.number.replace(/\s/g, '');
    if (!card.name.trim() || digits.length < 15 || !card.expiry.trim() || card.cvc.trim().length < 3) {
      setError('Check the card details — something is missing or incomplete.');
      setState('failed');
      return;
    }
    setError(null);
    setState('processing');
    window.setTimeout(() => {
      if (digits === DECLINE_CARD) {
        setState('failed');
        setError(
          'Your bank declined the payment. Nothing has been charged and your booking details are still saved. Try another card, or message us and we will send a payment link.'
        );
        return;
      }
      onPaid();
    }, 1400);
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Payment</h2>
        <p className="mt-2 text-ink-soft">
          You are paying {formatPrice(quote.total)} in full — the same total you saw on the previous step. Charged
          in USD by Serendib Journeys (Pvt) Ltd, Colombo.
        </p>
      </div>

      <p className="flex items-start gap-2 rounded-xl bg-sand-100 p-4 text-xs leading-relaxed text-ink-soft">
        <LockIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-jungle-600" />
        This is a demonstration checkout — no card is charged and no card data is stored. Use card number 4000
        0000 0000 0002 to see how a declined payment is handled.
      </p>

      {state === 'failed' && error &&
      <div role="alert" className="rounded-xl border border-clay-300 bg-clay-100 p-4">
          <p className="flex items-start gap-2 text-sm font-medium text-clay-600">
            <TriangleAlertIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
            Payment not completed
          </p>
          <p className="mt-2 text-sm text-ink-soft">{error}</p>
          <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-jungle-700 underline decoration-jungle-200 underline-offset-4 hover:decoration-jungle-700">
          
            <MessageCircleIcon aria-hidden="true" className="h-4 w-4" />
            Get help on WhatsApp
          </a>
        </div>
      }

      <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium text-ink">Name on card</span>
          <input
            type="text"
            autoComplete="cc-name"
            value={card.name}
            onChange={(event) => setCard({ ...card, name: event.target.value })}
            className="w-full rounded-xl border border-sand-300 bg-white px-3.5 py-3 text-sm text-ink" />
          
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium text-ink">Card number</span>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="cc-number"
            placeholder="4242 4242 4242 4242"
            value={card.number}
            onChange={(event) => setCard({ ...card, number: event.target.value })}
            className="w-full rounded-xl border border-sand-300 bg-white px-3.5 py-3 text-sm text-ink placeholder:text-ink-muted" />
          
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Expiry (MM/YY)</span>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="cc-exp"
            placeholder="09/29"
            value={card.expiry}
            onChange={(event) => setCard({ ...card, expiry: event.target.value })}
            className="w-full rounded-xl border border-sand-300 bg-white px-3.5 py-3 text-sm text-ink placeholder:text-ink-muted" />
          
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-ink">Security code</span>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="cc-csc"
            placeholder="123"
            value={card.cvc}
            onChange={(event) => setCard({ ...card, cvc: event.target.value })}
            className="w-full rounded-xl border border-sand-300 bg-white px-3.5 py-3 text-sm text-ink placeholder:text-ink-muted" />
          
        </label>

        <div className="sm:col-span-2">
          <div className="flex flex-wrap gap-3 border-t border-sand-200 pt-6">
            <Button type="submit" size="lg" variant="accent" disabled={state === 'processing'}>
              {state === 'processing' && <LoaderIcon aria-hidden="true" className="h-4 w-4 animate-spin" />}
              {state === 'processing' ? 'Processing payment…' : `Pay ${formatPrice(quote.total)}`}
            </Button>
            <Button onClick={onBack} size="lg" variant="ghost">
              Back to review
            </Button>
          </div>
          <p aria-live="polite" className="mt-3 text-xs text-ink-muted">
            {state === 'processing' ?
            'Talking to the payment provider — please do not close this page.' :
            'By paying you accept the cancellation policy shown on the review step.'}
          </p>
        </div>
      </form>
    </div>);

}