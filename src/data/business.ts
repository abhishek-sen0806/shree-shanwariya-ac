export interface BusinessInfo {
  name: string;
  legalName: string;
  tagline: string;
  address: {
    streetAddress: string;
    neighborhood: string;
    city: string;
    state: string;
    postalCode: string;
    addressCountry: string;
  };
  phone: string;
  phoneDisplay: string;
  email: string;
  whatsapp: string;
  whatsappDisplay: string;
  location: string;
  category: string;
  siteUrl: string;
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "Shri Sanwariya Air Conditioner Indore",
  legalName: "Shri Sanwariya Air Conditioner",
  tagline: "Professional AC, Geyser & RO Water Purifier Services Across Entire Indore",
  address: {
    streetAddress: "24B, MR 10 Square, MR10",
    neighborhood: "MR 10 Square",
    city: "Indore",
    state: "Madhya Pradesh",
    postalCode: "452010",
    addressCountry: "IN",
  },
  phone: "+917879649209",
  phoneDisplay: "+91 78796 49209",
  email: "ankushchhapre@gmail.com",
  whatsapp: "917879649209",
  whatsappDisplay: "+91 78796 49209",
  location: "Indore, Madhya Pradesh, India",
  category: "Air Conditioning, Cooling, Heating, and Water Purification Services",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://shrisanwariyaac.com",
};

export const ALL_INDORE_COVERAGE = {
  title: "Complete Doorstep Coverage Across All of Indore",
  badge: "All Indore Available",
  description: "We provide prompt doorstep installation, repair, and maintenance across all residential colonies, societies, townships, apartments, and commercial zones in Indore.",
  highlights: [
    "100% Doorstep Service Anywhere in Indore",
    "Fast Mobile Technician Dispatch from MR 10 Square",
    "Same-Day Home & Office Visits across Indore",
    "Full Multi-Appliance Diagnostic Equipment on Every Call"
  ]
};

export interface BrandServiceInfo {
  name: string;
  category: string;
  description: string;
}

export const SERVICED_BRANDS: BrandServiceInfo[] = [
  { name: "LG", category: "AC, Geyser, RO", description: "Dual inverter split & window AC repair, electronics servicing." },
  { name: "Samsung", category: "AC", description: "WindFree and standard digital inverter AC maintenance." },
  { name: "Voltas", category: "AC, Geyser", description: "Split, window, cassette AC repair and gas refilling." },
  { name: "Daikin", category: "AC", description: "High-efficiency inverter cooling system troubleshooting." },
  { name: "Blue Star", category: "AC, RO", description: "Residential and commercial cooling unit maintenance." },
  { name: "Carrier", category: "AC", description: "Precision inverter cooling repair and piping solutions." },
  { name: "Hitachi", category: "AC", description: "Split and window air conditioner servicing." },
  { name: "Panasonic", category: "AC", description: "Smart Wi-Fi and inverter split AC maintenance." },
  { name: "Whirlpool", category: "AC", description: "Cooling troubleshooting and compressor diagnostics." },
  { name: "Godrej", category: "AC", description: "Eco-friendly refrigerant charging and maintenance." },
  { name: "Haier", category: "AC", description: "Self-clean split AC and window AC repair." },
  { name: "IFB", category: "AC, Geyser", description: "Titanium inverter series servicing and electrical diagnostics." },
  { name: "Kent", category: "RO", description: "Mineral RO filter replacement, membrane service, TDS tuning." },
  { name: "Aquaguard", category: "RO", description: "Dr. Aquaguard & Eureka Forbes UV/RO water purifier servicing." },
];
