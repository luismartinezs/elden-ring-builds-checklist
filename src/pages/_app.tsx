import { type AppType } from "next/app";
import Head from "next/head";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";

import { api } from "~/utils/api";
import "~/styles/globals.css";
import { useInitAppData } from "~/hooks/useInitAppData";
import { useMigrateLegacyData } from "~/hooks/useMigrateLegacyData";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  useInitAppData();
  useMigrateLegacyData(); // This can be removed after some days / weeks. See also scripts/mockLegacyData.js

  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <link rel="icon" href="/elden-ring.png" />
          {/* HTML Meta Tags */}
          <title>Elden Ring Checklist</title>
          <meta
            name="description"
            content="Elden Ring Checklist for NG and NG+"
          />
          {/* Facebook Meta Tags */}
          <meta
            property="og:url"
            content="https://eldenringbuilds.vercel.app"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Elden Ring Checklist" />
          <meta
            property="og:description"
            content="Elden Ring Checklist for NG and NG+"
          />
          <meta property="og:image" content="elden-ring.png" />
          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:domain"
            content="eldenringbuilds.vercel.app"
          />
          <meta
            property="twitter:url"
            content="https://eldenringbuilds.vercel.app"
          />
          <meta name="twitter:title" content="Elden Ring Checklist" />
          <meta
            name="twitter:description"
            content="Elden Ring Checklist for NG and NG+"
          />
          <meta name="twitter:image" content="elden-ring.png" />
          {/* Meta Tags Generated via https://www.opengraph.xyz */}
        </Head>
        <Component {...pageProps} />
      </SessionProvider>
      <Analytics />
    </>
  );
};

export default api.withTRPC(MyApp);
