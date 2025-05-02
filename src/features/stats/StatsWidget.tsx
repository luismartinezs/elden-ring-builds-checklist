import React, { useCallback } from "react";
import { stats, type TStatKey } from "./stats";
import { StatInput } from "./StatInput";
import { useManageStats } from "./useManageStats"; // Import the hook
import { useIsClient } from "usehooks-ts";
import { Heading } from "~/components/Heading";
import { FaRegUser } from "react-icons/fa";

export const StatsWidget: React.FC = () => {
  const isClient = useIsClient();
  // Instantiate the hook
  const { getCurrentStats, updateStat } = useManageStats();
  const currentStats = getCurrentStats(); // Get stats from the hook

  const handleStatChange = useCallback(
    (statKey: TStatKey, newValue: number) => {
      console.log(`Stat changed: ${statKey} = ${newValue}`);
      updateStat(statKey, newValue); // Use updateStat from the hook
    },
    [updateStat] // Add updateStat to dependency array
  );

  // No-op function for server-side rendering
  const noop = () => undefined;

  if (!isClient) {
    return (
      <div>
        <h2>Character Stats</h2>
        <div className="flex flex-wrap gap-4">
          {stats.map((stat) => (
            <div key={stat.key}>
              <StatInput
                statKey={stat.key}
                label={stat.key}
                initialValue={10} // Default value for server-side rendering
                onChange={noop} // Named no-op function
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="flex items-center gap-2 text-stone-400">
        <FaRegUser size={20} className="text-stone-400" />
        Character Stats
      </h2>
      <div className="flex flex-wrap items-stretch gap-x-2 gap-y-4 rounded-md border border-stone-500 p-2">
        {stats.map((stat) => (
          <div key={stat.key}>
            <StatInput
              statKey={stat.key}
              label={stat.key}
              initialValue={currentStats[stat.key]}
              onChange={(newValue) => handleStatChange(stat.key, newValue)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
