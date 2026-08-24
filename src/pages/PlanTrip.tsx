import React, { useState } from 'react';
import { CheckCircle2Icon, MessageCircleIcon, TriangleAlertIcon } from 'lucide-react';
import { experiences, activities } from '../data/experiences';
import { Button } from '../components/ui/Button';
import { WHATSAPP_URL } from '../components/layout/WhatsAppButton';

interface FormState {
  startDate: string;
  nights: string;
  datesFlexible: boolean;
  adults: number;
  children: number;
  interests: string[];
  accommodation: string;
  transport: string;
  requirements: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
}

const initialState: FormState = {
  startDate: '',
  nights: '10',
  datesFlexible: false,
  adults: 2,
  children: 0,
  interests: [],
  accommodation: '',
  transport: '',
  requirements: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: ''
};

const interestOptions = [
...experiences.map((item) => item.name),
...activities.map((item) => item.name),
'Ayurveda & wellness',
'Food & cooking',
'Photography'];


const accommodationOptions = [
{ value: 'guesthouse', label: 'Guesthouses', detail: 'Simple, clean, family-run' },
{ value: 'four-star', label: '4-star hotels', detail: 'Pools, air conditioning' },
{ value: 'boutique', label: 'Boutique stays', detail: 'Small, characterful properties' },
{ value: 'five-star', label: '5-star & luxury', detail: 'Resorts and tented camps' }];


const transportOptions = [
{ value: 'car', label: 'Private car with driver' },
{ value: 'van', label: 'Private van with driver' },
{ value: 'mixed', label: 'Mix of private car and trains' },
{ value: 'unsure', label: 'Not sure — advise me' }];


const fieldClass =
'w-full rounded-xl border bg-white px-3.5 py-3 text-sm text-ink placeholder:text-ink-muted';

