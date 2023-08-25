import { Checklist, type ChecklistItem } from "~/features/checklist";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PageLayout } from "~/layouts/PageLayout";

export default function ChecklistPage() {
  const router = useRouter();
  const { checklistId } = router.query;
  const [items, setItems] = useState<ChecklistItem[]>([]);

  useEffect(() => {
    if (checklistId && typeof checklistId === "string") {
      import(`~/data/${checklistId}.json`)
        .then((module: { default: ChecklistItem[] }) => {
          setItems(module.default);
        })
        .catch((err) => {
          console.error("Failed to load checklist:", err);
        });
    }
  }, [checklistId]);

  return (
    <PageLayout>
      <h1 className="mb-4 text-2xl">{checklistId}</h1>
      <Checklist items={items} />
    </PageLayout>
  );
}
