import { describe, it, expect } from 'vitest';
import { getNextLevels } from './leveling';      // ← adjust path if needed
import type { StatsRecord, Requirements, DmgStats } from './leveling';

const all10: StatsRecord = {
  vgr: 10,
  mnd: 10,
  end: 10,
  str: 10,
  dex: 10,
  int: 10,
  fai: 10,
  arc: 10,
};

/*───────────────────────────────────────────────────────────────
  1 · Melee, 2‑hand, STR dmg‑stat, weapon requirements
────────────────────────────────────────────────────────────────*/
describe('getNextLevels – melee 2‑hand flow', () => {
  it('meets requirements first and orders suggestions as expected', () => {
    const requirements: Requirements = { str: 32, dex: 16 };
    const dmgStats: DmgStats = { str: true, dex: false, int: false, fai: false, arc: false };

    const result = getNextLevels({
      stats: { ...all10 },
      archetype: 'melee',
      dmgStats,
      twoHanding: true,
      requirements,
      /* steps omitted → unlimited */
    });

    const asPairs = result.map((r) => `${r.stat}:${r.target}`);

    // Expect first 5 recommendations in this exact order
    expect(asPairs.slice(0, 5)).toEqual([
      'str:22',  // 2‑hand STR req
      'dex:16',  // DEX req
      'vgr:40',
      'end:25',
      'str:53',  // STR soft‑cap (damage stat)
    ]);

    // No duplicate STR entries except the collapsed pair (22 & 53)
    expect(result.filter((r) => r.stat === 'str')).toHaveLength(2);
  });
});

/*───────────────────────────────────────────────────────────────
  2 · Caster archetype with INT damage stat
────────────────────────────────────────────────────────────────*/
describe('getNextLevels – caster INT priorities', () => {
  it('pushes VGR → MND → INT soft caps in that order', () => {
    const dmgStats: DmgStats = { int: true, str: false, dex: false, fai: false, arc: false };

    const res = getNextLevels({
      stats: { ...all10 },
      archetype: 'caster',
      dmgStats,
      twoHanding: false,
      steps: 5,
    });

    const expected = [
      { stat: 'vgr', target: 40 },
      { stat: 'mnd', target: 40 },
      { stat: 'int', target: 50 }, // INT dmg soft‑cap
    ];

    // Only check first three; remaining two are heuristic
    expect(res.slice(0, 3)).toEqual(expected);
  });
});

/*───────────────────────────────────────────────────────────────
  3 · statLimit enforcement
────────────────────────────────────────────────────────────────*/
describe('getNextLevels – statLimit clamp', () => {
  it('never proposes a target above the supplied limit', () => {
    const res = getNextLevels({
      stats: { ...all10 },
      archetype: 'melee',
      twoHanding: false,
      statLimit: 50,   // hard clamp
    });

    res.forEach((rec) => {
      expect(rec.target).toBeLessThanOrEqual(50);
    });
  });
});
