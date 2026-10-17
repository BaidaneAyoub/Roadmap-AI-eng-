# Team Plan — Roadmap AI + Data Eng

2026-10-17 · Ayoub

L-site fih 3 roadmaps. Kol wa7d 3ndo l-part dyalo, w chi 7wayj ba9in bla owner: deploy, CI, vidéos DE w design dyal map.

## Décision: 3 roadmaps

Ayoub khtar had l-model (2026-10-17), w rah deja f code (`content/order.mjs` → `roadmaps`).

| Roadmap | Domains | Chkoun ydkhlha |
| --- | --- | --- |
| AI Engineering | python, engineering, math-data, ml, dl, llm, backend, rag, eval-security, agents, coding-agents, deployment, product | Ay wa7d |
| Data Engineering | python, engineering, math-data, backend, `data-engineering` (Phases 1–7: Spark → Cloud) | Ay wa7d |
| AI + Data Engineering (avancé) | `ai-data` (Phases 1–3: MLOps, LLM/GenAI, system design) | Ghir lli sala AI wla Data |

- Fondation commune (python, engineering, math-data, backend) kat9raha mra wa7da. Progress mrbout b l-leçon, ya3ni kayt7seb f jouj roadmaps.
- AI + Data kaybda direct b l-avancé (option 2). Ma kay3awdch AI wla Data. Ila chi 7aja jdida 3lik, 7ell l-leçon dyal l-roadmap lokhra mn link.
- Ma kayn 7ta lock: "finish AI or Data first" ghir guide f texte, kif ba9i l-site.
## Chkoun kaydir chnou

Kol wa7d 3ndo fichiers dyalo. Ila bghiti tbdl fichier dyal chi wa7d akhor, dir PR w tagih.

| Chkoun | Mission | Fichiers dyalo | Salat mli |
| --- | --- | --- | --- |
| Ayoub (orchestra) | Système projets combinés Data + AI (ex. DE + ML + RAG f projet wa7d). `ai-data` fih 10/10 projets. | `content/order.mjs`, `content/deep-route.mjs`, `src/recommendations.mjs`, `src/project-mentor.mjs`, `content/project-tools.mjs` | Projet combiné kaykhrj task + deliverable + check l kol skill, w `npm test` kaydouz kaml |
| Bouzin | Login b GitHub: l-code deja kayn (`signIn` f `src/store.ts`, Supabase OAuth), khasso ghir ytkonfigura w ytesta. + Yjm3 sources dyal DE. | `src/store.ts`, `supabase/`, `.env.example` | Membre kaydkhl b GitHub, progress dyalo kaytsauvegarda f cloud, `supabase/tests/security.sql` kaydouz. Liste sources DE (titre, URL, gratuit?, phase) msllma l Marouan w Soulaimane |
| Omar | Design dyal site kaml. + Yt2akkd mn sources dyal roadmap AI. | `src/workspace.css`, `src/styles.css`, layout f `src/App.tsx` | Kol page mzyana f mobile w desktop, contraste w clavier mzyanin. `npm run check:resources` bla 7ta lien mi9in f AI |
| Oussama | Ykml w y9add roadmap AI eng w yzid details: concepts, exercices, sources. | `content/curriculum.mjs`, `content/advanced.mjs`, `content/details.mjs` | Kol leçon AI fiha concepts mcher7in, exercice, w source gratuite verifiée 3nd Omar |
| Marouan | Roadmap Data Eng kamla: domain `data-engineering`, Phases 1–7 (Spark → Cloud) + vidéos DE. | `content/data-engineering.mjs` (owner, `lessons.slice(0, 7)`), clés `de-*` f `content/videos.mjs` | Kol phase fiha details, lab, sources mn Bouzin, w vidéo 7a9i9ia (machi placeholder) |
| Soulaimane | Roadmap AI + Data avancée: domain `ai-data` (MLOps, LLM/GenAI, system design). Y7iyed tkrar m3a `llm`, `rag` w `deployment`: f blast ma y3awd ychre7, ydir links l les leçons AI w Data. | Les 3 leçons `de-mlops`, `de-llm-genai`, `de-system-design-interviews` f `content/data-engineering.mjs` (PR l Marouan) | Kol phase avancée fiha links l les leçons AI/Data lli kat3tmed 3lihom, bla 7ta chr7 m3awed |
| Soso | Système projets dyal roadmap DE w roadmap AI (projets dyal kol domain bo7do). | `content/projects.mjs`, `tests/projects.test.mjs` | Kol domain fih 10 projets (142 daba, `ai-data` 3nd Ayoub). Les 10 dyal `data-engineering` ktbhom Claude: khass Soso yrajja3hom |

