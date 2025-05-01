import React, { useCallback } from "react";
import { stats, type TStatKey } from "./stats";
import { StatInput } from "./StatInput";
import { useManageStats } from "./useManageStats"; // Import the hook
import { useIsClient } from "usehooks-ts";
import { Heading } from "~/components/Heading";

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
      <Heading.H2 className="!text-base !font-medium">
        Character Stats
      </Heading.H2>
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
    </div>
  );
};
