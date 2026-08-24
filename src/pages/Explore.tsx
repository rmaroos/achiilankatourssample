import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, BedDoubleIcon, CarFrontIcon } from 'lucide-react';
import { activities, experiences } from '../data/experiences';
import { tours } from '../data/tours';
import { Button } from '../components/ui/Button';
import { useLocale } from '../contexts/LocaleContext';

const accommodation = [
{ title: 'Boutique stays', detail: 'Restored villas, plantation bungalows and small owner-run hotels, 8 to 20 rooms.' },
{ title: '4-star hotels', detail: 'Reliable comfort with pools and air conditioning — the standard on most of our tours.' },
{ title: '5-star and resorts', detail: 'Beach resorts and luxury tented camps, available as an upgrade on any round tour.' },
{ title: 'Guesthouses', detail: 'Simple, clean, family-run places in the hill country and surf towns.' }];


const transport = [
{ title: 'Private car', detail: 'Sedan with a chauffeur guide, comfortable for two travellers with normal luggage.' },
{ title: 'Private van', detail: 'High-roof van for 3 to 6 travellers, with space for surfboards or child seats.' },
{ title: 'Airport transfers', detail: 'Meet and greet inside arrivals at any hour, including 2am landings.' },
{ title: 'Train reservations', detail: 'Reserved seats on the hill country lines, booked the day they open.' }];


export function Explore() {
  const { t } = useLocale();

  return (
    <main className="pb-4">
      <section className="border-b border-sand-200 bg-sand-100">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <h1 className="max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            Five landscapes, one small island
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Sri Lanka is about the size of Ireland, so a two-week trip can genuinely combine jungle, mountains
            and coast. Here is what each region is actually like — and which tours go there.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16" aria-labelledby="experiences-heading">
        <h2 id="experiences-heading" className="font-display text-3xl font-semibold text-ink">
          Experiences
        </h2>
        <ul className="mt-8 space-y-8">
          {experiences.map((experience, index) => {
            const relatedTours = tours.filter((tour) => tour.themes.includes(experience.id)).slice(0, 3);
            return (
              <li
                key={experience.id}
                className="grid gap-6 overflow-hidden rounded-3xl border border-sand-200 bg-white lg:grid-cols-2">
                
                <img
                  src={experience.image}
                  alt={`${experience.name} — ${experience.regions.join(', ')}`}
                  className={`h-64 w-full object-cover lg:h-full ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  loading="lazy" />
                
                <div className="p-7 lg:p-10">
                  <p className="text-xs uppercase tracking-[0.16em] text-clay-600">{experience.tagline}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{experience.name}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{experience.description}</p>
                  <p className="mt-4 text-sm text-ink-muted">
                    Where: {experience.regions.join(' · ')}
                  </p>
                  {relatedTours.length > 0 &&
                  <div className="mt-6 border-t border-sand-200 pt-5">
                      <p className="text-sm font-semibold text-ink">Tours that go here</p>
                      <ul className="mt-3 space-y-2">
                        {relatedTours.map((tour) =>
                      <li key={tour.id}>
                            <Link
                          to={`/tours/${tour.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm text-jungle-700 underline decoration-jungle-200 underline-offset-4 hover:decoration-jungle-700">
                          
                              {tour.title} · {tour.durationLabel}
                              <ArrowRightIcon aria-hidden="true" className="h-3.5 w-3.5" />
                            </Link>
                          </li>
                      )}
                      </ul>
                    </div>
                  }
                </div>
              </li>);

          })}
        </ul>
      </section>

      <section id="activities" className="bg-sand-100 py-16 scroll-mt-24" aria-labelledby="activities-heading">
        <div className="mx-auto max-w-7xl px-6">
          <h2 id="activities-heading" className="font-display text-3xl font-semibold text-ink">
            Activities
          </h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            Add any of these to a tour, or tell us which one is the reason for the trip and we will build around
            it. Seasons matter here — the two monsoons mean the good coast moves through the year.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) =>
            <li key={`${activity.id}-${activity.name}`} className="flex flex-col rounded-2xl border border-sand-200 bg-white p-6">
                <h3 className="font-display text-xl font-semibold text-ink">{activity.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{activity.description}</p>
                <dl className="mt-4 space-y-1 text-xs text-ink-muted">
                  <div className="flex gap-1.5">
                    <dt className="font-semibold">Best places:</dt>
                    <dd>{activity.bestPlaces}</dd>
                  </div>
                  <div className="flex gap-1.5">
                    <dt className="font-semibold">Season:</dt>
                    <dd>{activity.season}</dd>
                  </div>
                </dl>
                <Link
                to={`/tours?theme=${activity.id}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-jungle-700 underline decoration-jungle-200 underline-offset-4 hover:decoration-jungle-700">
                
                  Tours with {activity.name.toLowerCase()}
                  <ArrowRightIcon aria-hidden="true" className="h-3.5 w-3.5" />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16 scroll-mt-24" aria-labelledby="services-heading">
        <h2 id="services-heading" className="font-display text-3xl font-semibold text-ink">
          Travel services
        </h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Accommodation and transport are included in every tour. If you only need one of them, ask us — we
          quote these individually for travellers who are otherwise self-organised.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-sand-200 bg-white p-7">
            <BedDoubleIcon aria-hidden="true" className="h-6 w-6 text-jungle-600" />
            <h3 className="mt-4 font-display text-2xl font-semibold text-ink">Accommodation</h3>
            <dl className="mt-5 divide-y divide-sand-200">
              {accommodation.map((item) =>
              <div key={item.title} className="py-3.5">
                  <dt className="text-sm font-semibold text-ink">{item.title}</dt>
                  <dd className="mt-1 text-sm text-ink-soft">{item.detail}</dd>
                </div>
              )}
            </dl>
          </div>
          <div className="rounded-3xl border border-sand-200 bg-white p-7">
            <CarFrontIcon aria-hidden="true" className="h-6 w-6 text-jungle-600" />
            <h3 className="mt-4 font-display text-2xl font-semibold text-ink">Transportation</h3>
            <dl className="mt-5 divide-y divide-sand-200">
              {transport.map((item) =>
              <div key={item.title} className="py-3.5">
                  <dt className="text-sm font-semibold text-ink">{item.title}</dt>
                  <dd className="mt-1 text-sm text-ink-soft">{item.detail}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button to="/tours" size="lg">
            Browse tours
          </Button>
          <Button to="/plan-your-trip" size="lg" variant="outline">
            {t('cta.planTrip')}
          </Button>
        </div>
      </section>
    </main>);

}