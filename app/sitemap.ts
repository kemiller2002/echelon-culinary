import type { MetadataRoute } from 'next';
import { absoluteSiteUrl } from '@/lib/site';
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
    url: absoluteSiteUrl(path || '/'),
    changeFrequency: path === '' ? 'monthly' : 'yearly',
    priority: path === '' ? 1 : path === '/contact' ? 0.7 : 0.8,
  }));
}
