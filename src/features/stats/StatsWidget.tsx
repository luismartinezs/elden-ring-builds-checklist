import React, { useCallback } from "react";
import { stats, type TStatKey } from "./stats";
import { StatInput } from "./StatInput";
import { useManageStats } from "./useManageStats"; // Import the hook

export const StatsWidget: React.FC = () => {
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

  return (
    <div>
      <h2>Character Stats</h2>
      <div className="flex flex-wrap gap-4">
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
      {/* Optionally display the current state for debugging */}
      <pre>{JSON.stringify(currentStats, null, 2)}</pre>
    </div>
  );
};
