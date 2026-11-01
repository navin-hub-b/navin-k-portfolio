# Portfolio Design & Architecture Plan: Navin K

> **Status**: Step 2 of 6 Complete — Architectural & Creative Design Plan Only  
> **Source of Truth**: [`project-docs/PORTFOLIO_CONTENT.md`](file:///d:/Portfolio/project-docs/PORTFOLIO_CONTENT.md)  
> **Target Platform**: GitHub Pages (Static hosting, subpath-compatible)  
> **Strict Rule**: No website code or scaffolding is written in this step.

---

## 1. Audience & Honest Positioning Strategy

### 1.1. Target Audience & Reading Behavior
- **Primary Readers**: Technical recruiters, summer internship coordinators, engineering faculty, and hiring managers.
- **Consumption Context**: Rapid skimming (typically 60–120 seconds) on both mobile screens and high-resolution desktop monitors.
- **Immediate Information Needs**:
  1. *Who is Navin K?* (Identity, program of study, institution, location).
  2. *What has he verified he can do?* (UI/UX design internship, chemical lab industrial training, TNSkills silver medal, IndiaSkills participation, programming languages, database and web fundamentals).
  3. *How to initiate contact?* (Direct email, verified phone).

### 1.2. Early-Career Factual Grounding (No Padding, No Buzzwords)
- **Zero Invention**: The resume lists **no projects**, no GitHub profile, no LinkedIn URL, and no grades. The portfolio will **never invent, simulate, or pad** the site with dummy project cards, conceptual case studies, or mock repositories.
- **Credibility through Precision**: Early-career candidates gain credibility through structured clarity and technical discipline. The portfolio highlights real, verified achievements:
  - **Silver Medal at TNSkills 2025** in *Chemical Laboratory Technology* (demonstrates precision, diligence, competitive performance).
  - **UI/UX Design Internship** at *Cognifyz IT Solutions* (wireframing, user-centered design, typography, layout).
  - **Industrial Training** at *Sigma Aldrich Chemicals Pvt. Ltd.* for *IndiaSkills South Regionals 2025–2026*.
  - **Technical Stack**: Front-End (HTML, CSS, JavaScript), Programming (Python, Java, C, C++), Database (RDBMS using MySQL).
  - **Communication**: Multilingual proficiency across 6 Indian and regional languages.
- **Forbidden Elements**:
  - No animated percentage bars or circular meters (e.g., "Python 85%").
  - No arbitrary rating stars or skill levels.
  - No inflated claims (no "Full-Stack Developer", "Expert", "Seasoned", "Guru", "Years of experience").
  - No fake testimonials, stock photography, or decorative metrics.

---

## 2. Creative Concept: "Lab Notebook Meets Interface Spec"

### 2.1. Metaphor & Visual Direction
The design visually bridges Navin K's two authentic disciplines:
1. **The Chemical Laboratory** (rigor, calibration, specimen labeling, structured observations, safety and quality control).
2. **The Interface Specification** (layout grids, typography hierarchy, wireframe aesthetics, discrete component cards).

### 2.2. Visual Manifestation
- **Specimen Record Identifiers**: Every section header features a subtle monospace index label (e.g., `01 / PROFILE`, `02 / EXPERIENCE`, `03 / ACHIEVEMENTS`, `04 / SKILLS`), mimicking laboratory catalog cards and engineering drawing title blocks.
- **Background Architecture**:
  - Main content column sits on an ultra-light paper background (`#F7F9FB`) with a faint, mathematically calibrated SVG graph-paper grid (`aria-hidden="true"`).
  - Subtle grid ticks and thin border rules (`#E2E8F0`) evoke blueprint drafting and notebook pages without adding visual clutter.
- **Desktop Side Rail vs. Mobile Top Bar**:
  - *Desktop ($\ge 900px$)*: Fixed deep-navy rail (`#06223F`) mirroring the dark left sidebar of Navin's resume. Houses the monogram `NK`, full identity, headline, persistent navigation with active scroll-spy indicators, and quick contact action links.
  - *Mobile ($< 900px$)*: Streamlined sticky header bar with monogram, title, and accessible slide-out navigation menu.
- **Distinctive Silver Medal Treatment**:
  - The TNSkills Silver Medal achievement is highlighted with a dedicated brushed-steel / silver card treatment (`#E2E8F0` border with soft metallic gradient accent), distinguishing this competitive honor while maintaining visual restraint.

---

## 3. Information Architecture & Sitemap

### 3.1. Single-Page vs. Multi-Page Decision
- **Decision**: **Single-page application with accessible anchor navigation.**
- **Rationale**: The verified resume content comprises 58 distinct details across 8 logical categories. Splitting this concise volume across multiple HTML pages would introduce unnecessary page reloads, increase latency, create navigation friction, and risk recruiters missing key sections while skimming. A cohesive, single-page layout with a persistent desktop rail and mobile drawer allows complete skimming within 60 seconds while providing direct anchor links (`#profile`, `#experience`, `#achievements`, `#skills`, `#education`, `#participations`, `#languages`, `#contact`) for instant jumping.

### 3.2. Detailed Section Order & Content Mapping

```text
[Skip Link: #main-content]
  │
  ├── Desktop Fixed Rail (or Mobile Top Header + Drawer)
  │     ├── Monogram "NK" (or Profile Photo if user approves)
  │     ├── Navin K — B.E Computer Science and Engineering
  │     ├── Navigation Links (with specimen indices 01 - 08)
  │     └── Quick Action Links (Email, Phone)
  │
  └── Main Content Column (Paper background with subtle grid)
        ├── 01 / PROFILE
        │     ├── Headline & Academic Standing: Sri Krishna College of Engineering and Technology
        │     ├── Summary (Verbatim or User-Approved Copy Edit)
        │     ├── Factual Highlight Chips (Silver Medalist • TNSkills; UI/UX Intern • Cognifyz)
        │     └── Primary CTA Actions (Email, Call, Jump to Experience)
        │
        ├── 02 / EXPERIENCE
        │     ├── Record 02.1: UI/UX Design Intern (Remote) — Cognifyz IT Solutions Pvt. Ltd.
        │     │     └── 15/04/2026 – 15/05/2026 (15 Apr 2026 – 15 May 2026) | Verbatim Bullets
        │     └── Record 02.2: Industrial Training — Sigma Aldrich Chemicals Pvt. Ltd., Bangalore
        │           └── 02/02/2026 – 17/02/2026 (15 days of training) | Verbatim Bullets
        │
        ├── 03 / ACHIEVEMENTS
        │     └── Silver Medal at TNSkills 2025 (Chemical Laboratory Technology) — 07 Jan 2026
        │
        ├── 04 / SKILLS
        │     ├── Group 1: UI/UX Design (UI/UX Design Basics)
        │     ├── Group 2: Front End Development (HTML, CSS, JavaScript)
        │     ├── Group 3: Programming Languages (Python, Java, C, C++)
        │     ├── Group 4: Back End Development (RDBMS using MySQL)
        │     └── Group 5: Professional Competencies (Effective Communication, Active Listening, Interpersonal Skills)
        │
        ├── 05 / EDUCATION & CERTIFICATIONS
        │     ├── Education: Bachelor of Engineering in Computer Science and Engineering (2025 – 2029)
        │     │     └── Sri Krishna College of Engineering and Technology, Coimbatore
        │     └── Certification: AI for Everyone (Coursera)
        │
        ├── 06 / PARTICIPATIONS & WORKSHOPS
        │     ├── Chronological List of Participations:
        │     │     • NEURONERDS (SKCET) — 13 Sep 2025
        │     │     • IGNITE 2025 (SKCET) — 15 Sep 2025
        │     │     • SRISHTI 2K25 (PSG College of Technology) — 12 Oct 2025
        │     │     • IndiaSkills South Regionals (Hyderabad) — 21 Feb 2026 – 24 Feb 2026
        │     └── Workshop:
        │           • "Animate Your Ideas: Motion Study and Animation with Fusion" (KPR IET) — 11 Nov 2025
        │
        ├── 07 / LANGUAGES
        │     └── 6 Languages Grid: English, Tamil, Telugu, Malayalam, Kannada, Hindi (Plain badges)
        │
        ├── 08 / CONTACT
        │     ├── Email Action Link (mailto:navin27032008@gmail.com)
        │     ├── Phone Action Link (Isolated component: 8778483642)
        │     └── References Statement ("Professional references available on request" - pending user approval)
        │
        └── Footer
              └── Factually grounded colophon & source notice
```

---

## 4. Design System & Tokens

### 4.1. Color Palette & WCAG 2.2 AA Contrast Verification
All color pairs have been computationally verified against WCAG 2.2 AA standards (requiring $\ge 4.5:1$ for normal body text and $\ge 3.0:1$ for large text and UI components).

```css
:root {
  /* Surface & Background */
  --color-paper: #F7F9FB;          /* Off-white paper background */
  --color-surface: #FFFFFF;        /* Clean card surface */
  --color-surface-subtle: #F1F5F9; /* Faint gray for card headers */
  --color-rail: #06223F;           /* Deep ink navy for side rail */
  --color-rail-surface: #0A2D52;   /* Slightly lighter navy for rail items */

  /* Text & Content */
  --color-text-main: #0F172A;      /* Slate-900 (High contrast body on paper) */
  --color-text-body: #1E293B;      /* Slate-800 (Standard body on paper) */
  --color-text-muted: #475569;     /* Slate-600 (Captions, dates, secondary labels) */
  --color-text-on-rail: #F8FAFC;   /* Slate-50 (Headings on navy rail) */
  --color-text-rail-body: #E2E8F0; /* Slate-200 (Nav links on navy rail) */
  --color-text-rail-muted: #94A3B8;/* Slate-400 (Secondary text on navy rail) */

  /* Accents & Highlights */
  --color-teal-text: #0B7285;      /* Dark teal: Safe for text on paper/white */
  --color-teal-accent: #1AA7BF;    /* Bright teal: For non-text accents, borders, icons */
  --color-rail-active: #38BDF8;    /* Sky-400: Active navigation indicator on rail */

  /* Metals & Borders */
  --color-silver-badge-bg: #E2E8F0;/* Silver card/badge surface */
  --color-silver-accent: #64748B;  /* Slate-500 silver accent */
  --color-border: #E2E8F0;         /* Slate-200 grid lines and card borders */
  --color-border-dark: #1E3A5F;    /* Navy rail divider lines */

  /* Focus Indicator (WCAG 2.2 SC 2.4.11 / 2.4.12) */
  --color-focus: #0284C7;          /* High contrast blue focus ring on paper */
  --color-focus-rail: #38BDF8;     /* Sky-400 focus ring on navy rail */
}
```

#### Contrast Ratio Verification Table:
| Text / Foreground Element | Background Color | Exact Contrast Ratio | WCAG 2.2 Requirement | Result |
| :--- | :--- | :---: | :---: | :---: |
| **Body Text** (`#1E293B`) | Paper (`#F7F9FB`) | **13.86 : 1** | $\ge 4.5:1$ (Level AA) | **PASSES (Exceeds AAA)** |
| **Body Text** (`#1E293B`) | Card Surface (`#FFFFFF`) | **14.63 : 1** | $\ge 4.5:1$ (Level AA) | **PASSES (Exceeds AAA)** |
| **Muted Text** (`#475569`) | Paper (`#F7F9FB`) | **7.18 : 1** | $\ge 4.5:1$ (Level AA) | **PASSES (Exceeds AAA)** |
| **Muted Text** (`#475569`) | Card Surface (`#FFFFFF`) | **7.58 : 1** | $\ge 4.5:1$ (Level AA) | **PASSES (Exceeds AAA)** |
| **Dark Teal Text** (`#0B7285`)| Paper (`#F7F9FB`) | **5.29 : 1** | $\ge 4.5:1$ (Level AA) | **PASSES Level AA** |
| **Dark Teal Text** (`#0B7285`)| Card Surface (`#FFFFFF`) | **5.59 : 1** | $\ge 4.5:1$ (Level AA) | **PASSES Level AA** |
| **Rail Nav Text** (`#E2E8F0`) | Ink Navy Rail (`#06223F`) | **13.02 : 1** | $\ge 4.5:1$ (Level AA) | **PASSES (Exceeds AAA)** |
| **Rail Heading** (`#F8FAFC`) | Ink Navy Rail (`#06223F`) | **15.34 : 1** | $\ge 4.5:1$ (Level AA) | **PASSES (Exceeds AAA)** |
| **Rail Muted** (`#94A3B8`) | Ink Navy Rail (`#06223F`) | **6.26 : 1** | $\ge 4.5:1$ (Level AA) | **PASSES Level AA** |
| **Active Nav Link** (`#38BDF8`)| Ink Navy Rail (`#06223F`) | **7.49 : 1** | $\ge 4.5:1$ (Level AA) | **PASSES (Exceeds AAA)** |
| **Silver Badge Text** (`#0F172A`)| Silver Bg (`#E2E8F0`) | **14.48 : 1** | $\ge 4.5:1$ (Level AA) | **PASSES (Exceeds AAA)** |
| **Focus Ring** (`#0284C7`) | Paper (`#F7F9FB`) | **3.88 : 1** | $\ge 3.0:1$ (Non-text UI) | **PASSES Level AA** |
| **Focus Ring (Rail)** (`#38BDF8`)| Ink Navy Rail (`#06223F`) | **7.49 : 1** | $\ge 3.0:1$ (Non-text UI) | **PASSES Level AA** |
| **Teal Accent** (`#1AA7BF`)* | Paper (`#F7F9FB`) | 2.72 : 1 | Non-text rule | *Non-text accents only* |

*\*Note*: `var(--color-teal-accent)` (`#1AA7BF`) is strictly restricted to non-text decorative borders, bullet markers, and graphical accents. All readable text uses `var(--color-teal-text)` (`#0B7285`), which satisfies WCAG AA.

---

### 4.2. Typography System & Fluid Scale
- **Headings & Specimen Labels**: `Bricolage Grotesque` (clean, contemporary, architectural grotesque).
  - Fallback: `'Source Sans 3', system-ui, -apple-system, sans-serif`.
- **Body & Longform Copy**: `Source Sans 3` (highly legible, humanistic grotesk engineered for UI readability).
  - Fallback: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`.
- **Monospace Metadata & Dates**: `IBM Plex Mono` (technical, engineered, lab specimen aesthetic).
  - Fallback: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace`.

```css
/* Fluid Type Scale (320px -> 1200px Viewport) */
:root {
  --font-display: 'Bricolage Grotesque', 'Source Sans 3', sans-serif;
  --font-body: 'Source Sans 3', system-ui, -apple-system, sans-serif;
  --font-mono: 'IBM Plex Mono', 'SFMono-Regular', Consolas, monospace;

  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem);    /* 12px - 13px */
  --text-sm: clamp(0.8125rem, 0.77rem + 0.2vw, 0.875rem);   /* 13px - 14px */
  --text-base: clamp(0.9375rem, 0.9rem + 0.2vw, 1rem);      /* 15px - 16px */
  --text-lg: clamp(1.0625rem, 1rem + 0.35vw, 1.1875rem);    /* 17px - 19px */
  --text-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.4375rem);    /* 20px - 23px */
  --text-2xl: clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem);    /* 24px - 30px */
  --text-3xl: clamp(1.875rem, 1.65rem + 1.1vw, 2.375rem);   /* 30px - 38px */
  --text-4xl: clamp(2.25rem, 1.95rem + 1.5vw, 3rem);        /* 36px - 48px */

  --leading-tight: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.65;
}
```

### 4.3. Spacing Scale & Layout Grid
- **Spacing Scale (4px Base)**:
  - `--space-1`: `0.25rem` (4px)
  - `--space-2`: `0.5rem` (8px)
  - `--space-3`: `0.75rem` (12px)
  - `--space-4`: `1.0rem` (16px)
  - `--space-6`: `1.5rem` (24px)
  - `--space-8`: `2.0rem` (32px)
  - `--space-12`: `3.0rem` (48px)
  - `--space-16`: `4.0rem` (64px)
  - `--space-24`: `6.0rem` (96px)
- **Radii**:
  - `--radius-sm`: `4px` (Tags, chips)
  - `--radius-md`: `8px` (Cards, buttons, timeline containers)
  - `--radius-lg`: `12px` (Modal drawer, main containers)
  - `--radius-full`: `9999px` (Pill badges, avatar)
- **Breakpoints**:
  1. `360px`: Ultra-compact mobile (safe reflow down to 320px).
  2. `600px`: Phablet / Large mobile (2-column grids for languages and chips).
  3. `900px`: Desktop rail switch (Mobile header converts to fixed 280px deep-navy rail).
  4. `1200px`: Max-width container clamp (Main content max-width 880px, total canvas 1200px).

---

## 5. Component Specifications & Markup Architecture

### 5.1. Persistent Desktop Rail & Mobile Header
- **Desktop Rail (`aside.rail`)**:
  - Position: `fixed`, `top: 0`, `left: 0`, `bottom: 0`, `width: 280px`, `background: var(--color-rail)`, `overflow-y: auto`.
  - Brand Unit:
    - Monogram: SVG Box `NK` (`36x36px`) or photo portrait (`48x48px` circular, if confirmed).
    - Title: `Navin K` (Heading 1 or top brand identifier).
    - Subtitle: `B.E Computer Science and Engineering` (verbatim from resume).
  - Navigation Menu (`nav.rail-nav`):
    - Unordered list of anchor links (`#profile` through `#contact`).
    - Monospace index prefix (`01`, `02`, ..., `08`).
    - Active state: Left border indicator `3px solid var(--color-rail-active)` and color `#38BDF8`.
  - Quick Contacts Footer:
    - Direct email link and phone link.
- **Mobile Top Bar (`header.mobile-header`)**:
  - Position: `sticky`, `top: 0`, `z-index: 100`, `background: var(--color-rail)`.
  - Displays Monogram, Name, and hamburger button.
  - Hamburger Button: `<button aria-expanded="false" aria-controls="mobile-nav" aria-label="Toggle navigation menu">`.
  - Slide-out drawer with focus trapping and `Escape` key listener.

### 5.2. Skip Navigation Link
- `<a href="#main-content" class="skip-link">Skip to main content</a>`
- Placed as the very first child of `<body>`.
- Visually hidden until keyboard `:focus`, then renders prominently at top-left with high contrast.

### 5.3. Section Specimen Header Component
- Each section begins with a standardized laboratory specimen label:
  ```html
  <header class="section-header">
    <span class="specimen-tag" aria-hidden="true">02 / EXPERIENCE</span>
    <h2 id="experience-title" class="section-title">Work Experience</h2>
  </header>
  ```

### 5.4. Factual Highlight Chips Component
- Displayed in the Profile section right below the summary:
  ```html
  <div class="highlight-chips" role="list" aria-label="Key highlights">
    <div class="chip chip-silver" role="listitem">
      <span class="chip-icon" aria-hidden="true">★</span>
      <span>Silver Medalist • TNSkills 2025 (Chemical Lab Technology)</span>
    </div>
    <div class="chip" role="listitem">
      <span class="chip-icon" aria-hidden="true">◆</span>
      <span>UI/UX Design Intern • Cognifyz IT Solutions</span>
    </div>
  </div>
  ```

### 5.5. Timeline Card Component (Experience & Education)
- Clean card design with left border rule, specimen timestamp, and verbatim bullets:
  ```html
  <article class="timeline-card">
    <div class="card-meta">
      <span class="badge badge-subtle">Internship</span>
      <time datetime="2026-04-15/2026-05-15" class="time-stamp">15/04/2026 – 15/05/2026</time>
    </div>
    <h3 class="card-title">UI/UX DESIGN INTERN - Remote</h3>
    <p class="card-org">Cognifyz IT Solutions Pvt. Ltd.</p>
    <ul class="card-bullets">
      <li>I finished UI/UX Design training. Acquired foundational knowledge of user interface and user experience principles. UI/UX Design also taught me wireframing, prototyping and user-centered design.</li>
      <li>I studied the basics of design tools, visual hierarchy, layout, typography and how to create user-friendly digital experiences.</li>
    </ul>
  </article>
  ```

### 5.6. Silver Medal Card Component
- Custom metallic border with subtle gradient accent:
  ```html
  <article class="medal-card">
    <div class="medal-badge" aria-label="Silver Medal Award">
      <span class="medal-label">SILVER MEDAL</span>
      <span class="medal-event">TNSkills 2025</span>
    </div>
    <div class="medal-content">
      <time datetime="2026-01-07" class="time-stamp">January 7, 2026</time>
      <h3 class="medal-title">Chemical Laboratory Technology</h3>
      <p class="medal-desc">Awarded the Silver Medal at TNSkills 2025 on January 7 2026 in the skill of Chemical Laboratory Technology in recognition of proficiency and practical laboratory skills.</p>
    </div>
  </article>
  ```

### 5.7. Skills Grid Component
- Strictly preserves the 5 resume groupings without proficiency meters:
  ```html
  <div class="skills-grid">
    <div class="skill-category">
      <h3 class="skill-cat-title">UI/UX Design</h3>
      <ul class="skill-tags">
        <li>UI/UX Design Basics</li>
      </ul>
    </div>
    <div class="skill-category">
      <h3 class="skill-cat-title">Front End Development</h3>
      <ul class="skill-tags">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </div>
    <div class="skill-category">
      <h3 class="skill-cat-title">Programming Language</h3>
      <ul class="skill-tags">
        <li>Python</li>
        <li>Java</li>
        <li>C</li>
        <li>C++</li>
      </ul>
    </div>
    <div class="skill-category">
      <h3 class="skill-cat-title">Back End Development</h3>
      <ul class="skill-tags">
        <li>RDBMS using MySQL</li>
      </ul>
    </div>
    <div class="skill-category">
      <h3 class="skill-cat-title">Core Competencies</h3>
      <ul class="skill-tags">
        <li>Effective Communication</li>
        <li>Active Listening</li>
        <li>Interpersonal Skills</li>
      </ul>
    </div>
  </div>
  ```

### 5.8. Participations & Workshop Record List
- Displays all 5 entries in a clean, chronological tabular list (all items visible by default):
  - 13 Sep 2025: `NEURONERDS` (Sri Krishna College of Engineering and Technology)
  - 15 Sep 2025: `IGNITE 2025` (Sri Krishna College of Engineering and Technology)
  - 12 Oct 2025: `SRISHTI 2K25` (PSG College Of Technology, Coimbatore)
  - 11 Nov 2025: `Workshop: Animate Your Ideas: Motion Study and Animation with Fusion` (KPR Institute of Engineering and Technology)
  - 21 Feb 2026 – 24 Feb 2026: `IndiaSkills South Regionals 2025 - 2026` (Hyderabad, Chemical Laboratory Technology)

### 5.9. Isolated Contact & Phone Component
- The phone number is cleanly encapsulated into its own distinct card component so that if Navin K decides to withhold it from public indexing, the block can be removed without affecting surrounding layout:
  ```html
  <div class="contact-actions">
    <a href="mailto:navin27032008@gmail.com" class="btn btn-primary">
      <span class="btn-icon" aria-hidden="true">✉</span>
      <span>navin27032008@gmail.com</span>
    </a>
    <div class="phone-card-isolated">
      <a href="tel:8778483642" class="btn btn-secondary">
        <span class="btn-icon" aria-hidden="true">☎</span>
        <span>8778483642</span>
      </a>
      <span class="phone-caption">Direct Employer Line</span>
    </div>
  </div>
  ```

---

## 6. Accessibility & Usability Plan (WCAG 2.2 AA)

1. **Semantic HTML5 Landmarks**:
   - `<header class="rail">` (Desktop sidebar / mobile header).
   - `<nav id="site-nav" aria-label="Main Navigation">`.
   - `<main id="main-content">` (Primary landmark for skip link).
   - Distinct `<section id="..." aria-labelledby="...">` containers for each section.
   - `<footer>` for colophon and metadata.
2. **Heading Order**:
   - Single `<h1>` in top brand/rail: `Navin K`.
   - `<h2>` for each primary section title (`#profile`, `#experience`, etc.).
   - `<h3>` for cards, job titles, and skill categories.
   - No skipped heading levels.
3. **Target Sizes (WCAG 2.2 SC 2.5.8 & Touch Ergonomics)**:
   - All interactive touch targets (nav links, buttons, phone link) have minimum dimension `44px × 44px` on mobile, exceeding the 24px WCAG minimum.
4. **Focus Management & Visible Outlines**:
   - Clear, high-contrast focus rings: `outline: 2px solid var(--color-focus); outline-offset: 2px;`.
   - Never use `outline: none` without providing an accessible `:focus-visible` alternative.
5. **Mobile Drawer Accessibility**:
   - Hamburger button states: `aria-expanded="false"`, `aria-controls="mobile-menu"`.
   - When opened: Focus moves to the first menu item; `Escape` key closes the drawer and restores focus back to the hamburger button.
   - Background scrolling is disabled when drawer is open.
6. **Reflow & Text Spacing Tolerance (WCAG 1.4.10 & 1.4.12)**:
   - Full 320px viewport reflow without two-dimensional scrolling.
   - Supports user-applied overrides: line height 1.5, paragraph spacing 2.0, letter spacing 0.12, word spacing 0.16.
7. **Reduced Motion**:
   - Restrained CSS transitions (150–250ms).
   - Inlined media query:
     ```css
     @media (prefers-reduced-motion: reduce) {
       *, *::before, *::after {
         animation-duration: 0.01ms !important;
         transition-duration: 0.01ms !important;
         scroll-behavior: auto !important;
       }
     }
     ```

---

## 7. Performance & SEO Strategy

1. **Zero-Dependency Lightweight Stack**:
   - Total uncompressed HTML: `< 18 KB`.
   - Total CSS: `< 16 KB`.
   - Total Vanilla JS: `< 4 KB`.
   - Zero external frameworks, bundlers, or runtime libraries (No React, Vue, jQuery, or Bootstrap).
   - Total initial payload (excluding fonts): `< 40 KB`.
2. **Font Optimization**:
   - Self-hosted WOFF2 files in `assets/fonts/` with `font-display: swap`.
   - Preload primary fonts in `<head>`: `<link rel="preload" href="./assets/fonts/..." as="font" type="font/woff2" crossorigin>`.
   - Robust system fallback font stack prevents layout shifts (CLS < 0.02).
3. **No External CDNs / Trackers**:
   - No Google Analytics, no third-party tracking pixels, no CDN font calls that trigger third-party cookies or DNS latency.
4. **Favicon**:
   - Inline SVG data URI / standalone `assets/img/favicon.svg` with clean monogram `NK` on navy background.
5. **SEO & Metadata (Fact-Grounded Only)**:
   - `<title>Navin K | B.E Computer Science and Engineering Portfolio</title>`
   - `<meta name="description" content="Portfolio of Navin K, B.E Computer Science and Engineering student at Sri Krishna College of Engineering and Technology. UI/UX design intern, chemical laboratory trainee, TNSkills silver medalist.">`
   - Canonical URL and social graph cards (`og:image`) will be deferred until the final GitHub Pages URL is established.

---

## 8. Technical Stack & File Architecture

### 8.1. GitHub Pages Compatibility
GitHub Pages serves static files directly from the repository root (or `/docs`). To ensure complete portability across custom domains and subpath deployments (e.g. `https://navin-k.github.io/portfolio/`), **all asset paths must be strictly relative** (`./assets/...` or `assets/...`).

### 8.2. Directory Structure
```text
D:\Portfolio/
├── .gitignore                   # Excludes RESUME.pdf and *.pdf
├── index.html                   # Semantic HTML5 entry point (single page)
├── assets/
│   ├── css/
│   │   └── style.css            # Custom properties, layout grid, typography, components
│   ├── js/
│   │   └── main.js              # Accessible mobile menu, scroll spy, focus trapping
│   ├── fonts/                   # Self-hosted WOFF2 web fonts
│   │   ├── bricolage-grotesque.woff2
│   │   ├── source-sans-3.woff2
│   │   └── ibm-plex-mono.woff2
│   └── img/
│       ├── favicon.svg          # Monogram favicon
│       └── avatar.jpg           # Profile photo (only if confirmed by user)
└── project-docs/
    ├── PORTFOLIO_CONTENT.md     # Step 1 Source of Truth
    └── DESIGN_PLAN.md           # Step 2 Architecture & Design Plan (this document)
```

---

## 9. Deviations, Choices & Open Questions for Navin K

Please review these design decisions and provide your answers before Step 3:

| # | Item | Plan Recommendation | Question / Decision for Navin K |
| :-: | :--- | :--- | :--- |
| **Q1** | **Single-Page Architecture** | Single-page layout with sticky desktop rail, mobile drawer, and 8 anchor sections. | Do you approve the single-page anchor architecture over a multi-page setup? |
| **Q2** | **Profile Photo** | Use monochrome monogram `NK` by default; swap in portrait photo if approved. | Do you want your photo displayed on the site, and if so, should we copy `PHOTO.jpg` or `Professional image.png` from `D:\Details` to `assets/img/`? |
| **Q3** | **Contact Phone Display** | Isolate phone number in its own dedicated card (`<div class="phone-card-isolated">`). | Do you want your phone published on GitHub Pages, and should it include India's country code (`+91 87784 83642`)? |
| **Q4** | **Summary Copy Edit** | Use the minimal, meaning-preserving corrected version from Step 1. | Do you approve the corrected summary copy for the live site? |
| **Q5** | **Section Ordering** | Profile $\rightarrow$ Experience $\rightarrow$ Achievements $\rightarrow$ Skills $\rightarrow$ Education $\rightarrow$ Participations & Workshops $\rightarrow$ Languages $\rightarrow$ Contact. | Do you approve this section sequence? |
| **Q6** | **References Statement** | Include the neutral text: *"Professional references available on request."* | Do you approve including this neutral references line? |
| **Q7** | **Coursera Certificate Link** | Include Coursera title and provider; add verification link if available. | Do you have a credential verification URL or completion date for *AI for Everyone*? |

---
*End of Design Plan — Step 2 Complete. No code or scaffolding has been written.*
