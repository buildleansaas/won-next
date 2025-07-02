import React from 'react';
import App from 'next/app';

// Import global Tailwind CSS
import '../styles/globals.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
