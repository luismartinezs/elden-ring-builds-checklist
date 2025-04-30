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
    <div className="w-full mb-2"> {/* Increased bottom margin */}
      {/* Container adjusts flex direction based on screen size */}
      <div className="flex flex-col sm:flex-row sm:items-center w-full mb-7 md:mb-5">
        {/* Label: Default styles for mobile, overridden for sm+ */}
        <span className="w-auto mb-1 text-left sm:w-24 sm:mr-2 sm:text-right sm:mb-0">
          {statLabelMap[statKey]} <span className="md:hidden">({softCaps.join(' / ')})</span>
        </span>
        <div
          className={cn(
            // Apply flex-1 only on sm screens and up for row layout
            "relative h-[15px] rounded-[2px] w-full sm:flex-1",
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
                className="absolute left-1/2 top-full -translate-x-1/2 mt-1 text-gray-100 font-medium text-xs md:text-base"
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
