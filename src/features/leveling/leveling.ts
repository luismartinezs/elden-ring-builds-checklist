/* ──────────────────────────────────────────────────────────────
   Elden Ring ‑ Stat Planner  ✧  Refactored & Self‑Documenting
   ──────────────────────────────────────────────────────────────
   • priorities:  requirements → heuristic breakpoints
   • duplicates automatically collapsed (keep highest target)
   • equip‑load logic removed            • statLimit respected
   • each helper does ONE thing
   • all names use camelCase keys: vgr/mnd/end/str/dex/int/fai/arc
----------------------------------------------------------------*/

import { type TStatKey } from "../stats/stats";
import { type archetypes } from "./select-archetype";

/*──────────────── 1 · Public types ────────────────*/
export interface Requirements {
  str?: number;
  dex?: number;
  int?: number;
  fai?: number;
  arc?: number;
}

export type DmgStats = Record<keyof Requirements, boolean>;

export type RequirementsKeys = keyof Requirements;

export interface StatsRecord extends Required<Requirements> {
  vgr: number;
  mnd: number;
  end: number;
}

export type Archetype = (typeof archetypes)[number];

export interface Recommendation {
  stat: TStatKey;
  target: number; // final value AFTER levelling
}

/*──────────────── 2 · Static reference data ────────────────*/
export const DMG_KEYS: (keyof DmgStats)[] = ["str", "dex", "int", "fai", "arc"];

const BREAKPOINTS: Record<TStatKey, number[]> = {
  vgr: [40, 58],
  mnd: [40, 50],
  end: [25, 40, 50, 60],
  str: [20, 53, 80],
  dex: [20, 53, 80],
  int: [20, 50, 80],
  fai: [20, 50, 80],
  arc: [20, 45],
};

const WEIGHTS: Record<Archetype, Record<TStatKey, number>> = {
  default: { vgr: 3, mnd: 1, end: 3, str: 3, dex: 2, int: 0, fai: 0, arc: 0 },
  melee: { vgr: 3, mnd: 1, end: 3, str: 3, dex: 2, int: 0, fai: 0, arc: 0 },
  caster: { vgr: 3, mnd: 3, end: 1, str: 0, dex: 0, int: 3, fai: 3, arc: 0 },
  hybrid: { vgr: 3, mnd: 2, end: 2, str: 2, dex: 2, int: 2, fai: 2, arc: 1 },
  bleed: { vgr: 3, mnd: 1, end: 2, str: 1, dex: 3, int: 0, fai: 0, arc: 3 },
};

const CAP = 99;          // absolute hard‑cap set by the game
const MIN_LIMIT = 20;    // "lower than this doesn't make sense"

/*──────────────── 3 · Pure helpers ────────────────*/
const clampLimit = (limit?: number) =>
  Math.min(CAP, Math.max(MIN_LIMIT, limit ?? CAP));

const effectiveSTR = (str: number, twoHand: boolean) =>
  twoHand ? Math.floor(str * 1.5) : str;

const ceilDiv = (value: number, divisor: number) =>
  Math.ceil(value / divisor);

const secondSoftCap = (stat: TStatKey) => {
  const caps = BREAKPOINTS[stat];
  return stat === "arc" ? 45 : caps?.[1] ?? caps?.[0];
};

/** First breakpoint ABOVE current (already adjusted for STR rule) */
function nextBreakpoint(
  stat: TStatKey,
  current: number,
): number | undefined {
  return BREAKPOINTS[stat].find((bp) => bp > current);
}

/** Highest target ≤ statLimit that fulfils this requirement */
function requirementTarget(
  stat: TStatKey,
  req: number,
  { str, twoHand, limit }: { str: number; twoHand: boolean; limit: number },
): number | undefined {
  if (stat !== "str") return Math.min(req, limit);
  // STR: maybe satisfied by 2‑handing
  const effective = effectiveSTR(str, twoHand);
  if (effective >= req) return; // already good
  const needed = twoHand ? ceilDiv(req, 1.5) : req;
  return Math.min(needed, limit);
}

