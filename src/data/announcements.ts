export type Announcement = {
  id: string;
  message: string;
  link?: {
    text: string;
    url: string;
  };
};

// Change this object to show a different announcement
export const currentAnnouncement: Announcement = {
  id: "changelog-2025-05-02",
  message: "Added 2 brand NEW tools!",
  link: {
    text: "See what changed!",
    url: "/changelog",
  },
};