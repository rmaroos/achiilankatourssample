import React from 'react';
import { ArrowRightIcon, MessageCircleIcon } from 'lucide-react';
import { useLocale } from '../../contexts/LocaleContext';
import { Button } from '../ui/Button';
import { WHATSAPP_URL } from '../layout/WhatsAppButton';

export function CustomTripBanner() {
  const { t } = useLocale();

  return (
    <section className="mx-auto max-w-7xl px-6 pb-4" aria-labelledby="custom-heading">
      <div className="rounded-3xl border border-sand-200 bg-clay-100 p-8 sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 id="custom-heading" className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              None of the tours quite fit?
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
              Tell us your dates, how long you have, who is coming and what you care about. A planner in our
              Colombo office replies within one working day with a costed itinerary — no obligation, no deposit
              to see it.
            </p>
            <ol className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
              <li>1. Share your plans (3 minutes)</li>
              <li>2. We build the itinerary</li>
              <li>3. You adjust it until it is right</li>
            </ol>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
            <Button to="/plan-your-trip" size="lg" variant="accent">
              {t('cta.planTrip')}
              <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button href={WHATSAPP_URL} size="lg" variant="outline">
              <MessageCircleIcon aria-hidden="true" className="h-4 w-4" />
              {t('cta.whatsapp')}
            </Button>
          </div>
        </div>
      </div>
    </section>);

}