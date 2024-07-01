import {
  Checklist,
  type TChecklistItem,
  type TChecklist,
} from "~/features/checklist";
import { PageLayout } from "~/layouts/PageLayout";
import { lists } from "~/data";
import { type GetStaticProps, type GetStaticPaths } from "next";
import Head from "next/head";
import { SettingsMenu } from "~/components/SettingsMenu";
import { useFilters } from "~/features/filters";
import { TAGS, isValidTag } from "~/features/tags";
import ClientOnly from "~/components/ClientOnly";
import { useCheckItem } from "~/features/checklist/hooks/useCheckItem";
import { SectionWrapper } from "~/components/SectionWrapper";

export const getStaticPaths: GetStaticPaths = () => {
  const paths = Object.values<TChecklist>(lists).map((list) => ({
    params: { checklistId: list.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  if (!params?.checklistId) {
    return { props: { checklist: null } };
  }

  return {
    props: {
      checklist: Object.values<TChecklist>(lists).find(
        (list) => list.slug === params.checklistId
      ),
    },
  };
};

function filterItemsByTag(
  checklistItems: TChecklistItem[],
  activeFilters: string[],
  isNgPlus?: boolean
) {
  return checklistItems.filter(({ tags }) => {
    let _tags: string[] = [];

    if (tags) {
      _tags = [...tags];
    }

    const isOptional = _tags?.includes(TAGS.OPTIONAL);

    // NOTE this is a bit of a hack to reuse the same steps for two checklists. the NG+ checklist shares most steps with NG checklist, but a few don't make sense for NG+
    // If a step has no tags or only "OPTIONAL" tag, it is filtered out from from the NG+ checklist
    // some items have the NG+ tag specifically to prevent this filtering
    if (
      isNgPlus &&
      (_tags.length === 0 || (isOptional && _tags.length === 1))
    ) {
      return false;
    }

    const validTags = _tags?.filter(isValidTag);

    if (!validTags || validTags.length === 0) {
      return true;
    }

    return validTags?.some((tag) => activeFilters.includes(tag));
  });
}

export default function ChecklistPage({
  checklist,
}: {
  checklist: TChecklist | null;
}) {
  const { activeFilters } = useFilters();
  // console.log("activeFilters", activeFilters);
  const { isChecked } = useCheckItem();

  if (!checklist) {
    return null;
  }

  let checklistItems = checklist.items;

  // filtering by tag at the page level
  checklistItems = filterItemsByTag(
    checklistItems,
    activeFilters,
    checklist.slug === "new-game-plus-progress"
  )
    // handle completed items with a special tag
    .filter(
      (item) =>
        !isChecked(item.id) ||
        (isChecked(item.id) && activeFilters.includes("completed"))
    )
    // removing tags not used for filtering because they are not needed beyond this point
    .map((item) => ({
      ...item,
      tags: item.tags?.filter(isValidTag),
    }));

  return (
    <PageLayout>
      <Head>
        <title>{checklist.title} | Elden Ring Checklists - Elden Hub</title>
        <meta name="description" content={checklist.title} />
        <link
          rel="canonical"
          href={`https://eldenringbuilds.vercel.app/checklists/${checklist.slug}`}
          key="canonical"
        />
      </Head>
      <SectionWrapper className="relative isolate !my-0 py-0">
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
        <ClientOnly>
          <Checklist items={checklistItems} />
        </ClientOnly>
      </SectionWrapper>
    </PageLayout>
  );
}
