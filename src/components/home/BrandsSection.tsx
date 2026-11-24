import React from 'react';
import { SERVICED_BRANDS } from '@/data/business';

export default function BrandsSection() {
  return (
    <section id="brands" className="py-16 sm:py-20 bg-white border-b border-coolgray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-500/10 text-electric-600 text-xs font-bold uppercase tracking-wider mb-3">
            Multi-Brand Technical Capability
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-navy-900 tracking-tight">
            Brands We Service Across Indore
          </h2>
          <p className="mt-2.5 text-xs sm:text-base text-coolgray-600 leading-relaxed">
            Hands-on technical diagnostic capability across all major split, window, inverter ACs, water heaters, and water purifiers.
          </p>
        </div>

        {/* Brand Cards Grid - 2 cols on mobile, 4 on tablet, 7 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3.5">
          {SERVICED_BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="bg-coolgray-50/80 hover:bg-white rounded-2xl p-3.5 sm:p-4 border border-coolgray-200/80 hover:border-electric-500/50 shadow-none hover:shadow-md transition-all duration-200 text-center flex flex-col justify-center items-center group active:scale-[0.98]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-navy-900 to-navy-800 text-white flex items-center justify-center font-black text-xs sm:text-sm tracking-wider mb-2 shadow-sm group-hover:scale-105 group-hover:bg-electric-500 transition-all">
                {brand.name.substring(0, 2).toUpperCase()}
              </div>
              <h3 className="text-xs sm:text-sm font-extrabold text-navy-900 group-hover:text-electric-600 transition-colors">
                {brand.name}
              </h3>
              <span className="text-[10px] text-coolgray-500 font-medium mt-0.5">
                {brand.category}
              </span>
            </div>
          ))}
        </div>

        {/* Clear Brand Disclaimer required by specifications */}
        <div className="mt-8 sm:mt-10 p-4 rounded-2xl bg-coolgray-50 border border-coolgray-200/80 text-center max-w-3xl mx-auto">
          <p className="text-[11px] sm:text-xs text-coolgray-600 leading-relaxed">
            <strong className="text-navy-900">Brand Compatibility Note:</strong> We service all major brands where technically supported. Brand names and logos are referenced solely for technical capability and appliance compatibility. We do not falsely claim official brand authorization or manufacturer partnerships.
          </p>
        </div>

      </div>
    </section>
  );
}
