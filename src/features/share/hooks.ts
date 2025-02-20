import { useEffect, useState } from "react";

const STORAGE_KEY = "lastSharePrompt";

export function useShareModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const lastPrompt = localStorage.getItem(STORAGE_KEY);
    if (lastPrompt === "shared") return;
    if (!lastPrompt) {
      localStorage.setItem(STORAGE_KEY, new Date().toISOString());
      return;
    }

    const daysSinceLastPrompt = (new Date().getTime() - new Date(lastPrompt).getTime()) / (1000 * 3600 * 24)

    if (daysSinceLastPrompt >= 30) {
      setShowModal(true);
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
    localStorage.setItem(STORAGE_KEY, new Date().toISOString());
  };

  const handleShare = () => {
    localStorage.setItem(STORAGE_KEY, "shared");
    setShowModal(false);
  };

  return {
    showModal,
    handleClose,
    handleShare
  }
}

