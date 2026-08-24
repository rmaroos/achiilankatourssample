import React from 'react';
import { MessageCircleIcon } from 'lucide-react';
import { useLocale } from '../../contexts/LocaleContext';

export const WHATSAPP_URL = 'https://wa.me/94771234567';

export function WhatsAppButton() {
  const { t } = useLocale();

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer noopener"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-jungle-800 px-4 py-3 text-sm font-medium text-sand-50 shadow-lift transition-colors duration-150 ease-smooth hover:bg-jungle-700">
      
      <MessageCircleIcon aria-hidden="true" className="h-5 w-5" />
      <span className="hidden sm:inline">{t('cta.whatsapp')}</span>
      <span className="sr-only sm:hidden">{t('cta.whatsapp')}</span>
    </a>);

}