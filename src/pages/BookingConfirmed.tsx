import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2Icon,
  DownloadIcon,
  MailIcon,
  MessageCircleIcon,
  PrinterIcon } from
'lucide-react';
import { useBooking } from '../contexts/BookingContext';
import { useLocale } from '../contexts/LocaleContext';
import { getTourBySlug } from '../data/tours';
import { Button } from '../components/ui/Button';
import { WHATSAPP_URL } from '../components/layout/WhatsAppButton';

export function BookingConfirmed() {
  const { confirmation } = useBooking();
  const { formatDate, formatPrice } = useLocale();

  if (!confirmation) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-semibold text-ink">No booking to show</h1>
        <p className="mt-3 text-ink-soft">
          If you have already booked, your confirmation and reference are in the email we sent you.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button to="/tours">Browse tours</Button>
          <Button to="/contact" variant="outline">
            Contact us
          </Button>
        </div>
      </main>);

  }

  const tour = getTourBySlug(confirmation.tourSlug);

  return (
    <main className="mx-auto max-w-4xl px-6 py-14">
      <div className="rounded-3xl border border-jungle-200 bg-jungle-50 p-8 sm:p-10">
        <p className="inline-flex items-center gap-2 rounded-full bg-jungle-800 px-3 py-1.5 text-sm font-medium text-sand-50">
          <CheckCircle2Icon aria-hidden="true" className="h-4 w-4" />
          Payment received · Booking confirmed
        </p>
        <h1 className="mt-5 font-display text-3xl font-semibold text-ink sm:text-4xl">
          You are going to Sri Lanka, {confirmation.travelerName.split(' ')[0]}.
        </h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
          We have emailed your confirmation, voucher and full itinerary to{' '}
          <span className="font-medium text-ink">{confirmation.email}</span>. A planner from our Colombo office
          will message you within one working day to confirm pickup times.
        </p>

        <dl className="mt-8 grid gap-6 rounded-2xl border border-jungle-200 bg-white p-6 sm:grid-cols-2">
          <div>
            <dt className="text-xs uppercase tracking-wide text-ink-muted">Booking reference</dt>
            <dd className="mt-1 font-display text-2xl font-semibold text-ink">{confirmation.reference}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-ink-muted">Amount paid</dt>
            <dd className="mt-1 font-display text-2xl font-semibold text-ink">
              {formatPrice(confirmation.total)}
            </dd>
            <dd className="text-xs text-ink-muted">Paid in full · charged in USD · taxes included</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-ink-muted">Tour</dt>
            <dd className="mt-1 text-ink">
              {confirmation.tourTitle}
              {tour ? ` · ${tour.durationLabel}` : ''}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-ink-muted">Start date</dt>
            <dd className="mt-1 text-ink">{formatDate(confirmation.startDate)}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-ink-muted">Travellers</dt>
            <dd className="mt-1 text-ink">
              {confirmation.adults} {confirmation.adults === 1 ? 'adult' : 'adults'}
              {confirmation.children > 0 ?
              `, ${confirmation.children} ${confirmation.children === 1 ? 'child' : 'children'}` :
              ''}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-ink-muted">Extras</dt>
            <dd className="mt-1 text-ink">
              {confirmation.extras.length > 0 ? confirmation.extras.join(', ') : 'None added'}
            </dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button onClick={() => window.print()} variant="outline">
            <PrinterIcon aria-hidden="true" className="h-4 w-4" />
            Print this page
          </Button>
          <Button onClick={() => window.print()} variant="outline">
            <DownloadIcon aria-hidden="true" className="h-4 w-4" />
            Save voucher as PDF
          </Button>
        </div>
      </div>

      <section className="mt-10 grid gap-6 sm:grid-cols-2" aria-labelledby="next-heading">
        <div className="rounded-2xl border border-sand-200 bg-white p-6">
          <h2 id="next-heading" className="font-display text-xl font-semibold text-ink">
            What happens next
          </h2>
          <ol className="mt-4 space-y-3 text-sm text-ink-soft">
            <li>
              <span className="font-medium text-ink">Today.</span> Confirmation email with your voucher, itinerary
              and payment receipt.
            </li>
            <li>
              <span className="font-medium text-ink">Within one working day.</span> A planner confirms your hotels
              and pickup time, and answers anything outstanding.
            </li>
            <li>
              <span className="font-medium text-ink">One week before.</span> Your driver-guide's name, photo and
              phone number, plus a packing note for the season.
            </li>
            <li>
              <span className="font-medium text-ink">On arrival.</span> Your guide meets you inside arrivals with a
              name board, whatever time you land.
            </li>
          </ol>
        </div>

        <div className="rounded-2xl border border-sand-200 bg-white p-6">
          <h2 className="font-display text-xl font-semibold text-ink">Need to change something?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Dates, travellers and extras can all be changed. Free cancellation up to 21 days before departure, 50%
            refundable up to 7 days before. Quote your reference {confirmation.reference} and we will sort it.
          </p>
          <div className="mt-5 space-y-2">
            <Button href={WHATSAPP_URL} variant="outline" className="w-full">
              <MessageCircleIcon aria-hidden="true" className="h-4 w-4" />
              WhatsApp +94 77 123 4567
            </Button>
            <Button href="mailto:bookings@serendibjourneys.lk" variant="ghost" className="w-full">
              <MailIcon aria-hidden="true" className="h-4 w-4" />
              bookings@serendibjourneys.lk
            </Button>
          </div>
        </div>
      </section>

      <p className="mt-8 text-center text-sm text-ink-muted">
        Travelling with friends?{' '}
        <Link to="/tours" className="text-jungle-700 underline decoration-jungle-200 underline-offset-4">
          Browse day tours
        </Link>{' '}
        to add to your trip.
      </p>
    </main>);

}