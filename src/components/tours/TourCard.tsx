import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDaysIcon, MapPinIcon, UsersIcon } from 'lucide-react';
import type { Tour } from '../../types';
import { useLocale } from '../../contexts/LocaleContext';
import { Rating } from '../ui/Rating';

interface TourCardProps {
  tour: Tour;
  layout?: 'grid' | 'row';
}

export function TourCard({ tour, layout = 'grid' }: TourCardProps) {
  const { t, formatPrice } = useLocale();

  const isRow = layout === 'row';

  return (
    <article
      className={[
      'group flex overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-card',
      'transition-shadow duration-200 ease-smooth hover:shadow-lift',
      isRow ? 'flex-col sm:flex-row' : 'h-full flex-col'].
      join(' ')}>
      
      <div className={isRow ? 'relative sm:w-72 sm:shrink-0' : 'relative'}>
        <img
          src={tour.image}
          alt={`${tour.title} — ${tour.destinations.slice(0, 3).join(', ')}`}
          className={isRow ? 'h-52 w-full object-cover sm:h-full' : 'h-52 w-full object-cover'}
          loading="lazy" />
        
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-jungle-800">
          {tour.type === 'day' ? t('nav.dayTours') : t('nav.roundTours')}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <Rating value={tour.rating} reviewCount={tour.reviewCount} source={tour.reviewSource} reviewsLabel={t('label.reviews')} />
        <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-ink">
          <Link to={`/tours/${tour.slug}`} className="hover:text-jungle-700">
            {tour.title}
          </Link>
        </h3>

        <dl className="mt-3 space-y-1.5 text-sm text-ink-soft">
          <div className="flex items-start gap-2">
            <CalendarDaysIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-jungle-600" />
            <dt className="sr-only">{t('label.duration')}</dt>
            <dd>{tour.durationLabel}</dd>
          </div>
          <div className="flex items-start gap-2">
            <MapPinIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-jungle-600" />
            <dt className="sr-only">Destinations</dt>
            <dd>
              {tour.destinations.slice(0, 4).join(' · ')}
              {tour.destinations.length > 4 ? ` +${tour.destinations.length - 4}` : ''}
            </dd>
          </div>
          <div className="flex items-start gap-2">
            <UsersIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-jungle-600" />
            <dt className="sr-only">Group size</dt>
            <dd>{tour.groupSize}</dd>
          </div>
        </dl>

        {isRow && <p className="mt-3 text-sm leading-relaxed text-ink-soft">{tour.summary}</p>}

        <div className="mt-auto flex items-end justify-between gap-4 pt-5">
          <p className="leading-tight">
            <span className="block text-xs uppercase tracking-wide text-ink-muted">{t('label.from')}</span>
            <span className="font-display text-2xl font-semibold text-ink">{formatPrice(tour.priceFrom)}</span>
            <span className="block text-xs text-ink-muted">{t('label.perPerson')} · taxes included</span>
          </p>
          <Link
            to={`/tours/${tour.slug}`}
            className="inline-flex items-center rounded-full border border-jungle-800/30 px-4 py-2 text-sm font-medium text-jungle-800 transition-colors duration-150 ease-smooth group-hover:border-jungle-800 group-hover:bg-jungle-800 group-hover:text-sand-50">
            
            {t('cta.viewTour')}
          </Link>
        </div>
      </div>
    </article>);

}