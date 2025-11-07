# Portfolio

Modern developer portfolio powered by Express and Handlebars. The app can run dynamically for local previews and exports a static version for GitHub Pages via CI/CD.

## Features

- ⚡ **Express + Handlebars** server with reusable layouts and partials
- 🧪 **Jest + Supertest** coverage for critical routes
- 🏗️ **Static export** using Node script for fast GitHub Pages hosting
- 🚀 **GitHub Actions** workflow that tests, builds, and publishes to `gh-pages`

## Getting started

```bash
npm install
npm run dev        # starts on http://localhost:3000 with nodemon
npm test           # run Jest test suite
npm run build      # renders static site into dist/
```

## Project structure

```
├─ public/              # static assets (css, images, etc.)
├─ scripts/build-static # Node script to export templates to dist/
├─ views/               # Handlebars templates, layouts, partials
├─ __tests__/           # Jest tests using supertest
├─ server.js            # Express application
└─ .github/workflows/   # CI/CD pipeline definition
```

## GitHub Actions pipeline

Located at `.github/workflows/ci.yml` the workflow performs:

1. `npm ci` (falls back to `npm install` if lock file is absent) and ensures dev dependencies
2. Grants execute permissions for binaries inside `node_modules/.bin`
3. Runs the Jest suite
4. Builds the static site (`npm run build`)
5. Deploys `dist/` to `gh-pages` using `JamesIves/github-pages-deploy-action`

The deploy job only runs on `main` once tests succeed.

## Environment variables

The app supports optional variables defined in a `.env` file:

- `PORT` – override default `3000`

## Deploying manually

```bash
npm install
npm run build
npx gh-pages -d dist
```

## License

MIT © ZTDGCX
