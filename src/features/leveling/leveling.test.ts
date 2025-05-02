import { describe, it, expect, beforeEach } from 'vitest';
import { addSuggestion, type Recommendation } from './leveling';

const baseStats = {
  vgr: 0,
  mnd: 0,
  end: 0,
  str: 0,
  dex: 0,
  int: 0,
  fai: 0,
  arc: 0,
};



describe('addSuggestion', () => {
  beforeEach(() => {
    baseStats.vgr = 0;
    baseStats.mnd = 0;
    baseStats.end = 0;
    baseStats.str = 0;
    baseStats.dex = 0;
    baseStats.int = 0;
    baseStats.fai = 0;
    baseStats.arc = 0;
  });

  it('should merge suggestions', () => {
    const list: Recommendation[] = [];

    const suggestions = [
      { stat: 'str', target: 21 },
      { stat: 'dex', target: 16 },
      { stat: 'str', target: 20 },
      { stat: 'dex', target: 20 },
    ] as const;

    const expected = [
      { stat: 'str', target: 21 },
      { stat: 'dex', target: 20 },
    ]

    suggestions.forEach(({ stat, target }) => {
      addSuggestion(list, baseStats, stat, target);
    });
    expect(list).toEqual(expected);
  });

  it('should merge suggestions', () => {
    const list: Recommendation[] = [];

    const suggestions = [
      { stat: 'str', target: 21 },
      { stat: 'dex', target: 16 },
      { stat: 'str', target: 20 },
      { stat: 'vgr', target: 40 },
    ] as const;

    const expected = [
      { stat: 'str', target: 21 },
      { stat: 'dex', target: 16 },
      { stat: 'vgr', target: 40 },
    ]

    suggestions.forEach(({ stat, target }) => {
      addSuggestion(list, baseStats, stat, target);
    });
    expect(list).toEqual(expected);
  });

  it('should prioritize order', () => {
    const list: Recommendation[] = [];

    const suggestions = [
      { stat: 'str', target: 21 },
      { stat: 'int', target: 12 },
      { stat: 'dex', target: 16 },
      { stat: 'str', target: 20 },
      { stat: 'int', target: 20 },
    ] as const;

    const expected = [
      { stat: 'str', target: 21 },
      { stat: 'int', target: 12 },
      { stat: 'dex', target: 16 },
      { stat: 'int', target: 20 },
    ]

    suggestions.forEach(({ stat, target }) => {
      addSuggestion(list, baseStats, stat, target);
    });
    expect(list).toEqual(expected);
  })

  it('should clump toghether same stat suggestions', () => {
    const list: Recommendation[] = [];

    const suggestions = [
      { stat: 'str', target: 21 },
      { stat: 'str', target: 25 },
      { stat: 'str', target: 30 },
    ] as const;

    const expected = [
      { stat: 'str', target: 30 },
    ]

    suggestions.forEach(({ stat, target }) => {
      addSuggestion(list, baseStats, stat, target);
    });
    expect(list).toEqual(expected);
  })
});