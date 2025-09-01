import { produce } from "immer";
import { useManageChallenges } from "~/features/checklist/hooks/useManageChallenges";

export function useCheckChallenge(challengeKey: string) {
  const {
    getCurrentChallenges,
    updateChallenge
  } = useManageChallenges();

  const challenges = getCurrentChallenges()[challengeKey] ?? [];

  const checkChallenge = (itemId: string) => {
    updateChallenge(challengeKey, produce(challenges, (draft) => {
      const index = draft.indexOf(itemId);

      if (index !== -1) {
        // unchecking item
        draft.splice(index, 1);
      } else {
        // checking item
        draft.push(itemId);
      }

      return draft;
    }));
  };

  const isChecked = (itemId: string) => challenges.includes(itemId);

  return {
    checkChallenge,
    isChecked,
    checkedItems: challenges,
  };
}