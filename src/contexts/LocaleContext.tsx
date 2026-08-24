import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import {
  currencies,
  dictionaries,
  type CurrencyOption,
  type LanguageCode,
  type TranslationKey } from
'../data/translations';

interface LocaleContextValue {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  currency: CurrencyOption;
  setCurrencyCode: (code: string) => void;
  t: (key: TranslationKey) => string;
  formatPrice: (usd: number, options?: {decimals?: boolean;}) => string;
  formatDate: (iso: string) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: {children: React.ReactNode;}) {
  const [language, setLanguage] = useState<LanguageCode>('en');
  const [currencyCode, setCurrencyCode] = useState('USD');

  const currency = useMemo(
    () => currencies.find((item) => item.code === currencyCode) ?? currencies[0],
    [currencyCode]
  );

  const t = useCallback((key: TranslationKey) => dictionaries[language][key], [language]);

  const formatPrice = useCallback(
    (usd: number, options?: {decimals?: boolean;}) => {
      const converted = usd * currency.rateFromUsd;
      const formatted = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: options?.decimals ? 2 : 0,
        maximumFractionDigits: options?.decimals ? 2 : 0
      }).format(converted);
      return `${currency.symbol}${formatted}`;
    },
    [currency]
  );

  const formatDate = useCallback(
    (iso: string) => {
      if (!iso) return '';
      const date = new Date(`${iso}T00:00:00`);
      if (Number.isNaN(date.getTime())) return iso;
      return new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).format(date);
    },
    []
  );

  const value = useMemo(
    () => ({ language, setLanguage, currency, setCurrencyCode, t, formatPrice, formatDate }),
    [language, currency, t, formatPrice, formatDate]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used inside a LocaleProvider');
  }
  return context;
}