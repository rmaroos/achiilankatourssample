import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { featuredTourSlugs, tours } from '../../data/tours';
import { useLocale } from '../../contexts/LocaleContext';
import { Rating } from '../ui/Rating';
import { Button } from '../ui/Button';
import { TourCard } from '../tours/TourCard';

export function FeaturedTours() {
  const { t, formatPrice } = useLocale();
  const featured = featuredTourSlugs.
  map((slug) => tours.find((tour) => tour.slug === slug)).
  filter((tour): tour is NonNullable<typeof tour> => Boolean(tour));

  const [hero, ...others] = featured;

  return (
    <section className="bg-sand-100 py-20" aria-labelledby="featured-heading">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <h2 id="featured-heading" className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Ready-made tours you can book today
            </h2>
            <p className="mt-3 text-ink-soft">
              Fixed itineraries, fixed prices, no hidden extras. Pick your start date and travellers, and the
              rest is already arranged.
            </p>
          </div>
          <Link
            to="/tours"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-jungle-700 underline decoration-jungle-200 underline-offset-4 hover:decoration-jungle-700">
            
            All {tours.length} tours
            <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          <article className="overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-card">
            <div className="relative">
              <img
                src={hero.image}
                alt={`${hero.title} — ${hero.destinations.slice(0, 4).join(', ')}`}
                className="h-72 w-full object-cover sm:h-80" />
              
              <span className="absolute left-4 top-4 rounded-full bg-clay-500 px-3 py-1 text-xs font-semibold text-white">
                Most booked
              </span>
            </div>
            <div className="p-6 sm:p-8">
              <Rating
                value={hero.rating}
                reviewCount={hero.reviewCount}
                source={hero.reviewSource}
                reviewsLabel={t('label.reviews')} />
              
              <h3 className="mt-2 font-display text-3xl font-semibold text-ink">{hero.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">
                {hero.durationLabel} · {hero.destinations.join(' · ')}
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">{hero.summary}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {hero.highlights.map((highlight) =>
                <li key={highlight} className="flex items-start gap-2 text-sm text-ink-soft">
                    <CheckIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-jungle-600" />
                    {highlight}
                  </li>
                )}
              </ul>
              <div className="mt-7 flex flex-wrap items-end justify-between gap-4 border-t border-sand-200 pt-5">
                <p className="leading-tight">
                  <span className="block text-xs uppercase tracking-wide text-ink-muted">{t('label.from')}</span>
                  <span className="font-display text-3xl font-semibold text-ink">{formatPrice(hero.priceFrom)}</span>
                  <span className="block text-xs text-ink-muted">{hero.priceBasis} · taxes included</span>
                </p>
                <Button to={`/tours/${hero.slug}`} size="lg">
                  {t('cta.viewTour')}
                </Button>
              </div>
            </div>
          </article>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {others.map((tour) =>
            <TourCard key={tour.id} tour={tour} />
            )}
          </div>
        </div>
      </div>
    </section>);

}