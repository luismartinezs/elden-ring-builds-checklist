import { FaRegCommentDots } from "react-icons/fa";

export const FeaturebaseFeedbackLink = () => {
  return (
    <a
      href="https://eldenhub.featurebase.app/"
      className="flex items-center gap-2 rounded-full border border-amber-500/80 p-3 text-amber-500/80 backdrop-blur-sm transition-colors duration-200 hover:border-amber-500 hover:text-amber-500 hover:no-underline"
      aria-label="Provide feedback. Opens in new tab"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaRegCommentDots size={16} />
    </a>
  );
};
