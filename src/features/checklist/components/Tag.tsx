import classnames from "classnames";

type TagKeys = "OPTIONAL" | "volcano-manor-assassination";

const tagMap: Record<TagKeys, { classes: string; label: string }> = {
  OPTIONAL: {
    classes: "bg-amber-500 text-black",
    label: "Optional",
  },
  "volcano-manor-assassination": {
    classes: "bg-red-500 text-black",
    label: "Volcano Manor",
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
