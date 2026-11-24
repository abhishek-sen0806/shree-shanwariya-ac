import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  ChevronRight,
  Home,
  CheckCircle2
} from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';
import { constructMetadata } from '@/lib/seo';
import { getBreadcrumbSchema } from '@/lib/schema';
import { generatePhoneLink, generateWhatsAppLink } from '@/lib/utils';
import ContactInquiryForm from '@/components/forms/ContactInquiryForm';

export const metadata = constructMetadata({
  title: "Contact Us | Shri Sanwariya Air Conditioner Indore",
  description: "Contact Shri Sanwariya Air Conditioner in Indore. Book doorstep AC repair, installation, geyser servicing, or RO maintenance. Call +91 7879649209.",
  path: "/contact-us",
});

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '/contact-us' },
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
          <span className="font-semibold text-navy-900">Contact Us</span>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-b from-white via-coolgray-50 to-white py-12 lg:py-16 border-b border-coolgray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-500/10 text-electric-600 text-xs font-bold uppercase tracking-wider mb-4">
            Direct Doorstep Service
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            Contact Shri Sanwariya Air Conditioner
          </h1>
          <p className="mt-4 text-base sm:text-lg text-coolgray-700 leading-relaxed">
            Reach out for quick technician coordination across Indore for your air conditioner, copper piping, geyser, or RO water purifier.
          </p>
        </div>
      </section>

      {/* Contact Channels & Form Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Contact Info (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy-900 tracking-tight mb-3">
                  Get in Touch
                </h2>
                <p className="text-sm text-coolgray-700 leading-relaxed">
                  Call or WhatsApp our service desk for fast scheduling or inquiries. We respond quickly during working hours.
                </p>
              </div>

              {/* Direct Cards */}
              <div className="space-y-4">
                
                {/* Phone Card */}
                <a
                  href={generatePhoneLink()}
                  className="p-5 rounded-2xl bg-coolgray-50 border border-coolgray-200/80 hover:border-electric-500/40 hover:bg-white transition-all shadow-subtle flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-500/10 text-accent-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-coolgray-700 uppercase tracking-wider block">
                      Direct Phone Call
                    </span>
                    <span className="text-lg font-extrabold text-navy-900 group-hover:text-electric-600 transition-colors block">
                      {BUSINESS_INFO.phoneDisplay}
                    </span>
                    <span className="text-xs text-coolgray-700">Click to call immediately</span>
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 hover:border-emerald-500 hover:bg-emerald-50 transition-all shadow-subtle flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                    <MessageCircle className="w-6 h-6 fill-white" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                      Instant WhatsApp Chat
                    </span>
                    <span className="text-lg font-extrabold text-navy-900 group-hover:text-emerald-700 transition-colors block">
                      +91 7879649209
                    </span>
                    <span className="text-xs text-emerald-700">Send photos of appliance / fault</span>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="p-5 rounded-2xl bg-coolgray-50 border border-coolgray-200/80 hover:border-electric-500/40 hover:bg-white transition-all shadow-subtle flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-electric-500/10 text-electric-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-coolgray-700 uppercase tracking-wider block">
                      Email Inquiries
                    </span>
                    <span className="text-base font-bold text-navy-900 group-hover:text-electric-600 transition-colors block break-all">
                      {BUSINESS_INFO.email}
                    </span>
                    <span className="text-xs text-coolgray-700">For commercial quotes & billing</span>
                  </div>
                </a>

                {/* Address Card */}
                <div className="p-5 rounded-2xl bg-coolgray-50 border border-coolgray-200/80 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-900/10 text-navy-900 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-coolgray-700 uppercase tracking-wider block">
                      Physical Location
                    </span>
                    <p className="text-sm font-semibold text-navy-900 mt-0.5 leading-snug">
                      {BUSINESS_INFO.address.streetAddress}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.postalCode}, India
                    </p>
                    <span className="text-xs text-coolgray-700 mt-1 block">Landmark: MR 10 Square</span>
                  </div>
                </div>

              </div>

              {/* Service Reach Mention */}
              <div className="p-5 rounded-2xl bg-coolgray-50 border border-coolgray-200/80">
                <h3 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                  100% Doorstep Coverage Across All of Indore
                </h3>
                <p className="text-xs text-coolgray-700 leading-relaxed">
                  Our certified technicians visit any colony, society, or apartment in Indore for doorstep AC repair, geyser maintenance, and RO servicing.
                </p>
              </div>

            </div>

            {/* Right Column: Inquiry Form & Interactive Google Map (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              <ContactInquiryForm />

              {/* Google Maps Integration */}
              <div className="bg-white rounded-3xl p-6 border border-coolgray-100 shadow-premium overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-electric-600" />
                    <h3 className="text-base font-bold text-navy-900">
                      Our Location on Google Maps
                    </h3>
                  </div>
                  <a
                    href="https://maps.google.com/?q=24B,+MR+10+Square,+Indore,+Madhya+Pradesh+452010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-electric-600 hover:underline"
                  >
                    Open in Maps &rarr;
                  </a>
                </div>

                <div className="w-full h-80 rounded-2xl overflow-hidden border border-coolgray-200 bg-coolgray-100 relative">
                  <iframe
                    title="Shri Sanwariya Air Conditioner Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14717.387998634142!2d75.8756314!3d22.7525381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630283bd783305%3A0xe7a5c53b2660aa6b!2sMR%2010%20Junction%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="text-[11px] text-coolgray-700 mt-2 text-center">
                  24B, MR 10 Square, Indore, MP 452010. Service technicians travel to your doorstep across Indore.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
