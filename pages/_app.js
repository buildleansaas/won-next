import React from 'react';
import App from 'next/app';

// Import all CSS files globally
import './index.css';
import './header.css';
import '../components/sections/Home/About/index.css';
import '../components/sections/Home/About/slider.css';
import '../components/sections/Home/Activities/index.css';
import '../components/sections/Home/Footer/index.css';
import '../components/sections/Home/Introduction/index.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
