# Ramya Dirsumilli — Engineering Portfolio

A responsive, dark-themed personal portfolio built with React, TypeScript and Vite.

## Run locally

Requirements: Node.js 20+ recommended and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build for production

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Personalise before publishing

1. In `src/App.tsx`, replace the `links` values with your real LinkedIn, GitHub and professional email links.
2. Add your final CV PDF as `public/Ramya-Dirsumilli-CV.pdf` (create the `public` folder). The hero section already includes a “Download CV” link to this file; it will work once the PDF is added.
3. Verify all employer names, titles, dates and project descriptions. The most recent role is listed as March 2024–August 2025 based on the latest profile details available; verify this against your final CV.
4. The project case studies are illustrative templates, not claims that these exact projects were deployed. Replace them with public-safe examples and real contributions. Do not disclose confidential employer/client details.
5. Update the HTML title and meta description in `index.html` if you want different wording.

## Free hosting with Vercel

1. Create a new GitHub repository, e.g. `ramya-engineering-portfolio`.
2. Upload/push the contents of this folder to the repository root (the `package.json` should be at the root).
3. Sign in to Vercel using GitHub and choose **Add New → Project**.
4. Import the portfolio repository. Vercel should detect Vite automatically.
5. Use build command `npm run build` and output directory `dist` if asked. No environment variables are required.
6. Select **Deploy**. Vercel will provide a free `*.vercel.app` URL. Future pushes to the connected branch will trigger new deployments.

## Alternative: GitHub Pages

Vercel is the easier option for this Vite project because it needs no base-path configuration. GitHub Pages can also work, but set Vite's `base` to the repository path in `vite.config.ts` and add a Pages deployment workflow.

## Tech stack

- React 18 + TypeScript
- Vite 6
- Lucide icons
- Responsive CSS with reduced-motion support
