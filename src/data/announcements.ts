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
  id: "changelog-2025-05-14",
  message: "Added filters for catacombs, caves and hero graves!",
  link: {
    text: "See what changed!",
    url: "/changelog",
  },
};