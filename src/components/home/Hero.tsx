import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon, ShieldCheckIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/experiences';
import { useLocale } from '../../contexts/LocaleContext';
import { Button } from '../ui/Button';

const HERO_IMAGE = "/c561bf61-0235-444a-8a55-9dff2e603e3f.jpg";


export function Hero() {
  const navigate = useNavigate();
  const { t } = useLocale();
  const [theme, setTheme] = useState('');
  const [type, setType] = useState('');

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (theme) params.set('theme', theme);
    if (type) params.set('type', type);
    navigate(`/tours${params.toString() ? `?${params.toString()}` : ''}`);
  }

  return (
    <section className="relative isolate overflow-hidden bg-jungle-900">
      <img
        src={HERO_IMAGE}
        alt="A train crossing a viaduct above tea plantations in Sri Lanka's hill country"
        className="absolute inset-0 h-full w-full object-cover opacity-70" />
      
      <div className="absolute inset-0 bg-jungle-900/55" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-20 lg:pb-20 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-2xl">
          
          <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-sand-100">
            <ShieldCheckIcon aria-hidden="true" className="h-4 w-4" />
            Licensed Sri Lankan tour operator · Our own guides and drivers
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Sri Lanka, planned properly by the people who live here.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-sand-100">
            Ready-made round tours and day trips you can book online in minutes — or tell us what you want and
            we will build the trip around it. Transport, hotels, guides and entrance fees handled.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/tours" size="lg" variant="accent">
              Browse tours
              <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button
              to="/plan-your-trip"
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:border-white hover:bg-white/10">
              
              {t('cta.planTrip')}
            </Button>
          </div>
        </motion.div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 rounded-2xl border border-white/20 bg-sand-50 p-4 shadow-lift sm:p-5 lg:max-w-3xl">
          
          <p className="text-sm font-semibold text-ink">Find a tour</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-ink-soft">What interests you</span>
              <select
                value={theme}
                onChange={(event) => setTheme(event.target.value)}
                className="w-full rounded-xl border border-sand-300 bg-white px-3 py-3 text-sm text-ink">
                
                <option value="">Anything</option>
                {experiences.map((experience) =>
                <option key={experience.id} value={experience.id}>
                    {experience.name}
                  </option>
                )}
                <option value="hiking">Hiking</option>
                <option value="surfing">Surfing</option>
                <option value="diving">Diving & snorkelling</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-ink-soft">Trip length</span>
              <select
                value={type}
                onChange={(event) => setType(event.target.value)}
                className="w-full rounded-xl border border-sand-300 bg-white px-3 py-3 text-sm text-ink">
                
                <option value="">Any length</option>
                <option value="day">A single day</option>
                <option value="round">A full round tour</option>
              </select>
            </label>
            <Button type="submit" size="lg" className="sm:self-end">
              Show tours
            </Button>
          </div>
        </form>
      </div>
    </section>);

}