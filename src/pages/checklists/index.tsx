import { type GetStaticProps } from "next";
import Link from "next/link";
import { PageLayout } from "~/layouts/PageLayout";
import { lists } from "~/data";
import Head from "next/head";

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
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
        Elden Ring Checklists
      </h1>
      <p className="mb-6 text-lg font-normal text-stone-400 lg:text-xl">
        Checklists for character builds for Elden Ring, so you don&apos;t have
        to look at a guide for every step
      </p>
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
