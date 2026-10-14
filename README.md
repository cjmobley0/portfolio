# cjmobley.com

Personal portfolio at `/`, CSUMB Individual Learning Plan portfolio at `/ilp`.
One Astro project, one deploy, two sections with their own homepages, navigation
and visual identity.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run preview  # serve the built output
npm run check    # type + template check
```

Deploys to Vercel on every push to `main`: it detects Astro and runs `astro build`.
The output is fully static, so no adapter or server runtime is needed. `vercel.json`
adds the security headers, the immutable caching for hashed `/_astro/*` assets and the
trailing-slash rule that matches `astro.config.mjs`.

## Where things live

| | |
|---|---|
| `src/data/site.ts` | Name, tagline, GitHub and LinkedIn, nav items |
| `src/data/experience.ts` | Jobs, titles, dates, bullets |
| `src/data/skills.ts` | Skill groups, and the two panels on the homepage |
| `src/data/projects.ts` | The personal projects, as homepage cards |
| `src/data/ilp.ts` | ILP bio, goals, program description and facts |
| `src/data/terms.ts` | Which courses fall in which term, and in what order |
| `src/content/courses/*.md` | One file per course, 15 in all |
| `src/layouts/` | `BaseLayout` plus one layout per section |
| `src/components/` | Shared pieces, including the context switcher and logo |
| `public/brand/` | The CSUMB logo files the site serves |
| `public/img/projects/` | Project images |

Nothing is hardcoded in the pages. Editing content means editing one of the files
above; the pages read from them.

There is also a `docs/` folder holding local working notes and source material: the
ILP document, the assignment rubric, the original brand downloads and a deployment
runbook. It is gitignored in full, so none of it leaves your machine.

## How the two sections fit together

What keeps `/ilp` from feeling like a separate website:

- **`ContextSwitcher.astro`** — a two-segment control in the same position in both
  headers, on every page. It always shows which side you are on.
- **Framed entry and exit** — the portfolio homepage has a bridge card explaining
  what the ILP is before you go there; every ILP page has a return band at the top.
- **One skeleton, two skins** — `BaseLayout.astro` owns `<head>`, fonts and the
  router. `PortfolioLayout` and `IlpLayout` differ only in header, footer and theme
  tokens. The spacing scale, type scale and card geometry in `global.css` are shared,
  which is what makes both sides feel like one hand made them.

## Updating it as you go

**Mark a course complete** — edit its file in `src/content/courses/` and change
`status` to `complete`. Valid values are `planned`, `in-progress`, `complete`. The
progress counts on `/` and `/ilp` are derived from these, so they update themselves.

**Add a final project** — write it in the Markdown body of the course file, below
the frontmatter. It renders under the "Final project" heading; until there is one,
the page shows a short note instead of an empty section.

**Edit a personal project** — `src/data/projects.ts`. These are homepage cards only;
there are no per-project pages.

**Add a course** — this is the one change that touches two files. Create the `.md`
file *and* add its code to the right term block in `src/data/terms.ts`, which
controls ordering and grouping. The two have to agree.

Course frontmatter is schema-validated in `src/content.config.ts`, so a typo like
`status: "done"` fails the build with a message naming the file and field rather
than shipping something wrong.

## CSUMB brand compliance

`src/components/CsumbLogo.astro` encodes the university's logo rules: no filter, no
recolour, no distortion, a 144px minimum width (the published 1.5in floor), and the
required clear space.

- The supplied files are **JPEGs with no alpha channel**, so the logo sits on a panel
  matching its own background. An SVG or transparent PNG from the CSUMB brand gallery
  would be an improvement; swap the file and update the dimensions in the component.
- `public/brand/csumb-primary-on-light.jpg` has had a 2px border cropped from the
  downloaded asset. That removed a container frame, not part of the mark.
- Filenames describe the **background**, not the ink: `on-light` is the dark-ink
  version for light backgrounds.
- `public/brand/` is the only copy in the repository. The untouched downloads are not
  tracked; re-download them from the CSUMB brand gallery if you need the originals.

Pass `href` to the component only when it is **not** already inside a link. Nested
anchors are invalid HTML and browsers break the outer element apart.

## Colour and contrast

The CSUMB palette is in `global.css` under `[data-section="ilp"]`. Monterey Bay Blue
(`#31456b`) is ~9.3:1 on white and safe for body text. **Ocean Blue (~3.2:1) and
Valley Green (~3.3:1) fail 4.5:1**, so they are used for borders, large headings and
accents only, never body copy. Keep it that way.

