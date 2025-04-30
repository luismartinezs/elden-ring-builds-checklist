import Head from "next/head";
import React from "react";
import { Heading } from "~/components/Heading";
import { SectionWrapper } from "~/components/SectionWrapper";
import { levelCapsData } from "~/data/level-caps-data";
import { PageLayout } from "~/layouts/PageLayout";
import {stats} from "~/features/stats/stats";
import { StatSoftCapItem } from "~/features/stats/StatSoftCapItem";
import { Paragraph } from "~/components/Paragraph";

const LevelCapsPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Level Caps | Elden Ring Checklists - Elden Hub</title>
        <meta
          name="description"
          content="Soft caps and recommended investment levels for Vigor, Mind, Endurance, Strength, Dexterity, Intelligence, Faith, and Arcane in Elden Ring."
        />
        <link
          rel="canonical"
          href="https://eldenhub.appforgelabs.com/level-caps"
          key="canonical"
        />
      </Head>
      <SectionWrapper>
        <Heading.H1>Stat Level Caps</Heading.H1>

        <Paragraph>
          Stat soft caps can get complicated. If you see a mistake, let me know via the feedback button
        </Paragraph>

        <Paragraph>All stats hard cap at 99</Paragraph>

        <div className="flex flex-col container mx-auto">
          {stats.map((stat) => (
            <StatSoftCapItem key={stat.key} statKey={stat.key} />
          ))}
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default LevelCapsPage;