import React from "react";

import "./index.css";

export default function Footer({ footer }) {
  return (
    <footer>
      <img src="/static/logo.png" alt="company logo" />
      <p>{footer.copyright}</p>
    </footer>
  );
}
