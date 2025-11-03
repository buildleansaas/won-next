# Programmatic SEO Implementation Plan

This document outlines opportunities to expand organic search visibility for the Won Buddhism of Richmond website based on recent query data. The aim is to target keywords with demonstrated impressions but limited clicks.

## 1. Current Search Performance Insights

The Google Search Console data shows demand for information about Buddhist temples and meditation in Virginia, particularly queries mentioning Richmond or using "near me" intent. Key observations:

- Highest impressions are for "buddhist temple richmond va" and "buddhist temple near me".
- Queries like "meditation richmond va" and "meditation classes richmond" have high impressions but rank beyond page 6, indicating an opportunity for dedicated content.
- Multiple variations mention "Buddhist temple virginia" or synonyms like "buddhist center near me".

## 2. Proposed SEO Pages

Add new keyword-focused landing pages to `seo-pages.json` and create matching React components. Suggested slugs:

1. `meditation-richmond-va` – target queries `meditation richmond va`, `meditation richmond`, and related terms.
2. `buddhist-temple-virginia` – target `buddhist temple virginia`, `virginia buddhist temple`, and `buddhist temples in virginia`.
3. `buddhist-center-near-me` – capture `buddhist center near me`, `buddhism near me`, `buddhist church near me`.

These pages should provide brief introductions, invite visitors to services, and link to the homepage or contact information.

## 3. Dynamic SEO Page Generation

To reduce maintenance, implement a single dynamic page `[slug].js` under `pages/` that reads the requested slug from `seo-pages.json`. Existing static SEO pages can be refactored to use this dynamic route. This approach allows new pages to be created by simply updating the JSON file.

Implementation outline:

- **Create `pages/[slug].js`** which exports a Next.js page using `getStaticPaths` and `getStaticProps` to load data from `seo-pages.json`.
- **Update `seo-pages.json`** with the new entries listed above.
- **Remove individual static files** (`buddhist-temple-richmond-va.js`, etc.) after verifying the dynamic route works for all slugs.
- **Ensure `scripts/generate-sitemap.js`** iterates over slugs from the JSON file as it currently does.

## 4. Content & Internal Links

- Each new SEO page should contain at least two paragraphs optimized for the target keyword and a call to action.
- Update the homepage and existing pages to link to these new URLs to improve crawlability and distribute authority.

## 5. Structured Data

Add JSON-LD LocalBusiness schema to `components/SeoPage.js` to highlight the temple’s name, address, and contact details. This can improve visibility in local search results.

```jsx
<Head>
  <title>{title}</title>
  {description && <meta name="description" content={description} />}
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BuddhistTemple',
    name: 'Won Buddhism of Richmond',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4232 Mechanicsville Turnpike',
      addressLocality: 'Mechanicsville',
      addressRegion: 'VA',
      postalCode: '23111'
    }
  }) }} />
</Head>
```

## 6. Sitemap Regeneration

After adding or modifying pages, run `npm run generate-sitemap` to update `static/sitemap.xml` so search engines can discover the new URLs.

## 7. Ongoing Optimization

- Monitor search performance in Google Search Console after deployment.
- Adjust page copy or create additional pages based on emerging queries (e.g., "buddhist temple near me open now").

