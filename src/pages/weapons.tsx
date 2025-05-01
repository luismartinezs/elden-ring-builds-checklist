import React from "react";
import Head from "next/head";
import { PageLayout } from "~/layouts/PageLayout";
import { SectionWrapper } from "~/components/SectionWrapper";
import { Heading } from "~/components/Heading";
import { Paragraph } from "~/components/Paragraph";
import { WeaponsDisplay } from "~/features/weapons/WeaponsDisplay";

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
          Find a list of weapons you can wield based on your current stats
        </Paragraph>
        <WeaponsDisplay />
      </SectionWrapper>
    </PageLayout>
  );
};

export default WeaponsPage;
