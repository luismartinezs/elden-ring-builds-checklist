import Head from "next/head";
import Link from "next/link";
import { PageLayout } from "~/layouts/PageLayout";
import { Checkbox } from "~/features/checklist/components/Checkbox";
import { useCheckChallenge } from "~/features/checklist/hooks/useCheckChallenge";
import { useManageChallenges } from "~/features/checklist/hooks/useManageChallenges";
import { useLocalStorage } from "usehooks-ts";

const bossOptions = [
  { label: "Margit", value: "margit" },
  { label: "Godrick", value: "godrick" },
  { label: "Rennala", value: "rennala" },
  { label: "Radahn", value: "radahn" },
  { label: "Morgott", value: "morgott" },
  { label: "Rykard", value: "rykard" },
  { label: "Mohg", value: "mohg" },
  { label: "Malenia", value: "malenia" },
  { label: "Godfrey", value: "godfrey" },
  { label: "Radagon", value: "radagon" },
  { label: "Elden Beast", value: "elden-beast" },
];

const challenges = [
  {
    id: "c1a9b2d3-4e5f-6789-abcd-ef0123456789",
    text: "No Spirit Ashes, no consumables, no spells",
  },
  {
    id: "d2b8c3e4-5f60-789a-bcde-f01234567890",
    text: "No guard counters",
  },
  {
    id: "e3c7d4f5-6061-89ab-cdef-012345678901",
    text: "No shield, switch to Claymore",
  },
  {
    id: "f4d6e5g6-7172-9abc-def0-123456789012",
    text: "No riposte / critical hit / backstabs",
  },
  {
    id: "g5e5f6h7-8283-abcd-ef01-234567890123",
    text: "No armor (naked)",
  },
  {
    id: "h6f4g7i8-9394-bcde-f012-345678901234",
    text: "No Flask of Wondrous Physick",
  },
  {
    id: "i7g3h8j9-a4a5-cdef-0123-456789012345",
    text: "No talismans",
  },
  {
    id: "j8h2i9k0-b5b6-def0-1234-567890123456",
    text: "No crimson flask, no healing",
  },
  {
    id: "k9i1j0l1-c6c7-ef01-2345-678901234567",
    text: "No hit (reset fight if hit)",
  },
  {
    id: "l0j9k1m2-d7d8-f012-3456-789012345678",
    text: "RL1 (NG)",
  },
  {
    id: "m1k8l2n3-e8e9-0123-4567-890123456789",
    text: "RL1 no hit (NG)",
  },
  {
    id: "n2l7m3o4-f9fa-1234-5678-901234567890",
    text: "RL1 weapon +0 no hit (NG)",
  },
];

function ChallengeCheckbox({
  challenge,
  onCheck,
  isChecked,
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
  const [selectedBoss, setSelectedBoss] = useLocalStorage<string>("john-elden-selected-boss", bossOptions[0]?.value ?? "margit");
  const { checkChallenge, isChecked, checkedItems } =
    useCheckChallenge("john-elden", selectedBoss);
  const { updateChallenge, getBossSpecificChallenges } = useManageChallenges();

  // Calculate progress for each boss
  const bossOptionsWithProgress = bossOptions.map(boss => {
    const bossCheckedItems = getBossSpecificChallenges("john-elden", boss.value);
    const checkedCount = bossCheckedItems.length;
    const totalCount = challenges.length;
    
    let statusColor = "";
    if (checkedCount === 0) {
      statusColor = ""; // Normal state
    } else if (checkedCount === totalCount) {
      statusColor = "text-green-400"; // All completed
    } else {
      statusColor = "text-amber-400"; // In progress
    }
    
    return {
      ...boss,
      label: `${boss.label} (${checkedCount}/${totalCount})`,
      statusColor,
      progress: { checked: checkedCount, total: totalCount }
    };
  });

  const handleUncheckAll = () => {
    updateChallenge("john-elden", [], selectedBoss);
  };

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

          <blockquote className="mb-10 border-l-4 border-amber-400/50 pl-6 italic text-stone-300">
&ldquo;Ohhh… my lambkin. So eager to test your mettle, are you? To pit
            yourself against a single foe, again and again, until you&rsquo;ve peeled
            away every comfort, every scrap of crutch, until nothing remains but
            naked steel and your wits? Mm, how delightful. Most Tarnished fling
            themselves at grace&rsquo;s guidance and die nameless, but you… you choose
            the harder path. Each step, more cruel than the last, strips you
            bare, until your strength alone decides your fate. And when you
            fall, you&rsquo;ll fall without ceremony. Yet should you endure… ah, then
            you may truly call yourself worthy. Now then, shall we begin? Heh…
            heh heh.&rdquo;
          </blockquote>

          <div className="mb-6 rounded-lg border border-amber-400/30 bg-stone-800/50 p-6">
            <h2 className="mb-4 text-xl font-semibold text-amber-400">
              What is the John Elden Challenge?
            </h2>
            <p className="text-stone-300">
              This challenge is about stripping away every safety net until
              nothing remains but your knowledge of the boss. You start as a
              fully equipped knight and, step by step, remove shields, armor,
              healing, and upgrades. Each restriction forces you to adapt,
              sharpening your timing, spacing, and recognition of openings. By
              the end, you face the boss at rune level 1, naked and weaponless,
              where survival depends entirely on mastery rather than stats or
              gear
            </p>
          </div>

          <div className="mb-6 flex flex-col gap-4 rounded-lg border border-amber-400/30 bg-stone-800/50 p-6">
            <h2 className="text-xl font-semibold text-amber-400">
              Setup Instructions
            </h2>
            <p className="text-stone-300">
              This works on PC only, don&rsquo;t really know how it could work on
              console, sorry...
            </p>
            <p className="text-stone-300">
              Rolling, jumping, crouching, parrying always allowed.
            </p>
            <ul className="list-disc space-y-1 pl-4 text-stone-300">
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
              <li>Select one boss</li>
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

          <div className="mb-6 rounded-lg border border-amber-400/30 bg-stone-800/50 p-6">
            <h2 className="mb-4 text-xl font-semibold text-amber-400">
              Select Boss
            </h2>
            <div role="radiogroup" aria-label="Select boss for challenge">
              <div className="grid grid-cols-2 gap-2 text-xs">
                {bossOptionsWithProgress.map((boss) => {
                  const isSelected = boss.value === selectedBoss;
                  return (
                    <button
                      key={boss.value}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => setSelectedBoss(boss.value)}
                      className={`flex items-center justify-between rounded px-2 py-1 transition-colors cursor-pointer hover:bg-amber-400/10 ${
                        isSelected ? 'bg-amber-400/20 border border-amber-400/30' : 'bg-stone-700/50'
                      }`}
                    >
                      <span className={`font-medium ${boss.statusColor || 'text-stone-300'}`}>
                        {boss.value === 'elden-beast' ? 'Elden Beast' : boss.value.charAt(0).toUpperCase() + boss.value.slice(1)}
                      </span>
                      <span className={`text-xs ${boss.statusColor || 'text-stone-400'}`}>
                        {boss.progress.checked}/{boss.progress.total}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-amber-400/30 bg-stone-800/50 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-amber-400">
                Challenge Conditions
              </h2>
              {checkedItems.length > 0 && (
                <button
                  onClick={handleUncheckAll}
                  className="rounded bg-stone-700 px-3 py-1 text-sm text-stone-300 transition-colors hover:bg-stone-600 hover:text-white"
                >
                  Uncheck All
                </button>
              )}
            </div>
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
