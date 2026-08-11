# Raj Karan — Developer Portfolio

A production-ready, fully responsive portfolio built with **React (Vite)** and **Tailwind CSS**. All content is populated from your resume and lives in a single data file, so the whole site can be updated without touching any component code.

## ✨ Features

- Modern, distinctive UI — dark/technical theme with a teal accent, `Space Grotesk` display type, and `JetBrains Mono` for labels
- Sections: **Home, About, Experience, Projects, Blogs, Contact**
- Dark / light theme toggle — preference saved to `localStorage`, applied before first paint (no flash)
- Sticky, scroll-aware navigation bar with active-section highlighting
- Signature status bar (VS Code–style) showing availability, active section, theme, and live IST time
- Scroll-triggered reveal animations, respecting `prefers-reduced-motion`
- Fully responsive: mobile menu, fluid type scale, breakpoints down to 360px
- Centralized content file — zero hardcoded copy inside components
- Contact form that opens a pre-filled email (ready to wire up to a form backend)
- Placeholder profile photo, project images, and a favicon — easy to swap out
- Your uploaded résumé is already included as a downloadable file (`public/resume.pdf`)

## 🗂 Project Structure

```
src/
  components/       # Reusable UI: Navbar, Footer, ThemeToggle, StatusBar, ProjectCard, BlogCard, Button, Reveal, SectionHeading
  sections/         # Page sections: Hero, About, Experience, Projects, Blogs, Contact
  context/          # ThemeContext (dark/light mode + localStorage)
  hooks/            # useActiveSection (scrollspy), useReveal (scroll animations)
  data/
    portfolio.js    # ← ALL site content lives here
  index.css         # Design tokens, base styles, utility classes
  App.jsx
  main.jsx
public/
  images/           # Placeholder profile & project images (SVG)
  resume.pdf        # Your uploaded résumé, wired to the "Resume" buttons
tailwind.config.js  # Color palette, fonts, animations
```

## 🚀 Getting Started

```bash
npm install
npm run dev       # starts a local dev server (usually http://localhost:5173)
```

Build for production:

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## ✏️ How to Customize

Everything you'll want to change lives in **`src/data/portfolio.js`**:

| What | Field |
|---|---|
| Name, title, tagline, summary, availability | `personalInfo` |
| GitHub / LinkedIn / email links | `socialLinks` |
| About bio paragraphs, skills, education | `about` |
| Work history & bullet highlights | `experience` |
| Project cards (title, description, tags, link, image) | `projects` |
| Blog posts (currently empty — see below) | `blogs` |
| Contact heading & subheading | `contact` |
| Nav links | `navigation` |

No other file needs to change for content updates — components simply read from this file.

### Adding blog posts

The résumé didn't include any blog content, so the **Blogs** section currently shows an empty state instead of placeholder text. To add posts, extend the `blogs` array in `portfolio.js`:

```js
export const blogs = [
  {
    title: 'Post title',
    excerpt: 'Short excerpt describing the post.',
    image: '/images/blog-placeholder.svg',
    date: '2026-01-01',
    readTime: '5 min read',
    url: '#',
  },
]
```

The section automatically switches from the empty state to a card grid once this array is non-empty.

### Replacing placeholder images

Drop your real images into `public/images/` using the same filenames referenced in `portfolio.js`, or update the paths:

- `profile-placeholder.svg` → your profile photo (recommended: square, 480×480+)
- `project-erp-placeholder.svg`, `project-portfolio-placeholder.svg`, `project-ecommerce-placeholder.svg` → project screenshots (recommended: 1600×1000, 8:5 ratio)
- `blog-placeholder.svg` → blog cover images once you add posts

### Wiring up the contact form

The contact form currently opens the visitor's email client with a pre-filled message (no backend required). To collect submissions directly, connect it to a service like [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com) inside `src/sections/Contact.jsx`.

### Project links

A few project entries had no live URL in the source résumé, so their `link` field is set to `'#'`. Update these in `portfolio.js` once the projects are live.

### Theming

Colors, fonts, and animation tokens are defined in `tailwind.config.js` under `theme.extend`. Adjust the `ink`, `paper`, `teal`, and `amber` palettes to restyle the entire site consistently.

## 🧱 Tech Stack

- [React 19](https://react.dev) + [Vite](https://vitejs.dev)
- [Tailwind CSS 3](https://tailwindcss.com)
- [react-icons](https://react-icons.github.io/react-icons/) for iconography
- Vanilla `IntersectionObserver` for scrollspy & reveal animations (no extra animation library required)

## 📦 Deployment

This is a static Vite build — deploy the contents of `dist/` (after `npm run build`) to any static host: Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.

---

Built for Raj Karan · [github.com/rkverse](https://github.com/rkverse) · [linkedin.com/in/rajkaran7](https://linkedin.com/in/rajkaran7)
