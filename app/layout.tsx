import type { Metadata } from 'next';
import { IBM_Plex_Mono, Manrope, Newsreader } from 'next/font/google';
import { absoluteSiteUrl, siteOrigin } from '@/lib/site';
import './globals.css';

const manrope = Manrope({
  variable: '--font-sans-source',
  subsets: ['latin'],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-mono-source',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const newsreader = Newsreader({
  variable: '--font-serif-source',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: 'Echelon Foundry Culinary | Foodservice Operations & Technology',
    template: '%s | Echelon Foundry Culinary',
  },
  description:
    'Foodservice consulting for better operations, software, automation, AI, accessibility, workflow, and decision-making.',
  alternates: { canonical: absoluteSiteUrl() },
  openGraph: {
    type: 'website',
    url: absoluteSiteUrl(),
    siteName: 'Echelon Foundry Culinary',
    title: 'Echelon Foundry Culinary',
    description: 'Better foodservice operations, built on better technology.',
  },
  twitter: {
    card: 'summary',
    title: 'Echelon Foundry Culinary',
    description: 'Better foodservice operations, built on better technology.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${ibmPlexMono.variable} ${newsreader.variable}`}
      >
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
