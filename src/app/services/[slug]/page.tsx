import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  SERVICES, 
  ServiceDetail 
} from '@/data/services';
import { BUSINESS_INFO } from '@/data/business';
import { 
  constructMetadata 
} from '@/lib/seo';
import { 
  getServiceSchema, 
  getBreadcrumbSchema, 
  getFAQSchema 
} from '@/lib/schema';
import { 
  generatePhoneLink, 
  generateWhatsAppLink 
} from '@/lib/utils';
import FAQAccordion from '@/components/common/FAQAccordion';
import ContactInquiryForm from '@/components/forms/ContactInquiryForm';
import { 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Wrench, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Home,
  ChevronRight
} from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return {};

  return constructMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default function ServicePage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = getServiceSchema(service);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/#services' },
    { name: service.title, url: `/services/${service.slug}` },
  ]);
  const faqSchema = getFAQSchema(service.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-coolgray-200/80 py-3 text-xs text-coolgray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-navy-900 flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-coolgray-400" />
          <Link href="/#services" className="hover:text-navy-900">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-coolgray-400" />
          <span className="font-semibold text-navy-900 truncate">
            {service.title}
          </span>
        </div>
      </div>

      {/* Service-Specific Hero Section */}
      <section className="bg-gradient-to-b from-white via-coolgray-50 to-white py-12 lg:py-16 border-b border-coolgray-200/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 text-electric-600 text-xs font-bold uppercase tracking-wider mb-4">
              <span>Indore Doorstep Service</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight leading-tight">
              {service.headline}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-coolgray-700 leading-relaxed">
              {service.subheadline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={generatePhoneLink()}
                className="bg-navy-900 hover:bg-navy-800 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all flex items-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-accent-500" />
                <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={generateWhatsAppLink(`Hello Shri Sanwariya AC, I am looking for ${service.title} in Indore.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all flex items-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sidebar Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content Area (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Detailed Service Explanation */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 tracking-tight mb-4">
                  Overview of Our {service.shortTitle} in Indore
                </h2>
                <div className="prose prose-slate max-w-none text-coolgray-700 leading-relaxed text-sm sm:text-base">
                  <p>{service.overview}</p>
                </div>
              </div>

              {/* Common Problems and Solutions */}
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <AlertTriangle className="w-6 h-6 text-accent-500" />
                  <h2 className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight">
                    Common Problems & Our Technical Solutions
                  </h2>
                </div>

                <div className="space-y-4">
                  {service.commonProblems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-coolgray-50 border border-coolgray-200/70"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-navy-900 flex items-start gap-2">
                        <span className="text-accent-500 font-extrabold">•</span>
                        <span>{item.problem}</span>
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-coolgray-700 pl-4 border-l-2 border-electric-500/40">
                        <strong className="text-navy-900">Solution:</strong> {item.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Process */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight mb-6">
                  Our Step-by-Step Service Workflow
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.processSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border border-coolgray-200/80 bg-white shadow-subtle flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-xs font-extrabold text-electric-600 bg-electric-500/10 px-2.5 py-1 rounded-md inline-block mb-2">
                          Step {step.step}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-navy-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-xs text-coolgray-700 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applicable Appliance Types & Supported Brands */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-2xl bg-coolgray-50 border border-coolgray-200/70">
                <div>
                  <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-electric-600" />
                    <span>Appliance Types Covered</span>
                  </h3>
                  <ul className="space-y-1.5 text-xs text-coolgray-700">
                    {service.applianceTypes.map((type, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-accent-500" />
                    <span>Compatible Brands</span>
                  </h3>
                  <p className="text-xs text-coolgray-700 leading-relaxed mb-2">
                    Expert diagnostic handling for:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.supportedBrands.map((b, idx) => (
                      <span key={idx} className="text-[11px] bg-white border border-coolgray-200 font-semibold px-2 py-0.5 rounded text-navy-900">
                        {b}
                      </span>
                    ))}
                  </div>
                  <p className="text-[10px] text-coolgray-700 mt-3">
                    *Non-affiliated; service provided based on technical capability.
                  </p>
                </div>
              </div>

              {/* Service FAQs */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight mb-6">
                  {service.shortTitle} - Frequently Asked Questions
                </h2>
                <FAQAccordion faqs={service.faqs} />
              </div>

              {/* Related Services Internal Links */}
              <div className="pt-8 border-t border-coolgray-200">
                <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-4">
                  Related Services in Indore
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {service.relatedServices.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/services/${rel.slug}`}
                      className="p-3.5 rounded-xl border border-coolgray-200/80 hover:border-electric-500/40 hover:bg-coolgray-50 transition-all text-xs font-semibold text-navy-900 hover:text-electric-600 flex items-center justify-between group"
                    >
                      <span>{rel.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-coolgray-400 group-hover:text-electric-600 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar Form & Quick Info (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-24 space-y-6">
                <ContactInquiryForm />

                <div className="bg-navy-900 text-white p-6 rounded-3xl shadow-premium border border-navy-700">
                  <h3 className="text-base font-bold mb-2">Need Immediate Service?</h3>
                  <p className="text-xs text-coolgray-300 leading-relaxed mb-4">
                    Technicians are dispatched from MR 10 Square for prompt coverage across all areas of Indore.
                  </p>
                  <a
                    href={generatePhoneLink()}
                    className="w-full bg-white text-navy-900 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs shadow hover:bg-coolgray-100 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-accent-500" />
                    <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
