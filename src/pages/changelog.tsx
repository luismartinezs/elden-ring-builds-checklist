import React from "react";
import { PageLayout } from "~/layouts/PageLayout";
import Head from "next/head";
import { Heading } from "~/components/Heading";

interface Change {
  description: string;
}

interface ChangelogEntry {
  date: string;
  changes: Change[];
}

// Sample changelog data - replace with actual data source later
const changelogData: ChangelogEntry[] = [
  {
    date: "2025-04-30",
    changes: [
      { description: "Added the changelog page." },
      { description: "Added the soft caps page." },
      { description: "Added steps for Fia, D and Rogier questlines" },
    ],
  },
  {
    date: "2024-08-23",
    changes: [
      {
        description:
          "Added strengths and weaknesses for bosses in main game progress checklists.",
      },
    ],
  },
];

const ChangelogPage: React.FC = () => {
  return (
    <PageLayout>
      <Head>
        <title>Changelog - Elden Ring Builds Checklist</title>
        <meta
          name="description"
          content="Recent updates and changes to the Elden Ring Builds Checklist platform."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <Heading.H1 className="mb-6">Changelog</Heading.H1>
        <div className="space-y-8">
          {changelogData.map((entry) => (
            <div key={entry.date}>
              <Heading.H2 className="mb-3 border-b border-stone-500 pb-2 !text-lg !font-light">
                <time dateTime={entry.date}>{entry.date}</time>
              </Heading.H2>
              <ul className="ml-4 list-inside list-disc space-y-2">
                {entry.changes.map((change, index) => (
                  <li key={index}>{change.description}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default ChangelogPage;
