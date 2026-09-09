import { readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const root = process.cwd();
const requiredRoutes = new Set([
  '/',
  '/about',
  '/clarity',
  '/consulting',
  '/contact',
  '/research',
  '/speaking',
]);
const expectedOrigin = 'https://culinary.echelonfoundry.com';

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

const appFiles = walk(join(root, 'app'));
const contentFiles = [
  ...appFiles,
  ...walk(join(root, 'components')).filter(
    (file) => !file.includes(`${join('components', 'ui')}/`),
  ),
  ...walk(join(root, 'lib')),
].filter((file) => ['.ts', '.tsx'].includes(extname(file)));

const routeFiles = appFiles.filter((file) => file.endsWith('/page.tsx'));
const actualRoutes = new Set(
  routeFiles.map((file) => {
    const routeFile = relative(join(root, 'app'), file);
    if (routeFile === 'page.tsx') return '/';
    const directory = routeFile.replace(/\/page\.tsx$/, '');
    return directory ? `/${directory}` : '/';
  }),
);

for (const route of requiredRoutes) {
  if (!actualRoutes.has(route)) {
    throw new Error(`Missing required route: ${route}`);
  }
}

for (const route of actualRoutes) {
  if (!requiredRoutes.has(route)) {
    throw new Error(`Unexpected page route: ${route}`);
  }
}

const content = contentFiles
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');

const bannedPhrases = [
  'unlock potential',
  'cutting-edge ai',
  'revolutionize your',
  'transform your business',
  'next-generation solutions',
  'seamless transformation',
  'harness the power of ai',
];

for (const phrase of bannedPhrases) {
  if (content.toLowerCase().includes(phrase)) {
    throw new Error(`Generic consulting phrase found: ${phrase}`);
  }
}

const internalHrefPattern = /href=["'](\/[a-z0-9/#-]*)["']/gi;
for (const match of content.matchAll(internalHrefPattern)) {
  const href = match[1];
  const route = href.split('#')[0] || '/';
  if (!requiredRoutes.has(route)) {
    throw new Error(`Internal link points to an unknown route: ${href}`);
  }
}

const requiredStatements = [
  'Better foodservice operations, built on better technology.',
  'Before you automate, get clear.',
  'A legitimate recommendation is: don',
  'Kevin does not claim restaurant employment or operator experience.',
  'Work will be added when it has enough evidence to be useful.',
];

for (const statement of requiredStatements) {
  if (!content.includes(statement)) {
    throw new Error(`Required positioning statement not found: ${statement}`);
  }
}

const deploymentFiles = {
  cname: readFileSync(join(root, 'public', 'CNAME'), 'utf8').trim(),
  nextConfig: readFileSync(join(root, 'next.config.ts'), 'utf8'),
  robots: readFileSync(join(root, 'public', 'robots.txt'), 'utf8'),
  sitemap: readFileSync(join(root, 'public', 'sitemap.xml'), 'utf8'),
  siteConfig: readFileSync(join(root, 'lib', 'site.ts'), 'utf8'),
  workflow: readFileSync(
    join(root, '.github', 'workflows', 'deploy-pages.yml'),
    'utf8',
  ),
};
const homepage = readFileSync(join(root, 'app', 'page.tsx'), 'utf8');
const styles = readFileSync(join(root, 'app', 'globals.css'), 'utf8');

if (deploymentFiles.cname !== 'culinary.echelonfoundry.com') {
  throw new Error(
    'GitHub Pages CNAME is not configured for the culinary site.',
  );
}

if (!deploymentFiles.nextConfig.includes("output: 'export'")) {
  throw new Error('The site is not configured for static export.');
}

for (const name of ['robots', 'sitemap', 'siteConfig']) {
  if (!deploymentFiles[name].includes(expectedOrigin)) {
    throw new Error(
      `${name} does not reference the canonical culinary origin.`,
    );
  }
}

if (
  !deploymentFiles.workflow.includes('actions/deploy-pages@v4') ||
  !deploymentFiles.workflow.includes('path: dist/client')
) {
  throw new Error(
    'GitHub Pages workflow is missing the expected deployment steps.',
  );
}

if (homepage.includes('grid-field') || styles.includes('.grid-field')) {
  throw new Error('The removed hero grid treatment has been reintroduced.');
}

for (const brandToken of [
  '--paper: #f2efe7',
  '--ink: #171a18',
  '--burgundy: #905831',
  'background: rgb(242 239 231 / 94%)',
]) {
  if (!styles.includes(brandToken)) {
    throw new Error(`Parent-site visual token is missing: ${brandToken}`);
  }
}

console.log(
  `Verified ${actualRoutes.size} routes and ${contentFiles.length} content files.`,
);
