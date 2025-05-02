import { CheckboxControl } from "../checkbox-control";

export const gameKeys = ["base-game", "sote"] as const;

export const gameAreaToLabel: Record<(typeof gameKeys)[number], string> = {
  "base-game": "Base game",
  sote: "SOTE",
};

export const GameArea = () => {
  return (
    <>
      {gameKeys.map((key) => (
        <CheckboxControl
          key={key}
          controlKey={key}
          type="filter"
          label={gameAreaToLabel[key]}
        />
      ))}
    </>
  );
};
