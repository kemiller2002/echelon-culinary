import type { MetadataRoute } from 'next';

const origin = 'https://echelon-foundry-culinary.kemiller2002.chatgpt.site';
const paths = [
  '',
  '/consulting',
  '/clarity',
  '/research',
  '/speaking',
  '/about',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${origin}${path}`,
    changeFrequency: path === '' ? 'monthly' : 'yearly',
    priority: path === '' ? 1 : path === '/contact' ? 0.7 : 0.8,
  }));
}
