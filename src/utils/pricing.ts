import type { BookingDraft, Tour } from '../types';

export const CHILD_RATE = 0.6;
export const SINGLE_SUPPLEMENT_RATE = 0.18;

export interface QuoteLine {
  id: string;
  label: string;
  detail?: string;
  amount: number;
}

export interface Quote {
  lines: QuoteLine[];
  travelers: number;
  total: number;
  perPerson: number;
}

export function buildQuote(tour: Tour, draft: BookingDraft): Quote {
  const travelers = draft.adults + draft.children;
  const lines: QuoteLine[] = [];

  if (draft.adults > 0) {
    lines.push({
      id: 'adults',
      label: `Adults × ${draft.adults}`,
      detail: `${formatUsd(tour.priceFrom)} per adult`,
      amount: tour.priceFrom * draft.adults
    });
  }

  if (draft.children > 0) {
    const childPrice = Math.round(tour.priceFrom * CHILD_RATE);
    lines.push({
      id: 'children',
      label: `Children (2–11) × ${draft.children}`,
      detail: `${formatUsd(childPrice)} per child — 40% off the adult rate`,
      amount: childPrice * draft.children
    });
  }

  if (draft.roomPreference === 'single' && tour.type === 'round') {
    const base = tour.priceFrom * draft.adults;
    lines.push({
      id: 'single',
      label: 'Single room supplement',
      detail: 'Charged when travelling without a room-share',
      amount: Math.round(base * SINGLE_SUPPLEMENT_RATE)
    });
  }

  draft.extras.forEach((extraId) => {
    const extra = tour.extras.find((item) => item.id === extraId);
    if (!extra) return;
    lines.push({
      id: extra.id,
      label: `${extra.label} × ${travelers}`,
      detail: `${formatUsd(extra.pricePerPerson)} per person`,
      amount: extra.pricePerPerson * travelers
    });
  });

  const total = lines.reduce((sum, line) => sum + line.amount, 0);

  return {
    lines,
    travelers,
    total,
    perPerson: travelers > 0 ? Math.round(total / travelers) : 0
  };
}

function formatUsd(amount: number): string {
  return `$${new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(amount)}`;
}

export function generateBookingReference(): string {
  const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  let suffix = '';
  for (let i = 0; i < 3; i += 1) {
    suffix += letters[Math.floor(Math.random() * letters.length)];
  }
  const digits = Math.floor(1000 + Math.random() * 9000);
  return `SL-${suffix}${digits}`;
}

export function toIsoDate(date: Date): string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function minBookingDate(): string {
  const date = new Date();
  date.setDate(date.getDate() + 7);
  return toIsoDate(date);
}

/**
 * Availability is confirmed by our reservations team. Sundays during the peak
 * season are held for existing group departures, so they are shown as
 * on-request rather than instantly bookable.
 */
export function isOnRequestDate(iso: string): boolean {
  if (!iso) return false;
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) return false;
  return date.getDay() === 0;
}