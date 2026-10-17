# Team Roles — Roadmap AI + Data Eng

2026-10-17 · Ayoub

Kol wa7d hna l-role dyalo, les fichiers dyalo, w imta tkon l-khdma dyalo salat. L-plan kaml w l-décision dyal 3 roadmaps f [TEAM_PLAN.md](TEAM_PLAN.md).

## Les règles dyal kolchi

1. Mli Ayoub ypushi: `git pull` w `npm install`.
2. Dir branche dyalk: `git checkout -b feat/<smiytek>-<topic>`.
3. Bdl ghir les fichiers dyalk. Ila 7tajiti fichier dyal chi wa7d akhor, dir PR w tagih.
4. 9bel kol PR: `npm run content` w `npm test`, w khass kolchi ykon vert.
5. `docs/**` w `src/data/*.json` kayt-généraw, ma tbdlhomch b l-yed. Ila tla3 conflit fihom, 3awd `npm run content`.
6. Kol source khassha tkon gratuite w bla inscription payante. `.env` ma kaytcommitach.

## Bouzin: Login GitHub + sources DE

- L-code dyal login deja kayn f `src/store.ts` (`signIn` b Supabase OAuth). Ma tbnihch mn zero, ghir konfiguri w testi:
  1. Créé projet Supabase, w activi provider GitHub.
  2. Créé GitHub OAuth App. Callback dyalo: `https://<projet>.supabase.co/auth/v1/callback`.
  3. 3mmer `.env` b `VITE_SUPABASE_URL` w `VITE_SUPABASE_ANON_KEY`. Ghir anon key, jamais service-role.
  4. Douz `supabase/migrations/001_workspace.sql`, mn ba3d `supabase/tests/security.sql`.
  5. Testi: login, progress kaytsauvegarda f cloud, invite d chi wa7d l team.
- **Deploy:** login ma ykhdmch bla URL publique. Khtar hosting gratuit, deployi, w zid l-URL f redirect URLs dyal Supabase.
- **Sources DE:** liste fiha phase, titre, URL, wach gratuite, w type (doc / vidéo / cours). Siftha l Marouan (Phases 1–7) w Soulaimane (AI + Data). Ma tbdlch `content/data-engineering.mjs` bo7dek.
- **Salat mli:** ay membre kaydkhl b GitHub w progress dyalo kaytb9a, w `security.sql` kaydouz.

## Omar: Design + verification dyal sources AI

- Fichiers dyalk: `src/workspace.css`, `src/styles.css`, w layout f `src/App.tsx`.
- Bda b l-map jdida dyal 3 roadmaps f `Roadmap()` dyal `src/App.tsx`. Khddama, walakin ma tdesignatch.
- Les étapes communes kayt-affichaw f AI w f Data b badge « SHARED · STUDIED ONCE ». Khassha tban wad7a.
- Kol page khassha tkon mzyana f mobile w desktop, b contraste mzyan, w tkhdem b clavier.
- Ma treformatich `App.tsx` kaml. Diff kbir kaydir conflit 3nd kolchi.
- **Sources AI:** douz `npm run check:resources`, w natija katkhrj f `docs/RESOURCE_CHECKS.md`. Liste dyal liens mi9in siftha l Oussama, ma tbdlch l-contenu bo7dek.
- **Salat mli:** site kaml m-designé w 0 lien mi9in f roadmap AI.

## Oussama: Roadmap AI Engineering

- Fichiers dyalk: `content/curriculum.mjs`, `content/advanced.mjs`, `content/details.mjs`.
- Kml w 9add les leçons AI. Kol leçon khassha:
  - concepts, kol wa7d b explication w exemple;
  - exercice concret;
  - source gratuite.
- 9add les liens mi9in lli ghadi ysifthom lik Omar.
- Ma tbdlch les IDs dyal leçons wla concepts. Progress dyal nass mrbout bihom.
- **Salat mli:** kol leçon AI kamla w les sources dyalha verifiyin 3nd Omar.

## Marouan: Roadmap Data Engineering (Phases 1–7)

- Fichier dyalk: `content/data-engineering.mjs`, w nta l-owner dyalo. Phases 1–7 homa `lessons.slice(0, 7)`, mn Spark 7tal Cloud.
- Zid details, labs, w les sources lli ghadi ysifthom lik Bouzin.
- **Vidéos:** daba vidéos DE f `content/videos.mjs` placeholders (`de-airflow` → `"actions"`, `de-kafka` → `"system"`...). Zid vidéos 7a9i9iyin l kol phase.
- Nta lli kat-reviewi les PRs dyal Soulaimane 3la nfs l-fichier.
- Ma tbdlch les IDs `de-*`.
- **Salat mli:** kol phase fiha details, lab, sources w vidéo 7a9i9ia.

## Soulaimane: Roadmap AI + Data (avancée)

- L-khdma dyalk: les 3 leçons `de-mlops`, `de-llm-genai` w `de-system-design-interviews` f `content/data-engineering.mjs`, w kolchi kaydouz b PR l Marouan.
- Had roadmap ghir l nass lli salaw AI wla Data, ya3ni ma t3awd 7ta chi 7aja.
- Phase LLM/GenAI kat3awd bzaf mn leçons `llm` w `rag`, w MLOps kat3awd chwiya mn `deployment`. F blast ma t3awd tchre7, dir links l les leçons AI/Data w rkkz 3la l-jdid: kifach AI kaykhdm fo9 data platform.
- **Salat mli:** kol phase fiha ghir l-avancé, b links l les leçons lli kat3tmed 3lihom.

## Soso: Projets dyal kol roadmap

- Fichiers dyalk: `content/projects.mjs` w `tests/projects.test.mjs`.
- Kol domain khasso 10 projets. Kol ligne fiha: `slug|titre|problème|data|livrable|acceptance|skills`.
- Les 10 dyal `data-engineering` ktbthom Claude. Rajja3hom w 9addhom.
- Titres w checks khasshom ykounou uniques. Les skills khasshom ykounou IDs dyal leçons lli kaynin.
- Projets lli kaykhltou bzaf dyal domains machi dyalk, dyal Ayoub.
- **Salat mli:** kol domain fih 10 projets mzyanin w `npm test` vert.

## Ayoub: Orchestra + projets AI + Data

1. **Daba:** pushi `main` bach ybdaw drari.
2. Zid 8 projets l `ai-data` f `content/projects.mjs` (fih ghir 2 daba). Mn ba3d 7iyed l-exception `ponytail:` f `tests/projects.test.mjs`.
3. Projets combinés (ex. DE + ML + RAG) f `src/recommendations.mjs` (`tasks`, `scenarios`) w `src/project-mentor.mjs`.
4. Dir CI: GitHub Action kaydir `npm ci`, `npm test` w `npm run build` 3la kol PR.
5. Reviewi w mergi les PRs, w tab3 l-avancement.

## Chkoun kaysstnna chkoun

| Mn | L | Chnou |
| --- | --- | --- |
| Bouzin | Marouan, Soulaimane | Liste dyal sources DE |
| Omar | Oussama | Liste dyal liens mi9in f AI |
| Soulaimane | Marouan | PR 3la `content/data-engineering.mjs` (review) |
| Ayoub | Kolchi | Push dyal `main` 9bel ma ybdaw |
