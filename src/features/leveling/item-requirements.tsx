import { StatInput } from "../stats/StatInput";
import { type RequirementsKeys } from "./leveling";
import { RequirementControl } from "./requirement-control";

const requirementsKeys: RequirementsKeys[] = [
  "str",
  "dex",
  "int",
  "fai",
  "arc",
];

export const ItemRequirements = () => {
  return (
    <>
      {requirementsKeys.map((key) => (
        <div key={key}>
          <RequirementControl statKey={key} label={key} />
        </div>
      ))}
    </>
  );
};
