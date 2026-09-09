export const siteOrigin = 'https://kemiller2002.github.io';
export const siteBasePath = '/echelon-culinary';
export const siteUrl = `${siteOrigin}${siteBasePath}`;

export function absoluteSiteUrl(path = '/') {
  const normalizedPath = path === '/' ? '/' : `${path.replace(/\/$/, '')}/`;
  return `${siteUrl}${normalizedPath}`;
}
