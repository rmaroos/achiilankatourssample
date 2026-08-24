import React from 'react';
import { StarIcon } from 'lucide-react';

interface RatingProps {
  value: number;
  reviewCount?: number;
  source?: string;
  reviewsLabel?: string;
  className?: string;
}

export function Rating({ value, reviewCount, source, reviewsLabel = 'reviews', className }: RatingProps) {
  return (
    <div className={`flex items-center gap-1.5 text-sm ${className ?? ''}`}>
      <StarIcon aria-hidden="true" className="h-4 w-4 shrink-0 fill-clay-500 text-clay-500" />
      <span className="font-semibold text-ink">{value.toFixed(1)}</span>
      {typeof reviewCount === 'number' &&
      <span className="text-ink-muted">
          ({reviewCount} {reviewsLabel}
          {source ? ` · ${source}` : ''})
        </span>
      }
    </div>);

}