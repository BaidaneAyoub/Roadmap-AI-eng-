# Run locally and connect the team later

## Local development

Use Node.js 26, the version used for verification. The test command uses Node's native TypeScript support. From this folder:

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite. The four local profiles start with **zero progress**. Set up each profile in Settings. Local profiles share this browser's storage only; they are not authentication or remote collaboration. Local private notes can be accessed by anyone using that browser profile. Export a workspace backup before clearing browser data.

```powershell
npm run content
npm test
npm run build
npm run preview
```

`content/curriculum.mjs` and `content/advanced.mjs` author lessons. `src/recommendations.mjs` authors ten patterns and skill responsibilities. `npm run content` produces `src/data/catalog.json`, coverage records, and all Markdown exports. IDs must remain stable when wording changes. Changes to sources require rerunning `npm run check:resources`; review access terms manually, particularly optional hosted exercises.

The roadmap opens as numbered stages. Open Python, then a module and a lesson; use Next stage to continue. Every concept has YouTube recommendations and an explanation of what to watch for; full courses complement focused lessons. `content/videos.mjs` keeps authored video descriptions and publisher provenance. Exact timestamps are not invented.

Understanding ratings (0–100%) are self-assessments, independent of completion. A domain averages rated lessons, using a lesson's overall rating if set, otherwise its rated concept average. Unrated lessons do not become zero scores; the rated count remains visible. Existing v1 local backups without ratings still load.

## Supabase Free

1. Create a **Free** project at https://supabase.com. Do not upgrade or enable paid add-ons.
2. Run `supabase/migrations/001_workspace.sql` once in the project's SQL editor. It creates tables, private-note storage, RLS and guarded write operations.
3. Copy `.env.example` to `.env.local`. Add the project URL and public publishable/anon key. **Never add the service-role key or GitHub client secret to Vite variables.**
4. Register a GitHub OAuth App. Its callback is `https://YOUR_PROJECT.supabase.co/auth/v1/callback`. Add its client ID/secret to Supabase Authentication → Providers → GitHub.
5. In Supabase Authentication → URL Configuration, add the exact local URL (usually `http://127.0.0.1:5173`) and later the Cloudflare URL to allowed redirect URLs. Use the deployed site URL as Site URL when publishing.
6. Restart Vite after changing environment variables. Sign in with GitHub, finish your profile, and create a private team in Settings. The owner creates an invitation link, valid for seven days, and shares it directly with the three teammates. Each teammate signs in, opens the link and selects Join team. The owner can revoke invitations.
7. Optional: enable Realtime for profiles, lesson_progress, custom_topics, projects and project_participants through Database → Replication. Without Realtime, the app refreshes on window focus and every 30 seconds. Row-level security still controls read access.

One user belongs to one team in v1. Invitations are reusable during their validity so the owner can invite the group; keep the link private. The owner can revoke it after everyone joins. Creating or joining a team makes existing lesson status/evidence and custom topics visible to that team. **Notes stay private.**

Local-browser records are not silently imported into authenticated accounts. Keep the local backup; use it as a reference when setting up online progress. This avoids assigning local profiles to the wrong real identity.

## Cloudflare Pages Free

1. Run `npm test` and `npm run build`.
2. Create a Cloudflare Pages project using **Direct Upload**, and upload the `dist` folder. Use the supplied `pages.dev` subdomain. No custom domain or paid plan is required.
3. Alternatively connect a Git repository: build command `npm run build`, output `dist`, Node version 26, and the two public Vite environment values from `.env.example`. Browser configuration is compiled into the build; rebuild after changing it.
4. Add the exact deployed URL to Supabase's redirect allowlist. Verify GitHub login, invitation acceptance and a save/reload across two separate devices before considering live setup complete.
5. Publish subsequent verified builds through Pages. Keep the prior deployment for rollback. `_redirects` provides SPA fallback; navigation uses hash URLs.

Free services have usage limits and can change terms. Supabase Free may pause after inactivity. Do not enable billing upgrades to work around a limit. This local-first delivery performs no hosting registration or deployment.

## Verification before a live release

- Run `supabase/tests/security.sql` in a disposable Supabase project's SQL editor after applying the migration. It creates fixture auth users inside a transaction and rolls everything back.
- Use two real accounts: verify team-only reads, owner-only progress writes, note privacy, joining/copying projects and invitation revocation.
- Try an expired/revoked invitation and a stale project revision: both must fail clearly.
- Break the network during a save: the app must retain draft input and show the failure.
- Inspect desktop and mobile with keyboard navigation and reduced motion.
- Back up important progress using database export facilities; free hosting is not a backup policy.

## Minimal project documentation

Prototype: README, problem, use case, architecture, evaluation.
MVP: add BRD/PRD/SRS, data and prompt contracts, OpenAPI and deployment.
Production: add model card, monitoring, security, rollback and incident runbooks.
Use the original `AI_PROJECT_DOCUMENTATION_GUIDE (1).md` for the rationale. The project builder lists documentation deliverables appropriate to selected skills.
