import { LevelingItem } from "./leveling-item";

const mock = [
  {
    statKey: "vgr",
    levels: 3,
  },
  {
    statKey: "mnd",
    levels: 3,
  },
  {
    statKey: "dex",
    levels: 1,
  },
] as const;

export const LevelingList = () => {
  return (
    <div className="w-full max-w-lg">
      <h3 className="mb-4 text-sm font-medium  tracking-wider">
        Leveling suggestions
      </h3>
      <ul>
        {mock.map((item) => (
          <li key={item.statKey}>
            <LevelingItem key={item.statKey} {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
