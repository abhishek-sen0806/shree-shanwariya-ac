'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  Menu, 
  X, 
  Wrench, 
  ChevronDown, 
  ShieldCheck, 
  Clock, 
  MapPin,
  Flame,
  Droplets,
  Wind
} from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';
import { SERVICES } from '@/data/services';
import { generatePhoneLink, generateWhatsAppLink } from '@/lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Services', href: '/#services', isDropdown: true },
    { label: 'Brands', href: '/#brands' },
    { label: 'Indore Coverage', href: '/#service-areas' },
    { label: 'Contact', href: '/contact-us' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-navy-900 text-coolgray-200 text-xs py-2 px-4 border-b border-navy-700/60 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-coolgray-300">
              <MapPin className="w-3.5 h-3.5 text-electric-500" />
              MR 10 Square, Indore, Madhya Pradesh
            </span>
            <span className="flex items-center gap-1.5 text-coolgray-300">
              <Clock className="w-3.5 h-3.5 text-accent-500" />
              Quick Doorstep Service in Indore
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={generatePhoneLink()} 
              className="text-white font-medium hover:text-electric-400 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-electric-500" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
            <span className="text-navy-700">|</span>
            <a 
              href={`mailto:${BUSINESS_INFO.email}`} 
              className="hover:text-electric-400 transition-colors"
            >
              {BUSINESS_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-200 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3.5' 
          : 'bg-white py-4 border-b border-coolgray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center text-white shadow-md border border-navy-700/30 group-hover:border-electric-500/50 transition-colors">
              <Wind className="w-6 h-6 text-electric-500 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-navy-900 block leading-tight">
                Shri Sanwariya
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-electric-600 block">
                Air Conditioner & Appliance Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div 
                    key={link.label} 
                    className="relative"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <button 
                      className={`flex items-center gap-1 text-sm font-semibold transition-colors py-2 ${
                        pathname.startsWith('/services') ? 'text-electric-600' : 'text-coolgray-800 hover:text-navy-900'
                      }`}
                      aria-expanded={servicesDropdown}
                    >
                      Services
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? 'rotate-180' : ''}`} />
                    </button>

                    {servicesDropdown && (
                      <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-premium border border-coolgray-100 p-3 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="text-[11px] font-bold text-coolgray-700 uppercase tracking-wider px-3 py-1">
                          Our Specialized Services
                        </div>
                        {SERVICES.map((srv) => (
                          <Link
                            key={srv.slug}
                            href={`/services/${srv.slug}`}
                            className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-coolgray-50 text-navy-900 hover:text-electric-600 transition-colors group"
                          >
                            <div className="w-7 h-7 rounded-lg bg-coolgray-100 flex items-center justify-center text-navy-800 group-hover:bg-electric-500/10 group-hover:text-electric-600 transition-colors">
                              {srv.category === 'AC' && <Wind className="w-4 h-4" />}
                              {srv.category === 'Piping' && <Wrench className="w-4 h-4" />}
                              {srv.category === 'Geyser' && <Flame className="w-4 h-4" />}
                              {srv.category === 'RO' && <Droplets className="w-4 h-4" />}
                            </div>
                            <span className="text-xs font-medium">{srv.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors ${
                    isActive 
                      ? 'text-electric-600' 
                      : 'text-coolgray-800 hover:text-navy-900'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={generatePhoneLink()}
              className="flex items-center gap-2 text-navy-900 hover:text-electric-600 px-3 py-2 text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-accent-500" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <Link
              href="/contact-us"
              className="bg-navy-900 hover:bg-navy-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all duration-200 border border-navy-700/50 flex items-center gap-2"
            >
              <span>Book a Service</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={generatePhoneLink()}
              className="p-2 text-navy-900 bg-coolgray-100 rounded-xl hover:bg-coolgray-200 transition-colors"
              aria-label="Call Shri Sanwariya AC"
            >
              <Phone className="w-5 h-5 text-accent-500" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-navy-900 bg-coolgray-100 rounded-xl hover:bg-coolgray-200 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-coolgray-200 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1 mb-4">
            <Link
              href="/"
              className="block px-3 py-2.5 text-base font-semibold text-navy-900 rounded-lg hover:bg-coolgray-100"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="block px-3 py-2.5 text-base font-semibold text-navy-900 rounded-lg hover:bg-coolgray-100"
            >
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className="w-full flex justify-between items-center px-3 py-2.5 text-base font-semibold text-navy-900 rounded-lg hover:bg-coolgray-100 text-left"
              >
                <span>Services</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
              </button>
              {servicesDropdown && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-coolgray-50/70 rounded-xl mt-1">
                  {SERVICES.map((srv) => (
                    <Link
                      key={srv.slug}
                      href={`/services/${srv.slug}`}
                      className="block px-3 py-2 text-sm font-medium text-coolgray-700 hover:text-electric-600 rounded-lg hover:bg-white"
                    >
                      {srv.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/#brands"
              className="block px-3 py-2.5 text-base font-semibold text-navy-900 rounded-lg hover:bg-coolgray-100"
            >
              Brands We Service
            </Link>
            <Link
              href="/#service-areas"
              className="block px-3 py-2.5 text-base font-semibold text-navy-900 rounded-lg hover:bg-coolgray-100"
            >
              All Indore Coverage
            </Link>
            <Link
              href="/contact-us"
              className="block px-3 py-2.5 text-base font-semibold text-navy-900 rounded-lg hover:bg-coolgray-100"
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-3 border-t border-coolgray-200 space-y-2.5">
            <a
              href={generatePhoneLink()}
              className="w-full bg-navy-900 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow"
            >
              <Phone className="w-4 h-4 text-accent-500" />
              Call Now: {BUSINESS_INFO.phoneDisplay}
            </a>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow transition-colors"
            >
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
