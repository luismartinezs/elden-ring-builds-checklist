import { produce } from "immer";
import { useRouter } from "next/router";
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

  const checkItem = (itemId: string, {
    childrenIds,
    siblingIds,
    parentId
  }: {
    childrenIds?: string[],
    siblingIds?: string[],
    parentId?: string
  } = {}) => {
    updateChecklist(checklistId, produce(checklist, (draft) => {
      const index = draft.indexOf(itemId);

      if (index !== -1) {
        // unchecking item
        draft.splice(index, 1);

        // if has children, uncheck all children
        if (childrenIds) {
          childrenIds.forEach((id) => {
            const i = draft.indexOf(id)
            if (i !== -1) {
              draft.splice(i, 1);
            }
          });
        }

        // if has parent, uncheck parent
        if (parentId) {
          const i = draft.indexOf(parentId)
          if (i !== -1) {
            draft.splice(i, 1);
          }
        }
      }
      else {
        // checking item
        draft.push(itemId);

        // if has children, check all children
        if (childrenIds) {
          childrenIds.forEach((id) => {
            if (!draft.includes(id)) {
              draft.push(id);
            }
          });
        }

        // if has parent and all siblings checked, check parent
        if (parentId && siblingIds?.length && siblingIds.every((id) => draft.includes(id))) {
          if (!draft.includes(parentId)) {
            draft.push(parentId)
          }
        }
      }

      return draft;
    }))
  };


  // will not work becasue it doesnt handle nested
  // const checkItems = (itemIds: string[]) => {
  //   updateChecklist(checklistId, produce(checklist, (draft) => {
  //     const allChecked = itemIds.every((id) => draft.includes(id));

  //     if (allChecked) {
  //       itemIds.forEach((itemId) => {
  //         const index = draft.indexOf(itemId);
  //         if (index !== -1) {
  //           draft.splice(index, 1);
  //         }
  //       });
  //     } else {
  //       itemIds.forEach((itemId) => {
  //         if (!draft.includes(itemId)) {
  //           draft.push(itemId);
  //         }
  //       });
  //     }

  //     return draft;
  //   }))
  // };


  const isChecked = (itemId: string) => checklist.includes(itemId);

  return {
    checkItem,
    // checkItems,
    isChecked,
    setItems: (itemIds: string[]) => updateChecklist(checklistId, itemIds),
    items: checklist,
  };
}