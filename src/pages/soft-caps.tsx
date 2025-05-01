import Head from "next/head";
import React, { useState } from "react";
import { Heading } from "~/components/Heading";
import { SectionWrapper } from "~/components/SectionWrapper";
import { PageLayout } from "~/layouts/PageLayout";
import { stats } from "~/features/stats/stats";
import { StatSoftCapItem } from "~/features/stats/StatSoftCapItem";
import { Paragraph } from "~/components/Paragraph";
import { useManageStats } from "~/features/stats/useManageStats";
import { Switch } from "~/components/Switch";

const LevelCapsPage = () => {
  const { getCurrentStats } = useManageStats();
  const currentStats = getCurrentStats();
  const [showCurrentStats, setShowCurrentStats] = useState(true);

  return (
    <PageLayout>
      <Head>
        <title>Soft Caps | Elden Ring Checklists - Elden Hub</title>
        <meta
          name="description"
          content="Soft caps and recommended investment levels for Vigor, Mind, Endurance, Strength, Dexterity, Intelligence, Faith, and Arcane in Elden Ring."
        />
        <link
          rel="canonical"
          href="https://eldenhub.appforgelabs.com/soft-caps"
          key="canonical"
        />
      </Head>
      <SectionWrapper>
        <Heading.H1>Stat Soft Caps</Heading.H1>

        <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Paragraph className="mb-0">
            Soft caps can get complicated. If you see a mistake, let me know via
            the feedback button
          </Paragraph>
          <Switch
            checked={showCurrentStats}
            onChange={setShowCurrentStats}
            label="Show Current Profile Stats"
            className="shrink-0"
          />
        </div>

        <Paragraph>All stats hard cap at 99</Paragraph>

        <div className="container mx-auto flex flex-col">
          {stats.map((stat) => (
            <StatSoftCapItem
              key={stat.key}
              statKey={stat.key}
              currentStat={
                showCurrentStats ? currentStats[stat.key] : undefined
              }
            />
          ))}
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default LevelCapsPage;
