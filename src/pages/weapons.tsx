import React from "react";
import Head from "next/head";
import { PageLayout } from "~/layouts/PageLayout";
import { SectionWrapper } from "~/components/SectionWrapper";
import { Heading } from "~/components/Heading";
import { Paragraph } from "~/components/Paragraph";
import { WeaponsDisplay } from "~/features/weapons/WeaponsDisplay";
import { StatsWidget } from "~/features/stats/StatsWidget";

const WeaponsPage: React.FC = () => {
  return (
    <PageLayout>
      <Head>
        <title>Weapons | Elden Ring Checklists - Elden Hub</title>
        <meta
          name="description"
          content="View and manage your Elden Ring weapons collection."
        />
        <link
          rel="canonical"
          href="https://eldenhub.appforgelabs.com/weapons"
          key="canonical"
        />
      </Head>
      <SectionWrapper>
        <Heading.H1>Weapons</Heading.H1>
        <Paragraph>
          What weapons can you wield based on your current stats? Also, if you
          like this, check also this other amazing{" "}
          <a
            href="https://eldenring.tclark.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Elden Ring Weapon Calculator
          </a>
        </Paragraph>
        <div className="flex flex-col gap-4">
          <StatsWidget />
          <WeaponsDisplay />
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default WeaponsPage;
