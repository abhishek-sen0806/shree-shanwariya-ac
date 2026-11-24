'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-20 right-5 z-40 hidden sm:block">
      <a
        href={generateWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-premium hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white"
        aria-label="Chat on WhatsApp with Shri Sanwariya AC"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="text-xs font-bold tracking-wide">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
}