/** Heuristic "value score" for levelling *this* stat by reaching its next breakpoint */
function computeScore(
  stat: TStatKey,
  current: number,
  weights: Record<TStatKey, number>,
  twoHand: boolean,
): { score: number; target?: number } {
  const currEff = stat === "str" ? effectiveSTR(current, twoHand) : current;
  const breakpoint = nextBreakpoint(stat, currEff);
  if (!breakpoint) return { score: 0 };

  const delta = breakpoint - currEff;
  let score = weights[stat] / delta;

  // bonus: prioritise getting VGR to 40
  if (stat === "vgr" && current < 40) score += 0.5;

  const target =
    stat === "str"
      ? // smallest real STR that produces effective ≥ breakpoint
      ceilDiv(breakpoint, twoHand ? 1.5 : 1)
      : breakpoint;

  return { score, target };
}

/*──────────────── 4 · Mutating helpers ────────────────*/
/** Push/merge suggestion & update working stats */
function addSuggestion(
  list: Recommendation[],
  work: StatsRecord,
  stat: TStatKey,
  target: number,
): void {
  if (target <= work[stat]) return;              // already at/above
  const existing = list.find((x) => x.stat === stat);
  if (existing) existing.target = Math.max(existing.target, target);
  else list.push({ stat, target });
  work[stat] = target;                           // virtual levelling
}

/*──────────────── 5 · Main exported API ────────────────*/
export function getNextLevels({
  stats,
  archetype = "default",
  dmgStats,
  twoHanding,
  requirements,
  steps = -1,
  statLimit = 99,
}: {
  stats: StatsRecord;
  archetype?: Archetype;
  dmgStats?: DmgStats;
  twoHanding: boolean;
  requirements?: Requirements;
  steps?: number; // ≤0 ⇒ unlimited
  statLimit?: number;
}): Recommendation[] {

  console.log('Leveling params:', JSON.stringify({
    stats,
    archetype,
    dmgStats,
    twoHanding,
    requirements,
    steps,
    statLimit
  }, null, 4));


  /* 5‑1 · init */
  const limit = clampLimit(statLimit);
  const work: StatsRecord = { ...stats };
  const picks: Recommendation[] = [];

  /* 5‑2 · hard requirements first */
  if (requirements) {
    (Object.keys(requirements) as RequirementsKeys[]).forEach((stat) => {
      const req = requirements[stat];
      if (req == null) return;
      const target = requirementTarget(stat, req, {
        str: work.str,
        twoHand: twoHanding,
        limit,
      });
      if (target) addSuggestion(picks, work, stat, target);
    });
  }

  /* 2 ▸ damage‑stat soft caps (after reqs, before heuristics) */
  DMG_KEYS.forEach((stat) => {
    if (!dmgStats?.[stat]) return;                     // not selected
    const cap = secondSoftCap(stat);
    if (cap !== undefined) {
      addSuggestion(picks, work, stat, Math.min(cap, limit));
    }
  });


  /* 5‑3 · heuristic loop */
  const maxSteps = steps && steps > 0 ? steps : Infinity;
  while (picks.length < maxSteps) {
    const scored = (Object.keys(work) as TStatKey[])
      .map((stat) => {
        // dynamic weight tweaks for dmgStats ------------------------
        let w = WEIGHTS[archetype][stat];
        if (DMG_KEYS.includes(stat as keyof Requirements)) {
          if (dmgStats?.[stat as keyof Requirements]) w += 3;   // chosen dmg stat ⇒ big boost
          else w /= 4;   // not chosen ⇒ de‑emphasise
        }

        const { score, target } = computeScore(
          stat,
          work[stat],
          { ...WEIGHTS[archetype], [stat]: w },
          twoHanding,
        );
        return { stat, score, target };
      })
      .sort((a, b) => b.score - a.score);

    const best = scored[0];
    if (!best || best.score <= 0 || !best.target) break;

    addSuggestion(picks, work, best.stat, Math.min(best.target, limit));

    // quit early if every stat hit the limit
    const done = (Object.keys(work) as TStatKey[]).every(
      (key) => work[key] >= limit,
    );
    if (done) break;
  }

  return picks;
}

/*──────────────── 6 · Example usage ────────────────
const current: StatsRecord = {
  vgr: 32, mnd: 30, end: 20, str: 25, dex: 18, int: 12, fai: 8, arc: 9,
};
const reqs: Requirements = { str: 30, dex: 20 };
console.log(
  getNextLevels({
    stats: current,
    archetype: "melee",
    twoHanding: true,
    requirements: reqs,
    steps: 8,
    statLimit: 99,
  }),
);
────────────────────────────────────────────────────*/
