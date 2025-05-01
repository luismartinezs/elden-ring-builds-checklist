import React from "react";
import Head from "next/head";
import { PageLayout } from "~/layouts/PageLayout";
import { SectionWrapper } from "~/components/SectionWrapper";
import { Heading } from "~/components/Heading";
import { Paragraph } from "~/components/Paragraph";
import { StatsWidget } from "~/features/stats/StatsWidget";

const StatsPage: React.FC = () => {
  return (
    <PageLayout>
      <Head>
        <title>Stats | Elden Ring Checklists - Elden Hub</title>
        <meta
          name="description"
          content="View and set your Elden Ring profile stats."
        />
        {/* Add canonical URL if applicable */}
        <link
          rel="canonical"
          href="https://eldenhub.appforgelabs.com/stats"
          key="canonical"
        />
      </Head>
      <SectionWrapper>
        <Heading.H1>Stats Page</Heading.H1>
        <Paragraph>Here you can set your profile stats</Paragraph>
        <StatsWidget />
      </SectionWrapper>
    </PageLayout>
  );
};

export default StatsPage;
