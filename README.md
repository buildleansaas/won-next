# Won Buddhism of Richmond

This is a Next.js 8 site for the Won Buddhism temple in Richmond, VA.

## Development

```bash
npm install
npm run dev
```

For production deployments (such as Vercel) use:

```bash
npm run build
```

The build script also regenerates `static/sitemap.xml`.

## SEO Pages and Sitemap

Keyword focused pages are listed in `seo-pages.json`. After adding or updating pages, regenerate the sitemap:

```bash
npm run generate-sitemap
```

The sitemap is written to `static/sitemap.xml` and referenced from `static/robots.txt`.
