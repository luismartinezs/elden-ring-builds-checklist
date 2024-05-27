import Head from "next/head";
import { PageLayout } from "~/layouts/PageLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Elden Ring Checklists - Elden Hub</title>
        <meta name="description" content="Checklists for the video game Elden Ring" />
      </Head>
      <PageLayout>
        <h1>Home</h1>
      </PageLayout>
    </>
  );
}
