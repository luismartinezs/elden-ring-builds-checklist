import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "lastSharePrompt";

export function useShareModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const lastPrompt = localStorage.getItem(STORAGE_KEY);
    if (lastPrompt === "shared") return;

    const daysSinceLastPrompt = lastPrompt ? (new Date().getTime() - new Date(lastPrompt).getTime()) / (1000 * 3600 * 24) : Infinity;

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

export function useFocusTrap() {
  const firstFocusableElementRef = useRef<HTMLButtonElement | null>(null);
  const lastFocusableElementRef = useRef<HTMLButtonElement | null>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    // Check if Tab or Shift+Tab was pressed
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusableElementRef.current) {
          lastFocusableElementRef.current?.focus();
          e.preventDefault();
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusableElementRef.current) {
          firstFocusableElementRef.current?.focus();
          e.preventDefault();
        }
      }
    }
  };

  useEffect(() => {
    // Add event listener
    const handleKey = (e: KeyboardEvent) => handleKeyDown(e);
    document.addEventListener('keydown', handleKey);

    // Remove event listener on cleanup
    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, []);


  return {
    firstFocusableElementRef,
    lastFocusableElementRef
  }
}