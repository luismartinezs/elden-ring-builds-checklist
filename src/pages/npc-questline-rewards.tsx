import { type ComponentProps } from "react";

import { PageLayout } from "~/layouts/PageLayout";
import { TAGS, tags } from "~/features/tags";
import { Heading } from "~/components/Heading";
import { FilterButton } from "~/components/FilterButton";
import { Paragraph } from "~/components/Paragraph";
import Link from "next/link";
import { useIsClient } from "usehooks-ts";
import { SectionWrapper } from "~/components/SectionWrapper";
import Head from "next/head";

function Reward({ reward }: { reward: string }) {
  return <span className="whitespace-normal">{reward}</span>;
}

function QuestlineItem({
  filterTag,
  label,
  questlineRewards,
}: {
  filterTag: ComponentProps<typeof FilterButton>["filterTag"];
  label: string;
  questlineRewards: string[];
}) {
  const isClient = useIsClient();

  if (!questlineRewards?.length) {
    return null;
  }

  return (
    <div className="flex flex-col items-start gap-2 md:flex-row md:gap-4">
      <div className="flex items-center gap-2 md:items-start">
        {isClient && (
          <FilterButton filterTag={filterTag} label={label} hideLabel />
        )}
        <h2 className="mb-0 text-xl md:mb-2">{label}</h2>
      </div>
      <div className="flex flex-wrap gap-x-2 whitespace-nowrap">
        {questlineRewards.map((reward, index) => {
          const isLast = index === questlineRewards.length - 1;
          return (
            <span key={index} className="text-stone-400">
              <Reward reward={reward} />
              {!isLast && ","}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function QuestlineRewardsPage() {
  const tagsWithRewards = Object.values(TAGS)
    .map((tag) => tags[tag])
    .filter((tag) => tag.questlineRewards?.length);

  if (tagsWithRewards.length === 0) {
    return <PageLayout>No available questlines</PageLayout>;
  }

  return (
    <PageLayout>
      <Head>
        <title>NPC Questline Rewards | Elden Ring Checklists - Elden Hub</title>
        <meta
          name="description"
          content="See NPC Questline Rewards from Elden Ring"
        />
        <link
          rel="canonical"
          href="https://eldenringbuilds.vercel.app/npc-questline-rewards"
          key="canonical"
        />
      </Head>
      <SectionWrapper>
        <Heading.H1>NPC questline rewards</Heading.H1>
        <Paragraph>
          Activate the NPC questlines whose rewards you want, to see them in the
          game progress checklists. Filters get saved with each profile. Read
          more details about sidequests here:{" "}
          <Link
            href="https://eldenring.wiki.fextralife.com/Side+Quests"
            target="_blank"
          >
            Fextralife Side Quests
          </Link>
        </Paragraph>
        <ul className="flex flex-col gap-2">
          {tagsWithRewards.map((tag) => (
            <li key={tag.key} className="border-b border-stone-600 py-2">
              <QuestlineItem
                filterTag={tag.key}
                label={tag.label}
                questlineRewards={tag.questlineRewards!}
              />
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </PageLayout>
  );
}

export default QuestlineRewardsPage;
