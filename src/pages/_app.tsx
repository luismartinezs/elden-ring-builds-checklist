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
  useMigrateLegacyData();

  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <link rel="icon" href="/elden-ring.png" />
        </Head>
        <Component {...pageProps} />
      </SessionProvider>
      <Analytics />
    </>
  );
};

export default api.withTRPC(MyApp);
