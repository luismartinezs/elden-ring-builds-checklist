import { useRef, useState } from "react";

import { useIsClient, useOnClickOutside } from "usehooks-ts";
import classnames from "classnames";
import { LuSettings2 } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { GoAlertFill } from "react-icons/go";

import { useCheckItem } from "~/features/checklist/hooks/useCheckItem";
import { Button } from "~/components/Button";
import { FilterButton } from "~/components/FilterButton";
import { Divider } from "~/components/Divider";
import { ProfileSelect } from "~/features/profile/components/ProfileSelect";
import { TAGS } from "~/features/tags";

function FilterButtons() {
  return (
    <>
      <FilterButton filterTag="completed" label="Completed" />
      <FilterButton filterTag={TAGS.OPTIONAL} />
      <FilterButton filterTag={TAGS.RANNI_QUESTLINE} />
      <FilterButton filterTag={TAGS.SELUVIS_QUESTLINE} />
      <FilterButton filterTag={TAGS.VOLCANO_MANOR_ASSASSINATION} />
      <FilterButton filterTag={TAGS.VARRE_QUESTLINE} />
      <FilterButton filterTag={TAGS.NEPHELI_QUESTLINE} />
      <FilterButton filterTag={TAGS.ALEXANDER_QUESTLINE} />
      <FilterButton filterTag={TAGS.LATENNA_QUESTLINE} />
      <FilterButton filterTag={TAGS.MILLICENT_QUESTLINE} />
      <FilterButton filterTag={TAGS.SMITHING_STONE_BELL} />
      <FilterButton filterTag={TAGS.SOMBER_STONE_BELL} />
      <FilterButton filterTag={TAGS.GLOVEWORT_BELL} />
      <FilterButton filterTag={TAGS.GHOST_GLOVEWORT_BELL} />
      <FilterButton filterTag={TAGS.WHETBLADES} />
    </>
  );
}

function Settings() {
  const isClient = useIsClient();
  const { items, setItems } = useCheckItem();

  return (
    <div className="flex h-full flex-col items-center justify-start px-3 sm:px-6">
      <div className="mb-1 mt-2 self-end">
        <ProfileSelect />
      </div>
      <p className="w-full text-left text-stone-300">
        Filters apply to <em>all</em> checklists of the <em>selected</em>{" "}
        profile
      </p>
      <div className="flex items-center gap-2">
        <div className="my-4 flex flex-wrap items-center gap-2">
          {isClient && <FilterButtons />}
        </div>
      </div>
      <Divider />
      {isClient && (
        <div className="my-4 self-end">
          {/* <p className="text-sm">
            Caution: If you &ldquo;uncheck everything&ldquo;, everything that
            you have checked will be reset.
          </p> */}
          <Button
            onClick={() => setItems([])}
            variant="outline"
            disabled={items.length === 0}
            className="flex items-center gap-2 whitespace-nowrap"
          >
            <GoAlertFill size={18} />
            Uncheck everything
          </Button>
        </div>
      )}
    </div>
  );
}

function Menu({
  open,
  toggle,
  close,
}: {
  open: boolean;
  toggle: () => void;
  close: () => void;
}) {
  const ref = useRef(null);
  useOnClickOutside(ref, close);

  return (
    <div
      className={classnames(
        "fixed inset-1 top-[72px] z-10 grid grid-cols-1 text-white transition-opacity duration-500 ease-out sm:inset-4 sm:top-[80px] md:grid-cols-2",
        open ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <div className="col-span-1 hidden md:block"></div>
      <div
        ref={ref}
        className={classnames(
          "col-span-1 max-w-3xl overflow-y-auto rounded-xl border border-stone-500 bg-stone-900 text-white shadow-xl transition-opacity duration-300 ease-out"
        )}
      >
        <div className="flex h-full flex-col items-center">
          <div className="flex w-full items-center justify-between px-3 pt-3 sm:items-start sm:px-6 sm:pt-4">
            <div className="flex items-center gap-2">
              <h2>Filters and Settings</h2>
            </div>
            <button
              onClick={toggle}
              className="max-h-[50px] self-end rounded-xl p-1 text-white hover:bg-stone-800 sm:p-2"
            >
              <AiOutlineClose color="#ffffff" size={30} />
            </button>
          </div>
          <Settings />
        </div>
      </div>
    </div>
  );
}

export function SettingsMenu() {
  const [open, setOpen] = useState(false);
  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <>
      <button
        onClick={() => toggleMenu()}
        className="max-h-[50px] self-end rounded-xl p-2 text-white hover:bg-stone-700"
      >
        <LuSettings2 size={30} />
      </button>
      <Menu open={open} toggle={toggleMenu} close={() => setOpen(false)} />
    </>
  );
}
