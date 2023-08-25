import Link from "next/link";
import { PageLayout } from "~/layouts/PageLayout";

const checklists = [
  {
    path: "templar-lvl1-50",
    label: "Templar Level 1-50",
  },
];

export default function ChecklistsPage() {
  return (
    <PageLayout>
      <h1 className="text-2xl">Checklists</h1>
      <ul className="mt-4">
        {checklists.map(({ path, label }) => (
          <li key={path}>
            <Link href={`/checklists/${path}`}>{label}</Link>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
