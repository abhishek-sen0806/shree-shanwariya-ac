# Shri Sanwariya Air Conditioner Indore — Premium Business Website

Production-ready, highly optimized Next.js business website for **Shri Sanwariya Air Conditioner Indore**. The platform is designed for high conversion, local SEO dominance across Indore, and Generative Engine Optimization (GEO) for AI search engines like ChatGPT, Google AI Overviews, Gemini, and Perplexity.

---

## 🏢 Business Overview

- **Business Name:** Shri Sanwariya Air Conditioner Indore
- **Legal Name:** Shri Sanwariya Air Conditioner
- **Central Workshop Address:** 24B, MR 10 Square, Indore, MR10, Madhya Pradesh 452010, India
- **Phone:** [+91 7879649209](tel:+917879649209)
- **Email:** [ankushchhapre@gmail.com](mailto:ankushchhapre@gmail.com)
- **WhatsApp:** [+91 7879649209](https://wa.me/917879649209)
- **Service Coverage:** 100% Doorstep Service Across All of Indore

---

## 🛠️ Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React Server Components by default)
- **Language:** TypeScript (Strict mode enabled)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with customized color tokens:
  - **Deep Navy Blue:** `#0C1E3C` / `#061325` (Authority & Trust)
  - **Electric Blue:** `#00A6FF` (Cooling & Technical Precision)
  - **Warm Orange:** `#FF6B35` (Heating & Energetic Attention)
- **Icons:** [Lucide React](https://lucide.dev/)
- **SEO & Structured Data:** Next.js Metadata API + Full Schema.org JSON-LD (`HVACBusiness`, `Service`, `FAQPage`, `BreadcrumbList`, `WebSite`)
- **GEO (Generative Engine Optimization):** Machine-readable `public/llms.txt`

---

## 🚀 Key Features

### 1. High-Converting User Experience
- **Interactive HVAC Mode Switcher:** Allows visitors to switch between **AC Cooling (18°C)**, **Geyser Heating (65°C)**, and **RO Water Purification (85 TDS)** with real-time UI theme and status updates.
- **Cool Airflow Breeze Animation:** Visual AC airflow wave animations indicating active cooling.
- **Sticky Mobile Bottom Action Bar:** Instant one-tap *Call Now* and *WhatsApp* buttons on smartphones.
- **Floating WhatsApp Assistance:** Direct chat initiation with pre-filled inquiry text.
- **Interactive Service Inquiry Form:** Validates user input and formats instant dispatch details.

### 2. Service Pages (8 Dedicated SSG Pages)
Each service page features tailored technical write-ups, common failure points, diagnostic workflows, and structured schemas:
1. `/services/ac-repair-indore` — AC repair, compressor diagnostics, and coil cleaning
2. `/services/ac-installation-indore` — Precision mounting, vacuuming, and uninstallation
3. `/services/ac-piping-indore` — Concealed copper piping & nitrogen leak testing
4. `/services/ac-gas-refilling-indore` — Certified R32, R410A, and R22 charging
5. `/services/geyser-repair-indore` — Heating element replacement & thermostat repair
6. `/services/geyser-installation-indore` — Safe anchor bolt mounting & pressure valves
7. `/services/ro-water-purifier-service-indore` — Multi-stage filter & membrane changes
8. `/services/ro-repair-indore` — Booster pump repairs, SMPS adapters, and leak fixing

### 3. Citywide Doorstep Reach (All Indore)
- Designed to communicate **100% doorstep coverage across all of Indore** rather than cluttered locality lists.
- Technicians dispatched from MR 10 Square with complete mobile diagnostic kits.

### 4. Technical SEO & AI Readiness (GEO)
- **Valid JSON-LD Schemas:** Fully structured data embedded in server-rendered markup.
- **Dynamic Sitemap:** Auto-generated `sitemap.xml` referencing all primary and service routes.
- **Robots Configuration:** `robots.txt` ensuring search crawler indexation.
- **`llms.txt` Support:** Entity-optimized markdown documentation for AI web crawlers.

---

## 📁 Project Structure

```text
├── public/
│   └── llms.txt                     # AI Engine Context & Knowledge File
├── src/
│   ├── app/
│   │   ├── about-us/page.tsx        # Business introduction & philosophy
│   │   ├── contact-us/page.tsx      # Contact details, maps & inquiry form
│   │   ├── services/[slug]/page.tsx # 8 Dedicated static service pages
│   │   ├── globals.css              # Custom HVAC animations & glass styling
│   │   ├── layout.tsx               # Root layout with schemas & persistent UI
│   │   ├── page.tsx                 # Homepage with 11 core sections
│   │   ├── robots.ts                # Dynamic robots.txt
│   │   └── sitemap.ts               # Dynamic sitemap.xml
│   ├── components/
│   │   ├── common/
│   │   │   ├── FAQAccordion.tsx     # Accessible interactive accordion
│   │   │   ├── FloatingWhatsApp.tsx # Desktop floating WhatsApp trigger
│   │   │   └── MobileActionBar.tsx  # Sticky mobile action buttons
│   │   ├── forms/
│   │   │   └── ContactInquiryForm.tsx # Lead inquiry form
│   │   ├── home/
│   │   │   ├── BrandsSection.tsx    # Multi-brand capability showcase
│   │   │   ├── ContactCTA.tsx       # Conversion banner
│   │   │   ├── HeroSection.tsx      # Interactive HVAC animated hero
│   │   │   ├── ServiceAreas.tsx     # All Indore doorstep coverage
│   │   │   ├── ServiceProcess.tsx   # 4-step workflow timeline
│   │   │   ├── ServicesOverview.tsx # 4 Premium service cards with metrics
│   │   │   └── WhyChooseUs.tsx      # Core business value propositions
│   │   └── layout/
│   │       ├── Footer.tsx           # High-contrast 3-column footer
│   │       └── Header.tsx           # Sticky navigation with service drawer
│   ├── data/
│   │   ├── business.ts              # NAP, brand disclaimer & coverage data
│   │   ├── faqs.ts                  # Categorized FAQs
│   │   └── services.ts              # Detailed service data & problems/solutions
│   └── lib/
│       ├── schema.ts                # JSON-LD Schema generators
│       ├── seo.ts                   # Next.js Metadata API builder
│       └── utils.ts                 # WhatsApp & phone URL helpers
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

---

## 💻 Getting Started

### Prerequisites
- **Node.js:** v18.17+ or v20+ recommended
- **Package Manager:** npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/shri-sanwariya-ac.git
cd shri-sanwariya-ac

# Install dependencies
npm install
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Type Checking & Production Build
```bash
# Verify TypeScript strict types
npm run type-check

# Build optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 🛡️ Brand Compliance Note
Brand names, trademarks, and logos (e.g. Voltas, LG, Daikin, Samsung, Blue Star, Kent, Aquaguard) referenced on the website belong to their respective owners. They are displayed strictly for technical compatibility and service diagnostic identification. The business does not claim authorized dealership or manufacturer ownership of these trademarks.

---

## 📄 License
Private commercial project developed for **Shri Sanwariya Air Conditioner Indore**. All rights reserved.
