# Website redesign plan: "Monograph"

Build spec for Claude Code to redesign and redeploy https://abhyudayportfolio.vercel.app from this folder (`abhyuday-dev`, GitHub repo `Abhyuday14/PortfolioVengeance`). It replaces the earlier version of this file.

**How to start.** Open Claude Code in this folder and say: **"Read WEBSITE_UPDATE_PLAN.md and build it phase by phase. Stop at every checkpoint and show me screenshots at 1440px and 390px."**

**How this plan was made.** Four specialist reviews ran in parallel: design direction, motion and experience, engineering and performance, and content. Their recommendations are merged here. Where they disagreed, the "Decisions" table records which way it went. The engineering numbers (bundle sizes, Lighthouse scores, font sizes, image sizes) were measured on this repo on 14 October 2026.

---

## The brief

**Goal:** "Extremely posh and elegant, an experience, and very professional."

**Audience:** recruiters and hiring managers at consulting firms, AI governance, compliance and pharma-tech firms, and ML teams. They usually arrive from a LinkedIn link, often on a phone, and decide within a minute.

**Concept:** the site is laid out like a privately printed research monograph or a private bank's annual review: warm paper, near-black ink, one oxblood accent, a large serif, numbered sections, hairline rules and figure captions. The polish comes from the typesetting, not from effects. The research paper is the strongest asset, so it's presented as a typeset feature with a real figure. Motion is quiet and deliberate: things arrive, nothing performs.

The Gotham theme is retired: no rain, film grain, blood red, "TRACKING!!" box, "batman" easter egg, GIF, or "Inspired by Gotham" line.

## Decisions

These are where the specialist reviews disagreed. Follow them.

| Question | Decision |
|---|---|
| Light or dark | Light "Paper" is the default. Dark "Ink" follows the system setting, with a toggle in the nav. |
| Gotham theme, rain, grain, red, easter egg | All retired. |
| Section order | Hero, then 01 Research, 02 Experience, 03 Projects, 04 About, 05 Skills, 06 Contact. Evidence comes first. |
| Projects | An editorial index list. No cards. |
| Skills | Typeset rows of text. No tags or pills. |
| Experience | A ledger layout. No vertical timeline line. |
| Scroll-linked effects | One only: the hero gently fades as you scroll away. |
| Smooth scrolling | Lenis, on desktop with a mouse or trackpad only. Phones and touch screens keep native scrolling. |
| Custom cursor | No. |
| Hero entrance | CSS keyframes, so the name animates even before JavaScript loads. |
| Results chart | Rebuilt as an inline SVG from the real data, covering all 5 strategies and all 3 models. |
| Architecture | Stay on Vite and React, and add build-time prerendering. No migration to Astro. |
| Fonts | Newsreader (serif) and Instrument Sans, self-hosted. Inter and JetBrains Mono are removed. |

## Ground rules for Claude Code

1. **Work on a branch.** Run `git checkout -b redesign-monograph` before any edit. Commit once per phase with a specific message. Never commit to `main` before Phase 12.
2. **No invented content.** Every word and number on the site comes from `src/content.js` and `src/data/results.json` exactly as given in this file. If something seems missing, ask Abhyuday. Never add metrics, clients, testimonials or claims.
3. **No em dashes** (`—`) in visible text. Date ranges use an en dash (`–`); otherwise use commas, colons or a middle dot (`·`). Headings are in sentence case.
4. **Use the tokens.** Use only the design tokens in this file. No arbitrary colour classes like `text-[#123456]`. No numbers inside `transition` props outside `src/motion.js`.
5. **Keep it green.** After every phase, `npm run lint` and `npm run build` must pass.
6. **Show your work.** At each checkpoint, run `npm run preview` and take screenshots at 1440×900 and 390×844 (Playwright is fine), then show them to Abhyuday before continuing.
7. **Don't deploy without approval.** Do nothing in Phase 12 until Abhyuday says to deploy.

---

## Phase 0: decisions for Abhyuday

Raise these at the start. Record the answers. Do not resolve them yourself.

1. **The resume contradicts the repo.** The resume says the hallucination project evaluated "RAG, self-consistency, semantic filtering" and cut hallucination "by 18%". The research repo tests 5 prompting strategies and contains neither. Fix the resume (`public/Abhyuday_Sachdeva_Resume.pdf`) before deploying, because the site links to both.
2. **Headline.** The site's hero label reads "ML validation and AI governance", which the experience supports. The resume says "Digital Transformation · Machine Learning · Technology Consulting". Keep the site wording, or switch?
3. **Photo (decided).** Keep the current photo for now, in About only, never in the hero. Abhyuday will supply a new portrait later. To swap it, replace `src/assets/Abhyuday.jpeg` with the new file under the same name, then run `node scripts/images.mjs` and rebuild. Make sure the script works for any 3:4 or 4:5 source, so no code change is needed.
4. **Employer name.** Confirm the exact capitalisation the firm uses ("Trustbridge Compliance" vs "TrustBridge Compliance").
5. **Paper status.** It stays "Under review, 2026" until a venue accepts it. The research copy comes from the revised manuscript (`main.pdf`, 28 September 2026). Its figures match `table_main.csv` exactly. Do not host the manuscript PDF on the site until it's accepted or posted as a preprint.
6. **Skills you can't back up yet.** These have no supporting project or role on the site: SQL, R, C++, XGBoost (named), RAG, Seaborn, Tableau, MySQL, MongoDB, Linux, pytest, Digital strategy. Keep each one only if you can defend it in an interview.
7. **Phone number.** It's on the public resume. Keep it?
8. **Easter egg.** It's retired. If you'd like a tiny, tasteful one kept, say so (Appendix B has a spec).
9. **UI copy.** Approve the form success and error messages in `content.js`.

---

## Design system

### Colour tokens

Every contrast ratio below was calculated, not estimated.

**Light (default)**

| Token | Hex | Use | Contrast on paper |
|---|---|---|---|
| `paper` | `#F5F2EB` | Page background | n/a |
| `surface` | `#EDE8DF` | Research band, raised areas | n/a |
| `ink` | `#1C1A17` | Primary text, primary button fill | 15.53:1 |
| `ink-2` | `#4D483F` | Secondary text | 8.12:1 |
| `ink-3` | `#6E675C` | Muted text, captions, placeholders | 5.00:1 (4.58:1 on surface) |
| `accent` | `#8B2E22` | Oxblood: links, active state, status label, focus | 7.48:1 |
| `accent-hover` | `#6F2219` | Hover state of the accent | 9.79:1 |
| `rule` | `#D9D2C5` | Decorative hairlines only | decorative |
| `rule-strong` | `#857D70` | Input borders, idle link underline | 3.64:1 (meets the 3:1 rule for UI) |
| `selection` | `#E6D2C8` | Text selection background | ink on it: 11.92:1 |
| `focus` | `#8B2E22` | 2px focus ring, 3px offset | 7.48:1 |

