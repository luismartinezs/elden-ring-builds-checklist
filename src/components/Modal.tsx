import { useState } from "react";
import { useFocusTrap } from "~/hooks/useFocusTrap";
import { Button } from "./Button";
import { AiOutlineClose } from "react-icons/ai";

export const Modal = ({
  renderToggleButton,
  renderFooter,
  header,
  children,
}: {
  renderToggleButton?: (props: { openModal: () => void }) => React.ReactNode;
  renderFooter?: (props: {
    closeModal: () => void;
    lastFocusableElementRef: React.RefObject<HTMLButtonElement>;
  }) => React.ReactNode;
  header?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { firstFocusableElementRef, lastFocusableElementRef } = useFocusTrap();

  return (
    <>
      {/* Modal toggle */}
      {renderToggleButton ? (
        renderToggleButton({ openModal: () => setIsOpen(true) })
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
          className="block rounded-lg bg-amber-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
          type="button"
        >
          Toggle modal
        </button>
      )}
      {/* Main modal */}
      {isOpen && (
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden"
        >
          <div className="relative max-h-full w-full max-w-2xl p-4">
            {/* Modal content */}
            <div className="relative rounded-lg bg-white shadow dark:bg-stone-700">
              {/* Modal header */}
              <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-stone-600 md:py-4 md:px-6">
                {header ?? <div></div>}
                <Button
                  type="button"
                  className="m-0 !px-2"
                  variant="muted"
                  onClick={() => setIsOpen(false)}
                  ref={firstFocusableElementRef}
                >
                  <AiOutlineClose size={20} />
                </Button>
              </div>
              {/* Modal body */}
              <div className="space-y-4 p-4 md:px-6 md:py-4">{children}</div>
              {/* Modal footer */}
              <div className="flex items-center rounded-b border-t border-stone-200 p-4 dark:border-stone-600 md:py-4 md:px-6">
                {renderFooter ? (
                  renderFooter({
                    closeModal: () => setIsOpen(false),
                    lastFocusableElementRef,
                  })
                ) : (
                  <button
                    onClick={() => setIsOpen(false)}
                    ref={lastFocusableElementRef}
                    data-modal-hide="default-modal"
                    type="button"
                    className="rounded-lg bg-amber-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
