# Forge · AI Engineering Team Roadmap

A complete English learning roadmap and project workspace for four learners. React + TypeScript + Vite; plain CSS; optional Supabase GitHub authentication and team sync. No runtime AI API or paid design tools.

Double-click `start.bat` to launch the local site and open the roadmap. Keep its server window open while studying.

The roadmap is a branching pipeline: a main application-building route plus optional ML, DL, data, agents and coding-agent branches. Each node opens its lessons and exercises. See the generated [pipeline](docs/PIPELINE.md) for the same route in Markdown; the learning sequence is the detailed domain directory.

```powershell
npm install
npm run dev
```

Local mode supports four independent profiles, chosen paths, known/skipped/completed lessons, notes/evidence, custom nested topics, ten project recommendations for any skill combination, joining projects and independent copies. Storage stays on the current browser. The UI labels that limit explicitly.

The [project library](docs/PROJECT_LIBRARY.md) contains 130 authored briefs (ten per domain). Select skills in Project Builder: exact matches appear first, followed by adapted library projects and composed practice patterns. **Show more** reveals the next batch without repeating ideas. Each tool has a responsibility, deliverable and check; extra project background is disclosed. Broad selections become staged integration projects, and unknown custom topics are labeled general practice.

Open **Read full brief → Your AI mentor handoff** to preview, copy or download an English prompt. It instructs your AI to diagnose your knowledge, give one exercise at a time, review your attempt and offer hints before solutions. Only selected learning statuses/confidence are included; notes, evidence links and team details are excluded. Clipboard failure exposes selectable text. Nothing is sent to an AI service by Forge.

`content/projects.mjs` and `content/project-tools.mjs` contain the versioned project data and tool mappings. `npm run content` also generates `src/data/project-library.json` and the complete Markdown library from the same composer. Existing saved v1 project snapshots and IDs remain valid. No database migration is needed for the optional brief fields.

The populated curriculum and Markdown exports share the same source. Begin with [the roadmap](docs/ROADMAP.md), [project examples](docs/PROJECTS.md), [source coverage](docs/COVERAGE.md), and [setup instructions](docs/SETUP.md).

```powershell
npm run content
npm test
npm run build
npm run check:resources
```

Online setup requires your own Supabase Free project, GitHub OAuth application, the supplied SQL migration and Cloudflare Pages Free upload. No credentials are supplied or fabricated. Both original reference files remain unchanged.

The revised roadmap opens a numbered stage before displaying its lessons. Each concept and lesson/tool can have a self-assessed understanding percentage, separate from completion. The 134 lessons cover 513 concepts with 96 selected YouTube videos, descriptions and longer course references. See [YouTube library](docs/VIDEOS.md) and [verification results](docs/VERIFICATION.md).
