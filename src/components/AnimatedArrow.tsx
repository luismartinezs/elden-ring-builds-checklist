import { BiChevronRight } from "react-icons/bi";
import { cn } from "~/utils/cn";

const transitionClasses =
  "transition-transform duration-150 ease-[cubic-bezier(0.215,0.61,0.355,1)]";

export function AnimatedArrow() {
  return (
    <div className="relative h-[22px] w-[22px]">
      <BiChevronRight
        size={22}
        className={cn(
          "absolute group-hover:translate-x-[3px]",
          transitionClasses
        )}
      />
      <div
        className={cn(
          "absolute right-[5px] top-[10px] h-[2px] w-[10px] scale-x-0 rounded-full bg-current  group-hover:scale-x-100",
          transitionClasses
        )}
      ></div>
    </div>
  );
}
