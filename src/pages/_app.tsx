import { Monitoring } from "react-scan/monitoring/next";
import { type AppType } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

import "~/styles/globals.css";
import { useInitAppData } from "~/hooks/useInitAppData";
import { useMigrateLegacyData } from "~/hooks/useMigrateLegacyData";

const App: AppType = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient());
  useInitAppData();
  useMigrateLegacyData(); // This can be removed after some days / weeks. See also scripts/mockLegacyData.jst

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/elden-ring.png?v=1" />
        {/* HTML Meta Tags */}
        <title>Elden Ring Checklists - Elden Hub</title>
        <meta
          name="description"
          content="Replay Elden Ring without looking at guides every 5 minutes"
        />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://eldenhub.appforgelabs.com" />
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
        <meta property="twitter:domain" content="eldenhub.appforgelabs.com" />
        <meta
          property="twitter:url"
          content="https://eldenhub.appforgelabs.com"
        />
        <meta
          name="twitter:title"
          content="Elden Ring Checklists - Elden Hub"
        />
        <meta
          name="twitter:description"
          content="Replay Elden Ring without looking at guides every 5 minutes"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dicyllvry/image/upload/v1717389292/elden-ring/hero_bjdcbb.png"
        />

        {/* Meta Tags Generated via https://www.opengraph.xyz */}

        {/* PWA */}
        <meta name="generator" content="Next.js" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="keywords"
          content="Elden Ring Checklists, EldenHub Guides, Elden Ring NPC Rewards, Elden Ring Profile Management, Elden Ring FAQ, Elden Ring DLC Preparation, Elden Ring Questline Guides, Elden Ring Checklist App, Elden Ring New Game+ Progress, Elden Ring Moonveil Samurai Build, Elden Ring Ranni the Witch Build, Elden Ring Templar Build Guide, Elden Ring Lightning Lancer Build, Elden Ring Status Effect Build, Elden Ring Replay Guide, Elden Ring Filters and Steps, Elden Ring New Game Progress Tracker, Elden Ring INT DEX Builds, Elden Ring FAI STR DEX Builds, Elden Ring No Guide Playthrough"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=1"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=1"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=1"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f59e0b" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />

        <meta name="author" content="AppForgeLabs LLC" />
        <link rel="author" href="https://www.linkedin.com/in/luismarsu/" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
      <Monitoring
        apiKey="RNmghIjWyjH-J6i48OIXKnVPA0sMsmUP" // Safe to expose publically
        url="https://monitoring.react-scan.com/api/v1/ingest"
        commit={process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA} // optional but recommended
        branch={process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF} // optional but recommended
      />
    </QueryClientProvider>
  );
};

export default App;
