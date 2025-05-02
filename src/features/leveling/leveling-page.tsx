import { Divider } from "~/components/Divider";
import { LevelingList } from "./leveling-list";
import { StatsWidget } from "../stats/StatsWidget";
import { LvlControls } from "./lvl-controls";

export const LevelingPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <StatsWidget />
      <LvlControls />
      <Divider />
      <LevelingList />
    </div>
  );
};
