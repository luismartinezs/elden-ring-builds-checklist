import React from 'react';
import { TStatKey, statLabelMap } from '~/features/stats/stats';
import { cn } from '~/utils/cn';
import { levelCapsData } from '~/data/level-caps-data'; // Import the data

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

// Removed the local statSoftCaps definition

export const StatSoftCapItem: React.FC<StatSoftCapItemProps> = ({ statKey }) => {
  // Get soft cap info from imported data
  const { softCaps, items } = levelCapsData[statKey];

  return (
    <div className="w-full mb-4"> {/* Increased bottom margin */}
      <div className="flex items-center w-full mb-5">
        <span className="w-24 mr-2 text-right">
          {statLabelMap[statKey]}
        </span>
        <div
          className={cn(
            "relative flex-1 h-[15px] rounded-[2px]",
            statColorMap[statKey]
          )}
        >
          {/* Add vertical marks every 10 units */}
          {[...Array<undefined>(9)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-black/30"
              style={{ left: `${(i + 1) * 10}%` }}
            />
          ))}
          {/* Add markers for soft caps */}
          {softCaps.map((cap, index) => (
            <div
              key={`cap-${index}`}
              className="absolute top-0 -bottom-1 w-[3px] bg-white border border-black" // Thicker, white mark with border
              style={{ left: `${cap}%` }}
              title={`Soft Cap: ${cap}`} // Add tooltip
            >
              {/* Add numeric value below marker */}
              <span
                className="absolute left-1/2 top-full -translate-x-1/2 mt-1 text-white font-medium text-sm"
              >
                {cap}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Display soft cap description items only if they exist */}
      {items.length > 0 && (
        <div className="flex justify-end w-full mt-1 text-xs text-gray-300">
          <div className="flex-1 text-right">
            {/* Map over items and display each one */}
            {items.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
