import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const origin = 'https://echelon-foundry-culinary.kemiller2002.chatgpt.site';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${origin}/sitemap.xml`,
  };
}
