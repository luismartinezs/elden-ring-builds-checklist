import { type GetStaticProps } from "next";
import Link from "next/link";
import { PageLayout } from "~/layouts/PageLayout";
import { lists } from "~/data";

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      checklists: lists,
    },
  };
};

export default function ChecklistsPage({
  checklists,
}: {
  checklists: typeof lists;
}) {
  return (
    <PageLayout>
      <h1 className="text-3xl font-semibold">Elden Ring Checklists</h1>
      <ul className="mt-4 text-lg">
        {Object.values(checklists).map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/checklists/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
