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

The references define the mood: **"Building My Own Legacy"** — quiet discipline, ambition, warm and cinematic.

- **Palette:** warm sand / beige wall (~`#E9CFA0`–`#F2DDB4`), deep espresso brown (~`#3B1E0F`–`#4A2412`) for headlines, burnt-orange/copper accent (~`#B5651D`), soft concrete floor tones. Golden-hour light with diagonal window-shadow streaks.
- **Typography:** very large, heavy, condensed uppercase display type (poster style) paired with an elegant handwritten script accent word; small, letter-spaced uppercase sans for supporting lines and quotes.
- **Composition:** centered, symmetric, lots of negative space; the figure overlaps the headline (text behind / subject in front) — a strong candidate for the hero.
- **Motifs:** short quote blocks with thin rules and quotation marks; diagonal light-shadow overlay.
- **Note:** the photos show a cap with a sports-team logo. If used on the live site, consider an edited/cropped version without the trademark.

Exact tokens (colors, fonts, spacing) should be finalized and recorded in `globals.css` + the decision log below.

## 5. Planned page structure (draft — confirm with the owner)

1. **Hero** — name, role ("Senior Full-Stack Engineer"), one-line value statement, CTA, legacy-style imagery.
2. **About** — short story / philosophy (discipline, craft, long-term thinking).
3. **Skills / Stack** — grouped (frontend, backend, cloud/devops, data).
4. **Experience** — timeline of roles and impact.
5. **Selected Projects** — 3–6 case-study cards with outcomes.
6. **Quotes / Principles** strip — echoes the poster quotes.
7. **Contact** — email, socials, CV download.
8. **Footer.**

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
- [ ] Define design tokens + fonts.
- [ ] Build sections.
- [ ] Polish, responsive QA, SEO metadata, deploy (likely Vercel).

## 8. Open questions (for the owner)

- Full display name, title, location, and the one-line tagline.
- Experience history, key projects (with links/outcomes), tech stack list.
- Contact links (email, LinkedIn, GitHub) and CV file.
- Should the hero use the reference photo (is it the owner?), and is a logo-free edit available?
- Domain + hosting preference.

## 9. Decision log

| Date | Decision |
|---|---|
| 2026-11-25 | Stack: Next.js 16 + React 19 + TypeScript + Tailwind 4, npm. Single landing page. |
| 2026-11-25 | Layout: app lives in `website/`; root holds docs + `design-references/`. Git repo is at the root. |
| 2026-11-25 | Visual direction taken from "Building My Own Legacy" references (warm sand + espresso + copper, condensed display + script). |
