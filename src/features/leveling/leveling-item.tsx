import { statLabelMap, type TStatKey } from "~/features/stats/stats";

export const LevelingItem = ({
  stat,
  target,
}: {
  stat: TStatKey;
  target: number;
}) => {
  return (
    <div className="flex flex-col">
      <div>
        <span>
          Raise <span className="font-bold">{statLabelMap[stat]}</span>
        </span>{" "}
        to <span className="target font-bold text-primary-400">{target}</span>
      </div>
    </div>
  );
};
