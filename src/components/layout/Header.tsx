import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { GlobeIcon, MenuIcon, PhoneIcon, XIcon } from 'lucide-react';
import { useLocale } from '../../contexts/LocaleContext';
import { currencies, languages } from '../../data/translations';
import type { LanguageCode } from '../../data/translations';
import { Button } from '../ui/Button';

function navLinkClass(isActive: boolean) {
  return [
  'text-[0.95rem] font-medium transition-colors duration-150 ease-smooth',
  isActive ? 'text-jungle-800 underline decoration-clay-500 decoration-2 underline-offset-8' : 'text-ink-soft hover:text-jungle-800'].
  join(' ');
}

export function Header() {
  const { t, language, setLanguage, currency, setCurrencyCode } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const links = [
  { to: '/tours', label: t('nav.tours') },
  { to: '/tours?type=day', label: t('nav.dayTours') },
  { to: '/tours?type=round', label: t('nav.roundTours') },
  { to: '/explore', label: t('nav.explore') },
  { to: '/explore#services', label: t('nav.services') },
  { to: '/contact', label: t('nav.contact') }];


  return (
    <header className="sticky top-0 z-30 border-b border-sand-200 bg-sand-50/95 backdrop-blur">
      <div className="hidden border-b border-sand-200 bg-jungle-900 text-sand-100 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-xs">
          <p>Sri Lanka specialists since 2011 · Licensed by SLTDA (#TA/0142)</p>
          <div className="flex items-center gap-5">
            <a href="tel:+94112345678" className="inline-flex items-center gap-1.5 hover:text-white">
              <PhoneIcon aria-hidden="true" className="h-3.5 w-3.5" />
              +94 11 234 5678
            </a>
            <label className="inline-flex items-center gap-1.5">
              <GlobeIcon aria-hidden="true" className="h-3.5 w-3.5" />
              <span className="sr-only">{t('label.language')}</span>
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value as LanguageCode)}
                className="rounded bg-transparent py-0.5 pr-1 text-xs text-sand-100 focus:text-ink [&>option]:text-ink">
                
                {languages.map((option) =>
                <option key={option.code} value={option.code}>
                    {option.label}
                  </option>
                )}
              </select>
            </label>
            <label className="inline-flex items-center gap-1.5">
              <span className="sr-only">{t('label.currency')}</span>
              <select
                value={currency.code}
                onChange={(event) => setCurrencyCode(event.target.value)}
                className="rounded bg-transparent py-0.5 pr-1 text-xs text-sand-100 [&>option]:text-ink">
                
                {currencies.map((option) =>
                <option key={option.code} value={option.code}>
                    {option.code}
                  </option>
                )}
              </select>
            </label>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold leading-none text-jungle-800">Serendib</span>
          <span className="hidden text-xs uppercase tracking-[0.18em] text-ink-muted sm:inline">
            Journeys
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const [path, search] = link.to.split('?');
            const isActive =
            location.pathname === path.split('#')[0] && (
            search ? location.search.includes(search) : location.search === '');
            return (
              <NavLink
                key={link.label}
                to={link.to}
                aria-current={isActive ? 'page' : undefined}
                className={navLinkClass(isActive)}>
                
                {link.label}
              </NavLink>);

          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button to="/plan-your-trip" variant="accent" size="sm" className="hidden sm:inline-flex">
            {t('cta.planTrip')}
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-300 text-jungle-800 lg:hidden">
            
            {mobileOpen ?
            <XIcon aria-hidden="true" className="h-5 w-5" /> :

            <MenuIcon aria-hidden="true" className="h-5 w-5" />
            }
            <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      {mobileOpen &&
      <div id="mobile-nav" className="border-t border-sand-200 bg-sand-50 lg:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col px-6 py-2">
            {links.map((link) =>
          <NavLink
            key={link.label}
            to={link.to}
            className="border-b border-sand-200 py-3.5 text-base font-medium text-ink-soft last:border-0">
            
                {link.label}
              </NavLink>
          )}
            <div className="flex flex-wrap items-center gap-4 py-4">
              <label className="flex items-center gap-2 text-sm text-ink-soft">
                {t('label.language')}
                <select
                value={language}
                onChange={(event) => setLanguage(event.target.value as LanguageCode)}
                className="rounded-lg border border-sand-300 bg-white px-2 py-2 text-sm">
                
                  {languages.map((option) =>
                <option key={option.code} value={option.code}>
                      {option.label}
                    </option>
                )}
                </select>
              </label>
              <label className="flex items-center gap-2 text-sm text-ink-soft">
                {t('label.currency')}
                <select
                value={currency.code}
                onChange={(event) => setCurrencyCode(event.target.value)}
                className="rounded-lg border border-sand-300 bg-white px-2 py-2 text-sm">
                
                  {currencies.map((option) =>
                <option key={option.code} value={option.code}>
                      {option.code}
                    </option>
                )}
                </select>
              </label>
            </div>
            <Button to="/plan-your-trip" variant="accent" size="md" className="mb-5 w-full">
              {t('cta.planTrip')}
            </Button>
          </nav>
        </div>
      }
    </header>);

}