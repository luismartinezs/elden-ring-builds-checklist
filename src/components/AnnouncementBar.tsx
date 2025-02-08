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

export function AnnouncementBar({ announcement, onDismiss, className }: AnnouncementBarProps) {
  return (
    <div
      className={cn(
        "relative bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 backdrop-blur-sm px-3 py-2.5 text-sm text-white border-b border-white/5",
        "transition-all duration-300 ease-in-out",
        className
      )}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-center gap-2">
        <p className="text-center font-medium tracking-wide">
          {announcement.message}
          {announcement.link && (
            <Link
              href={announcement.link.url}
              className="group ml-3 inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-3 py-0.5 font-semibold text-amber-200 transition-all duration-300 hover:bg-amber-500/30 hover:text-amber-100"
            >
              {announcement.link.text}
              <HiArrowSmallRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          )}
        </p>
        <button
          onClick={onDismiss}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white"
          aria-label="Close announcement"
        >
          <IoClose className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}