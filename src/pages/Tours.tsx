import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontalIcon, XIcon } from 'lucide-react';
import { tours } from '../data/tours';
import { experiences, activities } from '../data/experiences';
import type { ThemeId, TourType } from '../types';
import { TourCard } from '../components/tours/TourCard';
import {
  TourFilters,
  dayCeiling,
  priceCeiling,
  type FilterState } from
'../components/tours/TourFilters';
import { Button } from '../components/ui/Button';
import { useLocale } from '../contexts/LocaleContext';

type SortKey = 'recommended' | 'price-asc' | 'price-desc' | 'duration-asc' | 'rating-desc';

const defaultFilters: FilterState = {
  query: '',
  type: 'all',
  themes: [],
  maxPrice: priceCeiling,
  maxDays: dayCeiling
};

const themeLabels = new Map<string, string>([
...experiences.map((item) => [item.id, item.name] as [string, string]),
...activities.map((item) => [item.id, item.name] as [string, string])]
);

export function Tours() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useLocale();
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [sort, setSort] = useState<SortKey>('recommended');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const typeParam = searchParams.get('type');
  const themeParam = searchParams.get('theme');

  useEffect(() => {
    setFilters((current) => ({
      ...current,
      type: typeParam === 'day' || typeParam === 'round' ? typeParam as TourType : 'all',
      themes: themeParam ? themeParam.split(',') as ThemeId[] : []
    }));
  }, [typeParam, themeParam]);

  function updateFilters(patch: Partial<FilterState>) {
    setFilters((current) => ({ ...current, ...patch }));
    if (patch.type) {
      const next = new URLSearchParams(searchParams);
      if (patch.type === 'all') next.delete('type');else
      next.set('type', patch.type);
      setSearchParams(next, { replace: true });
    }
    if (patch.themes) {
      const next = new URLSearchParams(searchParams);
      if (patch.themes.length > 0) next.set('theme', patch.themes.join(','));else
      next.delete('theme');
      setSearchParams(next, { replace: true });
    }
  }

  function clearFilters() {
    setFilters(defaultFilters);
    setSort('recommended');
    setSearchParams(new URLSearchParams(), { replace: true });
  }

  const isDirty =
  filters.query !== '' ||
  filters.type !== 'all' ||
  filters.themes.length > 0 ||
  filters.maxPrice < priceCeiling ||
  filters.maxDays < dayCeiling;

  const results = useMemo(() => {
    const query = filters.query.trim().toLowerCase();
    const filtered = tours.filter((tour) => {
      if (filters.type !== 'all' && tour.type !== filters.type) return false;
      if (filters.themes.length > 0 && !filters.themes.some((theme) => tour.themes.includes(theme))) return false;
      if (tour.priceFrom > filters.maxPrice) return false;
      if (tour.durationDays > filters.maxDays) return false;
      if (query) {
        const haystack = [tour.title, tour.summary, ...tour.destinations, ...tour.themes].
        join(' ').
        toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });

    const sorted = [...filtered];
    switch (sort) {
      case 'price-asc':
        sorted.sort((a, b) => a.priceFrom - b.priceFrom);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.priceFrom - a.priceFrom);
        break;
      case 'duration-asc':
        sorted.sort((a, b) => a.durationDays - b.durationDays);
        break;
      case 'rating-desc':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        sorted.sort((a, b) => b.reviewCount - a.reviewCount);
    }
    return sorted;
  }, [filters, sort]);

  const headingLabel =
  filters.type === 'day' ?
  t('nav.dayTours') :
  filters.type === 'round' ?
  t('nav.roundTours') :
  'All tours';

  const activeThemeLabel =
  filters.themes.length === 1 ? themeLabels.get(filters.themes[0]) : undefined;

  return (
    <main className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
      <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
        <Link to="/" className="hover:text-jungle-700">
          Home
        </Link>
        <span aria-hidden="true"> / </span>
        <span className="text-ink">{headingLabel}</span>
      </nav>

      <header className="mt-4 max-w-2xl">
        <h1 className="font-display text-4xl font-semibold text-ink">
          {activeThemeLabel ? `${activeThemeLabel} tours` : headingLabel}
        </h1>
        <p className="mt-3 text-ink-soft">
          Every tour is operated by us, priced per person with taxes included, and can be adjusted before you pay.
          Browse as long as you like — there is no account needed to explore or to reserve.
        </p>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[280px_1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <button
            type="button"
            onClick={() => setFiltersOpen((open) => !open)}
            aria-expanded={filtersOpen}
            aria-controls="filter-panel"
            className="inline-flex w-full items-center justify-between rounded-xl border border-sand-300 bg-white px-4 py-3 text-sm font-medium text-ink lg:hidden">
            
            <span className="inline-flex items-center gap-2">
              <SlidersHorizontalIcon aria-hidden="true" className="h-4 w-4" />
              Search and filters
            </span>
            {filtersOpen ? <XIcon aria-hidden="true" className="h-4 w-4" /> : null}
          </button>

          <div
            id="filter-panel"
            className={`${filtersOpen ? 'block' : 'hidden'} mt-4 rounded-2xl border border-sand-200 bg-white p-5 lg:mt-0 lg:block`}>
            
            <TourFilters filters={filters} onChange={updateFilters} onClear={clearFilters} isDirty={isDirty} />
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sand-200 pb-4">
            <p aria-live="polite" className="text-sm text-ink-soft">
              <span className="font-semibold text-ink">{results.length}</span>{' '}
              {results.length === 1 ? 'tour' : 'tours'} match your filters
            </p>
            <label className="flex items-center gap-2 text-sm text-ink-soft">
              Sort by
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as SortKey)}
                className="rounded-xl border border-sand-300 bg-white px-3 py-2 text-sm text-ink">
                
                <option value="recommended">Most booked</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
                <option value="duration-asc">Shortest first</option>
                <option value="rating-desc">Highest rated</option>
              </select>
            </label>
          </div>

          {results.length === 0 ?
          <div className="mt-10 rounded-2xl border border-dashed border-sand-300 bg-white p-10 text-center">
              <h2 className="font-display text-2xl font-semibold text-ink">No tours match this combination</h2>
              <p className="mx-auto mt-3 max-w-md text-ink-soft">
                Try widening the price or trip length, or let us build something around exactly these
                requirements instead.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button onClick={clearFilters} variant="outline">
                  Clear all filters
                </Button>
                <Button to="/plan-your-trip" variant="accent">
                  {t('cta.planTrip')}
                </Button>
              </div>
            </div> :

          <ul className="mt-6 space-y-6">
              {results.map((tour) =>
            <li key={tour.id}>
                  <TourCard tour={tour} layout="row" />
                </li>
            )}
            </ul>
          }
        </div>
      </div>
    </main>);

}