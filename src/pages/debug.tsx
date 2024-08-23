import Link from "next/link";
import { lists } from "~/data";

function findDupes(items: Array<{ id: string }>) {
  const ids = new Set<string>();
  const duplicates = new Set<string>();
  items.forEach((item) => {
    if (ids.has(item.id)) {
      duplicates.add(item.id);
    } else {
      ids.add(item.id);
    }
  });
  return duplicates;
}

export default function DebugPage() {
  return (
    <>
      <p>This page exists only for debugging purposes</p>
      <p>
        If you&apos;re here and you&apos;re not a dev, it&apos;s an accident, go back to the{" "}
        <Link href="/">home page</Link>
      </p>
      <p>Duplicate ids (there should be nothing here):</p>
      {lists.map((list) => {
        const dupes = findDupes(list.items);

        return (
          <div key={list.slug}>
            <span>{list.title}: </span>
            {dupes.size > 0 ? (
              [...dupes].map((id) => <span className="text-red-500" key={id}>{id}</span>)
            ) : (
              <span className="text-green-500">OK</span>
            )}
          </div>
        );
      })}
    </>
  );
}
