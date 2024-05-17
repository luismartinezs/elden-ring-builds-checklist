import Link from "next/link";
import { SectionWrapper } from "./SectionWrapper";
import { Heading } from "./Heading";
import { DumbTag } from "~/features/tags";
import { cn } from "~/utils/cn";

const tagMap: Record<
  string,
  {
    label: string;
    className: string;
  }
> = {
  int: {
    label: "INT",
    className: "bg-blue-100 text-blue-800 border border-blue-500",
  },
  dex: {
    label: "DEX",
    className: "bg-green-100 text-green-800 border border-green-500",
  },
  str: {
    label: "STR",
    className: "bg-red-100 text-red-800 border border-red-500",
  },
  fai: {
    label: "FAI",
    className: "bg-yellow-100 text-yellow-800 border border-yellow-500",
  },
  mid: {
    label: "Mid",
    className: "bg-gray-800 text-white border border-gray-500",
  },
  early: {
    label: "Early",
    className: "bg-gray-800 text-white border border-purple-500",
  },
  late: {
    label: "Late",
    className: "bg-gray-800 text-white border border-indigo-500",
  },
  ngplus: {
    label: "NG+",
    className: "bg-gray-800 text-white border border-pink-500",
  },
  new: {
    label: "New",
    className:
      "bg-gradient-to-r from-amber-300 to-yellow-300 text-amber-900 border border-amber-700 outline outline-offset-2 outline-2 outline-yellow-300",
  },
  default: {
    label: "tag",
    className: "bg-gray-200 text-gray-800 border border-gray-400",
  },
} as const;

function getTag(tag: string): {
  label: string;
  className: string;
} {
  if (!tag || !tagMap[tag])
    return tagMap.default as {
      label: string;
      className: string;
    };
  return tagMap[tag] as {
    label: string;
    className: string;
  };
}

export function Checklists({
  checklists,
}: {
  checklists: {
    slug: string;
    title: string;
    tags: string[];
  }[];
}) {
  console.log(checklists.map(({ tags }) => tags));

  return (
    <SectionWrapper>
      <Heading.H2 id="checklists">Checklists</Heading.H2>
      <ul className="mt-4 flex flex-col gap-2 text-2xl">
        {Object.values(checklists).map(({ slug, title, tags }) => (
          <li key={slug} className="flex flex-wrap items-start gap-1 border-t border-stone-600 first:border-0 pt-1 text-base md:text-lg lg:text-2xl">
            <Link href={`/checklists/${slug}`} className="flex-shrink-0">
              {title}
            </Link>
            {tags && (
              <ul className="ml-1 lg:ml-2 flex flex-wrap items-center gap-2 relative lg:bottom-0.5">
                {tags.map((tag) => {
                  const { label, className } = getTag(tag);

                  return (
                    <li key={tag} className="flex-shrink-0">
                      <DumbTag
                        label={label}
                        className={cn(className, "rounded-md lg:text-base")}
                      />
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
