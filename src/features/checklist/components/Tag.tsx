import classnames from "classnames";

type TagKeys =
  | "OPTIONAL"
  | "volcano-manor-assassination"
  | "ranni-questline"
  | "varre-questline"
  | "nepheli-questline";

const tagMap: Record<TagKeys, { classes: string; label: string }> = {
  OPTIONAL: {
    classes: "border border-amber-500 text-amber-500",
    label: "Optional",
  },
  "volcano-manor-assassination": {
    classes: "bg-red-400 text-black",
    label: "Volcano Manor",
  },
  "ranni-questline": {
    classes: "bg-sky-200 text-black",
    label: "Ranni",
  },
  "varre-questline": {
    classes: "bg-red-700 text-black",
    label: "Varré",
  },
  "nepheli-questline": {
    classes: "bg-orange-300 text-black",
    label: "Nepheli",
  },
};

export function Tag({ tag }: { tag: string }) {
  if (!(tag in tagMap)) {
    return null;
  }

  const { classes, label } = tagMap[tag as TagKeys];

  return (
    <span
      className={classnames("rounded px-1 py-0.5 text-sm font-bold ", classes)}
    >
      {label}
    </span>
  );
}
