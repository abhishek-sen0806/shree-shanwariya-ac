'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '@/data/faqs';

interface FAQAccordionProps {
  faqs: FAQItem[] | { question: string; answer: string }[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3.5 max-w-4xl mx-auto">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen 
                ? 'border-electric-500/40 bg-white shadow-subtle' 
                : 'border-coolgray-200/80 bg-white/70 hover:bg-white'
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left py-4 px-5 sm:px-6 flex justify-between items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-500"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-navy-900 text-sm sm:text-base leading-snug">
                {faq.question}
              </span>
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen 
                    ? 'bg-electric-500 text-white rotate-180' 
                    : 'bg-coolgray-100 text-coolgray-700'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-coolgray-700 leading-relaxed border-t border-coolgray-100/60 animate-in fade-in duration-150">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
