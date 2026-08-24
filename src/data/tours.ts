import type { Tour } from '../types';

const IMG = {
  hero: "/c561bf61-0235-444a-8a55-9dff2e603e3f.jpg",
  beaches: "/770b7e46-b0bc-42d2-b235-2deb6e4e20eb.jpg",
  hills: "/ef7431f1-c955-470b-a753-b8a5286a7963.jpg",
  wildlife: "/181ae038-8c8f-4c0a-b553-0b67a3626cff.jpg",
  heritage: "/447a44cf-f547-4b44-9008-359683b86f60.jpg",
  tea: "/cc207007-0620-413e-b17d-429803bebcae.jpg",
  surf: "/da3e7403-c4a6-4ffe-836a-872db30e0ce2.jpg"
};

const standardExclusions = [
'International flights to and from Colombo (CMB)',
'Sri Lanka visa / ETA fee (approx. USD 50 per person)',
'Travel insurance',
'Lunches and dinners unless listed as included',
'Entrance fees marked as optional in the itinerary',
'Personal expenses, drinks and tips'];


export const tours: Tour[] = [
{
  id: 'tour-classic',
  slug: 'classic-sri-lanka-10-days',
  title: 'Classic Sri Lanka',
  type: 'round',
  durationDays: 10,
  durationLabel: '10 days · 9 nights',
  priceFrom: 1290,
  priceBasis: 'per person, based on 2 travellers sharing',
  rating: 4.9,
  reviewCount: 214,
  reviewSource: 'Tripadvisor',
  themes: ['heritage', 'hill-country', 'wildlife', 'beaches', 'tea-trails'],
  destinations: ['Negombo', 'Sigiriya', 'Kandy', 'Nuwara Eliya', 'Ella', 'Yala', 'Mirissa'],
  image: IMG.hero,
  gallery: [IMG.hero, IMG.heritage, IMG.hills, IMG.wildlife, IMG.beaches],
  summary:
  'The whole country in one loop: the Cultural Triangle, the hill country train, a safari in Yala and four nights to slow down on the south coast. Our most booked itinerary, and the one we recommend for a first visit.',
  highlights: [
  'Climb Sigiriya rock fortress before the heat of the day',
  'Ride the Kandy to Ella train in reserved seats',
  'Private 4x4 game drive in Yala National Park',
  'Two full free days on the south coast'],

  itinerary: [
  { day: 1, title: 'Arrive Colombo → Negombo', description: 'Airport pickup at any hour and a short 25-minute transfer to a beach hotel in Negombo so you can sleep off the flight.', stay: 'Beach hotel, Negombo', meals: 'Breakfast' },
  { day: 2, title: 'Negombo → Anuradhapura → Sigiriya', description: 'Drive north to the first royal capital, cycling between the stupas and monastery ruins with a guide, then continue to Sigiriya.', stay: 'Garden hotel, Sigiriya', meals: 'Breakfast' },
  { day: 3, title: 'Sigiriya & Dambulla', description: 'Early start for Sigiriya Lion Rock, back for a late breakfast, then the Dambulla cave temples in the afternoon.', stay: 'Garden hotel, Sigiriya', meals: 'Breakfast' },
  { day: 4, title: 'Sigiriya → Kandy', description: 'Polonnaruwa ruins en route, a stop at a spice garden, then arrival in Kandy for the evening ceremony at the Temple of the Tooth.', stay: 'Hill view hotel, Kandy', meals: 'Breakfast' },
  { day: 5, title: 'Kandy → Nuwara Eliya by train', description: 'Morning at the botanical gardens, then the observation-carriage train up into tea country. Your driver meets you at Nanu Oya station.', stay: 'Colonial hotel, Nuwara Eliya', meals: 'Breakfast' },
  { day: 6, title: 'Tea country & Horton Plains', description: "Sunrise at Horton Plains for World's End, then a working tea factory and tasting in the afternoon.", stay: 'Colonial hotel, Nuwara Eliya', meals: 'Breakfast' },
  { day: 7, title: 'Nuwara Eliya → Ella', description: "Short train hop to Ella, then Nine Arch Bridge and the walk up Little Adam's Peak for sunset.", stay: 'Valley view lodge, Ella', meals: 'Breakfast' },
  { day: 8, title: 'Ella → Yala safari', description: 'Down to the dry zone for an afternoon private game drive in Yala National Park, looking for leopard, elephant and sloth bear.', stay: 'Safari lodge, Yala', meals: 'Breakfast, dinner' },
  { day: 9, title: 'Yala → Mirissa', description: 'Coast road west to the south beaches. The rest of the day is yours.', stay: 'Beach hotel, Mirissa', meals: 'Breakfast' },
  { day: 10, title: 'Mirissa → Colombo airport', description: 'Free morning by the sea, then a transfer to the airport timed around your flight, with a stop in Galle Fort if time allows.', meals: 'Breakfast' }],

  inclusions: [
  '9 nights accommodation in hand-picked 4-star hotels',
  'Daily breakfast and 1 dinner at the safari lodge',
  'Private air-conditioned car with English-speaking chauffeur guide throughout',
  'Reserved seats, Kandy to Nuwara Eliya and Nuwara Eliya to Ella trains',
  'Private 4x4 game drive in Yala National Park',
  'All entrance fees listed in the itinerary',
  'Airport pickup and drop-off at any hour',
  'Local SIM card with data on arrival',
  '24/7 WhatsApp support from our Colombo office'],

  exclusions: standardExclusions,
  accommodation: '4-star hotels and one safari lodge. Boutique and 5-star upgrades available on request.',
  transport: 'Private air-conditioned car or van with chauffeur guide, plus two reserved train journeys.',
  groupSize: 'Private tour — 2 to 6 travellers',
  startsIn: 'Colombo airport (CMB)',
  bestMonths: 'December to April',
  faqs: [
  { question: 'Is this a private tour or a group tour?', answer: 'Private. The car, driver and guide are yours alone, and the itinerary can be adjusted with your guide as you go.' },
  { question: 'How much driving is there each day?', answer: 'Most transfers are 2 to 4 hours, with the longest being Ella to Yala at around 4.5 hours. We build in stops and never drive at night.' },
  { question: 'What if we want different hotels?', answer: 'Tell us at the options step or on WhatsApp. We will quote the difference in writing before you pay anything extra.' },
  { question: 'Can we see the tour price in euros?', answer: 'Yes — switch currency in the header. All prices are charged in USD and your bank applies its own conversion rate.' }],

  extras: [
  { id: 'x-upgrade5', label: '5-star hotel upgrade', description: 'All nine nights in 5-star properties and a luxury safari camp.', pricePerPerson: 540 },
  { id: 'x-whale', label: 'Whale watching from Mirissa', description: 'Morning boat trip with a marine guide (seasonal, Nov–Apr).', pricePerPerson: 55 },
  { id: 'x-cooking', label: 'Family cooking class', description: 'Two-hour rice and curry class in a home near Sigiriya, including lunch.', pricePerPerson: 35 }]

},
{
  id: 'tour-wildlife-beaches',
  slug: 'wildlife-and-beaches-8-days',
  title: 'Wildlife & Beaches',
  type: 'round',
  durationDays: 8,
  durationLabel: '8 days · 7 nights',
  priceFrom: 980,
  priceBasis: 'per person, based on 2 travellers sharing',
  rating: 4.8,
  reviewCount: 137,
  reviewSource: 'Tripadvisor',
  themes: ['wildlife', 'beaches', 'bird-watching'],
  destinations: ['Negombo', 'Wilpattu', 'Udawalawe', 'Yala', 'Tangalle', 'Galle'],
  image: IMG.wildlife,
  gallery: [IMG.wildlife, IMG.beaches, IMG.surf, IMG.hero],
  summary:
  'Three national parks and four nights on the coast, for travellers who came for animals and sea rather than temples. Game drives are timed for first light and late afternoon, when the parks are actually active.',
  highlights: [
  'Three parks: Wilpattu, Udawalawe and Yala',
  'Elephant transit home feeding at Udawalawe',
  'Four nights on a quiet stretch of the south coast',
  'Half day in Galle Fort with a local historian'],

  itinerary: [
  { day: 1, title: 'Arrive Colombo → Negombo', description: 'Airport pickup and a short transfer to the coast to rest.', stay: 'Beach hotel, Negombo', meals: 'Breakfast' },
  { day: 2, title: 'Negombo → Wilpattu', description: 'North to Sri Lanka\'s largest and quietest park, with an afternoon game drive among the villus.', stay: 'Eco lodge, Wilpattu', meals: 'Breakfast, dinner' },
  { day: 3, title: 'Wilpattu → Udawalawe', description: 'Long drive south through the interior, arriving in time for the evening elephant feeding at the transit home.', stay: 'Lodge, Udawalawe', meals: 'Breakfast' },
  { day: 4, title: 'Udawalawe safari', description: 'Dawn game drive in the park, famous for large elephant herds, then a free afternoon.', stay: 'Lodge, Udawalawe', meals: 'Breakfast' },
  { day: 5, title: 'Udawalawe → Yala', description: 'Afternoon private 4x4 drive in Yala Block 1, the best leopard density in the country.', stay: 'Safari lodge, Yala', meals: 'Breakfast, dinner' },
  { day: 6, title: 'Yala → Tangalle', description: 'To the coast. Beach afternoon, with an optional turtle hatchery visit.', stay: 'Beach hotel, Tangalle', meals: 'Breakfast' },
  { day: 7, title: 'Tangalle & Galle', description: 'Morning walking tour of Galle Fort, afternoon free on the beach.', stay: 'Beach hotel, Tangalle', meals: 'Breakfast' },
  { day: 8, title: 'Tangalle → Colombo airport', description: 'Transfer via the coastal expressway, timed to your flight.', meals: 'Breakfast' }],

  inclusions: [
  '7 nights accommodation in 4-star hotels and safari lodges',
  'Daily breakfast and 2 dinners at safari lodges',
  'Three private 4x4 game drives with park trackers',
  'All national park entrance and jeep fees',
  'Private air-conditioned car with chauffeur guide throughout',
  'Galle Fort walking tour with a local guide',
  'Airport pickup and drop-off at any hour',
  '24/7 WhatsApp support from our Colombo office'],

  exclusions: standardExclusions,
  accommodation: '4-star beach hotels and two safari lodges with mosquito nets and hot water.',
  transport: 'Private air-conditioned car or van with chauffeur guide; park 4x4 jeeps with trackers.',
  groupSize: 'Private tour — 2 to 6 travellers',
  startsIn: 'Colombo airport (CMB)',
  bestMonths: 'February to July',
  faqs: [
  { question: 'Are we guaranteed to see a leopard?', answer: 'No, and we will not pretend otherwise. Yala Block 1 has the highest density in Sri Lanka and our trackers know it well, but these are wild animals in an open park.' },
  { question: 'Is this suitable for children?', answer: 'Yes, from about age 6. Game drives start early and last 3 to 4 hours over rough tracks.' },
  { question: 'Can we add a third safari day?', answer: 'Yes — add it at the options step or ask us on WhatsApp and we will requote in writing.' }],

  extras: [
  { id: 'x-extra-safari', label: 'Extra full-day Yala safari', description: 'Dawn to dusk in the park with a packed breakfast and lunch.', pricePerPerson: 110 },
  { id: 'x-birding', label: 'Specialist birding guide', description: 'An endemic-species guide joins you for two days in the parks.', pricePerPerson: 90 }]

},
{
  id: 'tour-tea-trails',
  slug: 'tea-trails-hill-country-6-days',
  title: 'Tea Trails & Hill Country',
  type: 'round',
  durationDays: 6,
  durationLabel: '6 days · 5 nights',
  priceFrom: 720,
  priceBasis: 'per person, based on 2 travellers sharing',
  rating: 4.9,
  reviewCount: 96,
  reviewSource: 'Trustpilot',
  themes: ['tea-trails', 'hill-country', 'hiking'],
  destinations: ['Kandy', 'Hatton', 'Nuwara Eliya', 'Haputale', 'Ella'],
  image: IMG.tea,
  gallery: [IMG.tea, IMG.hills, IMG.hero],
  summary:
  'A slow week in the mountains: two train journeys, estate walks with plantation staff, factory visits and enough time to actually sit still with a pot of tea and a view.',
  highlights: [
  'Two legs of the Kandy to Ella railway in reserved seats',
  'Guided walk on a working tea estate with a field officer',
  "Sunrise at Lipton's Seat above Haputale",
  "Little Adam's Peak and Nine Arch Bridge in Ella"],

  itinerary: [
  { day: 1, title: 'Colombo → Kandy', description: 'Pickup in Colombo or at the airport and a scenic drive up to Kandy, with the lakeside temple in the evening.', stay: 'Hill view hotel, Kandy', meals: 'Breakfast' },
  { day: 2, title: 'Kandy → Hatton by train', description: 'Morning train into the highlands and an afternoon estate walk with a plantation field officer.', stay: 'Planter bungalow, Dickoya', meals: 'Breakfast, dinner' },
  { day: 3, title: 'Hatton → Nuwara Eliya', description: 'Tea factory tour and tasting, then on to Nuwara Eliya for a walk around the town and Gregory Lake.', stay: 'Colonial hotel, Nuwara Eliya', meals: 'Breakfast' },
  { day: 4, title: 'Horton Plains → Haputale', description: "Early start for World's End and Baker's Falls, then across to Haputale.", stay: 'Guesthouse, Haputale', meals: 'Breakfast' },
  { day: 5, title: "Lipton's Seat → Ella", description: "Sunrise tuk-tuk to Lipton's Seat and a walk back down through the estates, then the short hop to Ella.", stay: 'Valley view lodge, Ella', meals: 'Breakfast' },
  { day: 6, title: 'Ella → Colombo or airport', description: "Morning hike up Little Adam's Peak, then transfer back down to Colombo or the airport.", meals: 'Breakfast' }],

  inclusions: [
  '5 nights accommodation including one night in a planter bungalow',
  'Daily breakfast and 1 dinner',
  'Reserved train seats, Kandy–Hatton and Haputale–Ella',
  'Guided tea estate walk and factory visit with tasting',
  'Private air-conditioned car with chauffeur guide throughout',
  'Horton Plains entrance fees',
  '24/7 WhatsApp support from our Colombo office'],

  exclusions: standardExclusions,
  accommodation: 'Colonial-era hotels, one planter bungalow and a valley view lodge in Ella.',
  transport: 'Private air-conditioned car with chauffeur guide, plus two reserved train legs.',
  groupSize: 'Private tour — 2 to 6 travellers',
  startsIn: 'Colombo city or airport (CMB)',
  bestMonths: 'January to April',
  faqs: [
  { question: 'How hard are the walks?', answer: "Moderate. Horton Plains is a flat 9km loop and Lipton's Seat is a 7km downhill walk. Both are optional." },
  { question: 'Will it be cold?', answer: 'Nuwara Eliya drops to about 10°C at night and Horton Plains can be 5°C at sunrise. Bring a fleece and a light rain layer.' }],

  extras: [
  { id: 'x-highteahotel', label: 'Grand hotel high tea', description: 'Afternoon tea at a colonial grand hotel in Nuwara Eliya.', pricePerPerson: 28 },
  { id: 'x-privatetrain', label: 'First-class observation carriage', description: 'Upgrade both train legs to the observation carriage where available.', pricePerPerson: 22 }]

},
{
  id: 'tour-heritage',
  slug: 'ancient-kingdoms-7-days',
  title: 'Ancient Kingdoms & Heritage',
  type: 'round',
  durationDays: 7,
  durationLabel: '7 days · 6 nights',
  priceFrom: 860,
  priceBasis: 'per person, based on 2 travellers sharing',
  rating: 4.7,
  reviewCount: 74,
  reviewSource: 'Tripadvisor',
  themes: ['heritage', 'hill-country'],
  destinations: ['Negombo', 'Anuradhapura', 'Polonnaruwa', 'Sigiriya', 'Kandy', 'Galle'],
  image: IMG.heritage,
  gallery: [IMG.heritage, IMG.hero, IMG.hills],
  summary:
  'Five UNESCO World Heritage sites with an archaeology-trained guide, paced so each site gets a proper morning rather than a rushed hour.',
  highlights: [
  'Anuradhapura and Polonnaruwa with a specialist guide',
  'Sigiriya rock fortress at opening time',
  'Dambulla cave temple paintings',
  'Evening puja at the Temple of the Sacred Tooth Relic'],

  itinerary: [
  { day: 1, title: 'Arrive Colombo → Negombo', description: 'Airport pickup and an easy first night on the coast.', stay: 'Beach hotel, Negombo', meals: 'Breakfast' },
  { day: 2, title: 'Negombo → Anuradhapura', description: 'The first capital: sacred bo tree, giant dagobas and monastery ruins, by bicycle if you like.', stay: 'Hotel, Anuradhapura', meals: 'Breakfast' },
  { day: 3, title: 'Anuradhapura → Polonnaruwa → Sigiriya', description: 'The medieval capital in the cooler morning, then on to Sigiriya.', stay: 'Garden hotel, Sigiriya', meals: 'Breakfast' },
  { day: 4, title: 'Sigiriya & Dambulla', description: 'Lion Rock at 7am, then the five cave temples of Dambulla in the afternoon.', stay: 'Garden hotel, Sigiriya', meals: 'Breakfast' },
  { day: 5, title: 'Sigiriya → Kandy', description: 'Matale spice garden and a wood-carving workshop en route, evening temple ceremony in Kandy.', stay: 'Hill view hotel, Kandy', meals: 'Breakfast' },
  { day: 6, title: 'Kandy → Galle', description: 'Long drive south via the expressway, arriving for sunset on the Galle Fort ramparts.', stay: 'Boutique hotel, Galle Fort', meals: 'Breakfast' },
  { day: 7, title: 'Galle → Colombo airport', description: 'Morning walking tour of the fort, then transfer to the airport.', meals: 'Breakfast' }],

  inclusions: [
  '6 nights accommodation in 4-star and boutique hotels',
  'Daily breakfast',
  'Archaeology-trained English-speaking guide throughout',
  'All UNESCO site entrance fees listed in the itinerary',
  'Private air-conditioned car with chauffeur',
  'Airport pickup and drop-off at any hour',
  '24/7 WhatsApp support from our Colombo office'],

  exclusions: standardExclusions,
  accommodation: '4-star hotels plus two nights in boutique properties.',
  transport: 'Private air-conditioned car or van with chauffeur and a separate site guide.',
  groupSize: 'Private tour — 2 to 8 travellers',
  startsIn: 'Colombo airport (CMB)',
  bestMonths: 'May to September',
  faqs: [
  { question: 'Is the Sigiriya climb difficult?', answer: 'It is about 1,200 steps and takes most people 90 minutes up and down. Pidurangala rock nearby is a lower-cost, quieter alternative if you prefer.' },
  { question: 'Do we need to cover up at temples?', answer: 'Yes — shoulders and knees covered, shoes off. Bring a light scarf and socks for hot stone.' }],

  extras: [
  { id: 'x-pidurangala', label: 'Pidurangala sunrise climb', description: 'Guided pre-dawn climb for the classic view back at Sigiriya.', pricePerPerson: 25 },
  { id: 'x-balloon', label: 'Hot air balloon over Sigiriya', description: 'Sunrise flight, weather permitting (Nov–Apr).', pricePerPerson: 235 }]

},
{
  id: 'tour-surf-coast',
  slug: 'surf-and-coast-escape-9-days',
  title: 'Surf & Coast Escape',
  type: 'round',
  durationDays: 9,
  durationLabel: '9 days · 8 nights',
  priceFrom: 1050,
  priceBasis: 'per person, based on 2 travellers sharing',
  rating: 4.8,
  reviewCount: 58,
  reviewSource: 'Trustpilot',
  themes: ['surfing', 'beaches', 'diving'],
  destinations: ['Weligama', 'Hiriketiya', 'Tangalle', 'Arugam Bay'],
  image: IMG.surf,
  gallery: [IMG.surf, IMG.beaches, IMG.wildlife],
  summary:
  'A coast-hopping trip built around the swell, with morning lessons or free surfs, afternoons for snorkelling and food, and a driver who moves you between breaks.',
  highlights: [
  'Coached sessions for beginners and improvers',
  'Board hire and transfers between four breaks',
  'Snorkelling reef trip and a lagoon safari',
  'Two nights at a surf point in Arugam Bay or Hiriketiya, by season'],

  itinerary: [
  { day: 1, title: 'Arrive Colombo → Weligama', description: 'Airport pickup and the expressway south to the south coast.', stay: 'Surf guesthouse, Weligama', meals: 'Breakfast' },
  { day: 2, title: 'Weligama surf', description: 'Two coached sessions on the beach break, afternoon free.', stay: 'Surf guesthouse, Weligama', meals: 'Breakfast' },
  { day: 3, title: 'Weligama & Mirissa', description: 'Morning surf, afternoon snorkelling trip out to the reef.', stay: 'Surf guesthouse, Weligama', meals: 'Breakfast' },
  { day: 4, title: 'Weligama → Hiriketiya', description: 'Move east to the horseshoe bay, with a session on the left-hand point.', stay: 'Beach cabana, Hiriketiya', meals: 'Breakfast' },
  { day: 5, title: 'Hiriketiya', description: 'Free surf, yoga session and a walk out to the headland.', stay: 'Beach cabana, Hiriketiya', meals: 'Breakfast' },
  { day: 6, title: 'Hiriketiya → Tangalle', description: 'Quieter beaches, a lagoon boat safari and a fisherman-market visit.', stay: 'Beach hotel, Tangalle', meals: 'Breakfast' },
  { day: 7, title: 'Tangalle → east coast point', description: 'Cross-country drive to the seasonal point break with your driver and boards.', stay: 'Surf lodge, Arugam Bay', meals: 'Breakfast' },
  { day: 8, title: 'Point break day', description: 'Dawn session, lazy afternoon, sunset session.', stay: 'Surf lodge, Arugam Bay', meals: 'Breakfast' },
  { day: 9, title: 'Return to Colombo airport', description: 'Transfer back across the island, timed to your flight.', meals: 'Breakfast' }],

  inclusions: [
  '8 nights in surf guesthouses, cabanas and lodges',
  'Daily breakfast',
  'Four coached surf sessions with a qualified local instructor',
  'Board and leash hire throughout',
  'Snorkelling reef trip and lagoon boat safari',
  'Private vehicle with roof rack and driver',
  '24/7 WhatsApp support from our Colombo office'],

  exclusions: standardExclusions,
  accommodation: 'Surf guesthouses and beach cabanas, simple and clean rather than luxury.',
  transport: 'Private vehicle with board rack and driver throughout.',
  groupSize: 'Private tour — 2 to 4 travellers',
  startsIn: 'Colombo airport (CMB)',
  bestMonths: 'Nov to Apr (south) · May to Sep (east)',
  faqs: [
  { question: 'I have never surfed. Is that a problem?', answer: 'No. Weligama and Hiriketiya both have forgiving beach breaks and the coaching starts from scratch.' },
  { question: 'Which coast will we surf?', answer: 'It depends on your travel dates and the monsoon. We confirm the coast in writing when you book, not after.' }],

  extras: [
  { id: 'x-extra-coach', label: 'Two extra coached sessions', description: 'Additional one-to-one coaching with video feedback.', pricePerPerson: 70 },
  { id: 'x-dive', label: 'Two-tank reef dive', description: 'Guided dives for certified divers, gear included.', pricePerPerson: 95 }]

},
{
  id: 'tour-sigiriya-day',
  slug: 'sigiriya-dambulla-day-tour',
  title: 'Sigiriya & Dambulla from Colombo',
  type: 'day',
  durationDays: 1,
  durationLabel: '1 day · approx. 15 hours',
  priceFrom: 145,
  priceBasis: 'per person, based on 2 travellers',
  rating: 4.7,
  reviewCount: 189,
  reviewSource: 'Tripadvisor',
  themes: ['heritage'],
  destinations: ['Sigiriya', 'Dambulla'],
  image: IMG.heritage,
  gallery: [IMG.heritage, IMG.hero],
  summary:
  'A long but rewarding day from Colombo or Negombo: the Lion Rock fortress before the crowds and heat, the Dambulla cave temples after lunch, and a private car door to door.',
  highlights: [
  'Pickup from your Colombo or Negombo hotel at 4am',
  'Sigiriya rock fortress with a licensed guide',
  'Dambulla golden cave temples',
  'Village rice and curry lunch included'],

  itinerary: [
  { day: 1, title: 'Colombo → Sigiriya → Dambulla → Colombo', description: '04:00 hotel pickup · 08:00 arrive Sigiriya and climb with your guide · 11:30 village lunch · 13:30 Dambulla cave temples · 15:30 begin the drive back · 19:00 approx. hotel drop-off.', meals: 'Lunch' }],

  inclusions: [
  'Private air-conditioned car with English-speaking chauffeur guide',
  'Hotel pickup and drop-off in Colombo, Negombo or Kalutara',
  'Sigiriya and Dambulla entrance fees',
  'Licensed site guide at Sigiriya',
  'Village rice and curry lunch',
  'Bottled water throughout the day'],

  exclusions: [
  'Hotel pickup outside the listed areas (quoted separately)',
  'Drinks other than the water provided',
  'Tips and personal expenses'],

  accommodation: 'Not applicable — day tour.',
  transport: 'Private air-conditioned car or van with chauffeur guide.',
  groupSize: 'Private tour — 1 to 6 travellers',
  startsIn: 'Your hotel in Colombo, Negombo or Kalutara',
  bestMonths: 'All year',
  faqs: [
  { question: 'Why does it start at 4am?', answer: 'To reach Sigiriya before the heat and the tour buses. The climb is far more pleasant at 8am than at 11am.' },
  { question: 'Can we swap Sigiriya for Pidurangala?', answer: 'Yes, and it reduces the price because the entrance fee is lower. Tell us at the options step.' }],

  extras: [
  { id: 'x-elephant', label: 'Minneriya elephant safari add-on', description: 'Afternoon jeep safari instead of Dambulla (seasonal).', pricePerPerson: 60 }]

},
{
  id: 'tour-yala-day',
  slug: 'yala-safari-day-tour',
  title: 'Yala Full-Day Safari',
  type: 'day',
  durationDays: 1,
  durationLabel: '1 day · dawn to dusk',
  priceFrom: 95,
  priceBasis: 'per person, based on 2 travellers sharing a jeep',
  rating: 4.6,
  reviewCount: 143,
  reviewSource: 'Tripadvisor',
  themes: ['wildlife', 'bird-watching'],
  destinations: ['Yala National Park'],
  image: IMG.wildlife,
  gallery: [IMG.wildlife, IMG.beaches],
  summary:
  'A full day in Yala Block 1 with a tracker who works the park daily — out at first light, a shaded break with breakfast and lunch, and back out for the late afternoon movement.',
  highlights: [
  '05:00 pickup from Tissamaharama, Kataragama or Yala hotels',
  'Private 4x4 jeep with driver and spotter',
  'Breakfast and lunch packed for the park',
  'Binoculars and a species checklist provided'],

  itinerary: [
  { day: 1, title: 'Full-day game drive, Yala Block 1', description: '05:00 hotel pickup · 05:30 park gate at opening · morning drive with a breakfast stop by the tank · midday shaded break with lunch · afternoon drive until the park closes · approx. 18:30 hotel drop-off.', meals: 'Breakfast, lunch' }],

  inclusions: [
  'Private 4x4 safari jeep with driver and spotter',
  'National park entrance and jeep permit fees',
  'Packed breakfast and lunch',
  'Binoculars and species checklist',
  'Hotel pickup and drop-off within 25km of the park'],

  exclusions: [
  'Accommodation before or after the safari',
  'Drinks beyond the water provided',
  'Tips for your driver and spotter'],

  accommodation: 'Not applicable — day tour. We can add a night nearby on request.',
  transport: 'Private open 4x4 jeep.',
  groupSize: 'Private jeep — 1 to 6 travellers',
  startsIn: 'Tissamaharama, Kataragama or Yala area hotels',
  bestMonths: 'February to July',
  faqs: [
  { question: 'Half day or full day?', answer: 'Full days see noticeably more, because you are in the park during the quiet midday hours when leopards often move. Half-day options are available on request.' },
  { question: 'What should we bring?', answer: 'Neutral clothing, a hat, sunscreen and a fleece for the cold early drive. The jeep is open on all sides.' }],

  extras: [
  { id: 'x-photo', label: 'Wildlife photography guide', description: 'A photographer joins your jeep to help with settings and positioning.', pricePerPerson: 65 }]

},
{
  id: 'tour-ella-day',
  slug: 'ella-hike-nine-arch-day-tour',
  title: "Ella Hike & Nine Arch Bridge",
  type: 'day',
  durationDays: 1,
  durationLabel: '1 day · approx. 8 hours',
  priceFrom: 80,
  priceBasis: 'per person, based on 2 travellers',
  rating: 4.8,
  reviewCount: 111,
  reviewSource: 'Trustpilot',
  themes: ['hiking', 'hill-country', 'tea-trails'],
  destinations: ['Ella', 'Nine Arch Bridge', 'Ravana Falls'],
  image: IMG.hills,
  gallery: [IMG.hills, IMG.tea, IMG.hero],
  summary:
  "A walking day around Ella with a local guide: Little Adam's Peak at sunrise, the Nine Arch Bridge timed for a passing train, a tea factory, and Ravana Falls on the way back.",
  highlights: [
  "Sunrise on Little Adam's Peak",
  'Nine Arch Bridge timed with the train schedule',
  'Small tea factory visit and tasting',
  'Tuk-tuk transfers between stops'],

  itinerary: [
  { day: 1, title: 'Ella walking day', description: "05:30 guesthouse pickup · 06:00 Little Adam's Peak for sunrise · 08:00 breakfast in town · 09:30 Nine Arch Bridge for the morning train · 11:30 tea factory and tasting · 13:00 Ravana Falls · 14:00 approx. drop-off.", meals: 'Breakfast' }],

  inclusions: [
  'Local English-speaking walking guide',
  'Tuk-tuk transfers between all stops',
  'Breakfast in Ella town',
  'Tea factory entrance and tasting',
  'Bottled water'],

  exclusions: ['Accommodation in Ella', 'Lunch and drinks', 'Tips'],
  accommodation: 'Not applicable — day tour.',
  transport: 'Tuk-tuk transfers plus walking, approx. 8km total on foot.',
  groupSize: 'Private tour — 1 to 4 travellers',
  startsIn: 'Your guesthouse in Ella',
  bestMonths: 'December to March',
  faqs: [
  { question: 'How fit do we need to be?', answer: "Little Adam's Peak is a 45-minute walk with some steps. Anyone comfortable on a hilly walk will be fine." },
  { question: 'What if it rains?', answer: 'The hill country gets afternoon showers. We start early for that reason, and reschedule at no cost if the morning is washed out.' }],

  extras: [
  { id: 'x-zipline', label: 'Flying Ravana zip line', description: 'Add the 550m zip line above the valley after the hike.', pricePerPerson: 30 }]

},
{
  id: 'tour-colombo-day',
  slug: 'colombo-city-street-food-day-tour',
  title: 'Colombo City & Street Food',
  type: 'day',
  durationDays: 1,
  durationLabel: 'Half day · approx. 5 hours',
  priceFrom: 65,
  priceBasis: 'per person, based on 2 travellers',
  rating: 4.6,
  reviewCount: 87,
  reviewSource: 'Tripadvisor',
  themes: ['heritage'],
  destinations: ['Colombo', 'Pettah', 'Galle Face'],
  image: IMG.hero,
  gallery: [IMG.hero, IMG.heritage],
  summary:
  'An afternoon and evening walk through Colombo with a guide who grew up there: the Pettah markets, a Hindu temple, colonial Fort, and six street-food stops ending at Galle Face Green.',
  highlights: [
  'Pettah market and Sea Street',
  'Six tasting stops including kottu and isso vadai',
  'Old Dutch Hospital and Fort architecture',
  'Sunset at Galle Face Green'],

  itinerary: [
  { day: 1, title: 'Colombo afternoon walk', description: '15:00 hotel pickup · 15:30 Pettah market and Sea Street temples · 16:30 Fort and Old Dutch Hospital · 17:15 street-food stops through Slave Island · 18:45 sunset at Galle Face Green · 19:30 hotel drop-off.', meals: 'Street-food tastings' }],

  inclusions: [
  'Local guide who lives in Colombo',
  'All six street-food tastings',
  'Hotel pickup and drop-off within Colombo',
  'Tuk-tuk hops between neighbourhoods',
  'Bottled water'],

  exclusions: ['Alcoholic drinks', 'Additional food beyond the tastings', 'Tips'],
  accommodation: 'Not applicable — day tour.',
  transport: 'Walking plus short tuk-tuk hops.',
  groupSize: 'Private tour — 1 to 6 travellers',
  startsIn: 'Your hotel in Colombo',
  bestMonths: 'All year',
  faqs: [
  { question: 'Can you cater for vegetarians?', answer: 'Yes. Tell us at the options step and every stop will be vegetarian or vegan. Sri Lankan street food is well suited to it.' },
  { question: 'Is the food safe?', answer: 'We use stalls we know and eat at ourselves, all freshly cooked to order. If you have a sensitive stomach, tell your guide and they will adjust.' }],

  extras: [
  { id: 'x-arrack', label: 'Arrack tasting', description: 'A guided tasting of Sri Lankan coconut arrack at a Fort bar.', pricePerPerson: 20 }]

}];


export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((tour) => tour.slug === slug);
}

export const featuredTourSlugs = [
'classic-sri-lanka-10-days',
'wildlife-and-beaches-8-days',
'tea-trails-hill-country-6-days'];