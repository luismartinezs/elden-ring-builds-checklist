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

function FilterButtons() {
  return (
    <>
      <FilterButton filterTag="completed" label="Completed" />
      <FilterButton filterTag="optional" label="Optional" />
      <FilterButton
        filterTag="ranni-questline"
        label="Ranni"
        className="border-sky-200 text-sky-200 hover:bg-sky-200 hover:text-black focus:ring-sky-200"
      />
      <FilterButton
        filterTag="seluvis-questline"
        label="Seluvis"
        className="border-sky-300 text-sky-300 hover:bg-sky-300 hover:text-black focus:ring-sky-300"
      />
      <FilterButton
        filterTag="volcano-manor-assassination"
        label="Volcano
    Manor"
        className="border-red-400 text-red-400 hover:bg-red-400 hover:text-black focus:ring-red-400"
      />
      <FilterButton
        filterTag="varre-questline"
        label="Varré"
        className="border-red-700 text-red-700 hover:bg-red-700 hover:text-black focus:ring-red-700"
      />
      <FilterButton
        filterTag="nepheli-questline"
        label="Nepheli"
        className="border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-black focus:ring-orange-300"
      />
      <FilterButton
        filterTag="alexander-questline"
        label="Alexander"
        className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black focus:ring-orange-400"
      />
      <FilterButton
        filterTag="latenna-questline"
        label="Latenna"
        className="border-cyan-200 text-cyan-200 hover:bg-cyan-200 hover:text-black focus:ring-cyan-200"
      />
      <FilterButton
        filterTag="millicent-questline"
        label="Millicent"
        className="border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-black focus:ring-rose-400"
      />
      <FilterButton
        filterTag="smithing-stone-bell"
        label="Smithing Stone Bell"
        className="border-orange-200 text-orange-200 hover:bg-orange-200 hover:text-black focus:ring-orange-200"
      />
      <FilterButton
        filterTag="somber-stone-bell"
        label="Somber Stone Bell"
        className="border-gray-100 text-gray-100 hover:bg-gray-100 hover:text-black focus:ring-gray-100"
      />
      <FilterButton
        filterTag="glovewort-bell"
        label="Glovewort Bell"
        className="border-zinc-300 text-zinc-300 hover:bg-zinc-300 hover:text-black focus:ring-zinc-300"
      />
      <FilterButton
        filterTag="ghost-glovewort-bell"
        label="Ghost Glovewort Bell"
        className="border-blue-200 text-blue-200 hover:bg-blue-200 hover:text-black focus:ring-blue-200"
      />
      <FilterButton
        filterTag="whetblades"
        label="Whetblades"
        className="border-green-300 text-green-300 hover:bg-green-300 hover:text-black focus:ring-green-300"
      />
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
