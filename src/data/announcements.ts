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
  id: "changelog-2025-04-30",
  message: "Added a few juicy updates to the site!",
  link: {
    text: "See what changed!",
    url: "/changelog",
  },
};