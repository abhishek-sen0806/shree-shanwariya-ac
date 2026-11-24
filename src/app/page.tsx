import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import CostEstimator from '@/components/home/CostEstimator';
import ACTonnageCalculator from '@/components/home/ACTonnageCalculator';
import SmartAMCPlans from '@/components/home/SmartAMCPlans';
import BeforeAfterShowcase from '@/components/home/BeforeAfterShowcase';
import CustomerReviews from '@/components/home/CustomerReviews';
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
  description: "Shri Sanwariya Air Conditioner provides expert AC repair, installation, copper piping, gas refilling, geyser, and RO purifier services across all of Indore.",
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

      {/* 1. Hero Section with HVAC Mode Selector */}
      <HeroSection />

      {/* 2. Specialized Services Overview */}
      <ServicesOverview />

      {/* 3. Modern Feature: Instant Cost Estimator */}
      <CostEstimator />

      {/* 4. Modern Feature: AC Room Tonnage Calculator */}
      <ACTonnageCalculator />

      {/* 5. Modern Feature: Smart AMC Subscription Plans */}
      <SmartAMCPlans />

      {/* 6. Modern Feature: Interactive Before & After Slider */}
      <BeforeAfterShowcase />

      {/* 7. Modern Feature: Customer Reviews & Ratings */}
      <CustomerReviews />

      {/* 8. Why Choose Us */}
      <WhyChooseUs />

      {/* 9. Brands We Service (Realistic Vector Logos) */}
      <BrandsSection />

      {/* 10. Our 4-Step Service Process */}
      <ServiceProcess />

      {/* 11. 100% Doorstep Coverage Across All of Indore */}
      <ServiceAreas />

      {/* 12. FAQ Section */}
      <section id="faq" className="py-20 bg-white border-b border-coolgray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-500/10 text-electric-600 text-xs font-bold uppercase tracking-wider mb-3">
              Helpful Answers
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-coolgray-700 leading-relaxed">
              Common questions about our air conditioner, geyser, RO purifier, and copper piping doorstep services in Indore.
            </p>
          </div>

          <FAQAccordion faqs={HOMEPAGE_FAQS} />
        </div>
      </section>

      {/* 13. Contact Conversion CTA */}
      <ContactCTA />
    </>
  );
}
