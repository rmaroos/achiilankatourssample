import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  CalendarDaysIcon,
  CheckIcon,
  ClockIcon,
  MapPinIcon,
  MessageCircleIcon,
  StarIcon,
  UsersIcon,
  XIcon } from
'lucide-react';
import { getTourBySlug } from '../data/tours';
import { testimonials } from '../data/testimonials';
import { useLocale } from '../contexts/LocaleContext';
import { useBooking } from '../contexts/BookingContext';
import { minBookingDate } from '../utils/pricing';
import { TourGallery } from '../components/tours/TourGallery';
import { Itinerary } from '../components/tours/Itinerary';
import { TourFaqs } from '../components/tours/TourFaqs';
import { Rating } from '../components/ui/Rating';
import { Button } from '../components/ui/Button';
import { WHATSAPP_URL } from '../components/layout/WhatsAppButton';

export function TourDetail() {
  const { slug = '' } = useParams();
  const navigate = useNavigate();
  const tour = getTourBySlug(slug);
  const { t, formatPrice } = useLocale();
  const { draft, startBooking, updateDraft } = useBooking();
  const [startDate, setStartDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [slug]);

  useEffect(() => {
    if (draft.tourSlug === slug) {
      setStartDate(draft.startDate);
      setAdults(draft.adults);
      setChildren(draft.children);
    }
  }, [draft.tourSlug, draft.startDate, draft.adults, draft.children, slug]);

  if (!tour) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-semibold text-ink">We could not find that tour</h1>
        <p className="mt-3 text-ink-soft">
          It may have been renamed or retired. All current tours are listed on the tours page.
        </p>
        <Button to="/tours" className="mt-6">
          Browse all tours
        </Button>
      </main>);

  }

  const tourReviews = testimonials.filter((item) => item.tourTitle.startsWith(tour.title));
  const reviews = tourReviews.length > 0 ? tourReviews : testimonials.slice(0, 2);

  function handleCheckAvailability(event: React.FormEvent) {
    event.preventDefault();
    startBooking(tour!.slug);
    updateDraft({ tourSlug: tour!.slug, startDate, adults, children });
    navigate(`/tours/${tour!.slug}/book`);
  }

  return (
    <main className="pb-4">
      <div className="mx-auto max-w-7xl px-6 pt-8">
        <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
          <Link to="/" className="hover:text-jungle-700">
            Home
          </Link>
          <span aria-hidden="true"> / </span>
          <Link to={`/tours?type=${tour.type}`} className="hover:text-jungle-700">
            {tour.type === 'day' ? t('nav.dayTours') : t('nav.roundTours')}
          </Link>
          <span aria-hidden="true"> / </span>
          <span className="text-ink">{tour.title}</span>
        </nav>

        <header className="mt-5 max-w-3xl">
          <h1 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">{tour.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-soft">
            <Rating
              value={tour.rating}
              reviewCount={tour.reviewCount}
              source={tour.reviewSource}
              reviewsLabel={t('label.reviews')} />
            
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon aria-hidden="true" className="h-4 w-4 text-jungle-600" />
              {tour.durationLabel}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <UsersIcon aria-hidden="true" className="h-4 w-4 text-jungle-600" />
              {tour.groupSize}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPinIcon aria-hidden="true" className="h-4 w-4 text-jungle-600" />
              Starts: {tour.startsIn}
            </span>
          </div>
        </header>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <TourGallery title={tour.title} images={tour.gallery} />

            <section className="mt-10" aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="font-display text-2xl font-semibold text-ink">
                Tour overview
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-ink-soft">{tour.summary}</p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {tour.highlights.map((highlight) =>
                <li key={highlight} className="flex items-start gap-2.5 text-[0.95rem] text-ink-soft">
                    <CheckIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-jungle-600" />
                    {highlight}
                  </li>
                )}
              </ul>

              <dl className="mt-8 grid gap-x-8 gap-y-4 rounded-2xl border border-sand-200 bg-white p-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-ink-muted">Destinations</dt>
                  <dd className="mt-1 text-sm text-ink">{tour.destinations.join(' · ')}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-ink-muted">Best months to travel</dt>
                  <dd className="mt-1 text-sm text-ink">{tour.bestMonths}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-ink-muted">Accommodation</dt>
                  <dd className="mt-1 text-sm text-ink">{tour.accommodation}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-ink-muted">Transport</dt>
                  <dd className="mt-1 text-sm text-ink">{tour.transport}</dd>
                </div>
              </dl>
            </section>

            <section className="mt-12" aria-labelledby="itinerary-heading">
              <h2 id="itinerary-heading" className="font-display text-2xl font-semibold text-ink">
                {tour.type === 'day' ? 'Your day, hour by hour' : 'Day-by-day itinerary'}
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                {tour.type === 'day' ?
                'Timings shift a little with traffic and the weather. Your guide will tell you if anything changes.' :
                'Your guide can adjust the order or pace as you go — nothing here is locked once you are on the road.'}
              </p>
              <div className="mt-5">
                <Itinerary days={tour.itinerary} singleDay={tour.type === 'day'} />
              </div>
            </section>

            <section className="mt-12 grid gap-6 lg:grid-cols-2" aria-labelledby="inclusions-heading">
              <div>
                <h2 id="inclusions-heading" className="font-display text-2xl font-semibold text-ink">
                  What is included
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {tour.inclusions.map((item) =>
                  <li key={item} className="flex items-start gap-2.5 text-[0.95rem] text-ink-soft">
                      <CheckIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-jungle-600" />
                      {item}
                    </li>
                  )}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">What is not included</h2>
                <ul className="mt-4 space-y-2.5">
                  {tour.exclusions.map((item) =>
                  <li key={item} className="flex items-start gap-2.5 text-[0.95rem] text-ink-soft">
                      <XIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-clay-600" />
                      {item}
                    </li>
                  )}
                </ul>
              </div>
            </section>

            <section className="mt-12" aria-labelledby="reviews-heading">
              <h2 id="reviews-heading" className="font-display text-2xl font-semibold text-ink">
                Reviews from travellers on this tour
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                Published on {tour.reviewSource} under the traveller's own account.
              </p>
              <ul className="mt-5 grid gap-5 sm:grid-cols-2">
                {reviews.map((review) =>
                <li key={review.id} className="rounded-2xl border border-sand-200 bg-white p-6">
                    <p className="flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, index) =>
                    <StarIcon
                      key={index}
                      aria-hidden="true"
                      className={
                      index < review.rating ?
                      'h-4 w-4 fill-clay-500 text-clay-500' :
                      'h-4 w-4 text-sand-300'
                      } />

                    )}
                      <span className="ml-1.5 text-xs text-ink-muted">{review.rating}/5</span>
                    </p>
                    <blockquote className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                      {review.quote}
                    </blockquote>
                    <footer className="mt-4 text-xs text-ink-muted">
                      <span className="font-semibold text-ink">{review.name}</span>, {review.country} ·{' '}
                      {review.date} · {review.source}
                    </footer>
                  </li>
                )}
              </ul>
            </section>

            <section className="mt-12" aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="font-display text-2xl font-semibold text-ink">
                Questions travellers ask us
              </h2>
              <div className="mt-5">
                <TourFaqs faqs={tour.faqs} />
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <form
              onSubmit={handleCheckAvailability}
              className="rounded-2xl border border-sand-200 bg-white p-6 shadow-card">
              
              <p className="leading-tight">
                <span className="text-xs uppercase tracking-wide text-ink-muted">{t('label.from')}</span>
                <span className="ml-2 font-display text-3xl font-semibold text-ink">
                  {formatPrice(tour.priceFrom)}
                </span>
              </p>
              <p className="mt-1 text-xs text-ink-muted">{tour.priceBasis} · all taxes included</p>

              <div className="mt-5 space-y-4">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-ink">Preferred start date</span>
                  <div className="relative">
                    <CalendarDaysIcon
                      aria-hidden="true"
                      className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
                    
                    <input
                      type="date"
                      value={startDate}
                      min={minBookingDate()}
                      onChange={(event) => setStartDate(event.target.value)}
                      className="w-full rounded-xl border border-sand-300 bg-white px-3 py-3 text-sm text-ink" />
                    
                  </div>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium text-ink">Adults</span>
                    <select
                      value={adults}
                      onChange={(event) => setAdults(Number(event.target.value))}
                      className="w-full rounded-xl border border-sand-300 bg-white px-3 py-3 text-sm text-ink">
                      
                      {[1, 2, 3, 4, 5, 6].map((count) =>
                      <option key={count} value={count}>
                          {count}
                        </option>
                      )}
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium text-ink">Children (2–11)</span>
                    <select
                      value={children}
                      onChange={(event) => setChildren(Number(event.target.value))}
                      className="w-full rounded-xl border border-sand-300 bg-white px-3 py-3 text-sm text-ink">
                      
                      {[0, 1, 2, 3, 4].map((count) =>
                      <option key={count} value={count}>
                          {count}
                        </option>
                      )}
                    </select>
                  </label>
                </div>
              </div>

              <Button type="submit" size="lg" variant="accent" className="mt-5 w-full">
                Check availability
              </Button>
              <p className="mt-3 text-center text-xs text-ink-muted">
                No account needed. You will see the full price before any payment.
              </p>

              <div className="mt-5 border-t border-sand-200 pt-5">
                <p className="text-sm text-ink-soft">
                  Want something changed — different hotels, an extra day, a different start point?
                </p>
                <div className="mt-3 space-y-2">
                  <Button href={WHATSAPP_URL} variant="outline" className="w-full">
                    <MessageCircleIcon aria-hidden="true" className="h-4 w-4" />
                    {t('cta.whatsapp')}
                  </Button>
                  <Button to="/plan-your-trip" variant="ghost" className="w-full">
                    Ask for a custom version
                  </Button>
                </div>
              </div>
            </form>
          </aside>
        </div>
      </div>
    </main>);

}