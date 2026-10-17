# Team Plan — Roadmap AI + Data Eng

2026-10-17 · Ayoub

L-plan kayghtti tqriban kolchi. Ba9i décision wa7da 9bel ma tbdaw, w 4 7wayj ma 3ndhom 7ta owner: deploy, CI/tests, vidéos DE, w règle dyal fichiers générés.

## Décision lowla: fin kayt7at Data Eng

Khass Ayoub y9errer hadi 9bel ma ybda Marouan, Soulaimane w Soso, 7it kolchi kayt3ella9 biha.

Daba f `main`, `data-engineering-ai` étape f wst route AI, mor `backend` (`content/deep-route.mjs`). Walakin l-plan kayhder 3la *jouj roadmaps* (AI eng w Data eng) w bridge l chi wa7d sala AI w bgha ydkhl l DE. Had jouj l-afkar ma kaytwafe9och.

| Option | Chnou kaywli | Effort |
| --- | --- | --- |
| A. DE roadmap bo7dha (recommandée) | Jouj routes f site: AI eng w Data eng. Bridge AI→DE kaybda mn Phase 1 w kaysskipi chnou deja t9ra. | Ayoub kaybdl `order.mjs` + `deep-route.mjs` + view dyal roadmap f `App.tsx` |
| B. DE étape f route AI (l-7ala daba) | Route wa7da twila, DE f wstha. Bridge ma 3ndouch ma3na. | Walo, deja dayr |
| C. DE branche optionnelle | Kif kan f PR #1. | Sghir, walakin route linéaire dyal Ayoub kat7ayd `choices` |

Ila t-choisa A, Ayoub kaydirha 9bel lakhrin, 7it hiya l-base lli ghadi ybniw 3liha.

## Chkoun kaydir chnou

Kol wa7d 3ndo fichiers dyalo. Ila bghiti tbdl fichier dyal chi wa7d akhor, dir PR w tagih.

| Chkoun | Mission | Fichiers dyalo | Salat mli |
| --- | --- | --- | --- |
| Ayoub (orchestra) | Décision dyal route. Système projets combinés Data + AI (ex. DE + ML + RAG f projet wa7d). Y9add les 2 tests lli kayt7aydo daba. | `content/order.mjs`, `content/deep-route.mjs`, `src/recommendations.mjs`, `src/project-mentor.mjs`, `content/project-tools.mjs` | Projet combiné kaykhrj task + deliverable + check l kol skill, w `npm test` kaydouz kaml |
| Bouzin | Login b GitHub: l-code deja kayn (`signIn` f `src/store.ts`, Supabase OAuth), khasso ghir ytkonfigura w ytesta. + Yjm3 sources dyal DE. | `src/store.ts`, `supabase/`, `.env.example` | Membre kaydkhl b GitHub, progress dyalo kaytsauvegarda f cloud, `supabase/tests/security.sql` kaydouz. Liste sources DE (titre, URL, gratuit?, phase) msllma l Marouan w Soulaimane |
| Omar | Design dyal site kaml. + Yt2akkd mn sources dyal roadmap AI. | `src/workspace.css`, `src/styles.css`, layout f `src/App.tsx` | Kol page mzyana f mobile w desktop, contraste w clavier mzyanin. `npm run check:resources` bla 7ta lien mi9in f AI |
| Oussama | Ykml w y9add roadmap AI eng w yzid details: concepts, exercices, sources. | `content/curriculum.mjs`, `content/advanced.mjs`, `content/details.mjs` | Kol leçon AI fiha concepts mcher7in, exercice, w source gratuite verifiée 3nd Omar |
| Marouan | Roadmap Data Eng kamla: Phases 1–7 (Spark → Cloud) + vidéos DE. | `content/data-engineering.mjs` (owner), clés `de-*` f `content/videos.mjs` | Kol phase fiha details, lab, sources mn Bouzin, w vidéo 7a9i9ia (machi placeholder) |
| Soulaimane | DE + AI avancé: Phases 8–10 (MLOps, LLM/GenAI, system design). + Bridge: chi wa7d sala AI eng w bgha DE kayl9a kolchi m3a links l les leçons AI lli deja 9ra. | Phases 8–10 f `content/data-engineering.mjs` (PR l Marouan) | Bridge AI→DE khddam f site, w kol phase avancée fiha links l AI |
| Soso | Système projets dyal roadmap DE w roadmap AI (projets dyal kol domain bo7do). | `content/projects.mjs`, `tests/projects.test.mjs` | Kol domain fih 10 projets (140 daba). Les 10 dyal DE ktbhom Claude: khass Soso yrajja3hom |

