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
  useMigrateLegacyData(); // This can be removed after some days / weeks. See also scripts/mockLegacyData.jst

  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <link rel="icon" href="/elden-ring.png" />
          {/* HTML Meta Tags */}
          <title>Elden Ring Checklists - Elden Hub</title>
          <meta
            name="description"
            content="Replay Elden Ring without looking at guides every 5 minutes"
          />
          {/* Facebook Meta Tags */}
          <meta
            property="og:url"
            content="https://eldenringbuilds.vercel.app"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Elden Ring Checklists - Elden Hub" />
          <meta
            property="og:description"
            content="Replay Elden Ring without looking at guides every 5 minutes"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dicyllvry/image/upload/v1717389292/elden-ring/hero_bjdcbb.png"
          />
          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@LuisMartinezSu2" />
          <meta
            property="twitter:domain"
            content="eldenringbuilds.vercel.app"
          />
          <meta
            property="twitter:url"
            content="https://eldenringbuilds.vercel.app"
          />
          <meta name="twitter:title" content="Elden Ring Checklists - Elden Hub" />
          <meta
            name="twitter:description"
            content="Replay Elden Ring without looking at guides every 5 minutes"
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/dicyllvry/image/upload/v1717389292/elden-ring/hero_bjdcbb.png"
          />

          {/* Meta Tags Generated via https://www.opengraph.xyz */}
        </Head>
        <Component {...pageProps} />
      </SessionProvider>
      <Analytics />
    </>
  );
};

export default api.withTRPC(MyApp);
