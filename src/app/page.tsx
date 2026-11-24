import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import BrandsSection from '@/components/home/BrandsSection';
import ServiceProcess from '@/components/home/ServiceProcess';
import ServiceAreas from '@/components/home/ServiceAreas';
import ContactCTA from '@/components/home/ContactCTA';
import FAQAccordion from '@/components/common/FAQAccordion';
import { HOMEPAGE_FAQS } from '@/data/faqs';
import { getFAQSchema } from '@/lib/schema';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: "Reliable AC, Geyser & RO Services in Indore",
  description: "Shri Sanwariya Air Conditioner provides expert AC repair, installation, copper piping, gas refilling, geyser, and RO purifier services in Indore at MR 10 Square.",
  path: "/",
});

export default function HomePage() {
  const faqSchema = getFAQSchema(HOMEPAGE_FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Section 2: Hero Section */}
      <HeroSection />

      {/* Section 3: Services Overview */}
      <ServicesOverview />

      {/* Section 4: Why Choose Us */}
      <WhyChooseUs />

      {/* Section 5: Brands We Service */}
      <BrandsSection />

      {/* Section 6: Our Service Process */}
      <ServiceProcess />

      {/* Section 7: Service Areas (Local SEO) */}
      <ServiceAreas />

      {/* Section 8: Customer Feedback / Service Transparency */}
      <section className="py-20 bg-coolgray-50 border-b border-coolgray-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-900/5 text-navy-900 text-xs font-bold uppercase tracking-wider">
            Customer Feedback Policy
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
            Dedicated to Honest Service & Genuine Customer Experience
          </h2>
          <p className="text-sm text-coolgray-700 leading-relaxed max-w-2xl mx-auto">
            We value genuine client satisfaction above all. In accordance with honest business practices, we do not fabricate fake reviews or simulated ratings. Have we serviced your AC, geyser, or RO? Feel free to share your real feedback directly via WhatsApp or email.
          </p>
        </div>
      </section>

      {/* Section 9: FAQ Section */}
      <section id="faq" className="py-20 bg-white border-b border-coolgray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-500/10 text-electric-600 text-xs font-bold uppercase tracking-wider mb-3">
              Helpful Answers
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-coolgray-700 leading-relaxed">
              Common questions about our air conditioner, geyser, RO purifier, and copper piping services in Indore.
            </p>
          </div>

          <FAQAccordion faqs={HOMEPAGE_FAQS} />
        </div>
      </section>

      {/* Section 10: Contact CTA */}
      <ContactCTA />
    </>
  );
}
