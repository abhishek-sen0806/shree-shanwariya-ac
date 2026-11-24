import React from 'react';
import { MapPin, Navigation, CheckCircle2, Phone, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { ALL_INDORE_COVERAGE, BUSINESS_INFO } from '@/data/business';
import { generatePhoneLink, generateWhatsAppLink } from '@/lib/utils';

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-24 bg-white border-b border-coolgray-200/80 relative overflow-hidden">
      {/* Background soft ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-electric-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-extrabold uppercase tracking-wider mb-4">
            <CheckCircle2 className="w-4 h-4" />
            <span>Doorstep Service Anywhere in Indore</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight leading-tight">
            Doorstep Service Across <span className="text-electric-600">All of Indore</span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-coolgray-700 leading-relaxed font-normal">
            No matter where you are located in Indore, our expert technician unit reaches your home, apartment, or commercial facility with full diagnostic and repair equipment.
          </p>
        </div>

        {/* Hero Full Indore Coverage Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white border border-navy-800 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-electric-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/20 text-electric-300 border border-electric-500/30 text-xs font-bold uppercase tracking-wider">
                <Navigation className="w-3.5 h-3.5 animate-pulse text-electric-400" />
                <span>100% Citywide Assistance</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                One Single Call for Any Location in Indore
              </h3>

              <p className="text-sm sm:text-base text-coolgray-300 leading-relaxed font-normal">
                You do not need to worry about specific areas or distant sectors. We provide complete doorstep cooling, water heating, and water purification services across all residences and commercial establishments throughout Indore.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {ALL_INDORE_COVERAGE.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-coolgray-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-navy-900/90 rounded-2xl p-6 border border-navy-700/80 text-center space-y-4 shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-electric-500/20 border border-electric-500/30 text-electric-400 flex items-center justify-center mx-auto">
                <MapPin className="w-7 h-7" />
              </div>

              <div>
                <h4 className="text-base font-bold text-white">Need Service in Indore?</h4>
                <p className="text-xs text-coolgray-400 mt-1">
                  Our service engineers are dispatched promptly for home visits.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <a
                  href={generatePhoneLink()}
                  className="w-full bg-electric-500 hover:bg-electric-600 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-glow-electric transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
                </a>

                <a
                  href={generateWhatsAppLink("Hello Shri Sanwariya AC, I need doorstep appliance service in Indore.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-xs"
                >
                  <span>Book on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
