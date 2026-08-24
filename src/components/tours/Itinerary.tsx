import React, { useState } from 'react';
import { BedIcon, ChevronDownIcon, UtensilsIcon } from 'lucide-react';
import type { ItineraryDay } from '../../types';

interface ItineraryProps {
  days: ItineraryDay[];
  singleDay?: boolean;
}

export function Itinerary({ days, singleDay = false }: ItineraryProps) {
  const [openDay, setOpenDay] = useState<number | null>(days.length > 0 ? days[0].day : null);

  if (singleDay) {
    return (
      <div className="rounded-2xl border border-sand-200 bg-white p-6">
        <h3 className="font-display text-lg font-semibold text-ink">{days[0].title}</h3>
        <p className="mt-2 leading-relaxed text-ink-soft">{days[0].description}</p>
        {days[0].meals &&
        <p className="mt-4 inline-flex items-center gap-2 text-sm text-ink-muted">
            <UtensilsIcon aria-hidden="true" className="h-4 w-4" />
            Meals included: {days[0].meals}
          </p>
        }
      </div>);

  }

  return (
    <ol className="space-y-3">
      {days.map((day) => {
        const isOpen = openDay === day.day;
        return (
          <li key={day.day} className="overflow-hidden rounded-2xl border border-sand-200 bg-white">
            <button
              type="button"
              onClick={() => setOpenDay(isOpen ? null : day.day)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 px-5 py-4 text-left">
              
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-jungle-800 text-sm font-semibold text-sand-50">
                {day.day}
              </span>
              <span className="flex-1">
                <span className="block font-display text-lg font-semibold leading-snug text-ink">
                  {day.title}
                </span>
                {!isOpen &&
                <span className="mt-0.5 line-clamp-1 block text-sm text-ink-muted">{day.description}</span>
                }
              </span>
              <ChevronDownIcon
                aria-hidden="true"
                className={`h-5 w-5 shrink-0 text-ink-muted transition-transform duration-150 ease-smooth ${isOpen ? 'rotate-180' : ''}`} />
              
            </button>
            {isOpen &&
            <div className="border-t border-sand-200 px-5 py-4 pl-[4.75rem]">
                <p className="leading-relaxed text-ink-soft">{day.description}</p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
                  {day.stay &&
                <span className="inline-flex items-center gap-2">
                      <BedIcon aria-hidden="true" className="h-4 w-4" />
                      {day.stay}
                    </span>
                }
                  {day.meals &&
                <span className="inline-flex items-center gap-2">
                      <UtensilsIcon aria-hidden="true" className="h-4 w-4" />
                      {day.meals}
                    </span>
                }
                </div>
              </div>
            }
          </li>);

      })}
    </ol>);

}