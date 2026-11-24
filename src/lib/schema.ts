import { BUSINESS_INFO } from '@/data/business';
import { ServiceDetail } from '@/data/services';

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': `${BUSINESS_INFO.siteUrl}/#organization`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    url: BUSINESS_INFO.siteUrl,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    description: `${BUSINESS_INFO.name} offers expert AC repair, installation, copper piping, gas refilling, electric geyser repair, and RO water purifier services in Indore, Madhya Pradesh.`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    areaServed: [
      { '@type': 'City', name: 'Indore' },
      { '@type': 'AdministrativeArea', name: 'Indore District' },
    ],
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI',
    sameAs: [
      `https://wa.me/${BUSINESS_INFO.whatsapp}`,
    ],
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BUSINESS_INFO.siteUrl}/#website`,
    url: BUSINESS_INFO.siteUrl,
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.tagline,
    publisher: {
      '@id': `${BUSINESS_INFO.siteUrl}/#organization`,
    },
    inLanguage: 'en-IN',
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BUSINESS_INFO.siteUrl}${item.url}`,
    })),
  };
}

export function getServiceSchema(service: ServiceDetail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@type': 'HVACBusiness',
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.address.streetAddress,
        addressLocality: BUSINESS_INFO.address.city,
        addressRegion: BUSINESS_INFO.address.state,
        postalCode: BUSINESS_INFO.address.postalCode,
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Indore',
    },
    description: service.overview,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title,
      itemListElement: service.commonProblems.map((prob) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: prob.problem,
          description: prob.solution,
        },
      })),
    },
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
