# Himanshu Rawat — Portfolio

A React.js + Tailwind CSS (v4) portfolio, built with Vite. IDE-inspired design (title bar, file-explorer sidebar, code-block hero) with dark/light theme that follows your system setting.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to the `dist/` folder — upload that folder to any static host (Firebase Hosting, Vercel, Netlify, GitHub Pages).

## Before you deploy

Open `src/data.js` and update:
- `PROFILE.github` — your actual GitHub profile URL
- `PROFILE.linkedin` — your actual LinkedIn profile URL

Open `index.html` and update:
- `og:url` — replace `https://your-domain-here.com` with your real deployed URL, so link previews (WhatsApp, LinkedIn, X, etc.) point to the right place.

## Project structure

```
src/
  data.js              -> all resume content (edit this to update text)
  useTheme.js          -> dark/light theme logic (system-based)
  App.jsx              -> page layout / section order
  components/
    TitleBar.jsx       -> top nav bar
    Sidebar.jsx        -> file-explorer style side nav
    Hero.jsx           -> intro section
    About.jsx          -> summary + stats
    Skills.jsx         -> skills grid
    Experience.jsx     -> work history timeline + education
    Projects.jsx       -> industry + personal projects
    Contact.jsx        -> contact section
    StatusBar.jsx      -> footer
```

## Stack

React 19 - Vite - Tailwind CSS v4 - lucide-react (icons)
