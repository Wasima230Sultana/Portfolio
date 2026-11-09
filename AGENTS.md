<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Repo shape

- Single Next.js 16.4.5 app, npm only (`package-lock.json`), no workspaces. App Router source is in `src/app`; path alias `@/*` → `./src/*`.
- README is stock create-next-app boilerplate and partly stale: it says edit `app/page.tsx`, but the real entry is `src/app/page.tsx`.

## Commands

- `npm run dev` — dev server (Turbopack). It rewrites the managed block above and, because `experimental.agentFeedback` is on, also inserts/restores a `nextjs-agent-feedback` block in this file. Follow that block's reporting instructions when present, and commit `AGENTS.md` changes.
- `npm run build`, `npm run lint` (flat config in `eslint.config.mjs`, eslint-config-next).
- There is **no test framework and no typecheck script** — don't go looking for one. Typecheck with `npx tsc --noEmit`, but it only passes after `npm run dev` or `npm run build` has run: `LayoutProps` and the route types are globals generated into `.next/*/types/`, and `next-env.d.ts` is gitignored, so a fresh clone fails `tsc` until then.
- Verification order: `npm run lint && npx tsc --noEmit` (after a dev/build run for types).

## Toolchain quirks

- Tailwind v4 is wired **only** through the Turbopack loader rule in `next.config.ts`; there is no PostCSS config. Don't pass `--webpack` to `dev`/`build` — Tailwind won't be processed.
- `cacheComponents: true` and `partialPrefetching: true` are enabled: App Router pages use the Cache Components rendering model, where uncached data access outside `<Suspense>` blocks prerendering. Build/dev errors print labeled fixes (`use cache` / `<Suspense>` / `export const instant = false`) — follow the suggested pattern instead of improvising.
- `reactCompiler: true` is enabled (babel-plugin-react-compiler).
