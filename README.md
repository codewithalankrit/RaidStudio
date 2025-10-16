### RAID Studio Architect Intro

**Live**: `https://raidstudio.in` (client project)

Modern single-page site for an architecture studio built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui components. Includes smooth scrolling, animated sections, image galleries, and basic routing for legal pages and project details.

### Tech stack

- **Build**: Vite 5 + React 18 + TypeScript
- **UI**: Tailwind CSS, shadcn/ui (Radix UI primitives)
- **Routing**: `react-router-dom`
- **Charts/3D (optional deps available)**: Recharts, three.js, `@react-three/fiber`, `@react-three/drei`

### Requirements

- Node.js 18+ (Vite 5 requires Node 18 or newer)
- npm (or pnpm/yarn, adjust commands accordingly)

### Getting started

```bash
# Install dependencies
npm install

# Start dev server (defaults to http://localhost:8080)
npm run dev

# Type-checks and lints
npm run lint

# Production build
npm run build

# Preview production build locally
npm run preview
```

Dev server host/port are configured in `vite.config.ts` (host `::`, port `8080`).

### Project structure

- `index.html`: Vite entry HTML
- `src/main.tsx`: App bootstrap
- `src/App.tsx`: Top-level app shell
- `src/pages/`: Route-level pages (`Index`, `ProjectDetail`, `PrivacyPolicy`, `TermsAndConditions`, `NotFound`)
- `src/components/`: Reusable sections (`Hero`, `Projects`, `About`, `Services`, `Footer`, etc.) and `ui/` shadcn components
- `public/`: Static assets (images, `favicon.ico`, `robots.txt`)
- `tailwind.config.ts`: Theme, animations, and content scanning

### Styling and components

- Tailwind is set up with a custom design system and animations. See `tailwind.config.ts` for tokens like `brand.teal` and `architect.*` plus keyframes (`fade-in`, `float`, etc.).
- shadcn/ui components are in `src/components/ui/`. Import and compose them as needed.

### Routing

The app uses `react-router-dom`. Footer links navigate to `Terms & Conditions` and `Privacy Policy`. The home logo click smooth-scrolls to `#home` when already on `/`.

### Environment variables

No required env vars by default. If you integrate services (e.g., EmailJS), follow their docs and create a `.env` (Vite uses `VITE_`-prefixed vars).

### Deployment

- Build: `npm run build` outputs to `dist/`.
- Any static host (Netlify, Vercel, GitHub Pages, Nginx) can serve the `dist/` folder. Ensure SPA fallback to `index.html` is enabled for client-side routes.

### Notes

- Images live under `public/` and are referenced directly (e.g., `/hotel_exterior.webp`).
- Aliases: `@` maps to `./src` as configured in `vite.config.ts`.

### License

Private client project for RAID Studio. Do not redistribute or reuse without written permission.
