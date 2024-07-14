import { env } from "~/env.mjs";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "~/components/Button";
import { FaXTwitter, FaFacebook, FaReddit, FaDiscord } from "react-icons/fa6";
import { cn } from "~/utils/cn";
import { useFocusTrap } from "../hooks";

const commonBtnClasses = "rounded px-6 py-2 font-bold text-white";
const url = env.NEXT_PUBLIC_SITE_URL;

export const ShareModal = ({
  isOpen,
  onClose,
  onShare,
}: {
  isOpen: boolean;
  onClose: () => void;
  onShare: () => void;
}) => {
  const { firstFocusableElementRef, lastFocusableElementRef } = useFocusTrap();

  if (!isOpen) return null;

  const shareOnTwitter = () => {
    const text = "Check out this Elden Ring checklist app!";
    const hashtags = "EldenRing,Gaming,FromSoftware";
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${encodeURIComponent(url)}&hashtags=${encodeURIComponent(hashtags)}`;
    window.open(twitterUrl, "_blank");
    onShare();
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(facebookUrl, "_blank");
    onShare();
  };

  const shareOnReddit = () => {
    const title = "Check out this Elden Ring checklist app!";
    const subreddit = "eldenring"; // Specify the subreddit you want to preselect
    const redditUrl = `https://www.reddit.com/r/${subreddit}/submit?title=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(url)}`;
    window.open(redditUrl, "_blank");
    onShare();
  };

  // Prompt for Discord Share
  // Note: Discord doesn't support direct sharing via URL in the same way as other platforms.
  // Instead, prompt users to copy a message to their clipboard to paste in Discord.
  const shareOnDiscord = () => {
    const text = `Hey, check out this awesome app for Elden Ring players! ${url}`;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(
          "Text copied to clipboard. Share it in your favorite Discord server!"
        );
        onShare();
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900 bg-opacity-40 text-white">
      <div className="w-full max-w-sm rounded-lg bg-stone-900 p-6 shadow-lg">
        <Button
          className="float-right !px-2"
          variant="muted"
          onClick={onClose}
          ref={firstFocusableElementRef}
        >
          <AiOutlineClose size={20} />
        </Button>
        <p className="mb-2 text-xl font-medium">
          Dost thou find this app to be of service? I beseech thee, share it
          with thy companions.
        </p>
        <p className="mb-4 text-stone-400">
          If this app hath aided thee on thy journey, I humbly implore thee to
          share it. Thy assistance is most cherished.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <button
            className={cn(commonBtnClasses, "bg-[#14171a] hover:bg-[#3d464d]")}
            onClick={shareOnTwitter}
            aria-label="share on X"
          >
            <FaXTwitter size={30} />
          </button>
          <button
            className={cn(commonBtnClasses, "bg-[#3b5998] hover:bg-[#2a3c62]")}
            onClick={shareOnFacebook}
            aria-label="Share on Facebook"
          >
            <FaFacebook size={30} />
          </button>
          <button
            className={cn(commonBtnClasses, "bg-[#ff4500] hover:bg-[#a1250b]")}
            onClick={shareOnReddit}
            aria-label="Create Post on Reddit"
          >
            <FaReddit size={30} />
          </button>
          <button
            className={cn(commonBtnClasses, "bg-[#5865F2] hover:bg-[#3836cc]")}
            onClick={shareOnDiscord}
            aria-label="Share on Discord"
            ref={lastFocusableElementRef}
          >
            <FaDiscord size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};
