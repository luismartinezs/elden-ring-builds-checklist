import { FaRegCommentDots } from 'react-icons/fa';

export const FeaturebaseFeedbackLink = () => {
  return (
    <a
      href="https://eldenhub.featurebase.app/"
      className="fixed bottom-4 right-4 flex items-center gap-2 p-3 rounded-full hover:no-underline border border-amber-500/80 text-amber-500/80 hover:border-amber-500 hover:text-amber-500 transition-colors duration-200 z-50 backdrop-blur-sm"
      aria-label="Provide feedback"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaRegCommentDots size={16} />
    </a>
  );
};
