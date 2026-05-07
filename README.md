# Learning App

A single-page UI app built with React + Vite to manage a 13-day action plan and topic-based cheat sheets for interview preparation.

## Live Demo

- Netlify: [ops-practice app](https://ops-practice.netlify.app/)

## What This Repository Contains

- A horizontal, scrollable action-plan menu (Week 1, Week 2, Week 3) with day-level drill-down.
- A horizontal, scrollable cheat-sheet menu for:
  - MCCSS / Accessibility
  - Power BI
  - DAX
  - Azure
  - Databricks
  - Data Modeling
  - Reddit / OPS Research
  - Interview
- Reusable SCSS utility styles for consistent, DRY cheat-sheet components.
- Netlify-ready SPA deployment setup.

## Tech Stack

- React 18
- Vite 5
- SCSS (Dart Sass)

## Project Structure

```text
learning-app/
  public/
    _redirects
    site.webmanifest
  src/
    components/
      plan/
      topics/
    data/
    styles/
    App.jsx
    main.jsx
  index.html
  netlify.toml
  package.json
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Deployment (Netlify)

This project is configured for Netlify:

- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirects: configured in both `netlify.toml` and `public/_redirects`

## Notes

- `index.html` is the Vite app shell (mount point), not the content page.
- Main application UI logic is in `src/App.jsx`.
- Topic content lives in `src/components/topics/`.

## License

Add your preferred license here.
