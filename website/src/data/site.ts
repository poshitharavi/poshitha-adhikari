// All portfolio content lives here so copy edits never touch layout code.
// Values marked TODO still need confirmation from the owner.

export const site = {
  name: "Poshitha Adhikari",
  shortName: "Poshitha",
  role: "Senior full stack engineer",

  // From the owner's CV. Confirm this is the address to publish.
  email: "raviposhitha@gmail.com",

  // Old CV for now; replace the file (same name) when the new one is ready.
  cv: {
    href: "/cv/poshitha-adhikari-cv.pdf",
    fileName: "Poshitha-Adhikari-CV.pdf",
    label: "Download CV",
  },

  hero: {
    // Owner chose ideas 2 + 3: name as the headline.
    greeting: "Hi, I'm",
    name: ["Poshitha", "Adhikari"],
    // Two parts: one line with a dot on desktop, stacked on phones.
    role: ["Senior full stack engineer", "Fintech & blockchain"],
    scrollCue: "Scroll to get to know me",
  },


  meta: {
    title: "Poshitha Adhikari · Senior full stack engineer",
    description:
      "Portfolio of Poshitha Adhikari, a senior full stack engineer shipping web products end to end, from the data model to the last pixel.",
  },
} as const;

export const contactHref = site.email ? `mailto:${site.email}` : null;
