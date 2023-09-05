import { produce } from "immer";
import { useRouter } from "next/router";
import { useLocalStorage } from 'usehooks-ts'
import { useManageChecklists } from "~/features/checklist/hooks/useManageChecklists";

export function useCheckItem() {
  const {
    getCurrentChecklists,
    updateChecklist
  } = useManageChecklists();

  const router = useRouter();
  const { checklistId } = router.query;

  if (typeof checklistId !== "string") {
    throw new Error("checklistId must be a string");
  }

  const checklist = getCurrentChecklists()[checklistId] ?? []

  const [checkedItems, updateCheckedItems] = useLocalStorage<string[]>(
    checklistId,
    []
  );

  const checkItem = (itemId: string) => {
    updateChecklist(checklistId, produce(checklist, (draft) => {
      const index = draft.indexOf(itemId);

      if (index !== -1) {
        draft.splice(index, 1);
      }
      else {
        draft.push(itemId);
      }

      return draft;
    }))

    updateCheckedItems(
      produce(checkedItems, (draft) => {
        const index = draft.indexOf(itemId);

        if (index !== -1) {
          draft.splice(index, 1);
        }
        else {
          draft.push(itemId);
        }

        return draft;
      })
    );
  };


  const checkItems = (itemIds: string[]) => {
    updateCheckedItems(
      produce(checkedItems, (draft) => {
        const allChecked = itemIds.every((id) => draft.includes(id));

        if (allChecked) {
          itemIds.forEach((itemId) => {
            const index = draft.indexOf(itemId);
            if (index !== -1) {
              draft.splice(index, 1);
            }
          });
        } else {
          itemIds.forEach((itemId) => {
            if (!draft.includes(itemId)) {
              draft.push(itemId);
            }
          });
        }

        return draft;
      })
    );
  };


  const isChecked = (itemId: string) => checkedItems.includes(itemId);

  return {
    checkItem,
    checkItems,
    isChecked,
    setItems: updateCheckedItems,
    items: checkedItems,
  };
}