# Portfolio — Agent Onboarding

Read this file first. It is the single source of truth for what this folder is, where the work stands, and how to continue it. **Update the "Status" and "Decision log" sections whenever you finish a piece of work** so the next agent starts on track.

---

## 1. Mission

Build a personal portfolio website for **Poshitha, a senior full-stack software engineer**.

- **Format:** a single, straightforward, attractive **landing page** (one scrolling page, no CMS, no blog for now).
- **Goal:** a visitor (recruiter, hiring manager, client) understands within ~5 seconds who Poshitha is, what they build, and how to get in touch, and leaves with a strong, memorable impression.
- **Primary CTA:** contact / hire (email, LinkedIn, GitHub, CV download).
- **Quality bar:** feels hand-crafted and premium, not like a template. Fast, responsive, accessible.

## 2. Tech stack

| Area | Choice |
|---|---|
| Framework | **Next.js 16** (App Router, `src/` dir, Turbopack) |
| UI | **React 19** |
| Language | TypeScript (strict) |
| Styling | **Tailwind CSS v4** (CSS-first config in `src/app/globals.css`, no `tailwind.config.js`) |
| Lint | ESLint 9 (`eslint-config-next`) |
| Package manager | npm |
| Import alias | `@/*` → `src/*` |

> ⚠️ Next 16 / Tailwind 4 differ from older versions. Before using a Next.js API you're unsure about, check the bundled docs in `website/node_modules/next/dist/docs/` (see `website/AGENTS.md`).

### Commands

All commands run from `website/`:

```bash
cd website
npm run dev     # local dev at http://localhost:3000
npm run build   # production build — must pass before calling work done
npm run start   # serve the production build
npm run lint    # lint
```

## 3. Folder map

```
Portfolio/
├── AGENTS.md              ← you are here (mission, status, decisions)
├── CLAUDE.md              ← imports AGENTS.md for Claude Code
├── design-references/     ← visual mood references (NOT part of the app, never shipped)
│   ├── images-with-text/  ← poster versions: "Building My Own Legacy"
│   └── without-text/      ← clean photos (candidates for hero imagery)
└── website/               ← the Next.js project (run all npm commands here)
    ├── AGENTS.md          ← Next.js version notes (auto-maintained by `next dev`)
    ├── package.json
    ├── public/            ← static assets actually served by the site
    └── src/app/
        ├── layout.tsx     ← root layout, fonts, metadata
        ├── page.tsx       ← the landing page
        └── globals.css    ← Tailwind v4 import + design tokens
```

To use a reference image on the site, copy (or export an optimized version) into `website/public/`; never import from `design-references/`.

Planned (create as needed, inside `website/`): `src/components/sections/*` (one file per page section), `src/components/ui/*` (small reusable pieces), `src/data/*.ts` (all portfolio content as typed data, so copy edits never touch layout code).

## 4. Visual direction (from `design-references/`)

> **The design system is documented in [`website/DESIGN_SYSTEM.md`](website/DESIGN_SYSTEM.md). Read it before any UI work.** Tokens live in `website/src/app/globals.css`, components in `website/src/components/ui/`, live reference at `/style-guide`.

The references define the mood: **"Building My Own Legacy"** — quiet discipline, ambition, warm and cinematic.

- **Palette:** warm sand / beige wall (~`#E9CFA0`–`#F2DDB4`), deep espresso brown (~`#3B1E0F`–`#4A2412`) for headlines, burnt-orange/copper accent (~`#B5651D`), soft concrete floor tones. Golden-hour light with diagonal window-shadow streaks.
- **Typography:** very large, heavy, condensed uppercase display type (poster style) paired with an elegant handwritten script accent word; small, letter-spaced uppercase sans for supporting lines and quotes.
- **Composition:** centered, symmetric, lots of negative space; the figure overlaps the headline (text behind / subject in front) — a strong candidate for the hero.
- **Motifs:** short quote blocks with thin rules and quotation marks; diagonal light-shadow overlay.
- **Note:** the photos show a cap with a sports-team logo. If used on the live site, consider an edited/cropped version without the trademark.

**Brand fonts (set, in `website/src/app/layout.tsx`):** Anton = display headlines (uppercase), Mrs Saint Delafield = script accent word (copper), Montserrat = body, buttons and small tracked caps. Utilities: `font-display`, `font-script`, `font-sans`, plus `display-1`, `display-2`, `script-1`, `eyebrow` in `globals.css`.

**Brand colours (sampled from the posters, Tailwind names):** `cream` #F1CFA1 · `sand` #D2AD7F · `clay` #8B6643 · `copper` #A14B06 · `bark` #553720 · `espresso` #491A01 · `ink` #131209.

Live reference page: `/style-guide` (noindex) shows fonts, script alternatives and colour swatches.

## 5. Page sections

**The section list, order, purpose and status live in [`docs/sections.md`](docs/sections.md). Read it before building or reordering any section.**

Short version: Hero → About → Work → Experience → Skills → Beyond the code → Principles → Contact → Footer. Primary audience is recruiters; the goal is job enquiries.

## 6. Working rules for agents

