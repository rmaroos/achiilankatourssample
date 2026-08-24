export type TourType = 'day' | 'round';

export type ThemeId =
'beaches' |
'hill-country' |
'wildlife' |
'heritage' |
'tea-trails' |
'hiking' |
'surfing' |
'diving' |
'bird-watching';

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  stay?: string;
  meals?: string;
}

export interface TourFaq {
  question: string;
  answer: string;
}

export interface TourExtra {
  id: string;
  label: string;
  description: string;
  pricePerPerson: number;
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  type: TourType;
  durationDays: number;
  durationLabel: string;
  priceFrom: number;
  priceBasis: string;
  rating: number;
  reviewCount: number;
  reviewSource: 'Tripadvisor' | 'Trustpilot';
  themes: ThemeId[];
  destinations: string[];
  image: string;
  gallery: string[];
  summary: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  accommodation: string;
  transport: string;
  groupSize: string;
  startsIn: string;
  bestMonths: string;
  faqs: TourFaq[];
  extras: TourExtra[];
}

export interface Experience {
  id: ThemeId;
  name: string;
  tagline: string;
  description: string;
  image: string;
  regions: string[];
}

export interface Activity {
  id: ThemeId;
  name: string;
  description: string;
  bestPlaces: string;
  season: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  source: 'Tripadvisor' | 'Trustpilot';
  rating: number;
  date: string;
  tourTitle: string;
  quote: string;
}

export interface TravelerPhoto {
  id: string;
  image: string;
  caption: string;
  credit: string;
}

export interface TravelerDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  notes: string;
}

export interface BookingDraft {
  tourSlug: string | null;
  startDate: string;
  adults: number;
  children: number;
  extras: string[];
  roomPreference: 'twin' | 'double' | 'single';
  traveler: TravelerDetails;
}

export interface ConfirmedBooking {
  reference: string;
  tourSlug: string;
  tourTitle: string;
  startDate: string;
  adults: number;
  children: number;
  extras: string[];
  total: number;
  currency: string;
  email: string;
  travelerName: string;
}