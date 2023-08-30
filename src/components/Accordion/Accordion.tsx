import { AccordionContextProvider } from "~/components/Accordion/Accordion.context";
import { Item } from "~/components/Accordion/Item";

export function Accordion({
  items,
  initialActiveId = null,
}: {
  items: {
    question: string;
    answer: string;
  }[];
  initialActiveId?: number | null;
}) {
  return (
    <AccordionContextProvider initialActiveId={initialActiveId}>
      {items.map((item, index) => (
        <Item
          key={index}
          question={item.question}
          answer={item.answer}
          id={index}
        />
      ))}
    </AccordionContextProvider>
  );
}
