import React, { useState } from 'react';
import { TriangleAlertIcon } from 'lucide-react';
import { useBooking } from '../../contexts/BookingContext';
import { Button } from '../ui/Button';

interface StepDetailsProps {
  onContinue: () => void;
  onBack: () => void;
}

type FieldErrors = Partial<Record<'firstName' | 'lastName' | 'email' | 'phone' | 'country', string>>;

const inputClass =
'w-full rounded-xl border bg-white px-3.5 py-3 text-sm text-ink placeholder:text-ink-muted';

export function StepDetails({ onContinue, onBack }: StepDetailsProps) {
  const { draft, updateTraveler } = useBooking();
  const [errors, setErrors] = useState<FieldErrors>({});

  function validate(): boolean {
    const next: FieldErrors = {};
    const { firstName, lastName, email, phone, country } = draft.traveler;
    if (!firstName.trim()) next.firstName = 'Enter the first name as it appears on the passport.';
    if (!lastName.trim()) next.lastName = 'Enter the last name as it appears on the passport.';
    if (!email.trim()) next.email = 'We send your confirmation and voucher to this address.';else
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'That email address looks incomplete.';
    if (!phone.trim()) next.phone = 'Your driver needs a number to reach you on arrival.';
    if (!country.trim()) next.country = 'Tell us your country of residence.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleContinue() {
    if (validate()) onContinue();
  }

  const fields = [
  { id: 'firstName' as const, label: 'First name', type: 'text', autoComplete: 'given-name', span: false },
  { id: 'lastName' as const, label: 'Last name', type: 'text', autoComplete: 'family-name', span: false },
  { id: 'email' as const, label: 'Email address', type: 'email', autoComplete: 'email', span: true },
  { id: 'phone' as const, label: 'Phone or WhatsApp number', type: 'tel', autoComplete: 'tel', span: false },
  { id: 'country' as const, label: 'Country of residence', type: 'text', autoComplete: 'country-name', span: false }];


  const errorCount = Object.keys(errors).length;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-2xl font-semibold text-ink">Who is the booking for?</h2>
        <p className="mt-2 text-ink-soft">
          We only ask for what we need to confirm the trip and meet you on arrival. There is no account to create.
        </p>
      </div>

      {errorCount > 0 &&
      <p role="alert" className="flex items-start gap-2 rounded-xl border border-clay-300 bg-clay-100 p-4 text-sm text-clay-600">
          <TriangleAlertIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
          {errorCount === 1 ? 'One field needs attention' : `${errorCount} fields need attention`} before you can
          continue. They are marked below.
        </p>
      }

      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => {
          const error = errors[field.id];
          return (
            <label key={field.id} className={`block ${field.span ? 'sm:col-span-2' : ''}`}>
              <span className="mb-1.5 block text-sm font-medium text-ink">{field.label}</span>
              <input
                type={field.type}
                autoComplete={field.autoComplete}
                value={draft.traveler[field.id]}
                onChange={(event) => updateTraveler({ [field.id]: event.target.value })}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? `${field.id}-error` : undefined}
                className={`${inputClass} ${error ? 'border-clay-500' : 'border-sand-300'}`} />
              
              {error &&
              <span id={`${field.id}-error`} className="mt-1.5 flex items-start gap-1.5 text-xs text-clay-600">
                  <TriangleAlertIcon aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  {error}
                </span>
              }
            </label>);

        })}
      </div>

      <p className="rounded-xl bg-sand-100 p-4 text-xs leading-relaxed text-ink-soft">
        Your details are used to arrange this trip and to contact you about it. We do not sell them, and we do not
        add you to a mailing list unless you ask.
      </p>

      <div className="flex flex-wrap gap-3 border-t border-sand-200 pt-6">
        <Button onClick={handleContinue} size="lg" variant="accent">
          Review your booking
        </Button>
        <Button onClick={onBack} size="lg" variant="ghost">
          Back
        </Button>
      </div>
    </div>);

}