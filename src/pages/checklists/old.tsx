import { type GetStaticProps } from "next";
import Link from "next/link";
import { PageLayout } from "~/layouts/PageLayout";
import { lists } from "~/data";
import Head from "next/head";
import { Heading } from "~/components/Heading";
import { Paragraph } from "~/components/Paragraph";
import Hero from "~/components/Hero";
import { Checklists } from "~/components/Checklists";

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      checklists: lists.map(({slug, title}) => ({slug, title})),
    },
  };
};

export default function ChecklistsPage({
  checklists,
}: {
  checklists: {
    slug: string;
    title: string
  }[];
}) {
  return (
    <PageLayout>
      <Head>
        <title>Checklists | Elden Ring Builds</title>
        <meta name="description" content="Elden Ring Builds" />
      </Head>
      <Heading.H1>Elden Ring Checklists</Heading.H1>
      <Paragraph>
        Checklists for character builds for Elden Ring, so you don&apos;t have
        to look at a guide for every step
      </Paragraph>
      <Hero />
      <Checklists checklists={checklists} />
    </PageLayout>
  );
}
