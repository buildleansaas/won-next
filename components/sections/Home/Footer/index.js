import React from "react";
import seoPages from "../../../../seo-pages.json";

export default function Footer({ footer }) {
  return (
    <footer className="w-full bg-[#222] text-white text-center p-6 pb-20 text-sm">
      <img src="/static/logo.png" alt="company logo" className="h-10 mx-auto" />
      <p>{footer.copyright}</p>
      <nav className="mt-3 space-x-2 text-yellow-400">
        {seoPages.map(page => (
          <a key={page.slug} href={`/${page.slug}`}>{page.heading}</a>
        ))}
      </nav>
    </footer>
  );
}
