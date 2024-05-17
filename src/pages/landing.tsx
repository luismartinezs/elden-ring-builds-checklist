import Head from "next/head";
import FeatureSection from "~/components/FeatureSection";
import Hero from "~/components/Hero";
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
        <div className="flex flex-col">
          <HeroSection />
          <FeatureSection />
          <Hero />
          <div>List of builds and checklists</div>
        </div>
      </PageLayout>
    </>
  );
}
