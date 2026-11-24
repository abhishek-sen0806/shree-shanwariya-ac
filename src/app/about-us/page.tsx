import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Wind, 
  Flame, 
  Droplets, 
  Wrench,
  ArrowRight,
  ChevronRight,
  Home
} from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';
import { constructMetadata } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import { generatePhoneLink, generateWhatsAppLink } from '@/lib/utils';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata = constructMetadata({
  title: "About Us | Shri Sanwariya Air Conditioner Indore",
  description: "Learn about Shri Sanwariya Air Conditioner in Indore. Professional AC repair, installation, copper piping, geyser, and RO servicing from MR 10 Square.",
  path: "/about-us",
});

export default function AboutUsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about-us' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-coolgray-200/80 py-3 text-xs text-coolgray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-navy-900 flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-coolgray-400" />
          <span className="font-semibold text-navy-900">About Us</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white via-coolgray-50 to-white py-14 lg:py-20 border-b border-coolgray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-900/5 text-navy-900 text-xs font-bold uppercase tracking-wider mb-4">
            Professional Business Profile
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            About Shri Sanwariya Air Conditioner
          </h1>
          <p className="mt-4 text-base sm:text-lg text-coolgray-700 leading-relaxed">
            Delivering technical expertise and reliable doorstep assistance for air conditioning, cooling, heating, and water purification systems across Indore.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Business Introduction */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4 text-coolgray-700 text-sm sm:text-base leading-relaxed">
              <h2 className="text-2xl font-bold text-navy-900 tracking-tight">
                Who We Are & What We Do
              </h2>
              <p>
                <strong>Shri Sanwariya Air Conditioner</strong> is a dedicated home and commercial appliance service provider based in Indore, Madhya Pradesh. Operating from our central location at 24B, MR 10 Square, we assist residents and businesses with essential cooling, heating, and water purification needs.
              </p>
              <p>
                Our services encompass split and window air conditioner repair, preventive servicing, precision installation, heavy-gauge copper piping, refrigerant leak detection and refilling, electric geyser repairs, and RO water purifier servicing.
              </p>
            </div>

            <div className="md:col-span-5 bg-coolgray-50 p-6 rounded-3xl border border-coolgray-200/80 space-y-3">
              <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-2">
                Business Quick Facts
              </h3>
              <div className="text-xs space-y-2 text-coolgray-700">
                <p><strong>Name:</strong> Shri Sanwariya Air Conditioner Indore</p>
                <p><strong>Workshop:</strong> 24B, MR 10 Square, Indore, MP 452010</p>
                <p><strong>Phone:</strong> {BUSINESS_INFO.phoneDisplay}</p>
                <p><strong>Email:</strong> {BUSINESS_INFO.email}</p>
                <p><strong>Service Radius:</strong> Citywide Doorstep Support across Indore</p>
              </div>
            </div>
          </div>

          {/* Service Philosophy */}
          <div className="bg-gradient-to-br from-coolgray-50 to-white p-8 rounded-3xl border border-coolgray-200/80">
            <h2 className="text-2xl font-bold text-navy-900 tracking-tight mb-4">
              Our Service Philosophy
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-electric-500/10 text-electric-600 flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-sm font-bold text-navy-900">Accurate Diagnosis</h3>
                <p className="text-xs text-coolgray-700 leading-relaxed">
                  We inspect appliances systematically before recommending any repair, avoiding guesswork or unnecessary part replacements.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 text-accent-600 flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-sm font-bold text-navy-900">Technical Standards</h3>
                <p className="text-xs text-coolgray-700 leading-relaxed">
                  From deep vacuuming during AC installations to electrical continuity tests on geysers and digital TDS checks for RO systems, we respect rigorous technical procedures.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-sm font-bold text-navy-900">Clear Communication</h3>
                <p className="text-xs text-coolgray-700 leading-relaxed">
                  We keep you informed at every step regarding service scope, technical requirements, and appliance care recommendations.
                </p>
              </div>
            </div>
          </div>

          {/* Services Matrix */}
          <div>
            <h2 className="text-2xl font-bold text-navy-900 tracking-tight mb-6 text-center">
              Our Core Technical Disciplines
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="p-5 rounded-2xl bg-white border border-coolgray-200 shadow-subtle">
                <Wind className="w-6 h-6 text-electric-600 mb-3" />
                <h3 className="text-base font-bold text-navy-900 mb-1">Air Conditioners</h3>
                <p className="text-xs text-coolgray-700 leading-relaxed">
                  Repair, maintenance, gas refilling (R32, R410A, R22), compressor diagnostics, and split/window servicing.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-coolgray-200 shadow-subtle">
                <Wrench className="w-6 h-6 text-navy-800 mb-3" />
                <h3 className="text-base font-bold text-navy-900 mb-1">AC Copper Piping</h3>
                <p className="text-xs text-coolgray-700 leading-relaxed">
                  Concealed wall chasing pipelines, heavy gauge copper runs, nitrogen pressure testing, and drainage lines.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-coolgray-200 shadow-subtle">
                <Flame className="w-6 h-6 text-accent-500 mb-3" />
                <h3 className="text-base font-bold text-navy-900 mb-1">Geysers & Heaters</h3>
                <p className="text-xs text-coolgray-700 leading-relaxed">
                  Storage and instant water heater repair, heating coil changes, thermostat fixes, and secure wall installations.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-coolgray-200 shadow-subtle">
                <Droplets className="w-6 h-6 text-emerald-500 mb-3" />
                <h3 className="text-base font-bold text-navy-900 mb-1">Water Purifiers</h3>
                <p className="text-xs text-coolgray-700 leading-relaxed">
                  Multi-stage filter replacement, RO membrane servicing, TDS tuning, booster pump repairs, and leak prevention.
                </p>
              </div>
            </div>
          </div>

          {/* Business Location & Service Reach */}
          <div className="p-8 rounded-3xl bg-coolgray-50 border border-coolgray-200/80">
            <h2 className="text-2xl font-bold text-navy-900 tracking-tight mb-3">
              Doorstep Service Coverage Across All of Indore
            </h2>
            <p className="text-sm text-coolgray-700 leading-relaxed mb-4">
              Our central office is situated at <strong>24B, MR 10 Square, Indore, Madhya Pradesh 452010</strong>. From this central location, our mobile technician units provide 100% doorstep coverage across all residential societies, colonies, apartments, and commercial areas in Indore.
            </p>
            <div className="p-4 rounded-2xl bg-white border border-coolgray-200/80 text-xs font-semibold text-emerald-800 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>Available for prompt home visits anywhere in Indore.</span>
            </div>
          </div>

        </div>
      </section>

      {/* Conversion CTA */}
      <ContactCTA />
    </>
  );
}
