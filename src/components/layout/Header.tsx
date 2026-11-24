'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  Menu, 
  X, 
  ChevronDown, 
  Clock, 
  MapPin,
  Wind,
  Flame,
  Droplets,
  Wrench,
  ShieldCheck,
  ChevronRight,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';
import { SERVICES } from '@/data/services';
import { generatePhoneLink, generateWhatsAppLink } from '@/lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
      {/* Top Notification Bar - Desktop Only */}
      <div className="bg-navy-950 text-coolgray-300 text-xs py-2 px-4 border-b border-navy-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-coolgray-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-electric-400" />
              MR 10 Square, Indore • 100% Citywide Doorstep Visits
            </span>
            <span className="flex items-center gap-1.5 text-coolgray-300">
              <Clock className="w-3.5 h-3.5 text-accent-500" />
              Fast Mobile Technician Dispatch
            </span>
          </div>
          <div className="flex items-center gap-4 font-semibold">
            <a 
              href={generatePhoneLink()} 
              className="text-white hover:text-electric-400 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-accent-400" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
            <span className="text-navy-700">|</span>
            <a 
              href={`mailto:${BUSINESS_INFO.email}`} 
              className="hover:text-electric-400 transition-colors text-coolgray-300 font-normal"
            >
              {BUSINESS_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Solid White to prevent any blurriness */}
      <div className={`transition-all duration-200 bg-white border-b border-coolgray-200 ${
        scrolled ? 'shadow-md py-3' : 'py-3.5 sm:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center text-white shadow-md border border-navy-700/50 group-hover:border-electric-500/50 transition-colors shrink-0">
              <Wind className="w-5 h-5 sm:w-6 sm:h-6 text-electric-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div>
              <span className="text-base sm:text-xl font-extrabold tracking-tight text-navy-900 block leading-tight">
                Shri Sanwariya
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-electric-600 block">
                Air Conditioner & Appliance Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
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
                        <div className="text-[11px] font-bold text-coolgray-500 uppercase tracking-wider px-3 py-1">
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
                            <span className="text-xs font-semibold">{srv.title}</span>
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
              className="flex items-center gap-2 text-navy-900 hover:text-electric-600 px-3 py-2 text-sm font-bold transition-colors"
            >
              <Phone className="w-4 h-4 text-accent-500" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <Link
              href="/contact-us"
              className="bg-navy-900 hover:bg-navy-800 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all duration-200 border border-navy-700/50 flex items-center gap-2"
            >
              <span>Book a Service</span>
            </Link>
          </div>

          {/* Mobile Right Quick Action Buttons */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={generatePhoneLink()}
              className="w-9 h-9 flex items-center justify-center text-accent-600 bg-accent-50 border border-accent-200/80 rounded-xl active:scale-95 transition-transform"
              aria-label="Direct Phone Call"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center text-navy-900 bg-coolgray-100/90 border border-coolgray-200 rounded-xl active:scale-95 transition-transform"
              aria-label="Toggle Navigation Drawer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Premium Full-Screen App Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] z-50 bg-navy-950/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white h-[calc(100vh-60px)] flex flex-col justify-between overflow-y-auto shadow-2xl border-t border-coolgray-100 p-5">
            
            {/* Top Quick Status Pill */}
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-navy-950 to-navy-900 text-white flex items-center justify-between shadow-md">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold">Doorstep Service in Indore</span>
                </div>
                <span className="text-[10px] uppercase font-black tracking-wider bg-electric-500/20 text-electric-300 px-2 py-0.5 rounded border border-electric-500/30">
                  MR 10 Square
                </span>
              </div>

              {/* Navigation Links List */}
              <nav className="space-y-1">
                <Link
                  href="/"
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-colors ${
                    pathname === '/' ? 'bg-coolgray-100 text-electric-600' : 'text-navy-900 hover:bg-coolgray-50'
                  }`}
                >
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4 text-coolgray-400" />
                </Link>

                <Link
                  href="/about-us"
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-colors ${
                    pathname === '/about-us' ? 'bg-coolgray-100 text-electric-600' : 'text-navy-900 hover:bg-coolgray-50'
                  }`}
                >
                  <span>About Us</span>
                  <ChevronRight className="w-4 h-4 text-coolgray-400" />
                </Link>

                {/* Collapsible Services Submenu */}
                <div className="rounded-xl overflow-hidden border border-coolgray-100">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex justify-between items-center px-3.5 py-3 text-sm font-bold text-navy-900 hover:bg-coolgray-50 bg-coolgray-50/50"
                  >
                    <div className="flex items-center gap-2">
                      {/* <Sparkles className="w-4 h-4 text-electric-600" /> */}
                      <span>Our Services (AC, Geyser, RO)</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-coolgray-500 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileServicesOpen && (
                    <div className="p-2 space-y-1 bg-white border-t border-coolgray-100">
                      {SERVICES.map((srv) => (
                        <Link
                          key={srv.slug}
                          href={`/services/${srv.slug}`}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-coolgray-700 hover:text-electric-600 hover:bg-coolgray-50"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-electric-500" />
                          <span>{srv.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/#brands"
                  className="flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold text-navy-900 hover:bg-coolgray-50"
                >
                  <span>Brands We Service</span>
                  <ChevronRight className="w-4 h-4 text-coolgray-400" />
                </Link>

                <Link
                  href="/#service-areas"
                  className="flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold text-navy-900 hover:bg-coolgray-50"
                >
                  <span>All Indore Coverage</span>
                  <ChevronRight className="w-4 h-4 text-coolgray-400" />
                </Link>

                <Link
                  href="/contact-us"
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-bold transition-colors ${
                    pathname === '/contact-us' ? 'bg-coolgray-100 text-electric-600' : 'text-navy-900 hover:bg-coolgray-50'
                  }`}
                >
                  <span>Contact Us</span>
                  <ChevronRight className="w-4 h-4 text-coolgray-400" />
                </Link>
              </nav>
            </div>

            {/* Bottom Instant Contact Card in Mobile Drawer */}
            <div className="pt-4 border-t border-coolgray-200 space-y-2.5">
              <a
                href={generatePhoneLink()}
                className="w-full bg-navy-900 hover:bg-navy-800 text-white font-extrabold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md"
              >
                <Phone className="w-4 h-4 text-accent-400" />
                <span>Call Now: {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <p className="text-[11px] text-coolgray-500 text-center pt-1 font-medium">
                24B, MR 10 Square, Indore • Fast Doorstep Reach
              </p>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
