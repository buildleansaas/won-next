import React from 'react';
import Head from 'next/head';

export default function SeoPage({ title, description, heading, children }) {
  return (
    <div className="SeoPage">
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <div className="inner-wrapper narrow">
        <h1>{heading}</h1>
        {children}
      </div>
    </div>
  );
}
