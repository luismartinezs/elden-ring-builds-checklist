import { useEffect, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const classNames =
  "flex items-center gap-2 rounded-full border border-amber-500/80 p-3 text-amber-500/80 backdrop-blur-sm transition-colors duration-200 hover:border-amber-500 hover:text-amber-500 hover:no-underline";

export function AutoScrollButton() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled up 400px
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  if (!isScrolled)
    return (
      <button
        onClick={scrollToBottom}
        className={classNames}
        aria-label="Scroll to bottom"
      >
        <FaChevronDown className="size-4" />
      </button>
    );

  return (
    <button
      onClick={scrollToTop}
      className={classNames}
      aria-label="Scroll to top"
    >
      <FaChevronUp className="size-4" />
    </button>
  );
}
