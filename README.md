# Ayoub Sofi — Portfolio

A personal portfolio built with React, Vite, Tailwind CSS v4 and Framer Motion.

## Setup

```bash
npm install
cp .env.example .env
# fill in your EmailJS keys in .env
npm run dev
```

## Before deploying

1. **Replace the placeholder images** in `public/assets/`:
   - `ayoubsofi.jpg` — your portrait (used in the Hero section)
   - `GVCF.jpg` — your second photo (used in the About section)
2. **Replace the placeholder CV** at `public/assets/Ayoub_Sofi_CV.pdf` with your real CV.
3. **Set up EmailJS** (free tier available) and fill in `.env`:
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   Your EmailJS template should use variables `from_name`, `from_email`, and `message` (matching `src/components/ContactForm.jsx`).
4. In `src/data/projects.js`, fill in real GitHub repo URLs (currently pointing at your GitHub profile) and any live demo URLs — leave `demo: null` for projects without a live deployment, and the "Live Demo" button will stay hidden automatically.

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/components/` — all UI components
- `src/data/` — project, skill, experience and contact data (edit content here, not in the components)
- `src/hooks/` — `useTheme` (dark/light persistence) and `useScrollSpy` (active nav link)
