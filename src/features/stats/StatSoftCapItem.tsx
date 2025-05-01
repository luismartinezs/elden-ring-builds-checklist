import React from "react";
import type { TStatKey } from "~/features/stats/stats";
import { statLabelMap, statColorMap } from "~/features/stats/stats";
import { cn } from "~/utils/cn";
import { levelCapsData } from "~/data/level-caps-data"; // Import the data
import { FaUser } from "react-icons/fa";
import ClientOnly from "~/components/ClientOnly";

type StatSoftCapItemProps = {
  statKey: TStatKey;
  currentStat?: number;
};

// Removed the local statSoftCaps definition

export const StatSoftCapItem: React.FC<StatSoftCapItemProps> = ({
  statKey,
  currentStat,
}) => {
  // Get soft cap info from imported data
  const { softCaps, items } = levelCapsData[statKey];

  return (
    <div className="mb-2 w-full">
      {/* Container adjusts flex direction based on screen size */}
      <div className="mb-7 flex w-full flex-col sm:flex-row sm:items-center md:mb-6">
        {/* Label: Default styles for mobile, overridden for sm+ */}
        <span className="mb-1 w-auto text-left sm:mb-0 sm:mr-2 sm:w-24 sm:text-right">
          {statLabelMap[statKey]}{" "}
          <span className="md:hidden">({softCaps.join(" / ")})</span>
        </span>
        <div
          className={cn(
            // Apply flex-1 only on sm screens and up for row layout
            "relative h-[15px] w-full rounded-[2px] sm:flex-1",
            statColorMap[statKey]
          )}
        >
          {/* Add vertical marks every 10 units */}
          {[...Array<undefined>(9)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 top-0 w-px bg-black/30"
              style={{ left: `${(i + 1) * 10}%` }}
            />
          ))}
          {/* Add markers for soft caps */}
          {softCaps.map((cap, index) => (
            <div
              key={`cap-${index}`}
              className="absolute -bottom-1 top-0 w-[3px] border border-black bg-white" // Thicker, white mark with border
              style={{ left: `${cap}%` }}
              title={`Soft Cap: ${cap}`} // Add tooltip
            >
              {/* Add numeric value below marker */}
              <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 text-xs font-medium text-gray-100 md:text-base">
                {cap}
              </span>
            </div>
          ))}

          {/* Current stat marker */}
          <ClientOnly>
            {currentStat && (
              <div
                className="absolute -top-1 bottom-0 w-[3px] border border-black bg-primary-500"
                style={{ left: `${currentStat}%` }}
                title={`Current: ${currentStat}`}
              >
                <FaUser
                  className="absolute -top-5 left-1/2 hidden -translate-x-1/2 text-primary-500 sm:block"
                  size={14}
                />
              </div>
            )}
          </ClientOnly>
        </div>
      </div>
      {/* Display soft cap description items only if they exist */}
      {items.length > 0 && (
        <div className="mt-1 flex w-full justify-end text-xs tracking-wide text-gray-300 md:text-sm">
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
