import { type TStatKey } from "~/features/stats/stats";

export const LevelingItem = ({
  stat,
  target,
}: {
  stat: TStatKey;
  target: number;
}) => {
  return (
    <div className="flex items-center gap-2">
      <span>
        Raise <span className="uppercase">{stat}</span> to {target}
      </span>
    </div>
  );
};
