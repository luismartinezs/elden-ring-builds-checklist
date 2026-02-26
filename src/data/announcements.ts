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
  id: "pure-faith-caster-2026-02-26",
  message: "New checklist: Pure Faith Caster!",
  link: {
    text: "Start your Faith playthrough",
    url: "/checklists/pure-faith-caster",
  },
};