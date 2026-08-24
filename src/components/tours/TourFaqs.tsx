import React, { useState } from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';
import type { TourFaq } from '../../types';

export function TourFaqs({ faqs }: {faqs: TourFaq[];}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <dl className="divide-y divide-sand-200 rounded-2xl border border-sand-200 bg-white">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question} className="px-5">
            <dt>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-4 text-left font-medium text-ink">
                
                {faq.question}
                {isOpen ?
                <MinusIcon aria-hidden="true" className="h-4 w-4 shrink-0 text-ink-muted" /> :

                <PlusIcon aria-hidden="true" className="h-4 w-4 shrink-0 text-ink-muted" />
                }
              </button>
            </dt>
            {isOpen && <dd className="pb-5 pr-8 leading-relaxed text-ink-soft">{faq.answer}</dd>}
          </div>);

      })}
    </dl>);

}