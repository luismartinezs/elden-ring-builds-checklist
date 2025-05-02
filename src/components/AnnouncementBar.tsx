import { IoClose } from "react-icons/io5";
import { HiArrowSmallRight } from "react-icons/hi2";
import { cn } from "~/utils/cn";
import { type Announcement } from "~/data/announcements";
import Link from "next/link";

type AnnouncementBarProps = {
  announcement: Announcement;
  onDismiss: () => void;
  className?: string;
};

export function AnnouncementBar({
  announcement,
  onDismiss,
  className,
}: AnnouncementBarProps) {
  return (
    <div
      className={cn(
        "relative bg-gradient-to-r from-primary-100/10 via-yellow-100/20 to-primary-100/10",
        "shadow-[inset_0_0_20px_rgba(251,191,36,0.2)]",
        "border-b border-primary-200/20 px-3 py-2.5 text-sm",
        "transition-all duration-300 ease-in-out",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-yellow-500 to-primary-500" />
      <div className="relative mx-auto flex max-w-screen-xl items-center justify-center gap-2">
        <p className="text-center font-medium tracking-wide text-primary-950">
          {announcement.message}
          {announcement.link && (
            <Link
              href={announcement.link.url}
              className="group ml-3 inline-flex items-center gap-1.5 rounded-full bg-primary-300 px-4 py-1 font-bold text-primary-950 ring-1 ring-primary-950/10 transition-all duration-300 hover:bg-primary-800 hover:text-primary-300 hover:shadow-sm"
            >
              {announcement.link.text}
              <HiArrowSmallRight className="size-4 transform transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          )}
        </p>
        <button
          onClick={onDismiss}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-primary-800 p-1.5 text-primary-950 transition-all duration-300 hover:bg-primary-800 hover:text-primary-300"
          aria-label="Close announcement"
        >
          <IoClose className="size-4" />
        </button>
      </div>
    </div>
  );
}
