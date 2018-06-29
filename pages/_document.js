import Document, { Head, Main, NextScript } from "next/document";

const title = "Won Buddhism of Richmond";
const description =
  "Welcome to the Won Buddhist Temple of Richmond where we teach Won-Buddhism, a reformed and modernised Buddhism, which teaches us how to use our minds. To use the mind well, we should first know what the mind is like and how it works. Based on that understanding, we should cultivate and use it skillfully in everyday situations.";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="icon" type="image/x-icon" href="/static/logo.png" />
          <meta
            name="keywords"
            content="won buddhism, won-buddhism, won buddhist, zen, meditation, mindfulness, spiritual practice, won practice, buddhadharma, dharma, won temple, buddhist temple, buddhism, korean buddhism, korean, temple, richmond, mechanicsville, central virginia, virginia, rva, 804, meditation center, learn to meditate, meditate, yoga, tai chi, qi gong, chi gong, ki gong, zen, buddhism, meditation, buddha"
          />
          <meta name="rights" content="Won Buddhism of U.S.A., Inc." />
          <meta name="description" content={description} />

          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />

          <meta itemprop="name" content={title} />
          <meta itemprop="description" content={description} />
          <meta
            itemprop="image"
            content="https://won-next.herokuapp.com/static/logo.png"
          />

          <meta name="twitter:card" content="summary_large_image" />
          {/* <meta name="twitter:site" content="@publisher_handle" /> */}
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          {/* <meta name="twitter:creator" content="@author_handle" /> */}
          <meta
            name="twitter:image:src"
            content="https://won-next.herokuapp.com/static/logo.png"
          />

          <meta property="og:title" content={title} />
          <meta property="og:type" content="article" />
          <meta
            property="og:url"
            content="http://www.richmond-va.wonbuddhism.org"
          />
          <meta
            property="og:image"
            content="https://won-next.herokuapp.com/static/logo.png"
          />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content={title} />
          <meta property="article:published_time" content={Date.now()} />
          <meta property="article:modified_time" content={Date.now()} />
          {/* <meta property="fb:admins" content="Facebook numberic ID" /> */}

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
