import { statLabelMap, type TStatKey } from "~/features/stats/stats";
import { FaArrowRightLong } from "react-icons/fa6";

export const LevelingItem = ({
  statKey,
  levels,
}: {
  statKey: TStatKey;
  levels: number;
}) => {
  const text = levels > 1 ? `${levels} points` : "1 point";

  return (
    <div className="flex items-center gap-2">
      <span>{statLabelMap[statKey]}</span>
      <FaArrowRightLong />
      <span>{text}</span>
    </div>
  );
};
