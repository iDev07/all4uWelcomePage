import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html translate="no">
      <Head>
        <meta
          name="description"
          content="Wholesale and retail trading platform for searching, purchasing and delivering goods and products throughout the CIS countries - Uzbekistan, Russia, Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan, Georgia, Armenia, Azerbaijan"
        />
        <link rel="icon" href="miniT.png" />
        <meta name="author" content="World Miral" />
        <meta
          name="keywords"
          content="turbomarket, turbo, marketplace, market, uzbekistan, kazakhstan, Russia, Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan, Georgia, Armenia, Azerbaijan"
        />
        <meta property="og:title" content="Turbo Market" />
        <meta
          property="og:description"
          content="Wholesale and retail trading platform for searching, purchasing and delivering goods and products throughout the CIS countries - Uzbekistan, Russia, Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan, Georgia, Armenia, Azerbaijan"
        />
        <meta
          property="og:image"
          content="https://turbomarket.uz/images/logos/1/logo/SeoTurboLogo.png"
        />
        <meta property="og:image:width" content="780" />
        <meta property="og:image:height" content="400" />
        <meta property="og:site_name" content="Turbo Market" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Logo" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Turbo Market" />
        <meta
          property="twitter:description"
          content="Wholesale and retail trading platform for searching, purchasing and delivering goods and products throughout the CIS countries - Uzbekistan, Russia, Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan, Georgia, Armenia, Azerbaijan"
        />
        <meta
          property="twitter:image"
          content="https://turbomarket.uz/images/logos/1/logo/SeoTurboLogo.png"
        />
        <meta
          name="msapplication-TileImage"
          content="https://turbomarket.uz/images/logos/1/logo/SeoTurboLogo.png"
        />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script strategy="lazyOnload" id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
