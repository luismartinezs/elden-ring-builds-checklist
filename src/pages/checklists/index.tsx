import { type GetStaticProps } from "next";
import { lists } from "~/data";
import Head from "next/head";
import { PageLayout } from "~/layouts/PageLayout";
import { Checklists } from "~/components/Checklists";

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
        <title>Checklists | Elden Ring Checklists - Elden Hub</title>
        <meta
          name="description"
          content="Checklists for the video game Elden Ring"
        />
        <link
          rel="canonical"
          href="https://eldenhub.appforgelabs.com/checklists"
          key="canonical"
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
