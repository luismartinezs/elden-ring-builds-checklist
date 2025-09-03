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
  id: "john-elden-challenge-2025-09-03",
  message: "New John Elden Challenge added!",
  link: {
    text: "Try the challenge!",
    url: "/challenges/john-elden",
  },
};