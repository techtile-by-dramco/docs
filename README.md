# Techtile Docs

Documentation site for the Techtile research testbed infrastructure and operations, built with Astro + Starlight.

## Stack

- `astro`
- `@astrojs/starlight`
- Markdown content in `src/content/docs/`

## Getting Started

```bash
npm install
npm run dev
```

Local dev server runs on `http://localhost:4321` by default.

## Build and Preview

```bash
npm run build
npm run preview
```

`npm run build` also generates the search index (Pagefind), used in production output.

## Deploy to GitHub Pages

This repo is configured for deployment through GitHub Actions (`.github/workflows/deploy-pages.yml`).

1. Push to `main` (or run the workflow manually from the Actions tab).
2. In GitHub, open `Settings > Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.

The workflow automatically sets:

- `SITE_URL` to `https://<owner>.github.io`
- `BASE_PATH` to `/` for user pages or `/<repo>` for project pages

This keeps routes and built-in search working on Pages.

## Project Structure

```text
.
├── astro.config.mjs
├── public/
│   ├── techtile-favicon.svg
│   ├── grondplan/
│   ├── octoclock/
│   ├── power/
│   └── rf/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   │       ├── infrastructure/
│   │       └── operations/
│   └── content.config.ts
└── techtile-info/   (ignored in git)
```

## Docs Navigation

Sidebar is configured in `astro.config.mjs`.

Current route groups:

- `infrastructure/*`
  - overview
  - physical
  - network
  - time
  - power
  - tile-node
  - rf
  - daq
  - qualisys
- `operations/*`
  - dashboard
  - remote-access
  - virtual-machines
  - tile-management
  - running-experiments

## Editing Content

1. Add or edit `.md` files under `src/content/docs/`.
2. Add sidebar entries in `astro.config.mjs` for new pages.
3. Put static images/files in `public/` and reference them with absolute paths (e.g. `/rf/image.png`).
4. Keep frontmatter aligned with `src/content.config.ts` (e.g. `component`, `status`, `last_verified`, `sensitivity`).

## Source Material

`techtile-info/` contains raw source material used to extract infrastructure facts.

- It is intentionally ignored by git (`.gitignore`) in this repo.
- Publish-ready content should live in `src/content/docs/` and `public/`.
