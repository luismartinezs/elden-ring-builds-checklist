import { Heading } from "~/components/Heading";
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
    <div className="">
      <Heading.H3 className="!text-base !font-medium">
        Next level suggestions
      </Heading.H3>
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
