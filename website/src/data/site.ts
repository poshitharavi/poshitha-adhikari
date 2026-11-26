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
    // A cursor types a greeting, then the intro; the greeting then cycles through languages.
    // `label` names the language above the greeting. Add or reorder freely.
    greetings: [
      { text: "Hello", lang: "en", label: "English" },
      { text: "ආයුබෝවන්", lang: "si", label: "Sinhala · Ayubowan" },
      { text: "வணக்கம்", lang: "ta", label: "Tamil · Vanakkam" },
      { text: "Hola", lang: "es", label: "Spanish" },
      { text: "Bonjour", lang: "fr", label: "French" },
      { text: "Ciao", lang: "it", label: "Italian" },
      { text: "Hallo", lang: "de", label: "German" },
    ],
    // Typed once after the first greeting. One entry per line on desktop.
    intro: ["I'm a senior full stack engineer", "based in Sri Lanka!"],
  },

  // Page sections, in order. Drives the top navigation and the section anchors.
  sections: [
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "beyond", label: "Beyond the code" },
    { id: "contact", label: "Contact" },
  ],

  meta: {
    title: "Poshitha Adhikari · Senior full stack engineer",
    description:
      "Portfolio of Poshitha Adhikari, a senior full stack engineer shipping web products end to end, from the data model to the last pixel.",
  },
} as const;

export const contactHref = site.email ? `mailto:${site.email}` : null;
