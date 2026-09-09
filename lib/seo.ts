import type { Metadata } from 'next';
import { absoluteSiteUrl } from '@/lib/site';

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const socialTitle = `${title} | Echelon Foundry Culinary`;
  const canonicalUrl = absoluteSiteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      siteName: 'Echelon Foundry Culinary',
      title: socialTitle,
      description,
    },
    twitter: {
      card: 'summary',
      title: socialTitle,
      description,
    },
  };
}
