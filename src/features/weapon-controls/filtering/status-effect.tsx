import { CheckboxControl } from "~/features/weapon-controls/checkbox-control";
import { statusEffectKeys } from "~/features/stats/statusEffect";
import { toTitleCase } from "~/utils/text";

// we get rid of death blight because no weapon matches it
const validKeys = statusEffectKeys.slice(0, -1);

export const StatusEffect = () => {
  return (
    <div className="flex flex-nowrap gap-2">
      {validKeys.map((type) => (
        <CheckboxControl
          key={type}
          controlKey={type}
          type="filter"
          label={toTitleCase(type)}
        />
      ))}
    </div>
  );
};
