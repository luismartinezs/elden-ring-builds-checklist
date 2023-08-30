import { createContext, useContext, useState } from "react";

const accordionContext = createContext<{
  activeId: number | null;
  setActiveId: (id: number | null) => void;
}>({
  activeId: null,
  setActiveId: () => null,
});

export function AccordionContextProvider({
  children,
  initialActiveId = null,
}: {
  children: React.ReactNode;
  initialActiveId?: number | null;
}) {
  const [activeId, setActiveId] = useState<number | null>(initialActiveId);

  return (
    <accordionContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </accordionContext.Provider>
  );
}

export function useAccordionContext() {
  return useContext(accordionContext);
}
