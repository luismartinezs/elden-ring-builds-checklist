import classnames from "classnames";
import { useId } from "react";
import { PiCaretUpBold, PiCaretDownBold } from "react-icons/pi";
import { useAccordionContext } from "~/components/Accordion/Accordion.context";

export type TQuestion = JSX.Element | string;
export type TAnswer = TQuestion;

export function Item({
  question,
  answer,
  id,
}: {
  question: TQuestion;
  answer: TAnswer;
  id: number;
}) {
  const { activeId, setActiveId } = useAccordionContext();
  const isActive = activeId === id;
  const headingId = useId();
  const bodyId = useId();

  return (
    <>
      <h2
        id={headingId}
        className="border border-t-0 border-stone-700 first:border-t"
      >
        <button
          type="button"
          className="flex w-full items-center justify-between  p-5 text-left font-medium text-stone-500 hover:bg-stone-100 focus:ring-4 focus:ring-stone-200  dark:text-stone-400 dark:hover:bg-stone-800 dark:focus:ring-stone-800"
          aria-expanded={isActive}
          aria-controls={bodyId}
          onClick={() => {
            isActive ? setActiveId(null) : setActiveId(id);
          }}
        >
          <span>{question}</span>
          {isActive ? <PiCaretUpBold /> : <PiCaretDownBold />}
        </button>
      </h2>
      <div
        id={bodyId}
        className={classnames(
          isActive ? "block" : "hidden",
          "border border-t-0 border-stone-700"
        )}
        aria-labelledby={headingId}
      >
        <div className="p-5 text-stone-500 dark:bg-stone-800 dark:text-stone-300">
          {answer}
        </div>
      </div>
    </>
  );
}
