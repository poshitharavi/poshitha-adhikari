// All portfolio content lives here so copy edits never touch layout code.
// Values marked TODO still need confirmation from the owner.

export const site = {
  name: "Poshitha Adhikari",
  shortName: "Poshitha",
  role: "Senior full stack engineer",

  // TODO: public contact email. While empty, contact buttons render disabled.
  email: "",

  hero: {
    // SAMPLE COPY to preview the design system. Replace with final wording.
    // Reads as one sentence: "Building software that lasts".
    script: "Building",
    // Each entry is one line, broken where the thought breaks.
    display: ["Software", "that lasts"],
    quotes: {
      left: ["Clean code today.", "Fewer fires tomorrow."],
      right: ["Systems are built", "one commit at a time."],
    },
    cta: "Start a conversation",
  },

  meta: {
    title: "Poshitha Adhikari · Senior full stack engineer",
    description:
      "Portfolio of Poshitha Adhikari, a senior full stack engineer shipping web products end to end, from the data model to the last pixel.",
  },
} as const;

export const contactHref = site.email ? `mailto:${site.email}` : null;
