# Horizon Collective

Responsive, accessible website for Horizon Collective, built with [Astro](https://astro.build/).

## Local development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
```

The static site is generated in `dist/`. Set `SITE_URL` to the final production URL before building if it differs from `https://horizoncollective.org`.

## Content maintenance

Frequently updated links and publication details live in `src/content/`:

- `links.ts` contains navigation, contact, partner, social, and credit links.
- `publications.ts` contains publication downloads, cover details, and previous publications.

Update those files instead of editing repeated URLs directly in the page templates.
