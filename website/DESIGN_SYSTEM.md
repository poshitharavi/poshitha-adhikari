# Design system

The visual language of the portfolio, taken from the **"Building My Own Legacy"** posters in `../design-references/images-with-text/`. Warm golden light, quiet discipline, poster typography.

| What | Where |
|---|---|
| Tokens + text styles (single source of truth) | `src/app/globals.css` |
| Font loading | `src/app/layout.tsx` |
| Components | `src/components/ui/` |
| Living reference page | `/style-guide` (noindex) |
| Content (copy) | `src/data/site.ts` |

## Maintaining it

1. **Never hard-code** a hex colour, font family or one-off font size in a component. Use a token or text style. If something is missing, add it to `globals.css` first.
2. **Change in one commit:** token in `globals.css` → this doc → `/style-guide`. They must always agree.
3. **New component?** Put it in `src/components/ui/`, build it from tokens, add it to the table below and to `/style-guide`.
4. Rules from the `landing-page-design` skill still apply for **spacing, radius, motion, states and copy**. Its typography rule (one typeface, Geist) is **overridden** by the brand fonts below, by the owner's choice.

---

## Colour

Sampled from the poster pixels. Use the Tailwind names (`bg-cream`, `text-espresso`, `border-bark/20`, …).

| Token | Hex | Use | Contrast on cream |
|---|---|---|---|
| `cream` | `#F1CFA1` | Page background (sunlit wall) | — |
| `sand` | `#D2AD7F` | Surfaces, cards, image fallback | — |
| `clay` | `#8B6643` | Muted details. **Large text (24px+) or decoration only** | 3.5 : 1 |
| `copper` | `#A14B06` | Script accent. **Large text only** | 4.0 : 1 |
| `bark` | `#553720` | Body text, eyebrows, quote rules | 7.3 : 1 |
| `espresso` | `#491A01` | Headlines | 9.9 : 1 |
| `ink` | `#131209` | Primary buttons, darkest text | 12.7 : 1 |
| `ink-soft` | `#272727` | Primary button hover | — |

Rules: backgrounds are flat (no gradients). Copper is an accent, so use at most one copper element per screen.

## Typography

Three fonts, each with one job:

| Role | Font | CSS | Use |
|---|---|---|---|
| Display | **Anton** | `font-display` | Big uppercase headlines only |
| Script | **Mrs Saint Delafield** (may change, see `/style-guide`) | `font-script` | One or two accent words over a display headline |
| Body | **Montserrat** | `font-sans` (default) | Everything else: body, buttons, eyebrows |

### Text styles

Mobile size → desktop size (from `lg`, 1024px). Always use these classes, or the components that wrap them.

| Class | Spec | Component |
|---|---|---|
| `display-1` | Anton, 48 → 60 (640px) → 96px, lh 0.9, uppercase | `<Display level={1}>` (hero only) |
| `display-2` | Anton, 48 → 72px, lh 0.9, uppercase | `<Display level={2}>` (section titles) |
| `display-3` | Anton, 36 → 48px, lh 1, uppercase | `<Display level={3}>` |
| `script-1` | Script, 72 → 128px | `<Script>` |
| `script-2` | Script, 48 → 72px | `<Script level={2}>` |
| `eyebrow` | Montserrat 500, 12 → 14px, tracking 0.08em, uppercase | `<Eyebrow>` |
| `body-lg` | Montserrat 400, 18/28 | `<Text size="lg">` |
| `body` | Montserrat 400, 16/24 | `<Text>` |
| `body-sm` | Montserrat 400, 14/20 | `<Text size="sm">` |
| `label` | Montserrat 600, 14/20 | — |
| `button-md` / `button-sm` | Montserrat 600, 16/24 · 14/20 | `<Button>` |

### The signature composition

Script word layered over a display headline, slightly rotated, overlapping the first line:

```tsx
<h1 className="flex flex-col items-center">
  <Script className="relative z-10 -mb-2 -rotate-3 lg:-mb-6">Building</Script>{" "}
  <Display as="span" level={1} className="block">Software<br />that lasts</Display>
</h1>
```

Keep the script inside the same heading so screen readers read one sentence.

## Spacing, radius, motion

- **Spacing** (Tailwind steps only): 0, 0.5 (2px), 1 (4px), 2 (8px), 3 (12px), 4 (16px), 6 (24px), 8 (32px), 10 (40px), 12 (48px), 16 (64px), 20 (80px), 24 (96px).
- **Radius:** `rounded-full` for buttons and pills, `rounded-2xl` for cards. Nested radius = outer minus gap.
- **Motion:** easing `ease-out-expo` = `cubic-bezier(0.22, 1, 0.36, 1)`. 500ms for movement, 300ms for colour and opacity. Animate only `transform` and `opacity`.
- **Entrance:** add `reveal` and stagger with `[--reveal-delay:80ms]`. Rises 32px and fades in. Under `prefers-reduced-motion` it only fades.

## Components (`src/components/ui/`)

| Component | Props | Notes |
|---|---|---|
| `Display` | `level` 1–3, `as` | Espresso by default |
| `Script` | `level` 1–2, `as` | Copper, `display: block` |
| `Eyebrow` | `as` | Bark, tracked caps |
| `Text` | `size` lg / md / sm, `as` | Bark, `text-pretty` |
| `Quote` | children (use `<br />` for line breaks) | Poster quote with `“ ”` ornament rules |
| `Button` | `href`, `variant` primary / secondary, `size` md / sm | No `href` renders disabled, so there are no dead links. Full hover, active and focus states |

## Imagery

- Hero photos live in `public/images/` (`hero-pale-desktop.jpg` from 1024px, `hero-pale-mobile.jpg` below), served with art direction via `getImageProps`.
- Text over photos goes in the empty wall above the figure, never over the figure's head.
- The originals show a sports-team logo on the cap. Prefer a logo-free edit before launch.
