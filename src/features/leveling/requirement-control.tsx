import { useIsClient } from "usehooks-ts";
import { StatRequirements } from "../checklist/types";
import { StatInput } from "../stats/StatInput";
import { TStatKey } from "../stats/stats";
import { useManageStatRequirements } from "./use-manage-stat-requirements";

const ReqKeys = [
  "str-req",
  "dex-req",
  "int-req",
  "fai-req",
  "arc-req",
] as const;

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

  const statRequirements = getCurrentStatRequirements();

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
