import type { Activity, Experience, TravelerPhoto } from '../types';

export const experiences: Experience[] = [
{
  id: 'beaches',
  name: 'Beaches',
  tagline: 'South & east coast',
  description:
  'Long stretches of warm sand from Bentota to Arugam Bay, whale watching off Mirissa, and quiet coves for slow mornings.',
  image: "/770b7e46-b0bc-42d2-b235-2deb6e4e20eb.jpg",
  regions: ['Unawatuna', 'Mirissa', 'Tangalle', 'Arugam Bay']
},
{
  id: 'hill-country',
  name: 'Hill Country',
  tagline: 'Ella & Nuwara Eliya',
  description:
  'Cool mountain air, waterfalls, the Kandy to Ella train, and viewpoints you reach before sunrise.',
  image: "/ef7431f1-c955-470b-a753-b8a5286a7963.jpg",
  regions: ['Kandy', 'Nuwara Eliya', 'Ella', "Horton Plains"]
},
{
  id: 'wildlife',
  name: 'Wildlife',
  tagline: 'Yala, Udawalawe & Wilpattu',
  description:
  'Leopards, sloth bears and wild elephants in national parks, with early morning and late afternoon game drives.',
  image: "/181ae038-8c8f-4c0a-b553-0b67a3626cff.jpg",
  regions: ['Yala', 'Udawalawe', 'Wilpattu', 'Minneriya']
},
{
  id: 'heritage',
  name: 'Heritage & Culture',
  tagline: 'The Cultural Triangle',
  description:
  'Two thousand years of temples, rock fortresses and royal cities, from Anuradhapura to Sigiriya and Kandy.',
  image: "/447a44cf-f547-4b44-9008-359683b86f60.jpg",
  regions: ['Sigiriya', 'Polonnaruwa', 'Anuradhapura', 'Kandy']
},
{
  id: 'tea-trails',
  name: 'Tea Trails',
  tagline: 'Plantation country',
  description:
  'Estate walks, factory visits and tastings with the people who pick and process Ceylon tea.',
  image: "/cc207007-0620-413e-b17d-429803bebcae.jpg",
  regions: ['Nuwara Eliya', 'Haputale', 'Dickoya', 'Hatton']
}];


export const activities: Activity[] = [
{
  id: 'hiking',
  name: 'Hiking',
  description: "Sunrise summits and cloud forest trails, from Little Adam's Peak to Horton Plains.",
  bestPlaces: 'Ella, Horton Plains, Knuckles Range',
  season: 'December to March'
},
{
  id: 'surfing',
  name: 'Surfing',
  description: 'Beginner beach breaks and long right-hand points, with local instructors and board hire.',
  bestPlaces: 'Weligama, Hiriketiya, Arugam Bay',
  season: 'Nov to Apr (south) · May to Sep (east)'
},
{
  id: 'diving',
  name: 'Diving & Snorkelling',
  description: 'Reef and wreck dives in warm water, plus guided snorkelling for first-timers.',
  bestPlaces: 'Trincomalee, Hikkaduwa, Kalpitiya',
  season: 'May to September (east)'
},
{
  id: 'bird-watching',
  name: 'Bird Watching',
  description: 'Over 30 endemic species across wetlands, rainforest and dry-zone parks with a specialist guide.',
  bestPlaces: 'Sinharaja, Bundala, Kumana',
  season: 'November to April'
},
{
  id: 'wildlife',
  name: 'Wildlife Safari',
  description: 'Private 4x4 game drives with trackers who know the parks, timed to avoid the midday crowds.',
  bestPlaces: 'Yala, Udawalawe, Wilpattu',
  season: 'February to July'
}];


export const travelerPhotos: TravelerPhoto[] = [
{
  id: 'p1',
  image: "/d4c26a37-5dd0-40ff-b248-6bc9d99fbf68.jpg",
  caption: 'The Kandy to Ella train, somewhere after Nanu Oya.',
  credit: 'Photo shared by Lena & Tom, Germany'
},
{
  id: 'p2',
  image: "/d1b61cc5-b0bb-49cd-930a-2f8a823b87f3.jpg",
  caption: 'Rice and curry lunch at our guesthouse near Dambulla.',
  credit: 'Photo shared by the Bakker family, Netherlands'
},
{
  id: 'p3',
  image: "/8654daf5-2d77-473f-a5aa-11c292e74bee.jpg",
  caption: "Little Adam's Peak at 6am — worth the early alarm.",
  credit: 'Photo shared by Priya, India'
}];