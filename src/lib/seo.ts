import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/data/business';

export function constructMetadata({
  title,
  description,
  path = '',
  image = '/images/og-image.jpg',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const fullTitle = title 
    ? `${title} | ${BUSINESS_INFO.name}`
    : `${BUSINESS_INFO.name} - Reliable AC, Geyser & RO Services in Indore`;

  const fullDescription = description || 
    'Professional AC repair, installation, copper piping, gas refilling, electric geyser, and RO water purifier services in Indore. Doorstep assistance at MR 10, Vijay Nagar & all Indore areas.';

  const canonicalUrl = `${BUSINESS_INFO.siteUrl}${path.startsWith('/') ? path : `/${path}`}`;

  return {
    title: fullTitle,
    description: fullDescription,
    metadataBase: new URL(BUSINESS_INFO.siteUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: canonicalUrl,
      siteName: BUSINESS_INFO.name,
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${BUSINESS_INFO.name} Services in Indore`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
