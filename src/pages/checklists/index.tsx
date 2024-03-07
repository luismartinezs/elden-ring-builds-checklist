import { type GetStaticProps } from "next";
import Link from "next/link";
import { PageLayout } from "~/layouts/PageLayout";
import { lists } from "~/data";
import Head from "next/head";
import { Heading } from "~/components/Heading";
import { Paragraph } from "~/components/Paragraph";
import Hero from "~/components/Hero";

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      checklists: lists,
    },
  };
};

export default function ChecklistsPage({
  checklists,
}: {
  checklists: typeof lists;
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
      <Heading.H2>Checklists</Heading.H2>
      <ul className="mt-4 flex flex-col gap-2 text-2xl">
        {Object.values(checklists).map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/checklists/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
