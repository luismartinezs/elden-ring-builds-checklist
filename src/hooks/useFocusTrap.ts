import { useEffect, useRef } from "react";

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