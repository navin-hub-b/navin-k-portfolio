# Navin K — Professional Portfolio Website

A fast, lightweight, and accessible employer-facing portfolio website for **Navin K**, B.E Computer Science and Engineering student at Sri Krishna College of Engineering and Technology (Anna University).

Built with semantic HTML5, modern CSS, and vanilla JavaScript. Features a "lab notebook meets interface spec" visual identity, full responsive support, and strict WCAG 2.2 Level AA accessibility compliance.

---

## Repository Structure

```text
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow for automated Pages deployment
├── assets/
│   ├── css/
│   │   └── style.css         # Design system tokens, responsive layout, print & a11y styles
│   ├── img/
│   │   └── favicon.svg       # Vector NK monogram favicon
│   └── js/
│       └── main.js           # Accessible mobile drawer, focus trap, and section spy
├── project-docs/             # Internal project documentation and verification audits
│   ├── DESIGN_PLAN.md        # Creative concept, color tokens, and layout specifications
│   ├── PORTFOLIO_CONTENT.md  # Resume-derived source of truth and completeness checklist
│   └── REVIEW_LOG.md         # Automated WCAG 2.2 AA audit logs and quality checks
├── .gitignore                # Excludes resume PDFs and local environment artifacts
├── .nojekyll                 # Disables Jekyll processing on GitHub Pages
├── 404.html                  # Custom error page matching site visual identity
├── index.html                # Semantic single-page portfolio (8 content sections)
└── README.md                 # Project documentation and deployment instructions
```

---

## Local Development

The site is built with a zero-build-step architecture. You can run it locally with any static web server:

### Option 1: Python 3
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your web browser.

### Option 2: Node.js
```bash
npx serve .
# or
npx http-server . -p 8000
```

### Option 3: VS Code / IDE
Install the **Live Server** extension in VS Code and click **"Go Live"** in the status bar while viewing `index.html`.

---

## How to Edit Content

All content is structured within semantic HTML5 landmarks in [`index.html`](index.html). Each section has a dedicated `<section>` tag with an unambiguous identifier:

- `#profile`: Headline, intro highlights, and verbatim professional summary.
- `#experience`: Internship and inplant training entries at Sigma - Aldrich Chemicals Private Limited.
- `#achievements`: TNSkills 2025 Silver Medal in Chemical Laboratory Technology.
- `#skills`: Front End, Programming, Database, and Soft Skills tags.
- `#education`: Degree coursework (SKCET), schooling (S.B.O.A), and Coursera certification.
- `#participations`: Workshops and technical symposium participations.
- `#languages`: Language proficiencies (English, Tamil).
- `#contact`: Direct email (`mailto:`) and telephone (`tel:`) contact cards.

Styles and theme variables (colors, typography, grid spacing) are defined as CSS custom properties at the top of [`assets/css/style.css`](assets/css/style.css).

---

## How Deployment Works

This repository is configured for automated deployment to **GitHub Pages** using GitHub Actions:

1. Whenever changes are pushed to the `main` branch, the workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) triggers automatically.
2. The workflow stages only the public website files (`index.html`, `404.html`, `assets/`, `.nojekyll`) into an isolated `_site` directory.
3. Internal design documents (`project-docs/`), resume PDFs, and non-publishable files are strictly excluded from the published Pages artifact.
4. The isolated artifact is deployed directly to GitHub Pages via official GitHub Actions (`actions/deploy-pages@v4`).

You can also trigger a deployment manually at any time by navigating to **Actions** > **Deploy Portfolio to GitHub Pages** > **Run workflow** in GitHub.
