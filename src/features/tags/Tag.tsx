import classnames from "classnames";
import type { TTagKeys } from "./types";
import { tags } from "./tags";

export function Tag({ tag }: { tag: TTagKeys }) {
  if (!(tag in tags)) {
    return null;
  }

  const { tagClasses, label } = tags[tag];

  return (
    <span
      className={classnames(
        "rounded px-1 py-0.5 text-sm font-bold ",
        tagClasses
      )}
    >
      {label}
    </span>
  );
}
