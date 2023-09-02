import { Checklist, type TChecklist } from "~/features/checklist";
import { PageLayout } from "~/layouts/PageLayout";
import { lists } from "~/data";
import { type GetStaticProps, type GetStaticPaths } from "next";
import Head from "next/head";
import { SettingsMenu } from "~/components/SettingsMenu";

export const getStaticPaths: GetStaticPaths = () => {
  const paths = Object.values(lists).map((list) => ({
    params: { checklistId: list.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  console.log(params);
  if (!params?.checklistId) {
    return { props: { checklist: null } };
  }

  return {
    props: {
      checklist: Object.values(lists).find(
        (list) => list.slug === params.checklistId
      ),
    },
  };
};

export default function ChecklistPage({
  checklist,
}: {
  checklist: TChecklist | null;
}) {
  if (!checklist) {
    return null;
  }
  return (
    <PageLayout>
      <Head>
        <title>{checklist.title} | Elden Ring Builds</title>
        <meta name="description" content={checklist.title} />
      </Head>
      <div className="sticky top-[66px] z-10 -mx-4 mb-4 flex justify-between bg-stone-900 px-4 py-4">
        <h1 className="text-2xl">{checklist.title}</h1>
        <SettingsMenu />
      </div>

      {checklist.notes?.map((note, index) => (
        <p
          key={`${checklist.id}-note-${index}`}
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: note }}
        ></p>
      ))}
      <Checklist items={checklist.items} />
    </PageLayout>
  );
}
