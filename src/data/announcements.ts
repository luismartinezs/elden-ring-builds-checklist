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
  id: "stat-soft-caps-1",
  message: "Added a new soft stat caps page!",
  link: {
    text: "Check it out!",
    url: "/soft-caps",
  },
};