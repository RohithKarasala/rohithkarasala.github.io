# Rohith Karasala Portfolio

A modular GitHub Pages portfolio for professional hiring and academic artifacts.

## Folder structure

```text
.
├── index.html              # Page shell only. Usually no content edits needed.
├── styles.css              # UI styling and responsive layout.
├── app.js                  # Renders data files into the page.
├── data/
│   ├── profile.js          # Name, tags, stats, contact, image path.
│   ├── about.js            # About section paragraphs.
│   ├── experience.js       # Work experience entries.
│   ├── skills.js           # Skill groups.
│   ├── academic.js         # Course banner and weekly assignments.
│   └── education.js        # Education cards.
└── assets/
    └── rohith.JPG          # Profile image. Keep exact file name/case.
```

## Weekly academic update workflow

Most weekly updates should only require editing `data/academic.js`.

Add a new assignment object inside `assignments`:

```js
{
  week: 'WEEK 3 · Assignment 3.2',
  title: 'Your Assignment Title',
  description: 'One or two sentences describing the artifact and learning outcome.',
  status: 'Complete',
  statusType: 'complete',
  icon: '🧩',
  previewLabel: 'SHORT PREVIEW LABEL',
  image: 'assets/week3-artifact.png',
  link: 'https://your-artifact-link'
}
```

Place screenshots or title cards inside `assets/` and reference them with the same exact file name.

## GitHub Pages deployment

1. Copy these files into your repository root.
2. Make sure the profile photo is saved as `assets/rohith.JPG`, or update `data/profile.js` to match the exact file name.
3. Commit and push:

```bash
git add .
git commit -m "Refactor portfolio into modular data files"
git push origin main
```

4. In GitHub, go to **Settings → Pages**.
5. Set source to **Deploy from a branch**.
6. Choose branch **main** and folder **/** root.
7. Save and wait a few minutes.
8. Open `https://rohithkarasala.github.io`.

## Why there is no backend

GitHub Pages only hosts static files. For this portfolio, a backend is unnecessary unless you want authentication, a database, analytics events, or an admin dashboard. The contact form uses Formspree, which works well for a static portfolio.

If you later want a backend, use one of these:

- AWS Lambda + API Gateway + DynamoDB for assignment metadata or contact storage.
- Netlify Functions or Vercel Functions if you migrate hosting.
- A small Spring Boot API only if you want this to become a full-stack portfolio project.

## Common corrections

- GitHub Pages is case-sensitive. `rohith.JPG` and `rohith.jpg` are different files.
- Keep `index.html`, `styles.css`, `app.js`, and `data/` in the repository root unless you update paths.
- Do not edit generated HTML inside the browser. Update the data files instead.
- Footer text has been simplified and no longer says “Built with ♥ & raw HTML.”
