import { useRef, useState } from "react";

import { useIsClient, useOnClickOutside } from "usehooks-ts";
import classnames from "classnames";
import { LuSettings2 } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";

import { useFilter } from "~/hooks/useFilter";
import { useCheckItem } from "~/features/checklist/hooks/useCheckItem";
import { Button } from "~/components/Button";
import { FilterButton } from "~/components/FilterButton";

function Settings() {
  const isClient = useIsClient();
  const { items, setItems } = useCheckItem();
  const { filter: filterOptional, setFilter: setFilterOptional } =
    useFilter("optional");
  const { filter: filterCompleted, setFilter: setFilterCompleted } =
    useFilter("completed");
  const {
    filter: filterVolcanoManorAssassination,
    setFilter: setFilterVolcanoManorAssassination,
  } = useFilter("volcano-manor-assassination");
  const { filter: filterRanniQuestline, setFilter: setFilterRanniQuestline } =
    useFilter("ranni-questline");

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="flex items-center gap-2">
        <div className="my-4 flex flex-wrap items-center gap-2">
          <Button
            onClick={() => setItems([])}
            variant="outline"
            disabled={items.length === 0}
          >
            Uncheck all
          </Button>
          {isClient && (
            <>
              <Button
                variant="outline"
                onClick={() => setFilterCompleted(!filterCompleted)}
              >
                {filterCompleted ? "Show" : "Hide"} completed
              </Button>
              <FilterButton filterTag="optional" label="Optional" />
              <FilterButton
                filterTag="ranni-questline"
                label="Ranni Questline"
                className="border-sky-200 text-sky-200 hover:bg-sky-200 hover:text-black focus:ring-sky-200"
              />
              <FilterButton
                filterTag="volcano-manor-assassination"
                label="Volcano
                Manor Assassination"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-black focus:ring-red-500"
              />
            </>
          )}
        </div>
      </div>
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
              <span>Global Checklist Settings</span>
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
