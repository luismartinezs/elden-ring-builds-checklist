import { type GetStaticProps } from "next";
import { lists } from "~/data";
import Head from "next/head";
import FeatureSection from "~/components/FeatureSection";
import Hero from "~/components/Hero";
import { HeroSection } from "~/components/HeroSection";
import { PageLayout } from "~/layouts/PageLayout";
import { Checklists } from "~/components/Checklists";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      checklists: lists.map(({ slug, title, tags }) => ({
        slug,
        title,
        tags: tags ? tags : [],
      })),
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
        <title>Elden Ring Checklists - Elden Hub</title>
        <meta
          name="description"
          content="Checklists for the video game Elden Ring"
        />
      </Head>
      <PageLayout>
        <div className="mb-16 flex flex-col">
          <Checklists checklists={checklists} />
        </div>
      </PageLayout>
    </>
  );
}
