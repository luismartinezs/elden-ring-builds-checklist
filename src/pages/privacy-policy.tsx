import Head from "next/head";
import { Heading } from "~/components/Heading";
import { SectionWrapper } from "~/components/SectionWrapper";
import { PageLayout } from "~/layouts/PageLayout";

function PrivacyPolicy() {
  return (
    <PageLayout>
      <Head>
        <title>Privacy Policy | Elden Ring Checklists - Elden Hub</title>
        <meta
          name="description"
          content="Privacy policy for Elden Ring Checklists - Elden Hub"
        />
        <link
          rel="canonical"
          href="https://eldenringbuilds.vercel.app/privacy-policy"
          key="canonical"
        />
      </Head>
      <SectionWrapper>
        <Heading.H1 className="mb-3">Privacy Policy</Heading.H1>
        <p>Last updated: 2024-02-01</p>
      </SectionWrapper>
    </PageLayout>
  );
}

export default PrivacyPolicy;
