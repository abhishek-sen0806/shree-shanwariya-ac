import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileActionBar from '@/components/common/MobileActionBar';
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp';
import GlobalBookingTrigger from '@/components/common/GlobalBookingTrigger';
import { getLocalBusinessSchema, getWebSiteSchema } from '@/lib/schema';
import { constructMetadata } from '@/lib/seo';
import './globals.css';

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = getLocalBusinessSchema();
  const webSiteSchema = getWebSiteSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-coolgray-50 text-navy-900 font-sans selection:bg-electric-500/20 selection:text-navy-900 antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <GlobalBookingTrigger />
        <MobileActionBar />
      </body>
    </html>
  );
}
