# Vibhas Ramani — Portfolio

React + TypeScript + Vite, with React Router (separate pages) and Framer Motion
animations. Sunset-coast palette (deep water teal → coral → gold), built around
a "horizon" motif: your photo rises over a horizon line on the landing page,
and the same horizon sweeps across the screen as a transition every time you
navigate between pages.

## Run it locally

```bash
npm install
npm run dev
```

Open the local URL it prints (usually http://localhost:5173).

## Everything you need to fill in

I left three things as placeholders since I don't have them. Search the
codebase for `EDIT ME` to find every spot — here's the full list:

### 1. Your photo (landing page hero)
- Drop your photo into `public/`, e.g. `public/profile-photo.png` (a square
  or portrait crop, ideally with a plain or transparent background, works
  best in the circular frame).
- In `src/pages/Home.tsx`, change both occurrences of
  `src="/profile-placeholder.svg"` to `src="/profile-photo.png"`.

### 2. Resume PDFs (Resume page)
You mentioned you keep separate SWE and ML resumes — the Resume page already
has a tab to switch between them.
- Drop your two PDFs into `public/` named exactly:
  - `public/resume-swe.pdf`
  - `public/resume-ml.pdf`
- (Or use different filenames and update the `resumeFiles` object at the top
  of `src/pages/Resume.tsx`.)

### 3. Contact details
- Open `src/data/contact.ts` and fill in your real email, phone (optional),
  LinkedIn/GitHub links, and location. This single file feeds the Contact
  page and the site footer.

Everything else — experience, projects, skills — is already filled in from
what you gave me, in `src/data/experience.ts`, `src/data/projects.ts`, and
`src/data/skills.ts`. Edit those directly any time you add a new job or
project; the timeline, project cards, and skills tide all render from them
automatically.

## Deploying to GitHub Pages

This project is set up to deploy to a repo's `gh-pages` branch with one
command:

```bash
npm run deploy
```

That builds the site and pushes `dist/` to the `gh-pages` branch of whatever
git remote is configured. First time only:

1. Create/point this folder at your GitHub repo:
   ```bash
   git init
   git remote add origin https://github.com/vibz2/<your-repo-name>.git
   ```
2. Run `npm run deploy`.
3. In your repo settings → Pages, set the source to the `gh-pages` branch
   (the `gh-pages` package creates this branch automatically).

The app uses `HashRouter` (URLs like `/#/projects`) and a relative Vite
`base` path specifically so it works out of the box on GitHub Pages under
any repo name, including direct links and page refreshes on non-home pages.

## Structure

```
src/
  data/            experience.ts, projects.ts, skills.ts, contact.ts — all your content
  components/      TopNav, IslandNav, SkillsTide, PageTransition, Footer
  pages/           Home, Resume, Projects, Experience, Contact
  index.css        design tokens (colors, fonts)
  styles.css       all component styling
```
