import Head from "next/head";
import { Heading } from "~/components/Heading";
import { List } from "~/components/List";
import { Paragraph } from "~/components/Paragraph";
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
          href="https://eldenhub.appforgelabs.com/privacy-policy"
          key="canonical"
        />
      </Head>
      <SectionWrapper>
        <Heading.H1>Privacy Policy</Heading.H1>

        <Paragraph>Effective Date: 2024-09-16</Paragraph>

        <Heading.H3>1. Introduction</Heading.H3>

        <Paragraph>
          Welcome to Elden Ring Checklists - Elden Hub (&quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;). We are committed to protecting
          your privacy and ensuring your personal information is handled in a
          safe and responsible manner. This privacy policy outlines how we
          collect, use, and protect your personal data when you visit
          https://eldenhub.appforgelabs.com (the &quot;Site&quot;) or use our
          services.
        </Paragraph>

        <Heading.H3>2. Information We Collect</Heading.H3>

        <Paragraph>
          We do not collect any personal information such as your name, email,
          or phone number. However, we may collect the following information:
        </Paragraph>

        <List>
          <li>
            <strong>Cookies and Tracking Data</strong>: Information related to
            your interaction with the Site, including page views, browsing
            history, and preferences.
          </li>
          <li>
            <strong>Analytics</strong>: We use Umami Analytics to track page
            views and site interactions. No personal data is collected by Umami;
            it only tracks anonymized data.
          </li>
        </List>

        <Heading.H3>3. How We Use Your Information</Heading.H3>

        <Paragraph>
          We use your information for the following purposes:
        </Paragraph>

        <List>
          <li>To improve our services by analyzing user interactions.</li>
          <li>
            To display ads relevant to your browsing behavior via Google
            Adsense.
          </li>
          <li>To remember your preferences using cookies and local storage.</li>
        </List>

        <Heading.H3>4. Cookies and Tracking Technologies</Heading.H3>

        <Paragraph>
          We use cookies and local storage to enhance your experience on the
          Site. These include:
        </Paragraph>

        <List>
          <li>
            Cookies for saving user preferences and improving your experience.
          </li>
          <li>Google Adsense cookies for displaying personalized ads.</li>
          <li>Umami cookies for anonymized analytics tracking.</li>
        </List>

        <Paragraph>
          You have the option to opt-out of non-essential cookies through the
          cookie modal that appears when you visit the Site.
        </Paragraph>

        <Heading.H3>5. Data Sharing</Heading.H3>

        <Paragraph>We may share anonymized data with the following:</Paragraph>

        <List>
          <li>
            <strong>Google Adsense</strong>: For displaying personalized
            advertisements.
          </li>
          <li>
            <strong>Analytics Services</strong>: Umami Analytics for site
            performance tracking.
          </li>
        </List>

        <Heading.H3>6. International Data Transfers</Heading.H3>

        <Paragraph>
          Your information may be processed by service providers in countries
          outside the European Economic Area (EEA). In such cases, we ensure
          appropriate safeguards are in place, such as standard contractual
          clauses.
        </Paragraph>

        <Heading.H3>7. Data Retention</Heading.H3>

        <Paragraph>
          We retain anonymized data as long as necessary for the purposes
          described in this policy. After that, it is either deleted or
          anonymized further.
        </Paragraph>

        <Heading.H3>8. Security Measures</Heading.H3>

        <Paragraph>
          We take the security of your data seriously and implement appropriate
          measures to protect it from unauthorized access or misuse.
        </Paragraph>

        <Heading.H3>9. Changes to This Policy</Heading.H3>

        <Paragraph>
          We may update this privacy policy from time to time. Any changes will
          be posted on this page with a new effective date. We encourage you to
          review this policy periodically.
        </Paragraph>

        <Heading.H3>10. Contact Us</Heading.H3>

        <Paragraph>
          If you have any questions or concerns about this privacy policy,
          please contact us at:
        </Paragraph>

        <Paragraph>
          AppForgeLabs LLC
          <br />
          Email: hello@appforgelabs.com
        </Paragraph>
      </SectionWrapper>
    </PageLayout>
  );
}

export default PrivacyPolicy;
