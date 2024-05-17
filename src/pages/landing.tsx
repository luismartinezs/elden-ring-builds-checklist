import Head from "next/head";
import { HeroSection } from "~/components/HeroSection";
import { PageLayout } from "~/layouts/PageLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Elden Ring Checklists</title>
        <meta name="description" content="Elden Ring Checklists" />
      </Head>
      <PageLayout>
        <div className="flex flex-col gap-4">
          <HeroSection />
          <div>3 Steps: open checklist - toggle filters - follow steps</div>
          <div>Ranni build thing</div>
          <div>List of builds and checklists</div>
        </div>
      </PageLayout>
    </>
  );
}
