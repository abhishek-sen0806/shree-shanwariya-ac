'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';
import { generatePhoneLink, generateWhatsAppLink } from '@/lib/utils';

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-coolgray-200 p-2.5 sm:hidden shadow-2xl flex items-center gap-2">
      <a
        href={generatePhoneLink()}
        className="flex-1 bg-navy-900 hover:bg-navy-800 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow active:scale-[0.98] transition-transform"
      >
        <Phone className="w-4 h-4 text-accent-500" />
        <span>Call Now</span>
      </a>

      <a
        href={generateWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow active:scale-[0.98] transition-transform"
      >
        <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
