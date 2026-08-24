import React from 'react';
import { BedDoubleIcon, CarFrontIcon, TicketIcon, UserCheckIcon } from 'lucide-react';

const services = [
{
  icon: CarFrontIcon,
  title: 'Transport, door to door',
  text: 'Private car or van with a chauffeur guide for the whole trip, plus reserved train seats and airport transfers at any hour.'
},
{
  icon: BedDoubleIcon,
  title: 'Places we have slept in',
  text: 'Hotels and boutique stays we inspect ourselves, from simple guesthouses to 5-star. Upgrades quoted in writing before you pay.'
},
{
  icon: UserCheckIcon,
  title: 'Guides on our own team',
  text: 'English, German and French speaking guides employed by us — not a subcontracted stranger who turns up at your hotel.'
},
{
  icon: TicketIcon,
  title: 'Tickets and entrance fees',
  text: 'Park permits, site entrances and activity bookings included where the itinerary lists them, so there is nothing to buy at the gate.'
}];


export function WhatWeHandle() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20" aria-labelledby="services-heading">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 id="services-heading" className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            You book one trip. We handle the twelve bookings behind it.
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Planning Sri Lanka independently means juggling drivers, train tickets, park permits, hotels in six
            towns and guides who may or may not show up. We are a tour operator, not a marketplace — everything
            in your itinerary is arranged and answered for by our own team in Colombo.
          </p>
        </div>

        <dl className="grid gap-6 sm:grid-cols-2">
          {services.map((service) =>
          <div key={service.title} className="rounded-2xl border border-sand-200 bg-white p-6">
              <service.icon aria-hidden="true" className="h-6 w-6 text-jungle-600" />
              <dt className="mt-4 font-display text-lg font-semibold text-ink">{service.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{service.text}</dd>
            </div>
          )}
        </dl>
      </div>
    </section>);

}