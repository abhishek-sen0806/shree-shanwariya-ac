import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';
import { generatePhoneLink, generateWhatsAppLink } from '@/lib/utils';

export default function ContactCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric-500/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-electric-400">
          <span>Fast Doorstep Appliance Assistance</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Need AC, Geyser or RO Service in Indore?
        </h2>

        <p className="text-base sm:text-lg text-coolgray-300 max-w-2xl mx-auto leading-relaxed">
          Get in touch with Shri Sanwariya Air Conditioner for installation, repair and maintenance assistance. Prompt doorstep visits across Indore.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={generatePhoneLink()}
            className="w-full sm:w-auto bg-white hover:bg-coolgray-100 text-navy-900 font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
          >
            <Phone className="w-4 h-4 text-accent-500" />
            <span>Call Now: {BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        <p className="text-xs text-coolgray-400 pt-2">
          Workshop Address: 24B, MR 10 Square, Indore, MP 452010
        </p>
      </div>
    </section>
  );
}
