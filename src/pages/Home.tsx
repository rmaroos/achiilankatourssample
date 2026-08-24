import React from 'react';
import { Hero } from '../components/home/Hero';
import { ExperienceDiscovery } from '../components/home/ExperienceDiscovery';
import { FeaturedTours } from '../components/home/FeaturedTours';
import { WhatWeHandle } from '../components/home/WhatWeHandle';
import { TrustSection } from '../components/home/TrustSection';
import { TravelerPhotos } from '../components/home/TravelerPhotos';
import { CustomTripBanner } from '../components/home/CustomTripBanner';

export function Home() {
  return (
    <main>
      <Hero />
      <ExperienceDiscovery />
      <FeaturedTours />
      <WhatWeHandle />
      <TrustSection />
      <TravelerPhotos />
      <CustomTripBanner />
    </main>);

}