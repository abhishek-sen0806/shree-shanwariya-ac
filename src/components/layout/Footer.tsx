import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/common/AppLogo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Wind,
  Clock,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  Navigation
} from 'lucide-react';
import { BUSINESS_INFO, ALL_INDORE_COVERAGE } from '@/data/business';
import { SERVICES } from '@/data/services';
import { generatePhoneLink, generateWhatsAppLink } from '@/lib/utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-coolgray-200 pt-16 pb-28 md:pb-12 border-t-2 border-electric-500/30 relative overflow-hidden">
      {/* Decorative background ambient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-electric-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Service Quick-Banner */}
        <div className="mb-12 p-6 rounded-3xl bg-navy-900/90 border border-navy-700/80 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-electric-500/20 text-electric-400 flex items-center justify-center shrink-0 border border-electric-500/30">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Doorstep AC, Geyser or RO Breakdown Anywhere in Indore?
              </h3>
              <p className="text-sm text-coolgray-300">
                Direct technician coordination across all areas of Indore for prompt home and office assistance.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            <a
              href={generatePhoneLink()}
              className="flex-1 sm:flex-initial bg-white hover:bg-coolgray-100 text-navy-900 font-black py-3 px-5 sm:px-6 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap min-w-[170px]"
            >
              <Phone className="w-4 h-4 text-accent-500 shrink-0" />
              <span className="tracking-tight">{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-5 sm:px-6 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-white shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Main 3-Column Balanced Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-navy-800">
          
          {/* Col 1: Business Profile (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/">
              <AppLogo size="lg" lightMode={true} />
            </Link>
            
            <p className="text-sm text-coolgray-300 leading-relaxed">
              Professional doorstep installation, diagnostic repair, copper piping, and maintenance services for Air Conditioners, Electric Geysers, and RO Water Purifiers across all residential and commercial locations in Indore.
            </p>

            <div className="space-y-2.5 pt-1 text-xs text-coolgray-200">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-white">100% Doorstep Service Across All of Indore</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-electric-500/20 text-electric-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-white">Servicing all major brands supported</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-accent-500/20 text-accent-400 flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-white">Prompt technician dispatch for quick repair</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services Directory (3 Cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-electric-500" />
              <span>Our Services</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((srv) => (
                <li key={srv.slug}>
                  <Link 
                    href={`/services/${srv.slug}`} 
                    className="text-coolgray-300 hover:text-white hover:translate-x-1.5 transition-all inline-flex items-center gap-2 group py-0.5"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-electric-400 group-hover:text-electric-300 shrink-0" />
                    <span className="group-hover:text-white transition-colors text-xs sm:text-sm font-medium">
                      {srv.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Workshop & Direct Contact (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Direct Contact & Booking</span>
            </h3>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-navy-900 border border-navy-800">
                <Navigation className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs text-coolgray-200">
                  <strong className="text-white block text-sm mb-0.5">Citywide Coverage:</strong>
                  Technicians provide doorstep visits across all areas and sectors in Indore.
                </div>
              </div>

              <a 
                href={generatePhoneLink()} 
                className="flex items-center gap-3 p-3 rounded-2xl bg-navy-900 border border-navy-800 hover:border-accent-500/50 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-accent-500/20 text-accent-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-coolgray-400 uppercase tracking-wider block">Direct Phone</span>
                  <span className="text-white font-bold group-hover:text-accent-400 transition-colors text-sm">
                    {BUSINESS_INFO.phoneDisplay}
                  </span>
                </div>
              </a>

              <a 
                href={`mailto:${BUSINESS_INFO.email}`} 
                className="flex items-center gap-3 p-3 rounded-2xl bg-navy-900 border border-navy-800 hover:border-electric-500/50 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-electric-500/20 text-electric-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] text-coolgray-400 uppercase tracking-wider block">Email Inquiries</span>
                  <span className="text-white font-medium group-hover:text-electric-400 transition-colors text-xs truncate block">
                    {BUSINESS_INFO.email}
                  </span>
                </div>
              </a>
            </div>

            <div className="pt-2">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Instant Help</span>
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-coolgray-400 gap-4">
          <p className="text-coolgray-300">
            &copy; {currentYear} <strong>{BUSINESS_INFO.legalName}</strong>. All rights reserved. Providing Doorstep Services in Entire Indore, MP.
          </p>
          <p className="text-coolgray-400 text-center md:text-right max-w-xl text-[11px] leading-relaxed">
            Brand names, logos, and trademarks mentioned on this website belong to their respective owners and are referenced solely for technical capability and appliance compatibility identification.
          </p>
        </div>

      </div>
    </footer>
  );
}
