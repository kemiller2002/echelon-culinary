import type { Metadata } from 'next';
import { Geist, Geist_Mono, Newsreader } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-sans-source',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-mono-source',
  subsets: ['latin'],
});

const newsreader = Newsreader({
  variable: '--font-serif-source',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://echelon-foundry-culinary.kemiller2002.chatgpt.site',
  ),
  title: {
    default: 'Echelon Foundry Culinary | Foodservice Operations & Technology',
    template: '%s | Echelon Foundry Culinary',
  },
  description:
    'Foodservice consulting for better operations, software, automation, AI, accessibility, workflow, and decision-making.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
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
        className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable}`}
      >
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
