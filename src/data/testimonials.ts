import type { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
{
  id: 't1',
  name: 'Marianne D.',
  country: 'France',
  source: 'Tripadvisor',
  rating: 5,
  date: 'March 2026',
  tourTitle: 'Classic Sri Lanka — 10 Days',
  quote:
  'Everything was arranged exactly as written on the website. Our driver Nuwan met us at the airport at 2am and stayed with us for the whole trip. No surprise costs at any point.'
},
{
  id: 't2',
  name: 'Stefan K.',
  country: 'Germany',
  source: 'Trustpilot',
  rating: 5,
  date: 'February 2026',
  tourTitle: 'Wildlife & Beaches — 8 Days',
  quote:
  'We asked to swap one beach day for a second safari and they rebuilt the itinerary in a day, with the price difference explained line by line before we paid.'
},
{
  id: 't3',
  name: 'Aditi R.',
  country: 'India',
  source: 'Tripadvisor',
  rating: 4,
  date: 'January 2026',
  tourTitle: 'Tea Trails & Hill Country — 6 Days',
  quote:
  'The hill country was the highlight and our guide knew the estates properly. One hotel was simpler than we expected, which they told us honestly beforehand.'
},
{
  id: 't4',
  name: 'Jeroen V.',
  country: 'Netherlands',
  source: 'Trustpilot',
  rating: 5,
  date: 'December 2025',
  tourTitle: 'Ancient Kingdoms — 7 Days',
  quote:
  'Booked online in about ten minutes, had the voucher and full itinerary by email straight away, and someone answered on WhatsApp every time we messaged.'
}];


export const trustSignals = [
{ label: 'Tripadvisor rating', value: '4.8 / 5', detail: 'Based on 612 traveller reviews' },
{ label: 'Trustpilot rating', value: '4.7 / 5', detail: 'Based on 438 reviews' },
{ label: 'Travellers hosted', value: '11,400+', detail: 'Since 2011, across 42 countries' },
{ label: 'Licensed operator', value: 'SLTDA #TA/0142', detail: 'Sri Lanka Tourism Development Authority' }];