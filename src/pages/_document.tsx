// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import fs from "fs";
import path from "path";

// This function is called at build time on the server.
// It can be async if you need to do async things.
// const getMonetagInpagePushHtml = () => {
//   try {
//     // Construct the full path to the file
//     const filePath = path.join(process.cwd(), "monetag-inpagepush.html");
//     // Read the file's content
//     const monetagContent = fs.readFileSync(filePath, "utf8");
//     return monetagContent;
//   } catch (err) {
//     console.error("Error reading monetag-inpagepush.html:", err);
//     return null; // Return null or an empty string if the file isn't found
//   }
// };

// const getMonetagVignetteHtml = () => {
//   try {
//     // Construct the full path to the file
//     const filePath = path.join(process.cwd(), "monetag-vignette.html");
//     // Read the file's content
//     const monetagContent = fs.readFileSync(filePath, "utf8");
//     return monetagContent;
//   } catch (err) {
//     console.error("Error reading monetag-vignette.html:", err);
//     return null; // Return null or an empty string if the file isn't found
//   }
// };

const getMonetagInterstitialHtml = () => {
  try {
    const filePath = path.join(process.cwd(), "monetag-interstitial.html");
    const monetagContent = fs.readFileSync(filePath, "utf8");
    return monetagContent;
  } catch (err) {
    console.error("Error reading monetag-interstitial.html:", err);
    return null; // Return null or an empty string if the file isn't found
  }
};

class MyDocument extends Document {
  render() {
    // const monetagInpagePush = getMonetagInpagePushHtml();
    // const monetagVignette = getMonetagVignetteHtml();
    const monetagInterstitial = getMonetagInterstitialHtml();
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
          {process.env.NODE_ENV === "production" && (
            <>
              {/* monetag verification */}
              <meta
                name="monetag"
                content="45dc46a0d13b0f8a084f371db148960a"
              ></meta>
              {/* problem: it blocks the UI! */}
              {/* {monetagInpagePush && (
                <div dangerouslySetInnerHTML={{ __html: monetagInpagePush }} />
              )} */}
              {/* better than inpage push but still too much in the face */}
              {/* {monetagVignette && (
                <div dangerouslySetInnerHTML={{ __html: monetagVignette }} />
              )} */}
              {/* it looks like interstitial, once closed, does not show up in a while, so let's try it and see */}
              {monetagInterstitial && (
                <div
                  dangerouslySetInnerHTML={{ __html: monetagInterstitial }}
                />
              )}
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
