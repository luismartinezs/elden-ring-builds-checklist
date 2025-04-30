import React from 'react';
import { TStatKey, statLabelMap } from '~/features/stats/stats';
import { cn } from '~/utils/cn';

type StatSoftCapItemProps = {
  statKey: TStatKey;
};

const statColorMap: Record<TStatKey, string> = {
  vgr: "bg-red-500/60",
  mnd: "bg-blue-500/60",
  end: "bg-green-500/60",
  str: "bg-orange-500/60",
  dex: "bg-teal-500/60",
  int: "bg-sky-500/60",
  fai: "bg-yellow-300/60",
  arc: "bg-pink-500/60",
};

export const StatSoftCapItem: React.FC<StatSoftCapItemProps> = ({ statKey }) => {
  return (
    <div className="flex items-center w-full mb-2">
      <span className="w-24 mr-2 text-right">
        {statLabelMap[statKey]}
      </span>
      <div
        className={cn(
          "relative flex-1 h-[15px] rounded-[2px]",
          statColorMap[statKey]
        )}
      >
        {[...Array<undefined>(9)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-black/30"
            style={{ left: `${(i + 1) * 10}%` }}
          />
        ))}
      </div>
    </div>
  );
};
