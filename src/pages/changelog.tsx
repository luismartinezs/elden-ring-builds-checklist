import React from "react";
import { PageLayout } from "~/layouts/PageLayout";
import Head from "next/head";
import { Heading } from "~/components/Heading";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

interface TChange {
  description: React.ReactNode;
}

interface TChangelogEntry {
  date: string;
  changes: TChange[];
}

// Sample changelog data - replace with actual data source later
const changelogData: TChangelogEntry[] = [
  {
    date: "2025-09-03",
    changes: [
      {
        description: (
          <span>
            Added{" "}
            <Link href="/challenges/john-elden">
              John Elden Challenge
            </Link>{" "}
            - a Boss Arena challenge with specific rules and progression.
          </span>
        ),
      },
    ],
  },
  {
    date: "2025-06-10",
    changes: [
      {
        description: (
          <span>
            Added new filters for Memory Stones to the{" "}
            <Link href="/checklists/simple-game-progress">main checklist</Link>.
          </span>
        ),
      },
    ],
  },
  {
    date: "2025-05-14",
    changes: [
      {
        description: (
          <span>
            Added new filters for Catacombs, Caves and Hero Graves to the{" "}
            <Link href="/checklists/simple-game-progress">main checklist</Link>,
            along with tiny reorderings and tweaks of some steps.
          </span>
        ),
      },
    ],
  },

  {
    date: "2025-05-04",
    changes: [
      {
        description: (
          <span>
            Improved the quality of the{" "}
            <Link href="/leveling-guide">leveling guide</Link>, adding more
            playstyles and having a separate &quot;Spellcaster&quot; option.
          </span>
        ),
      },
    ],
  },
  {
    date: "2025-05-02",
    changes: [
      {
        description: (
          <span>
            Added <Link href="/leveling-guide">leveling guide</Link> that
            suggests a leveling order based on stats, weapon requirements, etc.
          </span>
        ),
      },
      {
        description: (
          <span>
            Added <Link href="/weapons">weapons page</Link> where you can filter
            weapons by various parameters.
          </span>
        ),
      },
    ],
  },
  {
    date: "2025-05-01",
    changes: [
      {
        description: (
          <span>
            <Link href="/soft-caps">Soft Caps</Link> page now shows the current
            profile stats.
          </span>
        ),
      },
      {
        description: (
          <span>
            Added <Link href="/stats">Stats page</Link> where you can set the
            stats of the <Link href="/profile">current profile</Link>
          </span>
        ),
      },
    ],
  },
  {
    date: "2025-04-30",
    changes: [
      { description: "Changelog page." },
      {
        description: (
          <span>
            The <Link href="/soft-caps">soft caps page</Link>.
          </span>
        ),
      },
      {
        description: (
          <span>
            Steps for Fia, D and Rogier questlines in the{" "}
            <Link href="checklists/simple-game-progress">main checklist</Link>
          </span>
        ),
      },
      {
        description: (
          <span>
            A better way to{" "}
            <a
              href="https://eldenhub.featurebase.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              provide feedback
              <span className="sr-only">(opens in new tab)</span>
              <FiExternalLink
                className="ml-1 inline-block"
                aria-hidden="true"
              />
            </a>
            .
          </span>
        ),
      },
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
