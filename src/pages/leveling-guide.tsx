import React from "react";
import Head from "next/head";
import { PageLayout } from "~/layouts/PageLayout";
import { SectionWrapper } from "~/components/SectionWrapper";
import { Heading } from "~/components/Heading";
import { Paragraph } from "~/components/Paragraph";
import { StatsWidget } from "~/features/stats/StatsWidget";
import { LevelingList } from "~/features/leveling/leveling-list";
import { Divider } from "~/components/Divider";

const LevelingGuidePage: React.FC = () => {
  return (
    <PageLayout>
      <Head>
        <title>Leveling Guide | Elden Ring Checklists - Elden Hub</title>
        <meta
          name="description"
          content="Learn how to effectively level up your character in Elden Ring."
        />
        <link
          rel="canonical"
          href="https://eldenhub.appforgelabs.com/leveling-guide"
          key="canonical"
        />
      </Head>
      <SectionWrapper>
        <Heading.H1>Leveling Guide</Heading.H1>
        <Paragraph>What stat should you level up next?</Paragraph>
        <div className="flex flex-col gap-6">
          <StatsWidget />
          <Divider />
          {/* some inputs */}
          <LevelingList />
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default LevelingGuidePage;
