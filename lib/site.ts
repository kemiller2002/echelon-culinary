export const siteOrigin = 'https://culinary.echelonfoundry.com';
export const siteUrl = siteOrigin;

export function absoluteSiteUrl(path = '/') {
  const normalizedPath = path === '/' ? '/' : `${path.replace(/\/$/, '')}/`;
  return `${siteUrl}${normalizedPath}`;
}
