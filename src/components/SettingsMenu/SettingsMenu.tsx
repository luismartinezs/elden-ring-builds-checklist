import { useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { useIsClient, useOnClickOutside } from "usehooks-ts";
import { cn } from "~/utils/cn";
import { LuSettings2 } from "react-icons/lu";
import { AiFillEye, AiFillEyeInvisible, AiOutlineClose } from "react-icons/ai";
import { GoAlertFill } from "react-icons/go";

import { useCheckItem } from "~/features/checklist/hooks/useCheckItem";
import { Button } from "~/components/Button";
import { FilterButton } from "~/components/FilterButton";
import { Divider } from "~/components/Divider";
import { ProfileSelect } from "~/features/profile/components/ProfileSelect";
import { TAGS } from "~/features/tags";
import { useToggleFilters } from "~/hooks/useToggleFilters";

function FilterButtons() {
  const pathname = usePathname();
  const isSote = pathname.includes("shadow-of-the-erdtree");

  return (
    <div>
      <div className="my-3 flex flex-wrap items-center gap-2 md:gap-1">
        <FilterButton filterTag="completed" label="Completed" />
        <FilterButton filterTag={TAGS.OPTIONAL} />
        <FilterButton filterTag={TAGS.ALL_REMEMBERANCES} />
      </div>
      <Divider />
      <div className="my-3 flex flex-wrap items-center gap-2 md:gap-1">
        {isSote ? (
          <>
            <FilterButton filterTag={TAGS.LEDA} />
            <FilterButton filterTag={TAGS.FREYJA} />
            <FilterButton filterTag={TAGS.MOORE} />
            <FilterButton filterTag={TAGS.THIOLLIER} />
            <FilterButton filterTag={TAGS.HORNSENT} />
            <FilterButton filterTag={TAGS.ANSBACH} />
            <FilterButton filterTag={TAGS.QUEELIGN} />
            <FilterButton filterTag={TAGS.IGON} />
            <FilterButton filterTag={TAGS.DANE} />
            <FilterButton filterTag={TAGS.YMIR} />
            <FilterButton filterTag={TAGS.JOLAN} />
            <FilterButton filterTag={TAGS.DRAGON_PRIESTESS} />
            <FilterButton filterTag={TAGS.FORAGER} />
            <FilterButton filterTag={TAGS.MAP_FRAGMENT} />
            <FilterButton filterTag={TAGS.DUNGEON} />
            <FilterButton filterTag={TAGS.LEGENDARY_WEAPONS} />
            <FilterButton filterTag={TAGS.LEGENDARY_ASHES} />
          </>
        ) : (
          <>
            <FilterButton filterTag={TAGS.RANNI_QUESTLINE} />
            <FilterButton filterTag={TAGS.SELUVIS_QUESTLINE} />
            <FilterButton filterTag={TAGS.VOLCANO_MANOR_ASSASSINATION} />
            <FilterButton filterTag={TAGS.VARRE_QUESTLINE} />
            <FilterButton filterTag={TAGS.NEPHELI_QUESTLINE} />
            <FilterButton filterTag={TAGS.ALEXANDER_QUESTLINE} />
            <FilterButton filterTag={TAGS.LATENNA_QUESTLINE} />
            <FilterButton filterTag={TAGS.MILLICENT_QUESTLINE} />
            <FilterButton filterTag={TAGS.HYETTA_QUESTLINE} />
            <FilterButton filterTag={TAGS.SELLEN_QUESTLINE} />
            <FilterButton filterTag={TAGS.PATCHES_QUESTLINE} />
            <FilterButton filterTag={TAGS.YURA_QUESTLINE} />
            <FilterButton filterTag={TAGS.CORHYN_QUESTLINE} />
            <FilterButton filterTag={TAGS.DUNG_EATER_QUESTLINE} />
            <FilterButton filterTag={TAGS.RYA_QUESTLINE} />
            <FilterButton filterTag={TAGS.BOGGART_QUESTLINE} />
          </>
        )}
      </div>
      {!isSote && (
        <>
          <Divider />
          <div className="my-3 flex flex-wrap items-center gap-2 md:gap-1">
            <FilterButton filterTag={TAGS.GOLDEN_SEED} />
            <FilterButton filterTag={TAGS.SACRED_TEAR} />
            <FilterButton filterTag={TAGS.SMITHING_STONE_BELL} />
            <FilterButton filterTag={TAGS.SOMBER_STONE_BELL} />
            <FilterButton filterTag={TAGS.GLOVEWORT_BELL} />
            <FilterButton filterTag={TAGS.GHOST_GLOVEWORT_BELL} />
            <FilterButton filterTag={TAGS.WHETBLADES} />
            <FilterButton filterTag={TAGS.LARVAL_TEAR} />
            <FilterButton filterTag={TAGS.RITUAL_POT} />
            <FilterButton filterTag={TAGS.TUNNELS} />
          </div>
          <Divider />
          <div className="my-3 flex flex-wrap items-center gap-2 md:gap-1">
            <FilterButton filterTag={TAGS.LEGENDARY_WEAPONS_ACH} />
            <FilterButton filterTag={TAGS.LEGENDARY_WEAPONS} />
            <FilterButton filterTag={TAGS.LEGENDARY_ASHES} />
            <FilterButton filterTag={TAGS.LEGENDARY_ASHES_ACH} />
            <FilterButton filterTag={TAGS.LEGENDARY_SPELLS} />
            <FilterButton filterTag={TAGS.LEGENDARY_TALISMANS} />
          </div>
        </>
      )}
    </div>
  );
}

function Settings() {
  const isClient = useIsClient();
  const { items, setItems } = useCheckItem();
  const { toggleFilters, allFiltersChecked } = useToggleFilters();

  return (
    <div className="flex h-full flex-col items-center justify-start px-3 sm:px-6">
      <div className="mb-1 mt-2 self-end">
        <ProfileSelect />
      </div>
      <p className="w-full text-left text-stone-300">
        Filters apply to <em>all</em> checklists of the <em>selected</em>{" "}
        profile. All Rem. = All Remembrances
      </p>
      <div className="flex items-center gap-2">
        <div className="my-4 flex flex-wrap items-center gap-1">
          {isClient && <FilterButtons />}
        </div>
      </div>
      <div className="my-4 flex flex-col items-end gap-3 self-end">
        <Button
          onClick={() => toggleFilters(!allFiltersChecked)}
          variant="outline"
          className="flex items-center gap-2 whitespace-nowrap"
        >
          {allFiltersChecked ? (
            <AiFillEyeInvisible size={20} />
          ) : (
            <AiFillEye size={20} />
          )}
          Toggle all filters
        </Button>
      </div>
      <Divider />
      {isClient && (
        <div className="my-4 flex flex-col items-end gap-3 self-end">
          <p className="text-sm text-stone-300">
            Caution: All items from the current checklist will be reset
          </p>
          <Button
            onClick={() => setItems([])}
            variant="outline"
            disabled={items.length === 0}
            className="mb-3 flex items-center gap-2 whitespace-nowrap"
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

  if (!open) return null;

  return (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-1 top-[72px] z-10 grid grid-cols-1 text-white transition-opacity duration-500 ease-out sm:inset-4 sm:top-[80px] md:grid-cols-2",
        open ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <div className="col-span-1 hidden md:block"></div>
      <div
        ref={ref}
        className={cn(
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
