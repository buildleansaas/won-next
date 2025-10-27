const fs = require('fs');
const path = require('path');
const pages = require('../seo-pages.json');

const baseUrl = process.env.SITE_URL || 'https://www.richmond-va.wonbuddhism.org';

const urls = [''].concat(pages.map(p => p.slug));

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map(slug => `  <url>\n    <loc>${baseUrl}/${slug}</loc>\n  </url>`) 
    .join('\n') +
  '\n</urlset>\n';

// Write into Next.js public directory so it's served as /static/sitemap.xml
fs.writeFileSync(path.join(__dirname, '..', 'public', 'static', 'sitemap.xml'), xml);
console.log('sitemap.xml generated with', urls.length, 'urls');
