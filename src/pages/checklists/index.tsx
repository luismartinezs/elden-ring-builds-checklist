import { type GetStaticProps } from "next";
import { lists } from "~/data";
import Head from "next/head";
import FeatureSection from "~/components/FeatureSection";
import Hero from "~/components/Hero";
import { HeroSection } from "~/components/HeroSection";
import { PageLayout } from "~/layouts/PageLayout";
import { Checklists } from "~/components/Checklists";

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      checklists: lists.map(({slug, title, tags}) => ({slug, title, tags: tags? tags : []})),
    },
  };
};

export default function Landing({
  checklists,
}: {
  checklists: {
    slug: string;
    title: string;
    tags: string[];
  }[];
}) {
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
          <Checklists checklists={checklists} />
        </div>
      </PageLayout>
    </>
  );
}