## Fin kaytdakhlo

Kaynin 5 blays fin jouj wla kter ghadi ybdlo nfs l-fichier. Hado homa l-boundaries.

| Zone | Chkoun | Règle |
| --- | --- | --- |
| `content/data-engineering.mjs` | Marouan, Soulaimane, Bouzin | Marouan owner. Soulaimane kaybdl ghir les 3 leçons dyal `ai-data` w kaydir PR l Marouan. Bouzin kay3ti sources f liste, ma kaybdlch l-fichier |
| `src/App.tsx` (~2600 lignes) | Omar, Bouzin, Soso, Ayoub, Soulaimane | Kol wa7d kaybdl ghir composant dyalo. Omar kaykhddm f CSS. 7ta wa7d ma kayreformati l-fichier kaml (diff kbir = conflit 3nd kolchi) |
| Projets | Soso, Ayoub | Projet f domain wa7d = Soso (`content/projects.mjs`). Projet kaykhllt bzzaf dyal domains = Ayoub (`src/recommendations.mjs`) |
| Sources AI | Oussama, Omar | Oussama kayzid w kay9add. Omar kayverifi w kaysift liste dyal liens mi9in l Oussama, ma kaybdlch l-contenu |
| Fichiers générés (`src/data/*.json`, `docs/**`) | Kolchi | Chouf Règles Git l ta7t: ma kaytbdlouch b l-yed |

## Chnou na9es f l-plan

Hado ma 3ndhom 7ta owner f l-plan l-asli. Kol wa7d fihom 3ndo owner proposé bin parenthèses.

- [ ] **Deploy (Bouzin):** ma kayn 7ta hosting f repo. Login b GitHub khasso URL publique l callback dyal OAuth, ya3ni login ma ykhdmch bla deploy.
- [x] **CI (Ayoub), salat (`.github/workflows/ci.yml`):** ma kayn 7ta `.github/workflows`. Khass GitHub Action kaydir `npm ci`, `npm test` w `npm run build` 3la kol PR.
- [ ] **Design dyal map 3 roadmaps (Omar):** l-map jdida f `Roadmap()` (`src/App.tsx`) khddama b les classes CSS l-9dam, walakin ma tdesignatch. Les étapes communes (python, engineering, math-data, backend) kayt-affichaw f AI w Data b badge « SHARED · STUDIED ONCE ».
- [x] **2 tests kayt7aydo (Ayoub), salat:** `tests/core.test.mjs:63` w `tests/interface.test.mjs:112` ba9in kaysstnnaw route l-9dima (`choices`, « eight-step »). T9addo m3a les 3 roadmaps; daba `npm test` kaydouz kaml (35/35).
- [x] **Texte dyal guide DE (Ayoub), salat:** `stageGuides["data-engineering-ai"]` f `content/order.mjs` tbddel b jouj guides: `data-engineering` w `ai-data`.

L-charge machi mtsawya: 3 dyal nass 3la DE w 2 3la AI. Hadchi normal daba 7it DE jdid, walakin 3awd chouf l-partage mor sprint lowl.

## Règles Git l kolchi

Had règles kaytbe3hom kolchi bach ma ytl3och conflits f kol PR.

1. Ayoub kaypushi `main` (merge dyal Data Eng + 3 roadmaps) 9bel ma ybda 7ta wa7d. Mn ba3d kolchi kaydir `git pull`.
2. Kol wa7d kaykhddm f branche dyalo (`feat/<smiya>-<topic>`) w kaydir PR l `main`. Owner dyal l-fichier howa lli kayreviewi.
3. Source of truth howa `content/*.mjs` w `src/`. `docs/**` w `src/data/*.json` kayt-généraw b `npm run content`, ma tbdlhomch b l-yed.
4. Conflit f fichier généré: khod ay version, 3awd `npm run content`, w commiti.
5. 9bel kol PR: `npm run content` w `npm test`.
6. `.env` ma kaytcommitach. F browser ghir anon key dyal Supabase, jamais service-role key.
7. Kol source khassha tkon gratuite w bla inscription payante.
