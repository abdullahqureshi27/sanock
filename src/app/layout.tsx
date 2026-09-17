import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import { siteConfig } from '@/config/site';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sanock.com'),
  title: 'Sanock — Modern Digital Design & Development Agency',
  description:
    'Sanock is a premier digital agency specializing in bespoke visual identity, high-conversion web development, custom software solutions, and UI/UX design.',
  keywords: [
    'Sanock',
    'logo design',
    'digital agency',
    'brand identity',
    'web design',
    'web development',
    'UI UX design',
    'app design',
    'custom software',
  ],
  authors: [{ name: 'Abdullah Qureshi' }],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    url: 'https://sanock.com/',
    title: 'Sanock — Modern Digital Design & Development Agency',
    description:
      'We design impactful logos, modern websites, and digital experiences that elevate bold brands globally.',
    images: [
      {
        url: '/assets/images/featured-work-06.webp',
        width: 1200,
        height: 630,
        alt: 'Sanock Preview',
      },
    ],
    siteName: 'Sanock',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanock — Modern Digital Design & Development Agency',
    description:
      'We design impactful logos, modern websites, and digital experiences that elevate bold brands globally.',
    images: ['/assets/images/featured-work-06.webp'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://sanock.com/#organization',
      name: 'Sanock',
      url: 'https://sanock.com',
      logo: 'https://sanock.com/favicon.svg',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.phoneNumber,
        contactType: 'customer service',
        email: siteConfig.email,
        availableLanguage: ['English', 'Urdu'],
      },
      sameAs: [
        'https://instagram.com',
        'https://linkedin.com',
        'https://facebook.com',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://sanock.com/#website',
      url: 'https://sanock.com',
      name: 'Sanock',
      publisher: {
        '@id': 'https://sanock.com/#organization',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