- Keep it **one landing page** unless the owner asks otherwise.
- Content lives in `src/data/`, not hard-coded inside components.
- Prefer Server Components; add `"use client"` only for interactivity/animation.
- Use `next/image` and `next/font`; keep Lighthouse performance & accessibility high.
- Mobile-first and fully responsive; respect `prefers-reduced-motion`.
- Don't invent personal facts (employers, dates, metrics). Use clearly marked placeholders (`TODO:`) and list them under "Open questions".
- Run `npm run build` and `npm run lint` before declaring a task done.

## 7. Status

- [x] Next.js 16 project scaffolded in this folder (TS, Tailwind 4, ESLint, App Router, `src/`).
- [x] Reference images moved into `design-references/`.
- [x] Next.js project moved into `website/`; `design-references/` and docs stay at the root.
- [x] This onboarding doc created.
- [ ] Confirm content (bio, experience, projects, links) with the owner.
- [x] Template code removed; design tokens, text styles (`heading-1`, `body-3`, …) and motion in `website/src/app/globals.css`.
- [x] Hero: full screen art-directed background (wide photo ≥1024px, tall photo below). Copy: a copper cursor types "Hello," then "I'm a senior full stack engineer based in Sri Lanka!", then cycles the greeting (Ayubowan in Sinhala, Vanakkam in Tamil, Hola, Bonjour, Ciao, Hallo) with a language label above (`components/greeter.tsx`, data in `site.hero`). Section links printed on the wall at the top, transparent, scrolling away with the hero (`components/site-nav.tsx`, sections in `site.sections`); no scroll prompt (owner removed it); sections are placeholders (`components/section-stub.tsx`) until built. Name is in the hidden h1 and the page title, not shown. No header or CV button on the hero (owner removed it); the CV file stays at `website/public/cv/poshitha-adhikari-cv.pdf` (old CV) for a later section, with `PillButton` ready to use. No contact button or side quotes (owner removed them). Copy lives in `website/src/data/site.ts`.
- [x] Design system: tokens, text styles, `ui/` components (Display, Script, Eyebrow, Text, Quote, Button, PillButton), `DESIGN_SYSTEM.md`, `/style-guide`.
- [ ] Contact email set to the CV address; owner to confirm it is the one to publish.
- [x] Section plan documented in `docs/sections.md`.
- [ ] Remaining sections (About, Work, Experience, Skills, Beyond the code, Principles, Contact, Footer).
- [ ] Polish, responsive QA, SEO metadata, deploy (likely Vercel).

## 8. Open questions (for the owner)

- Full display name, title, location, and the one-line tagline.
- Experience history, key projects (with links/outcomes), tech stack list.
- Contact links (email, LinkedIn, GitHub). Updated CV to replace the old one in `website/public/cv/` (the old one lists referees' phone numbers and emails; remove them before going live).
- Should the hero use the reference photo (is it the owner?), and is a logo-free edit available?
- Domain + hosting preference.

## 9. Decision log

| Date | Decision |
|---|---|
| 2026-11-25 | Stack: Next.js 16 + React 19 + TypeScript + Tailwind 4, npm. Single landing page. |
| 2026-11-25 | Layout: app lives in `website/`; root holds docs + `design-references/`. Git repo is at the root. |
| 2026-11-25 | Design rules: follow the `landing-page-design` skill (Geist only, Tailwind scale, spacing tokens, no bg gradients, `cubic-bezier(0.22,1,0.36,1)` motion). Build section by section. |
| 2026-11-25 | Hero: owner wants the image alone as the background, no overlaid text or nav for now. Hero is `min-h-svh`. |
| 2026-11-25 | Fonts and colours taken from the poster images (owner's request). This overrides the landing-page-design skill's "one typeface / Geist" rule: three fonts are intentional. Script font may still change (alternatives on `/style-guide`). |
| 2026-11-25 | Design system established (`website/DESIGN_SYSTEM.md`). Token change = update `globals.css` + doc + `/style-guide` in the same commit. |
| 2026-11-25 | Audience: recruiters first (goal: job enquiries), plus anyone wanting to know Poshitha personally. Adds a "Beyond the code" lifestyle section. Hero photo + headline will be redesigned by the owner. |
| 2026-11-25 | Visual direction taken from "Building My Own Legacy" references (warm sand + espresso + copper, condensed display + script). |
| 2026-11-25 | Hero copy: name as headline plus role line; owner removed the button and side quotes. Facts come from the owner's career history, never invented. |
| 2026-11-25 | Motion and chrome follow the Lusion and GSAP references (mask reveals, pill text roll, "+" marks, outlined pills). Brand colours and fonts stay. See DESIGN_SYSTEM.md "Motion vocabulary". |
| 2026-11-26 | Tried the landonorris.com fonts (Mona Sans + Gloock as a stand in for Brier); owner reverted. Brand fonts stay Anton, Mrs Saint Delafield, Montserrat. |
| 2026-11-26 | Hero became a multilingual welcome (owner's idea): typed greeting cycling through languages + "based in Sri Lanka" intro. Name and role line removed from view. Noto Sans Sinhala / Tamil added for those greetings. |
| 2026-11-26 | Top section navigation (Jemini style pill, mobile full height menu) and a scroll prompt pill linking to About. References: jemini.co (nav, big type), zaylamonroe.framer.website (text animations, planned for sections). Section placeholders added so nav links are never dead. |
| 2026-11-26 | Owner removed the scroll prompt and asked for the nav to look printed on the wall: transparent text links, not a floating pill, not sticky. |
