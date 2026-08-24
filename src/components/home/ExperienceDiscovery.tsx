import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { experiences } from '../../data/experiences';

export function ExperienceDiscovery() {
  const [lead, ...rest] = experiences;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20" aria-labelledby="explore-heading">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <h2 id="explore-heading" className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Start with the Sri Lanka you came for
          </h2>
          <p className="mt-3 text-ink-soft">
            Most travellers know the feeling they want before they know the route. Pick a thread and we will show
            you the tours that follow it.
          </p>
        </div>
        <Link
          to="/explore"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-jungle-700 underline decoration-jungle-200 underline-offset-4 hover:decoration-jungle-700">
          
          See all experiences and activities
          <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
        <Link
          to={`/tours?theme=${lead.id}`}
          className="group relative overflow-hidden rounded-3xl lg:col-span-2 lg:row-span-2">
          
          <img
            src={lead.image}
            alt={`${lead.name} in Sri Lanka — ${lead.regions.join(', ')}`}
            className="h-80 w-full object-cover transition-transform duration-300 ease-smooth group-hover:scale-[1.03] lg:h-full"
            loading="lazy" />
          
          <div className="absolute inset-0 bg-jungle-900/45" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 p-7">
            <p className="text-xs uppercase tracking-[0.16em] text-sand-200">{lead.tagline}</p>
            <h3 className="mt-1.5 font-display text-3xl font-semibold text-white">{lead.name}</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-sand-100">{lead.description}</p>
          </div>
        </Link>

        {rest.map((experience) =>
        <Link
          key={experience.id}
          to={`/tours?theme=${experience.id}`}
          className="group relative overflow-hidden rounded-3xl">
          
            <img
            src={experience.image}
            alt={`${experience.name} in Sri Lanka — ${experience.regions.join(', ')}`}
            className="h-40 w-full object-cover transition-transform duration-300 ease-smooth group-hover:scale-[1.03]"
            loading="lazy" />
          
            <div className="absolute inset-0 bg-jungle-900/40" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-display text-xl font-semibold text-white">{experience.name}</h3>
              <p className="text-xs text-sand-200">{experience.regions.slice(0, 3).join(' · ')}</p>
            </div>
          </Link>
        )}
      </div>
    </section>);

}