import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { BookingDraft, ConfirmedBooking, Tour, TravelerDetails } from '../types';
import { buildQuote, generateBookingReference } from '../utils/pricing';

const emptyTraveler: TravelerDetails = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: '',
  notes: ''
};

const emptyDraft: BookingDraft = {
  tourSlug: null,
  startDate: '',
  adults: 2,
  children: 0,
  extras: [],
  roomPreference: 'double',
  traveler: emptyTraveler
};

interface BookingContextValue {
  draft: BookingDraft;
  updateDraft: (patch: Partial<BookingDraft>) => void;
  updateTraveler: (patch: Partial<TravelerDetails>) => void;
  startBooking: (tourSlug: string) => void;
  resetDraft: () => void;
  confirmation: ConfirmedBooking | null;
  confirmBooking: (tour: Tour, currencyCode: string) => ConfirmedBooking;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: {children: React.ReactNode;}) {
  const [draft, setDraft] = useState<BookingDraft>(emptyDraft);
  const [confirmation, setConfirmation] = useState<ConfirmedBooking | null>(null);

  const updateDraft = useCallback((patch: Partial<BookingDraft>) => {
    setDraft((current) => ({ ...current, ...patch }));
  }, []);

  const updateTraveler = useCallback((patch: Partial<TravelerDetails>) => {
    setDraft((current) => ({ ...current, traveler: { ...current.traveler, ...patch } }));
  }, []);

  const startBooking = useCallback((tourSlug: string) => {
    setDraft((current) =>
    current.tourSlug === tourSlug ? current : { ...emptyDraft, tourSlug }
    );
  }, []);

  const resetDraft = useCallback(() => setDraft(emptyDraft), []);

  const confirmBooking = useCallback(
    (tour: Tour, currencyCode: string) => {
      const quote = buildQuote(tour, draft);
      const booking: ConfirmedBooking = {
        reference: generateBookingReference(),
        tourSlug: tour.slug,
        tourTitle: tour.title,
        startDate: draft.startDate,
        adults: draft.adults,
        children: draft.children,
        extras: draft.extras.
        map((id) => tour.extras.find((extra) => extra.id === id)?.label).
        filter((label): label is string => Boolean(label)),
        total: quote.total,
        currency: currencyCode,
        email: draft.traveler.email,
        travelerName: `${draft.traveler.firstName} ${draft.traveler.lastName}`.trim()
      };
      setConfirmation(booking);
      return booking;
    },
    [draft]
  );

  const value = useMemo(
    () => ({
      draft,
      updateDraft,
      updateTraveler,
      startBooking,
      resetDraft,
      confirmation,
      confirmBooking
    }),
    [draft, updateDraft, updateTraveler, startBooking, resetDraft, confirmation, confirmBooking]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking(): BookingContextValue {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used inside a BookingProvider');
  }
  return context;
}