## Fin kaytdakhlo

Kaynin 5 blays fin jouj wla kter ghadi ybdlo nfs l-fichier. Hado homa l-boundaries.

| Zone | Chkoun | Règle |
| --- | --- | --- |
| `content/data-engineering.mjs` | Marouan, Soulaimane, Bouzin | Marouan owner. Soulaimane kaybdl ghir Phases 8–10 w kaydir PR l Marouan. Bouzin kay3ti sources f liste, ma kaybdlch l-fichier |
| `src/App.tsx` (~2600 lignes) | Omar, Bouzin, Soso, Ayoub, Soulaimane | Kol wa7d kaybdl ghir composant dyalo. Omar kaykhddm f CSS. 7ta wa7d ma kayreformati l-fichier kaml (diff kbir = conflit 3nd kolchi) |
| Projets | Soso, Ayoub | Projet f domain wa7d = Soso (`content/projects.mjs`). Projet kaykhllt bzzaf dyal domains = Ayoub (`src/recommendations.mjs`) |
| Sources AI | Oussama, Omar | Oussama kayzid w kay9add. Omar kayverifi w kaysift liste dyal liens mi9in l Oussama, ma kaybdlch l-contenu |
| Fichiers générés (`src/data/*.json`, `docs/**`) | Kolchi | Chouf Règles Git l ta7t: ma kaytbdlouch b l-yed |

## Chnou na9es f l-plan

Hado ma 3ndhom 7ta owner f l-plan l-asli. Kol wa7d fihom 3ndo owner proposé bin parenthèses.

- [ ] **Deploy (Bouzin):** ma kayn 7ta hosting f repo. Login b GitHub khasso URL publique l callback dyal OAuth, ya3ni login ma ykhdmch bla deploy.
- [ ] **CI (Ayoub):** ma kayn 7ta `.github/workflows`. Khass GitHub Action kaydir `npm ci`, `npm test` w `npm run build` 3la kol PR.
- [ ] **2 tests kayt7aydo daba (Ayoub):** `tests/core.test.mjs:63` w `tests/interface.test.mjs:112` ba9in kaysstnnaw route l-9dima (`choices`, « eight-step »). Kayt9addo mli tkon décision dyal route.
- [ ] **Texte dyal guide DE (Ayoub):** `stageGuides["data-engineering-ai"]` f `content/order.mjs` ba9i kay9oul « Optional · parallel track ». Kaytbdl 3la 7sab décision.

L-charge machi mtsawya: 3 dyal nass 3la DE w 2 3la AI. Hadchi normal daba 7it DE jdid, walakin 3awd chouf l-partage mor sprint lowl.

## Règles Git l kolchi

Had règles kaytbe3hom kolchi bach ma ytl3och conflits f kol PR.

1. Ayoub kaypushi `main` (merge dyal Data Eng) 9bel ma ybda 7ta wa7d. Mn ba3d kolchi kaydir `git pull`.
2. Kol wa7d kaykhddm f branche dyalo (`feat/<smiya>-<topic>`) w kaydir PR l `main`. Owner dyal l-fichier howa lli kayreviewi.
3. Source of truth howa `content/*.mjs` w `src/`. `docs/**` w `src/data/*.json` kayt-généraw b `npm run content`, ma tbdlhomch b l-yed.
4. Conflit f fichier généré: khod ay version, 3awd `npm run content`, w commiti.
5. 9bel kol PR: `npm run content` w `npm test`.
6. `.env` ma kaytcommitach. F browser ghir anon key dyal Supabase, jamais service-role key.
7. Kol source khassha tkon gratuite w bla inscription payante.
