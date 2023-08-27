import React from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Toggler = ({
  onClick,
  isExpanded,
}: {
  onClick: (evt: React.MouseEvent) => void;
  isExpanded: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className="rounded bg-stone-800 p-1 hover:bg-stone-700"
    >
      {isExpanded ? <FaCaretUp /> : <FaCaretDown />}
    </button>
  );
};

export default Toggler;
