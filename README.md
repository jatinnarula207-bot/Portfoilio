# Jatin Narula — Portfolio

A React + Vite + Tailwind CSS developer portfolio.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser. To build for production:

```bash
npm run build
npm run preview
```

## Where to edit things

- `src/data/projects.js` — add repo/demo links and tech stack as projects progress
- `src/data/certifications.js` — dates are still placeholders; add them once you have exact issue dates
- `src/data/skills.js` — add/remove skills or categories
- `public/images/jatin-photo.png` — your About section photo; replace this file (keep the same name) to swap it
- `public/resume.pdf` — your resume; replace this file (keep the same name) to update it — both the navbar and hero "View Resume" buttons link here
- `src/components/Contact.jsx` — the form is UI-only; wire `handleSubmit` up to a service like Formspree or EmailJS, or your own backend route, to actually receive messages

## Deploying

Works out of the box on Vercel or Netlify — just point either at this repo, framework preset "Vite".
