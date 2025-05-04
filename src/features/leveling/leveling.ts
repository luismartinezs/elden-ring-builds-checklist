/* ──────────────────────────────────────────────────────────────
   Elden Ring ‑ Stat Planner  ✧  Refactored & Self‑Documenting
   ──────────────────────────────────────────────────────────────
   • priorities:  requirements → heuristic breakpoints
   • duplicates automatically collapsed (keep highest target)
   • equip‑load logic removed            • statLimit respected
   • each helper does ONE thing
   • all names use camelCase keys: vgr/mnd/end/str/dex/int/fai/arc
----------------------------------------------------------------*/

import { getPreferredOrder } from "~/utils/array-utils";
import { type TStatKey } from "../stats/stats";

/**
 *
 * heuristics
 * - VGR
 *   - melee: 50/58
 *   - caster: 40
 * - MND
 *   - magic user: 40+/50
 *   - max FP flask: 38
 * - END
 *   - caster: 25
 *   - not caster: 30+, up to 50
 * - dmg stats: weapon requirement
 * - STR
 *   - 1h: 20 asap -> survival/utility -> 35 -> (80)
 *   - 2h: 20 asap -> survival/utility -> 53 -> 80
 * - DEX
 *   - 20 asap -> survival/utility -> 53 -> (80)
 * - INT
 *   - 20 asap -> survival/utility -> 50 -> 80
 * - Fai
 *   - 20 asap -> survival/utility -> 50 -> 80
 * - ARC
 *   - 20 asap -> survival/utility -> 45 -> (80)
 */

const balanced = 'balanced'
const ranged = 'ranged'
const melee = 'melee'
const glassCannon = 'glass_cannon'
const tank = 'tank'

export const archetypes = [
  balanced,
  ranged,
  melee,
  glassCannon,
  tank,
] as const;


/*──────────────── 1 · Public types ────────────────*/
export interface Requirements {
  str?: number;
  dex?: number;
  int?: number;
  fai?: number;
  arc?: number;
}

// 38 MND
export type TMaxFpFlask = boolean;

export type DmgStats = Record<keyof Requirements, boolean>;

export type UtilStats = 'vgr' | 'mnd' | 'end';
export type UtilStatsRecord = Record<UtilStats, number>;

export type RequirementsKeys = keyof Requirements;

export interface StatsRecord extends Required<Requirements>, UtilStatsRecord {
}

export type Archetype = (typeof archetypes)[number];

export interface Recommendation {
  stat: TStatKey;
  target: number; // final value AFTER levelling
}

/*──────────────── 2 · Static reference data ────────────────*/
const utilStatPriority: Record<string, UtilStats[]> = {
  default: ['vgr', 'end', 'mnd'],
  [balanced]: ['vgr', 'end', 'mnd'],
  [ranged]: ['end', 'vgr', 'mnd'],
  [melee]: ['vgr', 'end', 'mnd'],
  [glassCannon]: ['mnd', 'end', 'vgr'],
  [tank]: ['vgr', 'end', 'mnd'],
}

export const DMG_KEYS: (keyof DmgStats)[] = ["str", "dex", "int", "fai", "arc"];

const PREFER_DMG_STAT_ORDER = ['fai', 'arc', 'dex', 'str', 'int'] as const

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

const CAP = 99;          // absolute hard‑cap set by the game
const MIN_LIMIT = 20;    // "lower than this doesn't make sense"

/*──────────────── 3 · Pure helpers ────────────────*/
const clampLimit = (limit?: number) =>
  Math.min(CAP, Math.max(MIN_LIMIT, limit ?? CAP));

const effectiveSTR = (str: number, twoHand: boolean) =>
  twoHand ? Math.floor(str * 1.5) : str;

const ceilDiv = (value: number, divisor: number) =>
  Math.ceil(value / divisor);

/** First breakpoint ABOVE current (already adjusted for STR rule) */
function nextBreakpoint(
  stat: TStatKey,
  current: number,
): number | undefined {
  return BREAKPOINTS[stat].find((bp) => bp > current);
}

/*──────────────── 4 · Mutating helpers ────────────────*/
/** Push/merge suggestion & update working stats */
export function addSuggestion(
  list: Recommendation[],
  work: StatsRecord,
  stat: TStatKey,
  target: number,
): void {
  if (target <= work[stat]) return; // already at/above
  const last = list[list.length - 1];
  if (last && last.stat === stat) {
    last.target = Math.max(last.target, target);
  } else {
    list.push({ stat, target });
  }
  work[stat] = target; // virtual levelling
}

