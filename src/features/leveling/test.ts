import { getNextLevels, type Requirements, type StatsRecord } from "./leveling";

const stats: StatsRecord = {
  vgr: 10,
  mnd: 10,
  end: 10,
  str: 10,
  dex: 10,
  int: 10,
  fai: 10,
  arc: 10,
};

const requirements: Requirements = {
  str: 31,
  dex: 12
}

console.log(
  getNextLevels({ stats, archetype: "melee", twoHanding: true, requirements, steps: 10 })
);
