'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';
import { generatePhoneLink, generateWhatsAppLink } from '@/lib/utils';

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-coolgray-200/90 p-2.5 sm:hidden shadow-[0_-8px_25px_rgba(6,19,37,0.12)] flex items-center gap-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))]">
      <a
        href={generatePhoneLink()}
        className="flex-1 bg-navy-950 hover:bg-navy-900 text-white font-extrabold py-3 px-3 rounded-2xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-md active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4 text-accent-400" />
        <span>Call Now</span>
      </a>

      <a
        href={generateWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 px-3 rounded-2xl flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-md active:scale-95 transition-transform"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
