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
  id: "legendary-items-filters-1",
  message: "Filters for Legendary Items now available!",
  link: {
    text: "Check it out!",
    url: "/checklists/simple-game-progress",
  },
};