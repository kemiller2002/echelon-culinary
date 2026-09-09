# Echelon Foundry Culinary

The source for [culinary.echelonfoundry.com](https://culinary.echelonfoundry.com/).

## Development

```bash
npm ci
npm run dev
```

## Verification

```bash
npm run lint
npx tsc --noEmit
npm run verify:site
npm run build
```

The production build is a static export in `dist/client`.

## Deployment

Pushes to `main` run `.github/workflows/deploy-pages.yml`. The workflow builds the static export, uploads `dist/client`, and deploys it through GitHub Pages. The `public/CNAME` file keeps the Pages deployment attached to `culinary.echelonfoundry.com`.