/*──────────────── 5 · Main exported API ────────────────*/
type TNextLevelsParams = {
  stats: StatsRecord;
  archetype?: Archetype;
  dmgStats?: DmgStats;
  twoHanding: boolean;
  requirements?: Requirements;
  maxFpFlask?: boolean;
  isSpellcaster?: boolean;
  steps?: number;
  statLimit?: number;
  show99?: boolean;
}
export function getNextLevels(params: TNextLevelsParams): Recommendation[] {
  const {
    stats,
    archetype = balanced,   // kept only for typing—ignore if unused
    dmgStats,
    twoHanding,
    requirements,
    maxFpFlask,
    isSpellcaster,
    steps = -1,
    statLimit = 99,
    show99 = false,
  } = params;
  /* ----------------------------------------------------------------
     This is an EMPTY implementation. Insert your step‑by‑step logic
     between the markers below.  Keep using the helper functions
     (requirementTarget, addSuggestion, etc.) that already exist.
     ---------------------------------------------------------------- */

  // 0 · Boilerplate set‑up: clamp limit, clone stats, init list
  const limit = clampLimit(statLimit);
  const work: StatsRecord = { ...stats };
  const picks: Recommendation[] = [];

  const push = (stat: TStatKey, target?: number) => {
    if (target !== undefined) addSuggestion(picks, work, stat, Math.min(target, limit));
  };


  /* =======  YOUR LOGIC STARTS  HERE  ======= */

  const dmStatsinUseArr: TStatKey[] = []
  const dmgStatsNotinUseArr: TStatKey[] = []
  Object.entries(dmgStats ?? {}).forEach(([key, req]) => {
    if (req) dmStatsinUseArr.push(key as TStatKey);
    else dmgStatsNotinUseArr.push(key as TStatKey);
  });

  // #1: Match Weapon & Spell Requirements
  const effectiveStats = {
    ...stats,
    str: effectiveSTR(stats.str, twoHanding),
  };
  Object.entries(requirements ?? {}).forEach(([key, req]) => {
    // Only proceed if key is a valid stat key and req is a number
    if (typeof req === 'number' && req > 0 && (key === 'str' || key === 'dex' || key === 'int' || key === 'fai' || key === 'arc')) {
      let _req = req;
      const statKey = key as TStatKey;
      if (typeof effectiveStats[statKey] === 'number' && effectiveStats[statKey] < _req) {
        if (statKey === "str" && twoHanding) {
          _req = ceilDiv(_req, 1.5);
        }
        push(statKey, _req);
      }
    }
  });

  // #2: Prime selected damage stats to 20
  Object.entries(dmgStats ?? {}).forEach(([key, req]) => {
    if (req) {
      push(key as TStatKey, 20);
    }
  });
  // #3: Baseline Survivability & FP
  // VGR to 40 always
  push("vgr", nextBreakpoint('vgr', work.vgr));
  // if magic archetype (spellcaster)
  if (isSpellcaster) {
    // spellcaster
    push("mnd", nextBreakpoint('mnd', work.mnd));
    push("end", nextBreakpoint('end', work.end));
    push('dex', 20) // casting speed
  } else {
    // not spellcaster
    push("end", 30) // additional stamina
  }
  if (archetype === melee) {
    // melee VGR 58
    push("vgr", nextBreakpoint('vgr', work.vgr));
  } else {
    // ranged, just move on to dmg stats
  }
  // #4. Archetype-Specific Early Buffs
  // #5. Push damage soft caps to second soft cap
  // #6. Mid-Game Durability & FP Soft-Caps
  // #7. Optional Secondary Stat Soft-Cap
  // #8. Primary (and Secondary) Stat Final Soft-Cap
  // #9. Late-Game Utility Optimization
  Object.entries(dmgStats ?? {}).forEach(([key, req]) => {
    if (req) {
      const statKey = key as TStatKey;
      const next = nextBreakpoint(statKey, work[statKey]);
      if (next !== undefined) {
        push(statKey, next);
      }
    }
  });
  if (maxFpFlask) {
    push("mnd", 38);
  }
  // Respect: `limit`, `steps`, `twoHanding`

  // push all stats to all soft caps
  Object.entries(dmgStats ?? {}).forEach(([key, req]) => {
    if (req) {
      const statKey = key as TStatKey;
      let next = nextBreakpoint(statKey, work[statKey]);
      while (next !== undefined && next <= 99) {
        push(statKey, next);
        next = nextBreakpoint(statKey, work[statKey]);
      }
    }
  });

  if (show99) {
    // raise all stats to 99
    // we can skip this, I see no reason why show this
    [...(utilStatPriority[archetype] ?? utilStatPriority.default)!, ...dmStatsinUseArr, ...getPreferredOrder(dmgStatsNotinUseArr, PREFER_DMG_STAT_ORDER)].forEach(stat => {
      push(stat as TStatKey, 99);
    });
  }

  /* =======  YOUR LOGIC ENDS  HERE  ======= */


  // truncate if steps > 0
  return steps > 0 ? picks.slice(0, steps) : picks;
}