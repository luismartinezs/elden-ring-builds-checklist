import Link from "next/link";
import { SectionWrapper } from "./SectionWrapper";
import { Heading } from "./Heading";

export function Checklists({
  checklists,
}: {
  checklists: {
    slug: string;
    title: string;
  }[];
}) {
  return (
    <SectionWrapper>
      <Heading.H2>Checklists</Heading.H2>
      <ul className="mt-4 flex flex-col gap-2 text-2xl">
        {Object.values(checklists).map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/checklists/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
