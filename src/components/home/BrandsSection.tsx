import React from 'react';
import { SERVICED_BRANDS } from '@/data/business';
import { BrandLogo } from './BrandLogo';

export default function BrandsSection() {
  return (
    <section id="brands" className="py-16 sm:py-20 bg-white border-b border-coolgray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-500/10 text-electric-600 text-xs font-bold uppercase tracking-wider mb-3">
            Multi-Brand Technical Capability
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-navy-900 tracking-tight">
            Brands We Service Across Indore
          </h2>
          <p className="mt-2 text-xs sm:text-base text-coolgray-600 leading-relaxed">
            Multi-brand diagnostic handling for leading AC, water heater, and RO water purifiers.
          </p>
        </div>

        {/* Realistic Brand Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {SERVICED_BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="bg-white hover:bg-coolgray-50/70 rounded-2xl p-4 border border-coolgray-200 hover:border-electric-500/50 shadow-subtle hover:shadow-md transition-all duration-200 text-center flex flex-col justify-between items-center group min-h-[96px]"
            >
              <div className="flex-1 flex items-center justify-center w-full py-1">
                <BrandLogo name={brand.name} />
              </div>
              
              <div className="w-full pt-1.5 border-t border-coolgray-100 flex items-center justify-between text-[10px] text-coolgray-500 font-medium">
                <span className="font-bold text-navy-900 group-hover:text-electric-600 transition-colors">
                  {brand.name}
                </span>
                <span>{brand.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Brand Disclaimer */}
        <div className="mt-8 sm:mt-10 p-4 rounded-2xl bg-coolgray-50 border border-coolgray-200/80 text-center max-w-3xl mx-auto">
          <p className="text-[11px] sm:text-xs text-coolgray-600 leading-relaxed">
            <strong className="text-navy-900">Brand Compatibility Note:</strong> We service all major brands where technically supported. Brand names and logos are referenced solely for technical capability and appliance compatibility. We do not falsely claim official brand authorization or manufacturer partnerships.
          </p>
        </div>

      </div>
    </section>
  );
}
