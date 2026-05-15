# Fahd Ahmed — Personal Portfolio Website

A personal portfolio website built for the Professional Training 3 assignment at AASTMT. Showcases projects, skills, experience, and student activities.

---

## 🌐 Live URL

> **Replace this with your deployed URL after hosting**
> Example: `https://fahdzer0.github.io` or `https://fahd-ahmed.vercel.app`

---

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── style.css           # All styles (CSS variables, layout, animations)
├── script.js           # Interactions (cursor, scroll, observers, tilt)
├── Fahd_Ahmed_CV.pdf   # Downloadable CV (linked from the site)
└── README.md           # This file
```

---

## ✨ Features

- **Custom cursor** with trail animation
- **Scroll-triggered reveal** animations on all sections
- **Skill bar** animations that trigger on viewport entry
- **3D card tilt** effect on project cards
- **Parallax orbs** that follow mouse movement
- **Scroll progress bar** at the top of the page
- **Animated stat counters** in the About section
- **Responsive design** — works on mobile, tablet, and desktop
- **Mobile hamburger menu** with smooth open/close
- **Sticky nav** that becomes frosted glass on scroll
- **Downloadable CV** button (both in nav and contact section)

---

## 🚀 Deployment

### Option 1 — GitHub Pages (recommended, free)

1. Push this repo to GitHub (e.g. `https://github.com/FAHDZER0/portfolio`)
2. Go to **Settings → Pages**
3. Set source to `main` branch, root (`/`)
4. Your site will be live at `https://FAHDZER0.github.io/portfolio`

> If you want it at `https://FAHDZER0.github.io` (root), name the repo exactly `FAHDZER0.github.io`

### Option 2 — Vercel (zero config)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **New Project** → import your portfolio repo
3. Leave all settings as default → **Deploy**
4. You'll get a live URL like `https://fahd-portfolio.vercel.app`

### Option 3 — Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the entire project folder onto the deploy area
3. Your site is instantly live with a `.netlify.app` URL

---

## 🛠 Tech Stack

- Plain **HTML5**, **CSS3**, **Vanilla JavaScript** — no frameworks, no build step
- Google Fonts: [Syne](https://fonts.google.com/specimen/Syne), [DM Mono](https://fonts.google.com/specimen/DM+Mono), [DM Sans](https://fonts.google.com/specimen/DM+Sans)
- **CSS custom properties** for consistent theming
- **IntersectionObserver API** for scroll-triggered animations
- **requestAnimationFrame** for the cursor trail

---

## 📝 Customisation Notes

### Adding a new project
In `index.html`, copy an existing `.project-card` block inside `.projects-grid` and update:
- `data-index` attribute (increment the number)
- Project name, description, year, type, tags
- The `href` on the GitHub link anchor

### Changing the color accent
In `style.css`, update the `--accent` variable under `:root`:
```css
--accent: #7effd4;  /* change this hex to any color */
```

### Updating the CV
Replace `Fahd_Ahmed_CV.pdf` in the root folder with a new PDF of the **same filename**, or update both `href` and `download` attributes in `index.html` if the filename changes.

---

## 📋 Assignment Checklist

- [x] Hero / About section
- [x] Projects section — 4 projects, each with a GitHub link
- [x] Skills section — organised by category
- [x] Student Activities & Experience section
- [x] Contact section — email, LinkedIn, GitHub
- [x] Download CV button (nav + contact section)
- [x] Responsive design (mobile + desktop)
- [x] Animations and transitions
- [x] Unique design — not a template

---

## 👤 Author

**Fahd Ahmed**  
Software Engineering — AASTMT  
[fahdahmed132@gmail.com](mailto:fahdahmed132@gmail.com) · [LinkedIn](https://www.linkedin.com/in/fahd-ahmed-33383730a/) · [GitHub](https://github.com/FAHDZER0)
