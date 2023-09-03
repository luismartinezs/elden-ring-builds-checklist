import { useRef, useState } from "react";

import { useIsClient, useOnClickOutside } from "usehooks-ts";
import classnames from "classnames";
import { LuSettings2 } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { GoAlertFill } from "react-icons/go";

import { useFilter } from "~/hooks/useFilter";
import { useCheckItem } from "~/features/checklist/hooks/useCheckItem";
import { Button } from "~/components/Button";
import { FilterButton } from "~/components/FilterButton";

function Settings() {
  const isClient = useIsClient();
  const { items, setItems } = useCheckItem();
  const { filter: filterCompleted, setFilter: setFilterCompleted } =
    useFilter("completed");

  return (
    <div className="flex h-full flex-col items-center justify-start px-6">
      <p className="w-full text-left text-stone-300">
        Filters apply to all checklists
      </p>
      <div className="flex items-center gap-2">
        <div className="my-4 flex flex-wrap items-center  gap-2">
          {isClient && (
            <>
              <FilterButton filterTag="completed" label="Completed" />
              <FilterButton filterTag="optional" label="Optional" />
              <FilterButton
                filterTag="ranni-questline"
                label="Ranni"
                className="border-sky-200 text-sky-200 hover:bg-sky-200 hover:text-black focus:ring-sky-200"
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
            </>
          )}
        </div>
      </div>
      {isClient && (
        <div className="mb-4 mt-auto self-start">
          <p className="text-sm">
            Caution: If you &ldquo;uncheck everything&ldquo;, everything that
            you have checked will be reset.
          </p>
          <Button
            onClick={() => setItems([])}
            variant="outline"
            disabled={items.length === 0}
            className="my-4 flex items-center gap-2 whitespace-nowrap"
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
        "fixed inset-4 top-[80px] z-10 grid grid-cols-1 text-white transition-opacity duration-500 ease-out md:grid-cols-2",
        open ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <div className="col-span-1 hidden md:block"></div>
      <div
        ref={ref}
        className={classnames(
          "col-span-1 max-w-3xl rounded-xl border border-stone-500 bg-stone-900 text-white shadow-xl transition-opacity duration-300 ease-out"
        )}
      >
        <div className="flex h-full flex-col items-center">
          <div className="flex w-full items-start justify-between px-6 pt-4">
            <div className="flex items-center gap-2">
              <h2>Global Checklist Settings</h2>
            </div>
            <button
              onClick={toggle}
              className="max-h-[50px] self-end rounded-xl p-2 text-white hover:bg-stone-800"
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
