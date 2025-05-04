import {
  statLabelMap,
  statColorMap,
  type TStatKey,
} from "~/features/stats/stats";
import { cn } from "~/utils/cn";

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
          <span className="text-stone-300">Raise </span>
          <span className="inline-flex items-center gap-2 px-1 font-medium">
            <span
              className={cn(
                "inline-block size-3 rounded-full",
                statColorMap[stat]
              )}
              aria-hidden="true"
            />
            {statLabelMap[stat]}
          </span>
        </span>{" "}
        <span className="text-stone-300">to</span>{" "}
        <span className="target font-bold text-primary-400">{target}</span>
      </div>
    </div>
  );
};
