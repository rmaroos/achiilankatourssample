import React from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { useLocale } from '../../contexts/LocaleContext';
import { languages } from '../../data/translations';
import { WHATSAPP_URL } from './WhatsAppButton';

const columns = [
{
  title: 'Tours',
  links: [
  { label: 'All tours', to: '/tours' },
  { label: 'Day tours', to: '/tours?type=day' },
  { label: 'Round tours', to: '/tours?type=round' },
  { label: 'Plan your trip', to: '/plan-your-trip' }]

},
{
  title: 'Explore',
  links: [
  { label: 'Beaches', to: '/tours?theme=beaches' },
  { label: 'Hill country', to: '/tours?theme=hill-country' },
  { label: 'Wildlife', to: '/tours?theme=wildlife' },
  { label: 'Heritage & culture', to: '/tours?theme=heritage' },
  { label: 'Tea trails', to: '/tours?theme=tea-trails' }]

},
{
  title: 'Travel services',
  links: [
  { label: 'Accommodation', to: '/explore#services' },
  { label: 'Transportation', to: '/explore#services' },
  { label: 'Activities', to: '/explore#activities' },
  { label: 'Contact & support', to: '/contact' }]

}];


export function Footer() {
  const { language } = useLocale();

  return (
    <footer className="mt-24 bg-jungle-900 text-sand-100">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <p className="font-display text-2xl font-semibold text-white">Serendib Journeys</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-sand-200">
              A Sri Lankan tour operator based in Colombo. We run our own tours, with our own drivers and
              guides — so the people you book with are the people who look after you here.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener" className="flex items-center gap-2.5 hover:text-white">
                <MessageCircleIcon aria-hidden="true" className="h-4 w-4" />
                WhatsApp +94 77 123 4567
              </a>
              <a href="mailto:hello@serendibjourneys.lk" className="flex items-center gap-2.5 hover:text-white">
                <MailIcon aria-hidden="true" className="h-4 w-4" />
                hello@serendibjourneys.lk
              </a>
              <a href="tel:+94112345678" className="flex items-center gap-2.5 hover:text-white">
                <PhoneIcon aria-hidden="true" className="h-4 w-4" />
                +94 11 234 5678
              </a>
            </div>
          </div>

          {columns.map((column) =>
          <nav key={column.title} aria-label={column.title}>
              <h2 className="text-xs uppercase tracking-[0.16em] text-sand-400">{column.title}</h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {column.links.map((link) =>
              <li key={link.label}>
                    <Link to={link.to} className="text-sand-200 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
              )}
              </ul>
            </nav>
          )}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-sand-400">
          <p>
            Site available in {languages.map((option) => option.englishLabel).join(', ')}. Currently viewing in{' '}
            {languages.find((option) => option.code === language)?.englishLabel}.
          </p>
          <p className="mt-2">
            Prices are shown in your selected currency for guidance and charged in USD. All taxes and service
            charges are included in the price you see. © {new Date().getFullYear()} Serendib Journeys (Pvt) Ltd,
            Colombo · SLTDA licence #TA/0142
          </p>
        </div>
      </div>
    </footer>);

}