**Dark** (applies under `[data-theme="dark"]`, or with `prefers-color-scheme: dark` when no theme is chosen)

| Token | Hex | Contrast on paper |
|---|---|---|
| `paper` | `#161512` | n/a |
| `surface` | `#1F1D19` | n/a |
| `ink` | `#EEE9DF` | 15.09:1 |
| `ink-2` | `#BDB5A7` | 8.98:1 |
| `ink-3` | `#958D80` | 5.56:1 |
| `accent` | `#D99A86` | 7.75:1 |
| `accent-hover` | `#E9B5A3` | 10.09:1 |
| `rule` | `#36322B` | decorative |
| `rule-strong` | `#6B6459` | 3.12:1 |
| `selection` | `#4A2A22` | n/a |
| `focus` | `#D99A86` | n/a |

**Chart colours**

| Segment | Light | Dark |
|---|---|---|
| Correct | `#1C1A17` | `#EEE9DF` |
| Hallucinated | `#8B2E22` | `#D99A86` |
| Abstained | `#CFC7B8` plus 45° hatching in `rule-strong` | `#4A453D` |

Segments are separated by a 2px gap in the paper colour, and every bar is labelled directly, so colour is never the only signal.

**Implementation.** Tokens live in `src/styles/index.css` under Tailwind 4 `@theme` (`--color-paper`, `--color-ink`, and so on). Dark values override the custom properties under `[data-theme="dark"]` and `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { … } }`. Use `@theme static` if JavaScript reads any token. Add `scripts/contrast.mjs`, which recomputes every text/background pair above and fails if any text pair drops below 4.5:1, or any UI pair below 3:1.

### Typography

**Families**

| Role | Font | Package and files |
|---|---|---|
| Display, headings and all body text | Newsreader | `@fontsource-variable/newsreader`. Use the `opsz` roman file (optical size 6–72, weight 200–800) and the italic file. |
| Labels, nav, buttons, captions, dates, chart numerals | Instrument Sans | `@fontsource-variable/instrument-sans`, `wght` file |

Remove Inter, JetBrains Mono and the Google Fonts `<link>`. Fraunces was considered and rejected as too whimsical for this audience.

**Type scale** (fluid between 390px and 1440px)

| Step | `font-size` | Font and weight | Line height | Letter spacing |
|---|---|---|---|---|
| `display-xl` | `clamp(3.75rem, 1.8rem + 8vw, 9rem)` (60→144px) | Newsreader 300 | 0.95 | -0.025em |
| `display` | `clamp(2.5rem, 1.5714rem + 3.8095vw, 5rem)` (40→80px) | Newsreader 300 | 1.0 | -0.02em |
| `h2` | `clamp(1.875rem, 1.4571rem + 1.7143vw, 3rem)` (30→48px) | Newsreader 350 | 1.1 | -0.015em |
| `h3` | `clamp(1.375rem, 1.2357rem + 0.5714vw, 1.75rem)` (22→28px) | Newsreader 450 | 1.2 | -0.005em |
| `body-lg` | `clamp(1.1875rem, 1.1179rem + 0.2857vw, 1.375rem)` (19→22px) | Newsreader 400 | 1.5 | 0 |
| `body` | `clamp(1.0625rem, 1.0393rem + 0.0952vw, 1.125rem)` (17→18px) | Newsreader 400 | 1.6 | 0 |
| `small` | `0.9375rem` (15px) | Instrument Sans 400 | 1.5 | 0.005em |
| `label` | `0.75rem` (12px), uppercase | Instrument Sans 500 | 1.3 | 0.12em |

**Typesetting rules**

- **Optical sizing.** Set `font-optical-sizing: auto` on Newsreader.
- **Measure.** Body text is capped at `36rem` (about 66 characters); `body-lg` at `40rem`.
- **Numerals.** Use `font-variant-numeric: tabular-nums` for dates, section numbers and chart labels.
- **OpenType features.** Turn on `kern` and `liga` everywhere, and add `case` on uppercase labels.
- **Missing glyphs.** Neither font contains κ (Greek kappa), so keep `Georgia` in the serif stack as the fallback for it and check it visually. The ↗ arrow is set in Instrument Sans, because Newsreader lacks it.

**Font weight budget**

Newsreader's `opsz` roman file is about 132 KB. Subset it with `pyftsubset` from fonttools (`pip install fonttools brotli`), keeping both axes, to `U+0000-00FF, U+2010-2027, U+2030-205E, U+20AC`. The target is 90 KB or less.

If the subset still exceeds 90 KB, use the `wght`-only Newsreader file (58 KB) and drop optical sizing.

Preload only the Newsreader roman file. The italic and Instrument Sans files load normally.

**Fallback metrics** (avoid layout shift while fonts load). Generate fallback `@font-face` rules with `fontaine` (`generateFontFace`): Newsreader falls back to Times New Roman with `size-adjust: 105.4769%`, `ascent-override: 69.6835%`, `descent-override: 25.124%`. Generate Instrument Sans's values against Arial the same way. Each family token lists its fallback face second, for example `"Newsreader Variable", "Newsreader fallback", Georgia, serif`.

### Space, grid and breakpoints

**Scale.** The base unit is 4px. The spacing scale is 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 and 160px.

