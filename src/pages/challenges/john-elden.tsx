import Head from "next/head";
import Link from "next/link";
import { PageLayout } from "~/layouts/PageLayout";
import { Checkbox } from "~/features/checklist/components/Checkbox";
import { useCheckChallenge } from "~/features/checklist/hooks/useCheckChallenge";

const challenges = [
  {
    id: "c1a9b2d3-4e5f-6789-abcd-ef0123456789",
    text: "No Spirit Ashes, no consumables, no spells"
  },
  {
    id: "d2b8c3e4-5f60-789a-bcde-f01234567890",
    text: "No guard counters"
  },
  {
    id: "e3c7d4f5-6061-89ab-cdef-012345678901",
    text: "No shield, switch to claymore +25 quality + square off"
  },
  {
    id: "f4d6e5g6-7172-9abc-def0-123456789012",
    text: "No riposte / critical hit / backstabs"
  },
  {
    id: "g5e5f6h7-8283-abcd-ef01-234567890123",
    text: "No armor (naked)"
  },
  {
    id: "h6f4g7i8-9394-bcde-f012-345678901234",
    text: "No Flask of Wondrous Physick"
  },
  {
    id: "i7g3h8j9-a4a5-cdef-0123-456789012345",
    text: "No talismans"
  },
  {
    id: "j8h2i9k0-b5b6-def0-1234-567890123456",
    text: "No crimson flask, no healing"
  },
  {
    id: "k9i1j0l1-c6c7-ef01-2345-678901234567",
    text: "No hit (reset fight if hit)"
  },
  {
    id: "l0j9k1m2-d7d8-f012-3456-789012345678",
    text: "RL1 (NG)"
  },
  {
    id: "m1k8l2n3-e8e9-0123-4567-890123456789",
    text: "RL1 no hit (NG)"
  },
  {
    id: "n2l7m3o4-f9fa-1234-5678-901234567890",
    text: "RL1 weapon +0 no hit (NG)"
  }
];

function ChallengeCheckbox({ 
  challenge, 
  onCheck, 
  isChecked 
}: { 
  challenge: { id: string; text: string };
  onCheck: (itemId: string) => void;
  isChecked: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <Checkbox
        itemId={challenge.id}
        isChecked={isChecked}
        onChange={() => onCheck(challenge.id)}
        label={challenge.text}
        size="sm"
      />
      <span className="text-stone-300">{challenge.text}</span>
    </div>
  );
}

export default function JohnEldenChallenge() {
  const { checkChallenge, isChecked } = useCheckChallenge("john-elden");
  
  return (
    <>
      <Head>
        <title>John Elden Challenge - Elden Hub</title>
        <meta
          name="description"
          content="Incremental challenge list with progressive difficulty for Elden Ring"
        />
      </Head>
      <PageLayout>
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <div className="mb-6">
            <Link
              href="/challenges"
              className="text-amber-400 transition-colors hover:text-amber-300"
            >
              ← Back to Challenges
            </Link>
          </div>

          <h1 className="mb-8 text-3xl font-bold text-amber-400">
            John Elden Challenge
          </h1>

          <div className="mb-6 rounded-lg border border-amber-400/30 bg-stone-800/50 p-6">
            <h2 className="mb-4 text-xl font-semibold text-amber-400">
              Setup Instructions
            </h2>
            <p className="mb-4 text-stone-300">
              Rolling, jumping, crouching, parrying always allowed.
            </p>
            <ul className="space-y-2 text-stone-300">
              <li>
                Install{" "}
                <a
                  href="https://www.nexusmods.com/eldenring/mods/5645"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 underline hover:text-amber-300"
                >
                  Boss Arena Sandbox mod
                </a>
              </li>
              <li>Advance to NG+</li>
              <li>Pick one boss</li>
              <li>
                Setup{" "}
                <a
                  href="https://er-build-planner.nyasu.business/?b=7d30046e7342e8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 underline hover:text-amber-300"
                >
                  John Elden build
                </a>{" "}
                (the <i>basickest defaultest</i> dark fantasy knight build
                imaginable)
              </li>
              <li>
                Each step increases difficulty and is incremental, keep all
                previous conditions as you move forward
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-amber-400/30 bg-stone-800/50 p-6">
            <h2 className="mb-4 text-xl font-semibold text-amber-400">
              Challenge Conditions
            </h2>
            <div className="space-y-3">
              {challenges.map((challenge) => (
                <ChallengeCheckbox 
                  key={challenge.id} 
                  challenge={challenge}
                  onCheck={checkChallenge}
                  isChecked={isChecked(challenge.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
