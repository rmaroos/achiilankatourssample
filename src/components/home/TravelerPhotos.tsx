import React from 'react';
import { CameraIcon } from 'lucide-react';
import { travelerPhotos } from '../../data/experiences';

export function TravelerPhotos() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20" aria-labelledby="photos-heading">
      <div className="max-w-2xl">
        <p className="inline-flex items-center gap-2 text-sm font-medium text-jungle-700">
          <CameraIcon aria-hidden="true" className="h-4 w-4" />
          Shared by travellers, not by our marketing team
        </p>
        <h2 id="photos-heading" className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Photos from the trips, as they happened
        </h2>
        <p className="mt-3 text-ink-soft">
          These are snapshots travellers sent us after their tours, used with their permission. Where an image on
          this site is promotional or from a stock library, we label it as such.
        </p>
      </div>

      <ul className="mt-10 grid gap-5 sm:grid-cols-3">
        {travelerPhotos.map((photo) =>
        <li key={photo.id}>
            <figure className="overflow-hidden rounded-2xl border border-sand-200 bg-white">
              <img
              src={photo.image}
              alt={photo.caption}
              className="h-72 w-full object-cover sm:h-80"
              loading="lazy" />
            
              <figcaption className="p-4">
                <p className="text-sm text-ink">{photo.caption}</p>
                <p className="mt-1 text-xs text-ink-muted">{photo.credit}</p>
              </figcaption>
            </figure>
          </li>
        )}
      </ul>
    </section>);

}