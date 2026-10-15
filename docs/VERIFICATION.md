# Delivery verification

## Passed

- TypeScript check and Vite production build.
- 14 Node tests: complete curriculum records, prerequisite integrity, detailed ML/DL coverage, progress/understanding calculations, custom-topic validation, nested checklists, stable recommendations, every-concept YouTube selections, generated content consistency and migration guard assertions.
- Real PostgreSQL 16 in an isolated disposable Docker container: team-only reads, private notes, owner-only progress writes, forged membership rejection, invalid/revoked/expired invitations, participant-only project edits, idempotent joins, stale revisions, anonymous access and rating validation. The same migration was executed; a minimal `auth.uid()` wrapper emulated the Supabase identity context. The container was stopped after testing.
- Browser flow: onboarding → numbered roadmap → Python stage → lesson → concept videos → save/reload understanding. A 95% understanding rating did not change Not started to Completed.
- Browser flow: choose ML + DL + FastAPI + Docker → ten briefs → start project → update milestone → switch to Omar → join → edit while retaining both participants → independent copy.
- Browser flow: add a mapped custom topic with nested checks and a source → check a leaf → reload and retain it.
- Mobile 375px DOM checks: roadmap, dashboard, lesson and project builder have no horizontal overflow; collapsed navigation is inert and keyboard navigation works. Desktop appearance was visually reviewed.
- Current resource/provenance check: 184 URLs responded. This is reachability, not a guarantee of playback, exact free-access terms or continued availability. See RESOURCE_CHECKS.md.
- Both supplied reference files retain their original sizes and modification timestamps.

## Not exercised live

GitHub OAuth, hosted Supabase/PostgREST/Realtime behavior, two-device cloud sync, and Cloudflare deployment require the user's accounts. SETUP.md provides configuration and the remaining acceptance checks. No external hosting registration or paid service was started.

Videos were curated from creator/publisher pages and available metadata. The complete duration of every course was not watched. Topic guidance and official written resources accompany long courses; no unverified timestamps are supplied.

Local-mode notes/progress are stored in one browser and are accessible to anyone who can use that browser profile. Online note privacy is enforced in a separate database table. Export local backups before clearing browser storage; keep source IDs stable when editing the curriculum.
# Guided roadmap update

## Expanded curriculum · 2026-10-15

Added 53 lessons with 265 explained concepts across all 13 domains. The shared catalog now contains 134 lessons, 513 concepts and 96 referenced YouTube videos. Deep learning contains 32 lessons in 11 modules, covering tensor algebra, differentiation, optimiser mathematics, training diagnostics, vision, sequence models, attention, transformers, representations, generative models, audio and reinforcement-learning basics. Existing lesson IDs and concept names are preserved; completion percentages may decrease because the total curriculum is larger.

Each added lesson has specific examples, prerequisite links, priority, study/practice estimates, two written resources, video guidance and a CPU-friendly exercise brief. Advanced training topics use small synthetic inputs or recorded outputs; they do not require paid APIs or GPUs. Website and Markdown exports are generated from the same data. Video publisher links/descriptions were inspected; full lectures were not watched. New provenance is recorded in `content/detail-video-verification.json`.

Production build and 20 automated checks passed, including curriculum depth, preserved identities, prerequisite cycles, resource assignments, project generation and server-rendered lesson content. HTTP resource checks are in RESOURCE_CHECKS.md and do not establish transcript-level video relevance. The exercise briefs are learning assignments; their implementations were not all executed. Live browser review and hosted authentication remain unverified.

The simplified workspace revision adds Understand / Resources / Practice lesson sections, keeps all lesson content mounted while switching sections, places the dashboard continuation before statistics, and collapses roadmap module lists until requested. The progress form has a keyboard-focusable shortcut and appears first in the lesson sidebar. Production build and 19 automated tests (including server-rendered UI content checks) passed. These checks do not verify rendered pixels, mobile layout or real browser interactions; visual review remains outstanding because of the earlier browser URL policy block.

The branching pipeline revision uses eight application-building steps and five optional domain branches. All 13 domains appear once, ML/DL are outside the main route, and end-of-domain lesson navigation follows the pipeline or returns from a branch. The shared catalog generates PIPELINE.md and domain navigation. Production build and 16 tests passed; browser visual checks remain blocked by the URL policy noted below.

Added connected stage arrows, four learning phases, authored goals/checkpoints/transitions, stage continuation and lesson-to-stage navigation. The generated learning sequence and domain documents share the catalog metadata. Production build and 15 automated tests passed. Browser inspection of this update was blocked by the browser tool's URL security policy; desktop/mobile appearance and clicks have not been rechecked for this update.

