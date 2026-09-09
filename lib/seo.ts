import type { Metadata } from 'next';

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

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      url: path,
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
