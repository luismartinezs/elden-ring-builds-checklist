import { useState, useEffect } from "react";
import { type Announcement, currentAnnouncement } from "~/data/announcements";

const STORAGE_KEY = "announcement-id";

export function useAnnouncements() {
  const [visibleAnnouncement, setVisibleAnnouncement] = useState<Announcement | null>(null);

  useEffect(() => {
    // Check if this announcement was already dismissed
    const dismissedId = localStorage.getItem(STORAGE_KEY);

    // Show announcement only if it's new or different from the dismissed one
    if (currentAnnouncement.id !== dismissedId) {
      setVisibleAnnouncement(currentAnnouncement);
    }
  }, []);

  const dismissAnnouncement = () => {
    if (!visibleAnnouncement) return;

    localStorage.setItem(STORAGE_KEY, visibleAnnouncement.id);
    setVisibleAnnouncement(null);
  };

  return { currentAnnouncement: visibleAnnouncement, dismissAnnouncement };
}