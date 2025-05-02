import { statLabelMap, type TStatKey } from "~/features/stats/stats";

export const LevelingItem = ({
  statKey,
  levels,
}: {
  statKey: TStatKey;
  levels: number;
}) => {
  const msg =
    levels > 1
      ? `${statLabelMap[statKey]} -> ${levels} points`
      : `${statLabelMap[statKey]} -> 1 point`;

  return <div className="">{msg}</div>;
};
