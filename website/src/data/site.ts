// All portfolio content lives here so copy edits never touch layout code.
// Values marked TODO still need confirmation from the owner.

export const site = {
  name: "Poshitha Adhikari",
  shortName: "Poshitha",
  role: "Senior full stack engineer",

  // TODO: public contact email. While empty, contact buttons render disabled.
  email: "",

  hero: {
    // Each inner array is one line, broken where the thought breaks.
    headline: ["I build software", "that lasts."],
    subheadline:
      "Senior full stack engineer shipping web products end to end, from the data model to the last pixel.",
    cta: "Start a conversation",
    // TODO: one proof signal, e.g. years of experience or a notable company. Hidden while null.
    proof: null as string | null,
  },

  meta: {
    title: "Poshitha Adhikari · Senior full stack engineer",
    description:
      "Portfolio of Poshitha Adhikari, a senior full stack engineer shipping web products end to end, from the data model to the last pixel.",
  },
} as const;

export const contactHref = site.email ? `mailto:${site.email}` : null;