**Breakpoints.** 640, 768, 1024, 1280 and 1440px (set Tailwind's `2xl` to 1440).

**Grid**

| Viewport | Columns | Gutter | Side margins |
|---|---|---|---|
| 1280px and up | 12 | 24px | 72px |
| 1024px | 12 | 24px | 48px |
| 768px | 8 | 20px | 40px |
| Under 768px | 4 | 16px | 20px |

The container is 1440px wide, with a 1296px content area. Paper runs to the edges of the screen.

**Section padding** (top and bottom): 144px on desktop, 112px on tablet, 80px on mobile. Delete every `min-h-screen`.

**Desktop section layout.** Columns 1–2 hold the section label, sticky at `top: 96px`. Content sits in columns 3–12.

### Detailing

**Rules and numbering**
- Each section opens with a 1px `ink` rule across the full content width. Rows inside a section are separated by 1px `rule` lines.
- No thick borders and no coloured side bars.
- Section labels read as number, middle dot, name, for example `02 · Experience`, in the label style with tabular figures. The nav uses the same numbers.

**Figures**
- The caption starts with `Fig. 1` in the label style, then the caption text in `small`, `ink-2`, then a source line in `ink-3`. It sits left-aligned under the figure.

**Shape and texture**
- Corner radius is 0 everywhere. No shadows. No textures or grain. No custom cursor.

**Portrait**
- Crop to 4:5, with the eyes on the upper third.
- Tone it in the image script, not with CSS filters: a warm monochrome duotone, shadows `#1C1A17`, highlights `#F5F2EB`, soft contrast.
- It sits in About, columns 3–6, with the caption "Abhyuday Sachdeva · Jaipur".

**Links and buttons**

| Element | Spec |
|---|---|
| Primary button | 48px tall, padding 0 24px, `ink` fill with `paper` text. Instrument Sans 14px, weight 500, tracking 0.02em. On hover the fill becomes `accent` over 160ms. |
| Secondary button | Transparent with a 1px `ink` border. On hover it fills with `ink` and the text turns `paper`. |
| Text link | `ink` text with an idle 1px `rule-strong` underline (a background gradient offset 0.15em). On hover and focus, a 1px `accent` underline grows from left to right over 320ms and the text turns `accent`. |
| Focus (all) | `:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 3px }`. Never remove outlines. |

Every interactive element has a touch target of at least 44×44px on mobile.

---

## Experience and motion

**How a visit should feel**

1. **Load.** The name rises into place in under a second, composed and certain.
2. **Scrolling away.** The hero quietly fades.
3. **Research.** The pace slows. Three large figures, then the chart's bars draw once, with hallucination and abstention side by side.
4. **Experience and projects.** These arrive calmly; a hover draws a fine underline.
5. **About.** The person and the portrait, introduced plainly.
6. **Contact.** The only part that talks back, and every state answers clearly.

**Motion tokens** (`src/motion.js`, mirrored as CSS custom properties in `index.css`)

| Token | Values |
|---|---|
| `DUR` | micro 160ms, standard 320ms, large 640ms, hero 760ms. Exits run at 0.7× the entry duration, never more than 240ms. |
| `EASE.settle` | `cubic-bezier(0.25, 1, 0.5, 1)`, for all reveals |
| `EASE.emphasis` | `cubic-bezier(0.16, 1, 0.3, 1)`, for hero masks and the chart only |
| `EASE.standard` | `cubic-bezier(0.65, 0, 0.35, 1)`, for anything that goes both ways (nav, menu, form) |
| `STAGGER` | 60ms default, 80ms in the hero, 40ms for dense lists. The total stagger never exceeds 360ms. |
| `DIST` | 12px small, 16px standard, 24px maximum. Masks move 100% of the element's own height. |

No springs, bounce or overshoot.

**When things animate**

| Type | Rule |
|---|---|
| Default (on entry) | Reveal once when entering the viewport: `whileInView`, `viewport={{ once: true, amount: 0.2, margin: '0px 0px -10% 0px' }}`. |
| Scroll-linked | The hero exit only. |
| Hover | Only on things you can click. |
| Ambient | Nothing loops. |

**Hero entrance** (CSS keyframes, so it works before JavaScript loads)

| Time | Element | Animation |
|---|---|---|
| 0–760ms | "Abhyuday" | Rises from a mask (`translateY(100%)` to 0), `emphasis` |
| 80–840ms | "Sachdeva" | Same |
| 0–400ms | Hero label | Opacity 0→1 |
| 320–880ms | Intro | Opacity 0→1 with a 12px rise |
| 400–960ms | Buttons | Same |
| 600–1500ms | Closing hairline rule | Draws left to right (scaleX 0→1) |

- Everything finishes by 1.5s, and there is no preloader.
- Pad each mask with `.mask { display:inline-block; overflow:hidden; padding-bottom:.14em; margin-bottom:-.14em; vertical-align:top }` so the descender in "y" isn't clipped.
- Keep the text as real text nodes, never split into letters.

**Hero exit.** `useScroll({ target: hero, offset: ['start start', 'end start'] })` maps progress 0–0.6 to opacity 1→0, and 0–1 to y 0→-48px. Under reduced motion, branch with `useReducedMotion()` and use static styles, because `MotionConfig` doesn't cover `useTransform`.

**Smooth scrolling (Lenis 1.3.x)**
- Mount `ReactLenis` only when `(hover: hover) and (pointer: fine)` matches and reduced motion is off.
- Options: `{ autoRaf: false, lerp: 0.1, smoothWheel: true, syncTouch: false, anchors: { offset: -72 }, allowNestedScroll: true, stopInertiaOnNavigate: true }`.
- Drive it from Motion's frame loop: `frame.update(({timestamp}) => lenis.raf(timestamp), true)`, cancelled on cleanup.
- Import `lenis/dist/lenis.css`.
- Without Lenis, use `html { scroll-behavior: smooth; scroll-padding-top: 72px }`, which reverts to `auto` under reduced motion. Never combine CSS smooth scrolling with Lenis.

**Nav behaviour**
- At the top of the page the nav is transparent. Once `scrollY > 24`, it gets a solid `paper` background at 96% opacity and a 1px `rule` bottom border, transitioning over 240ms. No `backdrop-filter`.
- It hides on downward scroll (when `scrollY > 640` and the change is more than 8px) and comes back on upward scroll, near the top, when it contains focus, or while the menu is open.
- The active section gets `aria-current="true"` and a 1px `accent` underline, driven by one IntersectionObserver with `rootMargin: '-45% 0px -50% 0px'`.

**Anchor links.** `scrollToSection(id)` uses Lenis if it's running, otherwise `scrollIntoView`. It then calls `history.replaceState`, and when scrolling ends (with a 900ms fallback) it focuses that section's `h2` (`tabIndex={-1}`, `preventScroll`).

**Section reveals**
- `<Reveal>` animates opacity 0→1 with a 16px rise, `large`, `settle`.
- Headings use a single block mask. Paragraphs are never split.
- Anything already scrolled past when the page loads renders in its final state.
- Make all reveals visible under `@media print`, under `@media (scripting: none)`, and via a `<noscript><style>[data-reveal]{opacity:1!important;transform:none!important}</style></noscript>` in `index.html`.

**Research block**
- The pull figures reveal with a 60ms stagger.
- Chart bars draw once at `amount: 0.4`. Each segment animates `scaleX` 0→1 from the left over 640ms (`emphasis`), segments 120ms apart, rows 80ms apart, with labels fading in 200ms after their bar. The whole chart finishes within 1.4s.
- Honesty rules:
  - Numbers render at their final values from the first frame; only `transform` animates.
  - No count-up numbers.
  - Every bar uses the same 0–100% scale.

**Projects (desktop hover only)**
- The title's underline draws and the ↗ arrow nudges 4px. The row itself doesn't move, lift or glow.
- On touch screens, a tap simply opens the link.

**Contact form states.** The form submits with `fetch` to Formspree (`Accept: application/json`), so the page never navigates away.

| State | Behaviour |
|---|---|
| Idle | Visible labels, underline-style fields. |
| Focus | The bottom border goes from 1px `rule-strong` to 2px `ink` without changing the layout. |
| Validating | On blur and on submit; after the first error, re-validate as the user types. Errors appear in a reserved 20px slot. |
| Sending | The button keeps its width and shows `aria-disabled`; double-submit is blocked. |
| Success | The form fades out and the message fades in at the same height; focus moves to the message. |
| Error | Typed text is kept; a `role="alert"` message appears. |

The copy for every state is in `content.js`. Status messages are announced with `aria-live="polite"`.

**Reduced motion**
- Wrap the app in `<MotionConfig reducedMotion="user">`.
- Branch manually with `useReducedMotion()` for the hero exit.
- Add this CSS block:
  ```css
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto }
    *, ::before, ::after { animation-duration:.01ms !important; animation-iteration-count:1 !important; transition-duration:.01ms !important }
  }
  ```

**Performance rules**
- Animate only `transform` and `opacity`.
- Use `LazyMotion features={domAnimation} strict` with `m.*` components only.
- No React state updates on every scroll frame.
- Put `will-change` on the nav only.
- Never animate more than 8 elements at once.

**Motion anti-patterns (never do these)**
- Splitting text into letters; count-up numbers.
- Scroll-jacking, snapping or pinning; parallax on text.
- Bounce or elastic easing, scale-pop entrances, 3D tilt.
- Anything that flashes or flickers more than 3 times per second.
- Preloaders or full-screen takeovers; custom or magnetic cursors.
- Hover effects on things you can't click.
- Animating `width`, `height`, `top`, `left`, `box-shadow`, `filter` or `backdrop-filter`.
- Global key listeners.

---

## Page structure and components

`App.jsx` renders, in order: `SkipLink`, `Nav`, `<main id="content" tabIndex={-1}>` (containing Hero, Research, Experience, Projects, About, Skills, Contact), then `Footer`.

**Skip link.** The first focusable element, visible on focus, labelled "Skip to content".

**Nav**
- 64px tall on desktop, 56px on mobile, fixed.
- Left: the wordmark "Abhyuday Sachdeva" (Newsreader 18px, weight 450). It links to the top.
- Right: the links `01 Research`, `02 Experience`, `03 Projects`, `04 About`, `05 Skills`, `06 Contact` (Instrument Sans 13px, weight 500, `ink-2`; the active one in `ink` with the accent underline). Then a "Resume" text link, then a 20px sun/moon theme toggle with an `aria-label`.
- Below 1024px, a "Menu" text button opens a full-screen paper overlay listing the links at `h2` size, each with its number.
- The overlay traps focus, closes on Esc, returns focus to the button, and sets `aria-expanded` and `aria-controls`. It locks scrolling while open (`lenis.stop()`, or `overflow: clip` on `html`).

**Theme toggle**
- `public/theme-init.js` is a tiny external script loaded synchronously in `<head>`. It reads `localStorage['theme']` (wrapped in try/catch) and sets `data-theme` on `<html>` before the page paints.
- The toggle writes the same key.
- With no stored choice, CSS follows `prefers-color-scheme`.

**Hero**
- Padding: 176px top and 128px bottom on desktop; 112px and 80px on mobile. Not full-screen height.
- Content, top to bottom:
  1. `hero.label` in the label style, `ink-2`.
  2. The name on two lines at `display-xl`, in an `h1`.
  3. `hero.intro` at `body-lg`.
  4. Two buttons: "Read the research" (primary, to `#research`) and "Download resume" (secondary).
- **At 1440px:** "Abhyuday" spans columns 1–7, and "Sachdeva" is indented to start at column 2. The intro sits in columns 8–12, aligned with the baseline of the second name line, with the buttons under it.
- **At 390px:** label, name (60px on two lines), intro, then the buttons stacked full width with 16px between them.
- **Teaser.** A full-width `ink` rule closes the hero. Under it, in columns 3–9: the label "Current research", `research.title` in italic `small` serif, then `research.status`. The teaser links to `#research`.

**Section header (shared component)**
- A full-width `ink` rule, then 24px of space, then the sticky label (columns 1–2), then the `h2` (columns 3–10).
- The `h2` has `tabIndex={-1}` and `scroll-margin-top: 88px`.
- Each `<section>` uses `aria-labelledby`.

**01 Research**
- A full-bleed `surface` band, with 96px padding on desktop and 64px on mobile.
- Content, top to bottom:
  - The status in the label style, `accent`.
  - The title at `h2` size, in columns 3–11.
  - The authors in `small`: Abhyuday's name in `ink`, the others in `ink-2`.
  - The summary at `body-lg`, in columns 3–9.
  - Three findings in 3 columns of 3 grid columns each, starting at column 3 and stacking on mobile. Each finding has a top hairline, the label "Finding 1/2/3", the `pull` figure at `display` size (Newsreader 300) and the finding text in `body`.
  - `research.takeaway` under the findings at `h3` size in Newsreader italic, columns 3–10, as a pull quote between two `rule` hairlines.
  - `research.method` in `small`, `ink-2`, under the chart and above the limits line, with the label "Method".
- **Fig. 1** is `ResultsChart`, an inline SVG built from `src/data/results.json`:
  - Three small multiples, one per model. Each shows 5 horizontal 100% stacked bars, one per strategy, with segments in the order correct, hallucinated, abstained.
  - Each bar ends with its hallucination rate as a direct label in tabular figures.
  - Desktop shows the 3 panels side by side; mobile stacks them, with full-width bars 20px tall.
  - Include a visually hidden `<table>` with the same data.
  - Caption and source line come from `content.js`.
- The limits line goes under the findings, in `small`, `ink-3`.
- Links: "Code and data" (to `research.repo`) and "Cite" (opens a `<details>` panel containing `research.bibtex` in a `<pre>`, with a Copy button).

**02 Experience (ledger)**
- Each entry: the dates in `small` tabular figures (columns 3–4); the role as an `h3`; "company · location" in `small`, `ink-2`; then the points as body text with a hanging indent and an 8×1px `rule-strong` dash as the marker.
- A hairline separates entries.

**03 Projects (editorial index)**
- Each row has:
  - Columns 1–2: the label `P.01`.
  - Columns 3–6: the title as an `h3`, with the `tagline` underneath in italic `small`.
  - Columns 7–11: `desc` in body text, then the `tech` line in `small`, `ink-3`.
  - Column 12: the links ("Open app ↗", "Visit site ↗", "Code ↗") as text links. They open in a new tab with `rel="noopener noreferrer"`.
- `note` (if present) appears in `small`, `ink-3`.
- On mobile, the parts stack in order.

**04 About**
- Portrait (`Portrait.jsx`, using `<picture>`) in columns 3–6, with its caption.
- The bio in columns 7–12, at `body-lg`.
- Then "Education" and "Positions of responsibility" as label-styled subheads, each followed by ledger rows. Leadership roles are set at `body-lg`, not `h3`, so they sit below Experience in visual weight.

**05 Skills.** One row per group: the group title as a label in columns 3–4, and the items as one run of Newsreader `body-lg`, joined with " · " in `ink-3`, in columns 5–12. A hairline goes between rows.

**06 Contact**
- `contact.heading` at `display` size, then `contact.line` in `body-lg`.
- The email at `h2` size as a `mailto:` link, with a small "Copy" text button that switches to "Copied" for 2 seconds (announced via `aria-live`).
- GitHub and LinkedIn as text links.
- The form in columns 8–12:
  - Visible labels; underline-only fields at least 48px tall; `autocomplete="email"`.
  - A hidden honeypot `_gotcha` and a hidden `_subject` with the value "Portfolio enquiry".
  - On error, `aria-invalid` and `aria-describedby` are set, and focus moves to the first invalid field.

**Footer**
- `paper` background, an `ink` rule at the top, 48px of padding.
- One line in `small`: the `footer.line` text plus a "Source on GitHub" link.
- A second line in `ink-3`: `footer.colophon`.
- No red band.

**404 page.** `public/404.html` is a static page in the same type and colours, with the 404 copy from `content.js` repeated as plain HTML.

**Remove completely:** `Rain.jsx`, `EasterEggs.jsx`, the noise overlay, the scroll progress bar, the GIF, and every Gotham reference.

---

## Content (copy exactly)

### `src/content.js`

```js
export const site = {
  url: "https://abhyudayportfolio.vercel.app/",
  name: "Abhyuday Sachdeva",
  email: "abhyuday1124@gmail.com",
  resume: "/Abhyuday_Sachdeva_Resume.pdf",
  location: "Jaipur",
  links: {
    github: "https://github.com/Abhyuday14",
    linkedin: "https://www.linkedin.com/in/abhyuday-sachdeva-975594230/",
    source: "https://github.com/Abhyuday14/PortfolioVengeance",
  },
};

export const head = {
  title: "Abhyuday Sachdeva · ML validation and AI governance",
  description:
    "Abhyuday Sachdeva, research analyst in ML model validation and AI governance. Computer science graduate from VIT (2026) with research on LLM hallucination.",
};

export const nav = [
  { id: "research", n: "01", label: "Research" },
  { id: "experience", n: "02", label: "Experience" },
  { id: "projects", n: "03", label: "Projects" },
  { id: "about", n: "04", label: "About" },
  { id: "skills", n: "05", label: "Skills" },
  { id: "contact", n: "06", label: "Contact" },
];

export const hero = {
  label: "ML validation and AI governance",
  intro:
    "I'm a research analyst at Trustbridge Compliance, working on how machine learning models are validated and governed in regulated industries. I studied computer science at VIT and graduated in 2026.",
  ctaPrimary: "Read the research",
  ctaSecondary: "Download resume",
  teaserLabel: "Current research",
};

export const research = {
  title:
    "A Systematic Evaluation of Prompting Strategies for Hallucination Mitigation in LLMs",
  authors: ["Abhyuday Sachdeva", "Prisha Verma", "Sendhil Kumar K. S."],
  affiliation: "School of Computer Science and Engineering, Vellore Institute of Technology",
  status: "Under review, 2026",
  summary:
    "Prompting is the cheapest way to reduce hallucination in language models, but fewer errors often just means more refusals. I compared 5 strategies (plain question, expert persona, abstain-if-unsure, evidence request and premise verification) on Llama 3.1 8B, Qwen2.5 7B and gpt-oss-120b, using 100 questions built around false premises, fictional entities, post-cutoff events, obscure facts and ambiguity, plus answerable control questions. All 1,500 responses were labelled correct, hallucinated or abstained and compared with paired tests.",
  findings: [
    {
      pull: "60–90%",
      text:
        "Telling the model to answer only when certain cut hallucination by 60–90% on every model (Llama 21% to 3%, Qwen 35% to 8%, gpt-oss-120b 31% to 12%), but mostly by refusing. Abstention rose to 73%, 72% and 39%, including on false-premise questions the models could otherwise correct.",
    },
    {
      pull: "31% to 15%",
      text:
        "Asking gpt-oss-120b to check the question's premises first cut its hallucination from 31% to 15%, the lowest rate of any strategy that does not rely on refusal, with the most correct answers in the study (84%). It did not help the two smaller models.",
    },
    {
      pull: "70 citations",
      text:
        "Expert personas had no effect on hallucination. Asking for sources did not help the smaller models and produced 70 citations that were fabricated or misattributed, across 300 responses.",
    },
  ],
  takeaway:
    "Mitigation prompts should be judged on abstention and on errors among answered questions, not on hallucination rate alone.",
  method:
    "Labels were proposed by an AI assistant under a written rubric, checked by an independent second pass (96.7% agreement, Cohen's κ = 0.94) and a blind sample labelled by me (29 of 35, 83%). A string-matching scorer would have missed a third of the hallucinations.",
  limits:
    "100 author-written English questions on general knowledge, three models, one run per prompt with greedy decoding.",
  figureCaption:
    "Share of correct, hallucinated and abstained responses for each strategy and model. Each bar is 100 responses.",
  figureSource:
    "Source: Table 3 of the manuscript; data in results/table_main.csv, Reducing-Hallucination repository.",
  repo: "https://github.com/Abhyuday14/Reducing-Hallucination",
  bibtex: `@misc{sachdeva2026prompting,
  title  = {A Systematic Evaluation of Prompting Strategies for Hallucination Mitigation in {LLMs}},
  author = {Sachdeva, Abhyuday and Verma, Prisha and Sendhil Kumar, K. S.},
  year   = {2026},
  note   = {Manuscript under review},
  howpublished = {\\url{https://github.com/Abhyuday14/Reducing-Hallucination}}
}`,
};

export const experience = [
  {
    company: "Trustbridge Compliance",
    role: "Research Analyst",
    date: "Aug 2026 – Present",
    location: "Remote",
    points: [
      "Research on validation frameworks and governance standards for ML models in regulated environments, covering GAMP 5, CSA and CSV.",
      "Prototyping an AI monitoring dashboard that tracks model drift, audit trails and data integrity.",
    ],
  },
  {
    company: "SAG Infotech",
    role: "AI Developer Intern",
    date: "May 2026 – Aug 2026",
    location: "Jaipur",
    points: [
      "Built a real-time face detection and recognition system with OpenCV and the face_recognition library.",
      "Integrated it into the existing codebase, so identity checks no longer needed a manual lookup.",
    ],
  },
];

export const projects = [
  {
    title: "Quant Signal Screener Agent",
    tagline: "A stock screener with an LLM agent on top.",
    desc:
      "Scores each ticker in a watchlist buy, sell or hold from four indicator checks: trend, RSI, MACD and Bollinger Bands. A LangChain agent, using an open-weight model through OpenRouter, answers plain-English questions about a ticker, and a Streamlit app holds the watchlist and the chat.",
    tech: ["Python", "LangChain", "yfinance", "Streamlit", "OpenRouter"],
    links: [
      { label: "Open app", href: "https://quant-signal-screener-agent-exickxz7brjnxjhjzhqhyp.streamlit.app/" },
      { label: "Code", href: "https://github.com/Abhyuday14/quant-signal-screener-agent" },
    ],
    note: "Educational project, not investment advice.",
  },
  {
    title: "F1 Race Predictor",
    tagline: "Formula 1 finishing times from qualifying data.",
    desc:
      "Predicts finishing times from qualifying times and historical sector performance using gradient boosting. A Streamlit interface takes the race details as input.",
    tech: ["Python", "FastF1", "scikit-learn", "Streamlit"],
    links: [{ label: "Code", href: "https://github.com/Abhyuday14/f1-race-predictor" }],
  },
  {
    title: "JournalistShalu",
    tagline: "A blogging platform and portfolio.",
    desc:
      "Built with TypeScript and React. A Supabase-backed admin area handles writing and editing posts.",
    tech: ["TypeScript", "React", "Supabase"],
    links: [
      { label: "Visit site", href: "https://journalist-shalu.vercel.app/" },
      { label: "Code", href: "https://github.com/Abhyuday14/JournalistShalu" },
    ],
  },
];

export const about = {
  bio:
    "I studied computer science at VIT, graduating in 2026. My final-year research measured how well different prompting strategies reduce hallucination in large language models. At SAG Infotech I built a real-time face recognition system as an AI developer intern. I now work as a research analyst on how machine learning models are validated and governed in regulated environments, under GAMP 5, CSA and CSV.",
  portraitCaption: "Abhyuday Sachdeva · Jaipur",
  education: [
    { title: "B.Tech in Computer Science", place: "Vellore Institute of Technology", date: "May 2026" },
    { title: "Class XII and X, CBSE", place: "The Palace School, Jaipur", date: "2022 and 2020" },
  ],
  leadership: [
    {
      role: "Finance Lead",
      org: "Computer Society of India (CSI), VIT",
      date: "May 2024 – Feb 2025",
      text:
        "Budgeting, fund allocation and financial reporting for 5+ technical events with 1,200+ participants. I also built Excel expense-tracking models for the club treasury.",
    },
    {
      role: "Project Lead",
      org: "ISTE, VIT",
      date: "Aug 2023 – Apr 2024",
      text:
        "Led a developer team in Agile-style sprints, delegating tasks, mentoring junior members and reporting progress to stakeholders.",
    },
  ],
};

// Phase 0 item 6: Abhyuday may remove items he can't evidence.
export const skills = [
  { title: "Languages", items: ["Python", "SQL", "R", "C++", "JavaScript", "TypeScript"] },
  { title: "Machine learning", items: ["scikit-learn", "XGBoost and gradient boosting", "NLP", "LLMs", "RAG", "LangChain", "OpenCV"] },
  { title: "Data", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "yfinance", "Tableau", "Excel", "MySQL", "MongoDB"] },
  { title: "Engineering", items: ["Git", "Linux", "Jupyter", "Streamlit", "pytest", "API integration"] },
  { title: "Ways of working", items: ["Agile (Scrum)", "Project management", "Digital strategy"] },
];

export const contact = {
  heading: "Get in touch",
  line: "Email is the quickest way to reach me. The form below works too.",
  copy: "Copy",
  copied: "Copied",
  labels: { email: "Your email", message: "Message" },
  button: "Send message",
  sending: "Sending…",
  errors: {
    email: "Enter a valid email address.",
    message: "Add a message before sending.",
  },
  success: "Thank you. Your message has been sent.",
  failure: "The message didn't go through. Please email me at abhyuday1124@gmail.com.",
};

export const footer = {
  line: "© 2026 Abhyuday Sachdeva · Jaipur",
  colophon: "Set in Newsreader and Instrument Sans.",
};

export const notFound = {
  heading: "Page not found",
  line: "This address doesn't lead anywhere on the site.",
  link: "Back to the homepage",
};
```

### `src/data/results.json`

Copied from `results/table_main.csv` in the Reducing-Hallucination repo. It's identical to Table 3 of the revised manuscript. Values are counts out of 100 (C = correct, H = hallucinated, A = abstained).

```json
{
  "strategies": ["Naive", "Role-based", "Constraint", "Evidence", "Premise verification"],
  "models": [
    { "name": "Llama 3.1 8B", "rows": [[50,21,29],[66,21,13],[24,3,73],[65,18,17],[68,28,4]] },
    { "name": "Qwen2.5 7B",   "rows": [[65,35,0],[64,36,0],[20,8,72],[63,36,1],[72,27,1]] },
    { "name": "gpt-oss-120b", "rows": [[65,31,4],[73,24,3],[49,12,39],[62,18,20],[84,15,1]] }
  ]
}
```

Each row is `[C, H, A]`, in the same order as `strategies`, and each row sums to 100. Add a unit check in the smoke test that every row sums to 100.

---

## Engineering

**Architecture.** Stay on Vite 7, React 19 and Framer Motion 12. Add build-time prerendering with `vite-prerender-plugin@0.5.14`, which was tested on this repo and produced a 6.5 KB gzip HTML file containing every section.
- Create `src/prerender.jsx`, exporting `async function prerender()` that does `const { renderToString } = await import('react-dom/server.edge')` and returns `{ html: renderToString(<App />) }`.
- Use `react-dom/server.edge`, via a **dynamic** import. Plain `react-dom/server` makes the build hang forever, and a static import drags the server renderer into the client bundle.
- Add `vitePrerenderPlugin({ renderTarget: '#root', prerenderScript: … })` to `vite.config.js`, and `<script prerender type="module" src="/src/prerender.jsx">` to `index.html`.
- In `main.jsx`, call `hydrateRoot` when `#root` already has children; otherwise call `createRoot`.

**Hydration safety**
- Never read `window`, `matchMedia`, `localStorage` or `useReducedMotion()` during render to choose markup. Do it in effects.
- Create Lenis in `useEffect`, and clean up every listener (StrictMode runs effects twice in development).

**File structure**
```
index.html            head: meta, OG, canonical, font preload, theme-init.js, JSON-LD, noscript reveal fix
vercel.json           headers and redirects (below)
public/               Abhyuday_Sachdeva_Resume.pdf, og-image.jpg, favicon-32.png, apple-touch-icon.png,
                      robots.txt, sitemap.xml, 404.html, theme-init.js
src/main.jsx          hydrateRoot / createRoot
src/prerender.jsx     build-time render
src/App.jsx           shell
src/content.js        all copy (above)
src/data/results.json chart data (above)
src/motion.js         DUR, EASE, STAGGER, DIST tokens and variants (fadeUp, maskUp, fadeIn, stagger, instant)
src/styles/index.css  @import tailwindcss, @theme tokens, base, reduced-motion block
src/styles/fonts.css  @font-face rules and fallback faces
src/assets/fonts/     subset woff2 files and the OFL licence
src/assets/img/       outputs of scripts/images.mjs
src/components/       SkipLink, Nav, MobileMenu, ThemeToggle, MotionRoot, SectionHeader, Reveal,
                      Portrait, ResultsChart, ContactForm, CopyButton, Footer
src/sections/         Hero, Research, Experience, Projects, About, Skills, Contact
src/hooks/            useFinePointer, useScrollDirection, useActiveSection, useSmoothScroll
src/utils/            scrollToSection.js
scripts/              images.mjs, og.mjs, contrast.mjs, size-check.mjs
tests/smoke.spec.js   Playwright plus axe
```

**Images** (`sharp@0.35.x` in `scripts/images.mjs`)
- **Portrait.** Crop to 4:5, apply the duotone, and output AVIF (quality 50) and WebP (quality 75) at 480, 800 and 1200px wide. The 800px AVIF should be about 67 KB.
- **Placeholder.** Inline a 16px-wide WebP placeholder as the wrapper's blurred background, and fade the real image in on load.
- **Attributes.** Set `width`, `height`, `sizes`, `loading="lazy"` and `decoding="async"`.
- **Favicons.** Generate `favicon-32.png` and `apple-touch-icon.png` (180×180): a square "AS" monogram in Newsreader, `ink` on `paper`, rendered from an SVG.

**OG image** (`scripts/og.mjs`, using `satori@0.56.x` and `@resvg/resvg-js@2.6.x`, then sharp)
- Output `public/og-image.jpg` at 1200×630.
- Design: `paper` background; the name in Newsreader 300 at about 96px; `hero.label` underneath in Instrument Sans in `ink-2`; a 1px `ink` rule; "abhyudayportfolio.vercel.app" in the label style.
- Satori needs WOFF or TTF files, so load them from the static `@fontsource/newsreader` and `@fontsource/instrument-sans` packages.
- Run the script locally and commit the output.

**`index.html` head**
- `lang="en"`, the title and description from `head`, and `theme-color` set to `#F5F2EB`.
- Canonical URL, plus `og:title`, `og:description`, `og:url` and `og:image` (absolute URL, with width 1200 and height 630), and `twitter:card` set to `summary_large_image`.
- Preload the Newsreader roman font, then load `theme-init.js`.
- **JSON-LD `Person`**, generated at build time from `content.js` by a small `transformIndexHtml` plugin:
  - `name`, `url`, `image`, `jobTitle` "Research Analyst", `alumniOf` (Vellore Institute of Technology), `address.addressLocality` "Jaipur", and `sameAs` (GitHub, LinkedIn).
  - Add `worksFor` only after Phase 0 item 4 is answered.
  - Do not use the `ScholarlyArticle` type while the manuscript is unpublished.

**`public/robots.txt`** allows everything and gives the sitemap URL. **`public/sitemap.xml`** lists the home URL only.

**`vercel.json`**
```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "redirects": [
    { "source": "/Abhyudays_Resume.pdf", "destination": "/Abhyuday_Sachdeva_Resume.pdf", "permanent": true },
    { "source": "/resume", "destination": "/Abhyuday_Sachdeva_Resume.pdf", "permanent": false }
  ],
  "headers": [
    { "source": "/assets/(.*)", "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }] },
    { "source": "/(.*)", "headers": [
      { "key": "Content-Security-Policy-Report-Only", "value": "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://formspree.io; form-action 'self' https://formspree.io; frame-ancestors 'none'; base-uri 'self'; object-src 'none'; upgrade-insecure-requests" },
      { "key": "X-Content-Type-Options", "value": "nosniff" },
      { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
      { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()" },
      { "key": "X-Frame-Options", "value": "DENY" },
      { "key": "Cross-Origin-Opener-Policy", "value": "same-origin" }
    ] }
  ]
}
```

Notes on the headers:
- **Caching.** Hashed `/assets` files are currently served with `max-age=0`, so repeat visitors re-check every file. The `immutable` rule fixes that.
- **CSP rollout.** Ship the CSP as Report-Only on the preview first, and check the browser console. Once it's clean, rename the key to `Content-Security-Policy` to enforce it.
- **Why `'unsafe-inline'` in `style-src`.** It's needed for Framer Motion's inline styles in the prerendered HTML.

**Dependencies**

| Action | Packages |
|---|---|
| Remove | `three`, `@react-three/fiber`, `@react-spring/three` |
| Move to devDependencies | `tailwindcss`, `@tailwindcss/vite` |
| Add | `lenis@^1.3.26`, `@fontsource-variable/newsreader`, `@fontsource-variable/instrument-sans` |
| Add (dev) | `vite-prerender-plugin@0.5.14`, `sharp`, `satori`, `@resvg/resvg-js`, `@fontsource/newsreader`, `@fontsource/instrument-sans`, `fontaine`, `eslint-plugin-react@7.37.5`, `eslint-plugin-jsx-a11y`, `prettier`, `prettier-plugin-tailwindcss`, `@playwright/test`, `@axe-core/playwright` |
| Pin | `framer-motion` to `~12.43.0`, the last 12.x release. Version 14 is days old, so evaluate it after launch. |

Run `npm audit fix` (Vite moves to 7.3.7). Stay on Vite 7: Vite 8 forces a plugin-react upgrade, so do that after launch.

**Lint and format**
- `eslint.config.js`: add `plugins: { react }`, `settings: { react: { version: 'detect' } }`, and the rule `'react/jsx-uses-vars': 'error'`. This fixes the 7 false errors (verified: eslint then exits 0). Also add the `jsx-a11y` recommended config.
- Prettier uses the Tailwind plugin, with `tailwindStylesheet: "./src/styles/index.css"`.
- Add the scripts `format:check`, `test` and `size`.

**Clean-up**
- Delete `src/App.css`, `src/assets/hero.png`, `react.svg`, `vite.svg`, `public/icons.svg`, `public/favicon.svg`, `public/symbol.jpg`, `public/Abhyudays_Resume.pdf`, `Rain.jsx` and `EasterEggs.jsx`.
- Remove the assistant-style comments ("your actual email", "Fully Restored" and similar).
- Set `version` in `package.json` to `"1.0.0"`.

**Performance budgets** (measured today, then the target)

| Metric | Today | Target |
|---|---|---|
| Initial JS (gzip) | 112.5 KB | ≤ 95 KB |
| CSS (gzip) | 5.7 KB | ≤ 12 KB |
| Fonts | 80 KB, third party | ≤ 160 KB self-hosted; 1 preload |
| Portrait | 265 KB JPEG | ≤ 70 KB AVIF |
| Page weight (resume excluded) | 460 KiB | ≤ 350 KiB |
| Mobile LCP (lab) | 2.9s local, 3.3s live | ≤ 2.0s |
| CLS | 0 | ≤ 0.02 |
| TBT | 200 ms | ≤ 150 ms |
| Lighthouse mobile P/A/BP/SEO | 91/93/100/92 local (83 performance live) | ≥ 92 / 100 / 100 / 100 |

`scripts/size-check.mjs` fails the build check if the gzip JS budget is exceeded.

**Smoke tests** (`tests/smoke.spec.js`, run against `vite preview` at 1440 and 390px)
- **Prerendering.** The raw HTML contains the `h1` name and all 6 section ids.
- **Clean console.** No console errors, so no hydration mismatch.
- **Headings.** Exactly one `h1`, and no skipped heading levels.
- **Accessibility.** axe reports 0 serious or critical violations, in both themes.
- **No horizontal scroll at 390px.** `scrollWidth` is at most `innerWidth`.
- **Skip link.** Tabbing from the top focuses it, and pressing Enter moves focus to `#content`.
- **Nav.** Clicking a nav link moves focus to that section's `h2`.
- **Contact form.** With Formspree mocked via `page.route`, success shows the success text and an error response shows the failure text.
- **Reduced motion.** With reduced motion emulated, no element has a running animation.
- **Data.** Every `results.json` row sums to 100, and each finding's `pull` appears word for word in its `text`.
- **Links and copy.** The resume, OG image, robots.txt and sitemap.xml return 200, and no visible text contains `—`.

**CI.** `.github/workflows/ci.yml` runs on pull requests: `npm ci`, lint, format check, build, size check, then install the Playwright browser and run the tests.

---

## Build phases

Every phase ends with lint and build passing, a commit, and the checkpoint shown.

1. **Set up and clean.** Create the branch. Make the dependency changes, run the audit fix and fix lint. Delete the files listed under Clean-up. Add Prettier. *Checkpoint: the diff summary.*
2. **Foundations.** Add fonts (subset, self-host, fallback faces), the tokens in `@theme` for both themes, `theme-init.js`, the base styles, the reduced-motion block, `motion.js`, and `contrast.mjs` passing. *Checkpoint: a type specimen page at `/?specimen` (dev only, removed in Phase 10) showing every type step and colour in both themes.*
3. **Shell.** Build `MotionRoot` (LazyMotion, MotionConfig and conditional Lenis), `SkipLink`, `Nav` with the mobile menu, `ThemeToggle`, `SectionHeader`, `Reveal`, `Footer`, `scrollToSection` and the hooks. *Checkpoint: empty sections; the nav works with keyboard and touch.*
4. **Content.** Add `content.js` and `results.json` exactly as given.
5. **Hero.** Build the layout at both widths, the CSS keyframe entrance, the scroll-linked exit, and the research teaser. *Checkpoint: screenshots, plus a short screen recording or description of the entrance.*
6. **Research.** Build the band, the findings with pull figures, `ResultsChart` with its hidden table and caption, and the Cite details panel. *Checkpoint: the chart in both themes at both widths.*
7. **Experience, Projects, About, Skills.** Build the ledger and index layouts. Run `scripts/images.mjs` and build `Portrait`. *Checkpoint: screenshots.*
8. **Contact.** Build `ContactForm` with the full state machine, `CopyButton` and the honeypot. *Checkpoint: every state demonstrated with the request mocked.*
9. **Motion pass.** Wire the reveals, staggers, chart drawing, nav hide/show and active section. Check reduced motion and the 8-animation limit. *Checkpoint: describe each motion; confirm nothing loops.*
10. **SEO and sharing.** Set up prerendering, the head tags, JSON-LD, the OG image, favicons, robots.txt, sitemap.xml and 404.html, and add `vercel.json` with a Report-Only CSP. Remove the specimen route.
11. **Quality.** Run the smoke tests, CI, and Lighthouse mobile on `vite preview` in both themes. Fix everything until the budgets and targets are met. *Checkpoint: the scores table and test output.*
12. **README and deploy** (only after Abhyuday approves).
    - **README.** Rewrite it: a one-line description, the live URL, a screenshot at 1440px, the stack, design notes (Monograph concept, type, motion principles, reduced-motion support), setup commands, "all copy lives in `src/content.js`", and MIT for code with the photo and resume excluded. Add a `LICENSE` file.
    - **Preview.** Push the branch; Vercel builds a preview. Ask Abhyuday to review it on his phone and laptop. Check the browser console for CSP reports.
    - **Enforce the CSP.** If it's clean, switch the header to the enforced `Content-Security-Policy`.
    - **Production.** After approval, merge into `main` with `--no-ff` and push. If the Vercel project isn't connected to GitHub, use `npx vercel --prod`.
    - **After launch.** Refresh the LinkedIn preview at https://www.linkedin.com/post-inspector/. Update the repo's About field (description "Personal portfolio: ML research, projects and experience", the live website, and topics).

## Acceptance criteria

- [ ] Every Phase 0 item has an answer, and the resume PDF agrees with the research repo.
- [ ] No Gotham remnants anywhere: no rain, grain, red `#D90000`, easter egg, GIF or Gotham text.
- [ ] Both themes pass `contrast.mjs` and axe, with no serious or critical issues.
- [ ] Lighthouse mobile scores are at least 92 performance, 100 accessibility, 100 best practices and 100 SEO, and every budget in the table is met.
- [ ] All copy matches `content.js`, the chart matches `results.json`, and no em dashes appear in visible text.
- [ ] The site is usable with keyboard only, with a screen reader, without JavaScript (content readable), and with reduced motion on.
- [ ] Sharing the URL on LinkedIn shows the OG image and title.

## Design anti-patterns (never do these)

- Rounded cards, drop shadows, pill-shaped tags, gradient text, or glassmorphism.
- Neon, glow, or more than one accent colour.
- Monospace body text, more than two type families, faux small caps, centred body text, or lines wider than 40rem.
- Full-screen sections, parallax, marquees, typewriter effects, particles, rotating taglines, skill bars, logo walls, testimonials, or "years of experience" counters.
- Stock icons beside headings, or emoji.
- A themed or clever vocabulary (no "Execute", "Payload", "Transmit").

---

## Appendix A: why this direction

Recruiters in consulting, compliance and pharma-tech judge rigour and calm. A typeset, paper-and-ink page signals both, and puts the research at the centre.

Two alternatives were rejected:
- **"Refined Gotham"** (dark with a gold accent): the theme would still be the story, and it slides toward cinematic.
- **"Lab notebook"** (Swiss grid with monospace text): the default developer look, cold rather than posh, and monospace text was already a readability problem.

## Appendix B: optional quiet easter egg (only if Abhyuday asks)

Typing `batman` anywhere outside a form field, with no modifier keys held, lazy-loads `SignalEgg.jsx`. The rules:

- **Effect.** A soft 240px warm glow in the top corner at 10% opacity, holding a small bat silhouette. It fades in over 600ms, holds for 2.4s, then fades out over 600ms.
- **Accessibility.** A hidden `role="status"` announces "Signal received". Esc dismisses it.
- **Limits.** It plays once per session.
- **Never.** No flashing, sound, takeover, GIF or visible keystroke buffer.

---

## Phase 0 answers (recorded 14 October 2026)

1. **Resume.** Still contradicts the repo. Claude drafts replacement bullet lines from the paper's findings; Abhyuday updates and re-exports the PDF before deploy.
2. **Headline.** Keep the site wording: "ML validation and AI governance".
3. **Photo.** Decided: keep the current photo in About only.
4. **Employer name.** "TrustBridge Compliance" (capital B). Use it everywhere in `content.js`; `worksFor` can go in the JSON-LD.
5. **Paper status.** "Under review, 2026"; manuscript not hosted.
6. **Skills.** Keep all of them.
7. **Phone number.** Keep it on the resume.
8. **Easter egg.** Retired fully. Appendix B is not built.
9. **UI copy.** Form copy approved as written.
