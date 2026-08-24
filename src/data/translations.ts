export type LanguageCode = 'en' | 'de' | 'fr' | 'it' | 'hi' | 'nl';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  englishLabel: string;
}

export const languages: LanguageOption[] = [
{ code: 'en', label: 'English', englishLabel: 'English' },
{ code: 'de', label: 'Deutsch', englishLabel: 'German' },
{ code: 'fr', label: 'Français', englishLabel: 'French' },
{ code: 'it', label: 'Italiano', englishLabel: 'Italian' },
{ code: 'hi', label: 'हिन्दी', englishLabel: 'Hindi' },
{ code: 'nl', label: 'Nederlands', englishLabel: 'Dutch' }];


export type TranslationKey =
'nav.tours' |
'nav.dayTours' |
'nav.roundTours' |
'nav.explore' |
'nav.activities' |
'nav.services' |
'nav.planTrip' |
'nav.contact' |
'cta.planTrip' |
'cta.bookNow' |
'cta.viewTour' |
'cta.whatsapp' |
'label.from' |
'label.perPerson' |
'label.duration' |
'label.reviews' |
'label.language' |
'label.currency';

type Dictionary = Record<TranslationKey, string>;

const en: Dictionary = {
  'nav.tours': 'Tours',
  'nav.dayTours': 'Day tours',
  'nav.roundTours': 'Round tours',
  'nav.explore': 'Explore',
  'nav.activities': 'Activities',
  'nav.services': 'Travel services',
  'nav.planTrip': 'Plan your trip',
  'nav.contact': 'Contact',
  'cta.planTrip': 'Plan my trip',
  'cta.bookNow': 'Book this tour',
  'cta.viewTour': 'View tour',
  'cta.whatsapp': 'Chat on WhatsApp',
  'label.from': 'From',
  'label.perPerson': 'per person',
  'label.duration': 'Duration',
  'label.reviews': 'reviews',
  'label.language': 'Language',
  'label.currency': 'Currency'
};

const de: Dictionary = {
  'nav.tours': 'Touren',
  'nav.dayTours': 'Tagestouren',
  'nav.roundTours': 'Rundreisen',
  'nav.explore': 'Entdecken',
  'nav.activities': 'Aktivitäten',
  'nav.services': 'Reiseservices',
  'nav.planTrip': 'Reise planen',
  'nav.contact': 'Kontakt',
  'cta.planTrip': 'Meine Reise planen',
  'cta.bookNow': 'Tour buchen',
  'cta.viewTour': 'Tour ansehen',
  'cta.whatsapp': 'Per WhatsApp schreiben',
  'label.from': 'Ab',
  'label.perPerson': 'pro Person',
  'label.duration': 'Dauer',
  'label.reviews': 'Bewertungen',
  'label.language': 'Sprache',
  'label.currency': 'Währung'
};

const fr: Dictionary = {
  'nav.tours': 'Circuits',
  'nav.dayTours': 'Excursions',
  'nav.roundTours': 'Circuits complets',
  'nav.explore': 'Explorer',
  'nav.activities': 'Activités',
  'nav.services': 'Services de voyage',
  'nav.planTrip': 'Planifier mon voyage',
  'nav.contact': 'Contact',
  'cta.planTrip': 'Planifier mon voyage',
  'cta.bookNow': 'Réserver ce circuit',
  'cta.viewTour': 'Voir le circuit',
  'cta.whatsapp': 'Discuter sur WhatsApp',
  'label.from': 'À partir de',
  'label.perPerson': 'par personne',
  'label.duration': 'Durée',
  'label.reviews': 'avis',
  'label.language': 'Langue',
  'label.currency': 'Devise'
};

const it: Dictionary = {
  'nav.tours': 'Tour',
  'nav.dayTours': 'Tour giornalieri',
  'nav.roundTours': 'Tour completi',
  'nav.explore': 'Esplora',
  'nav.activities': 'Attività',
  'nav.services': 'Servizi di viaggio',
  'nav.planTrip': 'Pianifica il viaggio',
  'nav.contact': 'Contatti',
  'cta.planTrip': 'Pianifica il mio viaggio',
  'cta.bookNow': 'Prenota questo tour',
  'cta.viewTour': 'Vedi il tour',
  'cta.whatsapp': 'Scrivi su WhatsApp',
  'label.from': 'Da',
  'label.perPerson': 'per persona',
  'label.duration': 'Durata',
  'label.reviews': 'recensioni',
  'label.language': 'Lingua',
  'label.currency': 'Valuta'
};

const hi: Dictionary = {
  'nav.tours': 'टूर',
  'nav.dayTours': 'एक दिन के टूर',
  'nav.roundTours': 'राउंड टूर',
  'nav.explore': 'खोजें',
  'nav.activities': 'गतिविधियाँ',
  'nav.services': 'यात्रा सेवाएँ',
  'nav.planTrip': 'यात्रा की योजना',
  'nav.contact': 'संपर्क',
  'cta.planTrip': 'मेरी यात्रा प्लान करें',
  'cta.bookNow': 'यह टूर बुक करें',
  'cta.viewTour': 'टूर देखें',
  'cta.whatsapp': 'WhatsApp पर बात करें',
  'label.from': 'से',
  'label.perPerson': 'प्रति व्यक्ति',
  'label.duration': 'अवधि',
  'label.reviews': 'समीक्षाएँ',
  'label.language': 'भाषा',
  'label.currency': 'मुद्रा'
};

const nl: Dictionary = {
  'nav.tours': 'Tours',
  'nav.dayTours': 'Dagtours',
  'nav.roundTours': 'Rondreizen',
  'nav.explore': 'Ontdekken',
  'nav.activities': 'Activiteiten',
  'nav.services': 'Reisdiensten',
  'nav.planTrip': 'Reis plannen',
  'nav.contact': 'Contact',
  'cta.planTrip': 'Mijn reis plannen',
  'cta.bookNow': 'Boek deze tour',
  'cta.viewTour': 'Bekijk tour',
  'cta.whatsapp': 'Chat via WhatsApp',
  'label.from': 'Vanaf',
  'label.perPerson': 'per persoon',
  'label.duration': 'Duur',
  'label.reviews': 'beoordelingen',
  'label.language': 'Taal',
  'label.currency': 'Valuta'
};

export const dictionaries: Record<LanguageCode, Dictionary> = { en, de, fr, it, hi, nl };

export interface CurrencyOption {
  code: string;
  symbol: string;
  rateFromUsd: number;
}

export const currencies: CurrencyOption[] = [
{ code: 'USD', symbol: '$', rateFromUsd: 1 },
{ code: 'EUR', symbol: '€', rateFromUsd: 0.92 },
{ code: 'GBP', symbol: '£', rateFromUsd: 0.79 },
{ code: 'INR', symbol: '₹', rateFromUsd: 83.2 }];