export function PlanTrip() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function update(patch: Partial<FormState>) {
    setForm((current) => ({ ...current, ...patch }));
  }

  function toggleInterest(interest: string) {
    update({
      interests: form.interests.includes(interest) ?
      form.interests.filter((item) => item !== interest) :
      [...form.interests, interest]
    });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!form.startDate && !form.datesFlexible) {
      next.startDate = 'Give us a rough start date, or tick that your dates are flexible.';
    }
    if (!form.firstName.trim()) next.firstName = 'Tell us what to call you.';
    if (!form.email.trim()) next.email = 'We send the itinerary to this address.';else
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'That email address looks incomplete.';
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  if (submitted) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-20">
        <div className="rounded-3xl border border-jungle-200 bg-jungle-50 p-8 sm:p-10">
          <p className="inline-flex items-center gap-2 rounded-full bg-jungle-800 px-3 py-1.5 text-sm font-medium text-sand-50">
            <CheckCircle2Icon aria-hidden="true" className="h-4 w-4" />
            Request received
          </p>
          <h1 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Thanks {form.firstName} — we have everything we need to start.
          </h1>
          <p className="mt-4 leading-relaxed text-ink-soft">
            A planner in our Colombo office will read this properly and reply to{' '}
            <span className="font-medium text-ink">{form.email}</span> within one working day with a draft
            itinerary and a full price breakdown. There is no deposit and no obligation to see it.
          </p>
          <ol className="mt-6 space-y-3 text-sm text-ink-soft">
            <li>
              <span className="font-medium text-ink">Step 1.</span> We check what is realistic for your dates and
              the season, and flag anything that will not work.
            </li>
            <li>
              <span className="font-medium text-ink">Step 2.</span> You get a day-by-day draft with hotel options
              at your chosen level, priced line by line.
            </li>
            <li>
              <span className="font-medium text-ink">Step 3.</span> We adjust it as many times as you need before
              anything is booked or paid.
            </li>
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={WHATSAPP_URL} variant="accent">
              <MessageCircleIcon aria-hidden="true" className="h-4 w-4" />
              Add anything on WhatsApp
            </Button>
            <Button to="/tours" variant="outline">
              Browse ready-made tours meanwhile
            </Button>
          </div>
        </div>
      </main>);

  }

  const errorCount = Object.keys(errors).length;

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <header className="max-w-2xl">
        <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">Plan your trip</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          Roughly three minutes. The more you tell us, the closer the first draft will be — but nothing except
          your name and email is required, and we will ask about the rest when we reply.
        </p>
      </header>

      {errorCount > 0 &&
      <p role="alert" className="mt-8 flex items-start gap-2 rounded-xl border border-clay-300 bg-clay-100 p-4 text-sm text-clay-600">
          <TriangleAlertIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
          {errorCount === 1 ? 'One field needs attention' : `${errorCount} fields need attention`} before we can
          send this. They are marked below.
        </p>
      }

      <form onSubmit={handleSubmit} className="mt-10 space-y-10">
        <section className="rounded-2xl border border-sand-200 bg-white p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-ink">1. When and how long</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">Approximate start date</span>
              <input
                type="date"
                value={form.startDate}
                onChange={(event) => update({ startDate: event.target.value })}
                aria-invalid={errors.startDate ? true : undefined}
                aria-describedby={errors.startDate ? 'startDate-error' : undefined}
                className={`${fieldClass} ${errors.startDate ? 'border-clay-500' : 'border-sand-300'}`} />
              
              {errors.startDate &&
              <span id="startDate-error" className="mt-1.5 block text-xs text-clay-600">
                  {errors.startDate}
                </span>
              }
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">Nights in Sri Lanka</span>
              <input
                type="number"
                min={1}
                max={45}
                value={form.nights}
                onChange={(event) => update({ nights: event.target.value })}
                className={`${fieldClass} border-sand-300`} />
              
            </label>
            <label className="flex items-center gap-2.5 text-sm text-ink-soft sm:col-span-2">
              <input
                type="checkbox"
                checked={form.datesFlexible}
                onChange={(event) => update({ datesFlexible: event.target.checked })}
                className="h-4 w-4 rounded border-sand-400 text-jungle-700 focus:ring-clay-500" />
              
              My dates are flexible — suggest the best time for what I want to do
            </label>
          </div>
        </section>

        <section className="rounded-2xl border border-sand-200 bg-white p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-ink">2. Who is travelling</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">Adults (12+)</span>
              <select
                value={form.adults}
                onChange={(event) => update({ adults: Number(event.target.value) })}
                className={`${fieldClass} border-sand-300`}>
                
                {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((count) =>
                <option key={count} value={count}>
                    {count}
                  </option>
                )}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">Children (under 12)</span>
              <select
                value={form.children}
                onChange={(event) => update({ children: Number(event.target.value) })}
                className={`${fieldClass} border-sand-300`}>
                
                {[0, 1, 2, 3, 4, 5, 6].map((count) =>
                <option key={count} value={count}>
                    {count}
                  </option>
                )}
              </select>
            </label>
          </div>
        </section>

        <section className="rounded-2xl border border-sand-200 bg-white p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-ink">3. What you care about</h2>
          <p className="mt-2 text-sm text-ink-soft">Pick as many as you like, or none.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {interestOptions.map((interest) => {
              const selected = form.interests.includes(interest);
              return (
                <button
                  key={interest}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => toggleInterest(interest)}
                  className={[
                  'rounded-full border px-4 py-2 text-sm transition-colors duration-150 ease-smooth',
                  selected ?
                  'border-jungle-800 bg-jungle-800 font-medium text-sand-50' :
                  'border-sand-300 bg-white text-ink-soft hover:border-jungle-600'].
                  join(' ')}>
                  
                  {interest}
                </button>);

            })}
          </div>
        </section>

        <section className="rounded-2xl border border-sand-200 bg-white p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-ink">4. Accommodation and transport</h2>
          <fieldset className="mt-5">
            <legend className="text-sm font-medium text-ink">Where would you like to stay?</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {accommodationOptions.map((option) =>
              <label
                key={option.value}
                className={[
                'flex cursor-pointer gap-3 rounded-xl border p-4 transition-colors duration-150 ease-smooth',
                form.accommodation === option.value ?
                'border-jungle-600 bg-jungle-50' :
                'border-sand-200 hover:border-sand-400'].
                join(' ')}>
                
                  <input
                  type="radio"
                  name="accommodation"
                  checked={form.accommodation === option.value}
                  onChange={() => update({ accommodation: option.value })}
                  className="mt-1 h-4 w-4 border-sand-400 text-jungle-700 focus:ring-clay-500" />
                
                  <span>
                    <span className="block text-sm font-medium text-ink">{option.label}</span>
                    <span className="text-xs text-ink-muted">{option.detail}</span>
                  </span>
                </label>
              )}
            </div>
          </fieldset>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-ink">How would you like to get around?</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {transportOptions.map((option) =>
              <label
                key={option.value}
                className={[
                'flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm transition-colors duration-150 ease-smooth',
                form.transport === option.value ?
                'border-jungle-600 bg-jungle-50 text-ink' :
                'border-sand-200 text-ink-soft hover:border-sand-400'].
                join(' ')}>
                
                  <input
                  type="radio"
                  name="transport"
                  checked={form.transport === option.value}
                  onChange={() => update({ transport: option.value })}
                  className="h-4 w-4 border-sand-400 text-jungle-700 focus:ring-clay-500" />
                
                  {option.label}
                </label>
              )}
            </div>
          </fieldset>
        </section>

        <section className="rounded-2xl border border-sand-200 bg-white p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-ink">5. Anything else we should know</h2>
          <label className="mt-4 block">
            <span className="sr-only">Special requirements</span>
            <textarea
              rows={5}
              value={form.requirements}
              onChange={(event) => update({ requirements: event.target.value })}
              placeholder="Dietary needs, mobility or accessibility requirements, a wedding anniversary, flights already booked, places you have seen before…"
              className={`${fieldClass} border-sand-300`} />
            
          </label>
        </section>

        <section className="rounded-2xl border border-sand-200 bg-white p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-ink">6. How to reach you</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">First name</span>
              <input
                type="text"
                autoComplete="given-name"
                value={form.firstName}
                onChange={(event) => update({ firstName: event.target.value })}
                aria-invalid={errors.firstName ? true : undefined}
                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                className={`${fieldClass} ${errors.firstName ? 'border-clay-500' : 'border-sand-300'}`} />
              
              {errors.firstName &&
              <span id="firstName-error" className="mt-1.5 block text-xs text-clay-600">
                  {errors.firstName}
                </span>
              }
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                Last name <span className="font-normal text-ink-muted">(optional)</span>
              </span>
              <input
                type="text"
                autoComplete="family-name"
                value={form.lastName}
                onChange={(event) => update({ lastName: event.target.value })}
                className={`${fieldClass} border-sand-300`} />
              
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">Email address</span>
              <input
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(event) => update({ email: event.target.value })}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`${fieldClass} ${errors.email ? 'border-clay-500' : 'border-sand-300'}`} />
              
              {errors.email &&
              <span id="email-error" className="mt-1.5 block text-xs text-clay-600">
                  {errors.email}
                </span>
              }
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                WhatsApp number <span className="font-normal text-ink-muted">(optional)</span>
              </span>
              <input
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(event) => update({ phone: event.target.value })}
                className={`${fieldClass} border-sand-300`} />
              
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                Country of residence <span className="font-normal text-ink-muted">(optional)</span>
              </span>
              <input
                type="text"
                autoComplete="country-name"
                value={form.country}
                onChange={(event) => update({ country: event.target.value })}
                className={`${fieldClass} border-sand-300`} />
              
            </label>
          </div>
        </section>

        <div className="flex flex-wrap items-center gap-4">
          <Button type="submit" size="lg" variant="accent">
            Request my itinerary
          </Button>
          <p className="text-sm text-ink-muted">
            Free, no deposit, reply within one working day.
          </p>
        </div>
      </form>
    </main>);

}