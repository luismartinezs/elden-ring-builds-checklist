import { Checkbox } from "../checklist/components/Checkbox";
import { type DmgStats, DMG_KEYS as dmgStats } from "./leveling";
import { useOptions } from "./use-options";
import { type Options } from "../checklist/types";

const getDmgStatKey = (stat: keyof DmgStats) => `dmg${stat}` as const;

export const getDmgStats = (options: Options): DmgStats => {
  return dmgStats.reduce((acc, stat) => {
    acc[stat] = !!options[getDmgStatKey(stat)];
    return acc;
  }, {} as DmgStats);
};

export const SelectDmgStats = () => {
  const { getOptions, mutateOption } = useOptions();

  return (
    <div>
      <div className="mb-1 text-sm text-stone-400">
        Damage stats (usually one or two)
      </div>
      <div className="flex flex-nowrap items-center gap-2">
        {dmgStats.map((stat) => {
          const id = `dmg-stat-${stat}`;
          const key = getDmgStatKey(stat);
          const isChecked = getOptions(key);
          const onChange = () => mutateOption(key, !isChecked);
          return (
            <div key={stat} className="flex items-start gap-1">
              <label
                className="cursor-pointer whitespace-nowrap uppercase"
                htmlFor={id}
              >
                {stat}
              </label>
              <Checkbox
                id={id}
                itemId={stat}
                label={stat}
                isChecked={!!isChecked}
                onChange={onChange}
                className="mt-0 cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
