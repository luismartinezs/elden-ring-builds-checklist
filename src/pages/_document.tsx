// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Script
            src="https://unpkg.com/react-scan/dist/install-hook.global.js"
            strategy="beforeInteractive"
          />
          {process.env.NODE_ENV === "production" && (
            <>
              <script
                defer
                src="https://cloud.umami.is/script.js"
                data-website-id="e4f0541a-4d50-44ac-b9f3-b81b078dade9"
              ></script>
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6379293593579449"
                crossOrigin="anonymous"
              ></script>
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
