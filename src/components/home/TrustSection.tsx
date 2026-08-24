import React from 'react';
import { QuoteIcon, StarIcon } from 'lucide-react';
import { testimonials, trustSignals } from '../../data/testimonials';

export function TrustSection() {
  return (
    <section className="bg-jungle-900 py-20 text-sand-100" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 id="trust-heading" className="font-display text-3xl font-semibold text-white sm:text-4xl">
            What travellers say, where they said it
          </h2>
          <p className="mt-3 text-sand-200">
            Every review below is published on Tripadvisor or Trustpilot under the traveller's own account. We
            do not write reviews, and we do not remove the critical ones.
          </p>
        </div>

        <dl className="mt-10 grid gap-6 border-y border-white/10 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((signal) =>
          <div key={signal.label}>
              <dt className="text-xs uppercase tracking-[0.14em] text-sand-400">{signal.label}</dt>
              <dd className="mt-1.5 font-display text-2xl font-semibold text-white">{signal.value}</dd>
              <dd className="mt-1 text-xs text-sand-200">{signal.detail}</dd>
            </div>
          )}
        </dl>

        <ul className="mt-10 grid gap-5 lg:grid-cols-2">
          {testimonials.map((testimonial) =>
          <li
            key={testimonial.id}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
            
              <div className="flex items-center justify-between gap-4">
                <p className="flex items-center gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, index) =>
                <StarIcon
                  key={index}
                  aria-hidden="true"
                  className={
                  index < testimonial.rating ?
                  'h-4 w-4 fill-clay-300 text-clay-300' :
                  'h-4 w-4 text-white/30'
                  } />

                )}
                  <span className="ml-1.5 text-xs text-sand-200">{testimonial.rating}/5</span>
                </p>
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-sand-100">
                  {testimonial.source}
                </span>
              </div>
              <QuoteIcon aria-hidden="true" className="mt-5 h-5 w-5 text-clay-300" />
              <blockquote className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-sand-100">
                {testimonial.quote}
              </blockquote>
              <footer className="mt-5 border-t border-white/10 pt-4 text-xs text-sand-200">
                <span className="font-semibold text-white">{testimonial.name}</span>, {testimonial.country} ·{' '}
                {testimonial.tourTitle} · {testimonial.date}
              </footer>
            </li>
          )}
        </ul>
      </div>
    </section>);

}