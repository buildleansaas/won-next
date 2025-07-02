import React from "react";
import seoPages from "../../../../seo-pages.json";

import "./index.css";

export default function Footer({ footer }) {
  return (
    <footer>
      <img src="/static/logo.png" alt="company logo" />
      <p>{footer.copyright}</p>
      <nav className="seo-links">
        {seoPages.map(page => (
          <a key={page.slug} href={`/${page.slug}`}>{page.heading}</a>
        ))}
      </nav>
    </footer>
  );
}
