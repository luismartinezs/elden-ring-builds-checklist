import { produce } from "immer";
import { useRouter } from "next/router";
import { useLocalStorage } from 'usehooks-ts'

export function useCheckItem() {
  const router = useRouter();
  const { checklistId } = router.query;

  if (typeof checklistId !== "string") {
    throw new Error("checklistId must be a string");
  }

  const [checkedItems, updateCheckedItems] = useLocalStorage<string[]>(
    checklistId,
    []
  );

  const checkItem = ({ itemId, checked }: {
    itemId: string;
    checked: boolean;
  }) => {
    updateCheckedItems(
      produce(checkedItems, (draft) => {
        console.log(itemId, checked)
        console.log('checkItem draft before', draft)
        if (checked) {
          if (!draft.includes(itemId)) {
            draft.push(itemId);
          }
        } else {
          const index = draft.indexOf(itemId);
          if (index !== -1) {
            draft.splice(index, 1);
          }
        }
        console.log('checkItem draft after', draft)
        return draft;
      })
    );
  };

  const isChecked = (itemId: string) => checkedItems.includes(itemId);

  return {
    checkItem,
    isChecked,
    setItems: updateCheckedItems,
  };
}