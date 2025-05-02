import React from "react";
import Head from "next/head";
import { PageLayout } from "~/layouts/PageLayout";
import { SectionWrapper } from "~/components/SectionWrapper";
import { Heading } from "~/components/Heading";
import { Paragraph } from "~/components/Paragraph";
import { LevelingPage } from "~/features/leveling/leveling-page";

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
        <Paragraph>
          This guide is roughly based on this{" "}
          <a
            href="https://steamcommunity.com/sharedfiles/filedetails/?id=2765060616"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stat Breakpoints
          </a>{" "}
          guide. And aims to answer the{" "}
          <span className="italic">eternal question</span>: &quot;What stat
          should I level up next?&quot;. It is not a &quot;Definitive
          Guide&quot;, just a helpful companion for when you are lost.
        </Paragraph>
        <LevelingPage />
      </SectionWrapper>
    </PageLayout>
  );
};

export default LevelingGuidePage;
