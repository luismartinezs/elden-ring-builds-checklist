import { Checklist, type TChecklist } from "~/features/checklist";
import { PageLayout } from "~/layouts/PageLayout";
import { lists } from "~/data";
import { type GetStaticProps, type GetStaticPaths } from "next";
import { useCheckItem } from "~/features/checklist/hooks/useCheckItem";
import { Button } from "~/components/Button";
import { useFilter } from "~/hooks/useFilter";
import { useIsClient } from "usehooks-ts";
import Head from "next/head";
import { Fragment } from "react";

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
  const isClient = useIsClient();
  const { items, setItems } = useCheckItem();
  const { filter: filterOptional, setFilter: setFilterOptional } =
    useFilter("optional");
  const { filter: filterCompleted, setFilter: setFilterCompleted } =
    useFilter("completed");

  if (!checklist) {
    return null;
  }
  return (
    <PageLayout>
      <Head>
        <title>{checklist.title} | Elden Ring Builds</title>
        <meta name="description" content={checklist.title} />
      </Head>
      <h1 className="mb-4 text-2xl">{checklist.title}</h1>
      <div className="my-4 flex items-center gap-2">
        <Button
          onClick={() => setItems([])}
          variant="outline"
          disabled={items.length === 0}
        >
          Uncheck all
        </Button>
        {isClient && (
          <>
            <Button
              variant="outline"
              onClick={() => setFilterOptional(!filterOptional)}
            >
              {filterOptional ? "show" : "hide"} optional
            </Button>
            <Button
              variant="outline"
              onClick={() => setFilterCompleted(!filterCompleted)}
            >
              {filterCompleted ? "show" : "hide"} completed
            </Button>
          </>
        )}
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
