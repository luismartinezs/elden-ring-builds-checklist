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
      className="rounded bg-amber-500 p-1 text-stone-900 hover:bg-amber-600"
    >
      {isExpanded ? <FaCaretUp size={25} /> : <FaCaretDown size={25} />}
    </button>
  );
};

export default Toggler;
