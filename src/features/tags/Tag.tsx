import { cn } from "~/utils/cn";
import type { TTagKeys } from "./types";
import { tags } from "./tags";

export function Tag({ tag }: { tag: string }) {
  if (!(tag in tags)) {
    return null;
  }

  const { tagClasses, label } = tags[tag as TTagKeys];

  return (
    <span
      className={cn(
        "whitespace-nowrap rounded px-1 py-0.5 text-sm font-bold",
        tagClasses
      )}
    >
      {label}
    </span>
  );
}
