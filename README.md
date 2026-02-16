# Starant New Energy Co. Ltd — Frontend

A Vite + React + TypeScript + TailwindCSS starter for the Starant frontend.

## Prerequisites

- Node.js 18+ (or latest LTS)
- npm (bundled with Node)

## Install

Run from the project root:

```bash
npm install
```

## Development

Start the dev server:

```bash
npm run dev
```

Vite will print the local URL (usually http://localhost:5173); if that port is in use it will try the next available port.

## Build & Preview

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Type-check & Lint

Type-check the app (uses the app tsconfig):

```bash
npx -y tsc --project tsconfig.app.json --noEmit
```

Run linter:

```bash
npm run lint
```

## Styling (Tailwind)

This project uses TailwindCSS via PostCSS. Key files:

- `src/index.css` — imports Tailwind layers and custom base styles
- `tailwind.config.js` — Tailwind configuration and content paths
- `postcss.config.cjs` — PostCSS plugins (tailwindcss + autoprefixer)

If styling appears missing:

- Ensure `postcss.config.cjs` exists (it was added during troubleshooting).
- Confirm `src/index.css` is imported from `src/main.tsx` (the project imports it by default).
- Stop any other Vite instances and restart the dev server:

```bash
pkill -f vite || true
npm run dev
```

## TypeScript config notes

During setup the repo was updated with these files to fix local type/JSX resolution issues:

- `tsconfig.app.json` — project config for the app (extends `tsconfig.json`)
- `tsconfig.node.json` — node/vite-specific types

These enable `react-jsx`, include `vite/client` types, and set `skipLibCheck` to avoid noisy node_modules type errors.

## Troubleshooting

- If you see errors like "Property 'div' does not exist on type 'JSX.IntrinsicElements'": ensure TypeScript is using the correct `tsconfig` (run the `tsc` command above). The repo includes `tsconfig.app.json` which is used for app type-checking.
- If styles still don't apply in the browser, check the browser devtools network tab for the CSS bundle and the console for Vite/Tailwind warnings.

## Useful files

- [package.json](package.json)
- [tsconfig.json](tsconfig.json)
- [tsconfig.app.json](tsconfig.app.json)
- [tsconfig.node.json](tsconfig.node.json)
- [postcss.config.cjs](postcss.config.cjs)
- [tailwind.config.js](tailwind.config.js)

---

If you want, I can also:

- Run `npm run build` and show the generated CSS bundle
- Add a small troubleshooting script to surface CSS-related issues

Which would you like next?
