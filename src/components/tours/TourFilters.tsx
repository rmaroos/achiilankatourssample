import React from 'react';
import { SearchIcon } from 'lucide-react';
import type { ThemeId, TourType } from '../../types';
import { experiences, activities } from '../../data/experiences';
import { useLocale } from '../../contexts/LocaleContext';

export interface FilterState {
  query: string;
  type: TourType | 'all';
  themes: ThemeId[];
  maxPrice: number;
  maxDays: number;
}

export const priceCeiling = 1400;
export const dayCeiling = 12;

interface TourFiltersProps {
  filters: FilterState;
  onChange: (patch: Partial<FilterState>) => void;
  onClear: () => void;
  isDirty: boolean;
}

const themeOptions: {id: ThemeId;label: string;}[] = [
...experiences.map((experience) => ({ id: experience.id, label: experience.name })),
...activities.
filter((activity) => !experiences.some((experience) => experience.id === activity.id)).
map((activity) => ({ id: activity.id, label: activity.name }))];


export function TourFilters({ filters, onChange, onClear, isDirty }: TourFiltersProps) {
  const { formatPrice } = useLocale();

  function toggleTheme(theme: ThemeId) {
    onChange({
      themes: filters.themes.includes(theme) ?
      filters.themes.filter((item) => item !== theme) :
      [...filters.themes, theme]
    });
  }

  return (
    <div className="space-y-7">
      <div>
        <label htmlFor="tour-search" className="block text-sm font-semibold text-ink">
          Search tours
        </label>
        <div className="relative mt-2">
          <SearchIcon
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
          
          <input
            id="tour-search"
            type="search"
            value={filters.query}
            onChange={(event) => onChange({ query: event.target.value })}
            placeholder="Ella, safari, tea, Sigiriya…"
            className="w-full rounded-xl border border-sand-300 bg-white py-3 pl-10 pr-3 text-sm text-ink placeholder:text-ink-muted" />
          
        </div>
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-ink">Tour type</legend>
        <div className="mt-2 flex gap-2">
          {(
          [
          { value: 'all', label: 'All' },
          { value: 'round', label: 'Round tours' },
          { value: 'day', label: 'Day tours' }] as
          {value: TourType | 'all';label: string;}[]).
          map((option) => {
            const selected = filters.type === option.value;
            return (
              <button
                key={option.value}
                type="button"
                aria-pressed={selected}
                onClick={() => onChange({ type: option.value })}
                className={[
                'rounded-full border px-3.5 py-2 text-sm font-medium transition-colors duration-150 ease-smooth',
                selected ?
                'border-jungle-800 bg-jungle-800 text-sand-50' :
                'border-sand-300 bg-white text-ink-soft hover:border-jungle-600'].
                join(' ')}>
                
                {option.label}
              </button>);

          })}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm font-semibold text-ink">Interests</legend>
        <div className="mt-2 space-y-2">
          {themeOptions.map((option) =>
          <label key={option.id} className="flex cursor-pointer items-center gap-2.5 text-sm text-ink-soft">
              <input
              type="checkbox"
              checked={filters.themes.includes(option.id)}
              onChange={() => toggleTheme(option.id)}
              className="h-4 w-4 rounded border-sand-400 text-jungle-700 focus:ring-clay-500" />
            
              {option.label}
            </label>
          )}
        </div>
      </fieldset>

      <div>
        <label htmlFor="max-price" className="flex items-baseline justify-between text-sm font-semibold text-ink">
          Max price per person
          <span className="font-normal text-ink-soft">
            {filters.maxPrice >= priceCeiling ? 'Any' : `up to ${formatPrice(filters.maxPrice)}`}
          </span>
        </label>
        <input
          id="max-price"
          type="range"
          min={60}
          max={priceCeiling}
          step={20}
          value={filters.maxPrice}
          onChange={(event) => onChange({ maxPrice: Number(event.target.value) })}
          className="mt-3 w-full accent-jungle-700" />
        
      </div>

      <div>
        <label htmlFor="max-days" className="flex items-baseline justify-between text-sm font-semibold text-ink">
          Max trip length
          <span className="font-normal text-ink-soft">
            {filters.maxDays >= dayCeiling ? 'Any' : `up to ${filters.maxDays} days`}
          </span>
        </label>
        <input
          id="max-days"
          type="range"
          min={1}
          max={dayCeiling}
          step={1}
          value={filters.maxDays}
          onChange={(event) => onChange({ maxDays: Number(event.target.value) })}
          className="mt-3 w-full accent-jungle-700" />
        
      </div>

      {isDirty &&
      <button
        type="button"
        onClick={onClear}
        className="text-sm font-medium text-clay-600 underline decoration-clay-300 underline-offset-4 hover:decoration-clay-600">
        
          Clear all filters
        </button>
      }
    </div>);

}