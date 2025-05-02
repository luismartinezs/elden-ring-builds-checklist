import { useIsClient } from "usehooks-ts";
import { type StatRequirements } from "../checklist/types";
import { StatInput } from "../stats/StatInput";
import { useManageStatRequirements } from "./use-manage-stat-requirements";

const noop = () => undefined;

export const RequirementControl = ({
  statKey,
  label,
}: {
  statKey: keyof StatRequirements;
  label: string;
}) => {
  const { getCurrentStatRequirements, updateStatRequirement } =
    useManageStatRequirements();
  const isClient = useIsClient();

  const statRequirements = getCurrentStatRequirements() as StatRequirements;

  const handleChange = (value: number) => {
    updateStatRequirement(statKey, value);
  };

  if (!isClient) {
    return (
      <StatInput
        statKey={statKey}
        label={label}
        initialValue={0}
        onChange={noop}
        minValue={0}
      />
    );
  }

  return (
    <StatInput
      statKey={statKey}
      label={label}
      initialValue={statRequirements[statKey] ?? 0}
      onChange={handleChange}
      minValue={0}
    />
  );
};
