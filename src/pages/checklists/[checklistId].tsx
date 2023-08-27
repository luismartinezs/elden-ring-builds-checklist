import { Checklist, type TChecklist } from "~/features/checklist";
import { PageLayout } from "~/layouts/PageLayout";
import { lists } from "~/data";
import { type GetStaticProps, type GetStaticPaths } from "next";

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
      <h1 className="mb-4 text-2xl">{checklist.title}</h1>
      <Checklist items={checklist.items} />
    </PageLayout>
  );
}
