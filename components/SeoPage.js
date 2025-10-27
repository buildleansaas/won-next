import React from 'react';
import AnnouncementBanner from './AnnouncementBanner';

export default function SeoPage({ title, description, heading, children }) {
  return (
    <div className="SeoPage">
      <AnnouncementBanner />
      <div className="inner-wrapper narrow">
        <h1>{heading}</h1>
        {children}
      </div>
    </div>
  );
}
