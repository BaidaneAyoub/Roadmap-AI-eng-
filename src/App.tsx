import { useCallback, useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { catalog } from "./catalog";
import type {
  Brief,
  ChecklistNode,
  CustomTopic,
  Lesson,
  Profile,
  Progress,
  ProjectInstance,
  Workspace,
  VideoResource,
} from "./types";
import {
  checklistTotals,
  complete,
  confidenceTotals,
  nextLesson,
  parseChecklist,
  safeUrl,
  statuses,
  statusFor,
  toggleNode,
  totals,
  validateWorkspace,
} from "./logic";
import { recommendAll } from "./recommendations.mjs";
import {
  learnerContext,
  mentorPrompt,
  copyMentorPrompt,
  promptDownload,
} from "./project-mentor.mjs";
import { projectTools } from "../content/project-tools.mjs";
import * as store from "./store";
const { domains, lessons } = catalog;
const lessonById = new Map(lessons.map((l) => [l.id, l]));
const domainLessons = (id: string) => lessons.filter((l) => l.domainId === id);
// A shared domain sits in several roadmaps; the first one drives previous/next links.
const placesOf = (id: string) =>
  catalog.roadmaps.flatMap((roadmap) =>
    roadmap.domains.includes(id)
      ? [{ roadmap, step: roadmap.domains.indexOf(id) }]
      : [],
  );
const neighbourOf = (id: string, offset: number) => {
  const first = placesOf(id)[0];
  return first?.roadmap.domains[first.step + offset];
};
const nav = [
  ["dashboard", "Overview", "grid"],
  ["roadmap", "Learning roadmap", "route"],
  ["projects", "Project builder", "layers"],
  ["team", "Team workspace", "users"],
] as const;
const iconPaths: Record<string, string[]> = {
  grid: ["M3 3h7v7H3z", "M14 3h7v7h-7z", "M3 14h7v7H3z", "M14 14h7v7h-7z"],
  route: [
    "M5 5h10a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h10",
    "M3 3h4v4H3z",
    "M17 19h4v4h-4z",
  ],
  layers: ["m12 3 10 6-10 6L2 9z", "m2 13 10 6 10-6", "m2 17 10 6 10-6"],
  users: [
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8",
    "M22 21v-2a4 4 0 0 0-3-3.9",
    "M16 3.1a4 4 0 0 1 0 7.8",
  ],
  arrow: ["M5 12h14", "m13 6 6 6-6 6"],
  check: ["m5 12 4 4L19 6"],
  book: [
    "M3 3h6a3 3 0 0 1 3 3v15a4 4 0 0 0-4-2H3z",
    "M21 3h-6a3 3 0 0 0-3 3v15a4 4 0 0 1 4-2h5z",
  ],
  search: ["M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16", "m16 16 6 6"],
  clock: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20", "M12 6v6l4 2"],
  code: ["m8 5-7 7 7 7", "m16 5 7 7-7 7", "m14 3-4 18"],
  settings: [
    "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8",
    "M3 12h2m14 0h2M12 3v2m0 14v2M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2",
  ],
  external: ["M14 3h7v7", "m10 14 11-11", "M10 3H3v18h18v-7"],
  plus: ["M12 5v14", "M5 12h14"],
  github: [
    "M9 19c-4 1-4-2-6-2",
    "M15 22v-4c0-1-1-2-1-2 4 0 7-2 7-6 0-2-1-3-2-4 0-1 0-2-1-3-2 0-3 1-4 1s-2-1-4-1c-1 1-1 2-1 3-1 1-2 2-2 4 0 4 3 6 7 6-1 0-1 1-1 2v4",
  ],
  close: ["M6 6l12 12", "M18 6 6 18"],
};
function Icon({ name, size = 18 }: { name: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {(iconPaths[name] ?? iconPaths.code).map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}
const go = (route: string) => {
  location.hash = "/" + route;
};
function useRoute() {
  const [route, set] = useState(location.hash.slice(2) || "dashboard");
  useEffect(() => {
    const onChange = () => {
      set(location.hash.slice(2) || "dashboard");
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}
function Meter({ value, label }: { value: number; label: string }) {
  return (
    <div
      className="meter"
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
    >
      <span style={{ width: `${value}%` }} />
    </div>
  );
}
function Badge({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: string;
}) {
  return <span className={`badge ${tone}`}>{children}</span>;
}
function ConfidenceControl({
  label,
  value,
  onChange,
}: {
  label: string;
  value?: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="confidence-control">
      <label>
        <span>
          {label}
          <strong>{value == null ? "Not rated" : `${value}%`}</strong>
        </span>
        <input
          type="range"
          aria-label={label}
          aria-valuetext={value == null ? "Not rated" : `${value}% understood`}
          min={0}
          max={100}
          step={5}
          value={value ?? 0}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </label>
      <div className="confidence-scale">
        <span>0% · New to me</span>
        <span>100% · Can explain & apply</span>
      </div>
    </div>
  );
}
function VideoCard({
  video,
  compact = false,
}: {
  video: VideoResource;
  compact?: boolean;
}) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noreferrer"
      className={`video-card ${compact ? "compact" : ""}`}
    >
      <div className="video-top">
        <span className="video-play" aria-hidden="true">
          ▶
        </span>
        <div>
          <strong>{video.title}</strong>
          <span>
            {video.creator} · {video.format}
          </span>
        </div>
        <Icon name="external" size={15} />
      </div>
      <p>
        <b>Explains:</b> {video.explains}
      </p>
      <p>
        <b>Useful for:</b> {video.useful}
      </p>
      {video.watchFor ? <p className="watch-for">{video.watchFor}</p> : null}
      <span className="video-url">{video.url}</span>
    </a>
  );
}
function SectionTitle({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <header className="page-title">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {action}
    </header>
  );
}
function download(name: string, content: string, type = "application/json") {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
type Run = (action: () => Promise<unknown>, message?: string) => Promise<void>;

// Progressive reveal: [data-reveal] sections fade in on first intersection.
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

export default function App() {
  const route = useRoute();
  useReveal();
  const [state, setState] = useState<Workspace | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("");
  const mutation = useRef(false);
  const mounted = useRef(true);
  const [small, setSmall] = useState(matchMedia("(max-width:700px)").matches);
  const refresh = useCallback(async () => {
    try {
      const loaded = store.cloud ? await store.loadCloud() : store.localLoad();
      if (mounted.current) {
        setState(loaded);
        setLoading(false);
      }
    } catch (e) {
      if (mounted.current) {
        setError((e as Error).message);
        setLoading(false);
      }
    }
  }, []);
  useEffect(() => {
    mounted.current = true;
    void refresh();
    const onFocus = () => {
      if (!mutation.current) void refresh();
    };
    window.addEventListener("focus", onFocus);
    window.addEventListener("storage", onFocus);
    const timer = store.cloud ? setInterval(onFocus, 30000) : undefined;
    const subscription = store.db?.auth.onAuthStateChange(() => {
      queueMicrotask(() => void refresh());
    });
    const channel = store.db
      ?.channel("forge-updates")
      .on("postgres_changes", { event: "*", schema: "public" }, onFocus)
      .subscribe();
    return () => {
      mounted.current = false;
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("storage", onFocus);
      if (timer) clearInterval(timer);
      subscription?.data.subscription.unsubscribe();
      if (channel) void store.db?.removeChannel(channel);
    };
  }, [refresh]);
  const run: Run = async (action, message = "Saved") => {
    if (mutation.current) return;
    mutation.current = true;
    setBusy(true);
    setError("");
    setNotice("");
    try {
      await action();
      await refresh();
      setNotice(message);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      mutation.current = false;
      setBusy(false);
    }
  };
  useEffect(() => {
    const mq = matchMedia("(max-width:700px)");
    const change = () => setSmall(mq.matches);
    mq.addEventListener("change", change);
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", escape);
    return () => {
      mq.removeEventListener("change", change);
      window.removeEventListener("keydown", escape);
    };
  }, []);
  const user = state?.profiles.find((p) => p.id === state.userId);
  const progress = state?.progress[state.userId] ?? {};
  const selectedLessons = user
    ? lessons.filter((l) => user.selectedDomains.includes(l.domainId))
    : [];
  const summary = totals(selectedLessons, progress, user?.knownLessons);
  const [page, id] = route.split("/");
  useEffect(() => {
    const pending =
      new URLSearchParams(location.search).get("invite") ||
      sessionStorage.getItem("forge-pending-invite");
    if (store.cloud && state && !state.team && pending && page !== "settings")
      go("settings");
  }, [state?.userId, state?.team?.id, page]);
  // Visiting records the last lesson; it does not mark any learning as complete.
  useEffect(() => {
    if (
      page === "lesson" &&
      id &&
      lessonById.has(id) &&
      state &&
      user &&
      user.lastLesson !== id &&
      !mutation.current
    ) {
      void (async () => {
        try {
          await store.recordVisit(state, id);
          await refresh();
        } catch (e) {
          setError(`Could not record last lesson: ${(e as Error).message}`);
        }
      })();
    }
  }, [page, id, user?.id, refresh]);
  useEffect(() => {
    setMenu(false);
  }, [route]);
  const content = () => {
    if (loading)
      return <div className="panel empty">Loading your workspace…</div>;
    if (!state || !user) {
      if (page === "roadmap")
        return (
          <>
            <button className="button" onClick={() => void run(store.signIn)}>
              Sign in to save progress
            </button>
            <Roadmap state={null} search={search} selected={id} />
          </>
        );
      if (page === "lesson" && lessonById.has(id))
        return <PublicLesson lesson={lessonById.get(id)!} run={run} />;
    }
    if (!state || !user)
      return (
        <div className="welcome panel">
          <div className="eyebrow">YOUR NEXT CHAPTER</div>
          <h1>
            Build the skills.
            <br />
            Then build something real.
          </h1>
          <p>
            A complete, free AI engineering curriculum. Your own pace,
            meaningful projects, one shared team.
          </p>
          <button
            className="button primary"
            onClick={() => void run(store.signIn, "Opening GitHub…")}
          >
            <Icon name="github" /> Sign in with GitHub
          </button>
          <p className="small">
            Learning content is available in the roadmap. Sign in to save
            progress.
          </p>
          <button className="button" onClick={() => go("roadmap")}>
            Explore the curriculum
          </button>
          {page === "roadmap" ? <Roadmap state={null} search={search} /> : null}
        </div>
      );
    if (page === "settings" || !user.onboarded)
      return (
        <Settings
          key={user.id}
          state={state}
          user={user}
          run={run}
          busy={busy}
        />
      );
    if (page === "roadmap")
      return <Roadmap state={state} search={search} selected={id} />;
    if (page === "lesson") {
      const lesson = lessonById.get(id);
      return lesson ? (
        <LessonPage
          key={`${user.id}:${id}`}
          lesson={lesson}
          state={state}
          user={user}
          run={run}
          busy={busy}
        />
      ) : (
        <div className="panel empty">
          Lesson not found.{" "}
          <button onClick={() => go("roadmap")}>Open roadmap</button>
        </div>
      );
    }
    if (page === "projects")
      return (
        <ProjectBuilder
          state={state}
          user={user}
          run={run}
          busy={busy}
          initialSkill={id}
        />
      );
    if (page === "team")
      return <TeamPage state={state} user={user} run={run} busy={busy} />;
    return <Dashboard state={state} user={user} />;
  };
  return (
    <div className="app-shell">
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >
        Skip to content
      </a>
      <aside className={`sidebar ${menu ? "open" : ""}`} inert={small && !menu}>
        <a className="brand" href="#/dashboard">
          <span className="brand-mark">
            <Icon name="layers" size={24} />
          </span>
          <span>
            forge<span className="brand-dot">.</span>
            <small>AI ENGINEERING WORKSPACE</small>
          </span>
        </a>
        <div className="workspace-label">
          YOUR WORKSPACE{" "}
          <Badge tone="green">{store.cloud ? "Online" : "Local"}</Badge>
        </div>
        <nav aria-label="Main navigation">
          {nav.map(([key, label, icon]) => (
            <a
              key={key}
              href={`#/${key}`}
              className={
                page === key || (key === "roadmap" && page === "lesson")
                  ? "active"
                  : ""
              }
              aria-current={page === key ? "page" : undefined}
            >
              <Icon name={icon} />
              {label}
              {key === "projects" ? (
                <span className="nav-count">10</span>
              ) : null}
            </a>
          ))}
        </nav>
        <div className="sidebar-section">
          <div className="workspace-label">LEARNING PATH</div>
          {domains
            .filter((d) => !user || user.selectedDomains.includes(d.id))
            .map((d, i) => (
              <a href={`#/roadmap/${d.id}`} key={d.id} className="path-link">
                <span className={`path-dot color-${i % 4}`} />
                <span>{d.title}</span>
              </a>
            ))}
          <a className="path-link small" href="#/settings">
            <Icon name="plus" /> Customize your path
          </a>
        </div>
        <div className="sidebar-bottom">
          <div className="free-note">
            <Icon name="code" />
            <div>
              Built to learn. Free to use.
              <small>No AI API credits required.</small>
            </div>
          </div>
          <a href="#/settings" className="profile-link">
            <span className="avatar">
              {user?.displayName.slice(0, 2).toUpperCase() ?? "AI"}
            </span>
            <span>
              {user?.displayName ?? "Your workspace"}
              <small>
                {store.cloud
                  ? (state?.team?.name ?? "Personal workspace")
                  : "Saved on this browser"}
              </small>
            </span>
            <Icon name="settings" />
          </a>
        </div>
      </aside>
      <div className="main-shell">
        <header className="topbar">
          <button
            className="mobile-menu icon-button"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle navigation"
            aria-expanded={menu}
          >
            <Icon name={menu ? "close" : "layers"} />
          </button>
          <div className="breadcrumb">
            Workspace <span>/</span>{" "}
            <strong>
              {page === "lesson"
                ? "Learning roadmap"
                : (nav.find((n) => n[0] === page)?.[1] ?? "Settings")}
            </strong>
          </div>
          <label className="search">
            <Icon name="search" />
            <input
              aria-label="Search lessons"
              placeholder="Find a topic or concept…"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                if (page !== "roadmap") go("roadmap");
              }}
            />
            <kbd>/</kbd>
          </label>
          {!store.cloud && state ? (
            <label className="profile-switch">
              <span className="sr-only">Switch local profile</span>
              <select
                value={state.userId}
                onChange={(e) => {
                  const next = { ...state, userId: e.target.value };
                  try {
                    store.localSave(next);
                    setState(next);
                    setNotice("Local profile switched");
                  } catch (err) {
                    setError((err as Error).message);
                  }
                }}
              >
                {state.profiles.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.displayName}
                  </option>
                ))}
              </select>
            </label>
          ) : null}
          <span className="connection">
            <span />
            {store.cloud ? "Cloud sync" : "Local workspace"}
          </span>
        </header>
        <main id="main" tabIndex={-1} key={route}>
          {!store.cloud ? (
            <div className="local-banner">
              Local mode · progress stays on this browser. Connect Supabase
              later for private team sync.{" "}
              <a href="#/settings">
                Setup & settings <Icon name="arrow" size={14} />
              </a>
            </div>
          ) : null}
          {error ? (
            <div className="feedback error" role="alert">
              {error}
              <button
                className="icon-button"
                aria-label="Dismiss error"
                onClick={() => setError("")}
              >
                <Icon name="close" />
              </button>
              {!state && !store.cloud ? (
                <>
                  <button
                    onClick={() =>
                      download("forge-recovery.json", store.localRaw())
                    }
                  >
                    Export stored data
                  </button>
                  <button
                    onClick={() => {
                      if (
                        confirm(
                          "Reset this browser’s local workspace? Export first to preserve progress.",
                        )
                      ) {
                        store.resetLocal();
                        void refresh();
                      }
                    }}
                  >
                    Reset local data
                  </button>
                </>
              ) : null}
            </div>
          ) : null}
          {notice ? (
            <div className="feedback success" role="status">
              {notice}
              <button
                className="icon-button"
                aria-label="Dismiss notification"
                onClick={() => setNotice("")}
              >
                <Icon name="close" />
              </button>
            </div>
          ) : null}
          {content()}
          <footer className="page-footer">
            <span>Learn with intention. Build with evidence.</span>
            <span>
              {lessons.length} lessons · {domains.length} domains · 100% free
              learning paths
            </span>
          </footer>
        </main>
      </div>
    </div>
  );
}

export function Dashboard({
  state,
  user,
}: {
  state: Workspace;
  user: Profile;
}) {
  const p = state.progress[user.id] ?? {};
  const chosen = lessons.filter((l) =>
    user.selectedDomains.includes(l.domainId),
  );
  const total = totals(chosen, p, user.knownLessons);
  const confidence = confidenceTotals(chosen, p);
  const next = nextLesson(lessons, user, p);
  const remaining = chosen
    .filter((l) => !complete(statusFor(l.id, user, p)))
    .reduce((s, l) => s + l.studyHours + l.practiceHours, 0);
  const active = state.projects.filter(
    (x) => x.participants.includes(user.id) && x.status !== "Completed",
  );
  return (
    <>
      <SectionTitle
        eyebrow="A LITTLE PROGRESS, EVERY DAY"
        title={`Welcome back, ${user.displayName}.`}
        description="Your path to AI engineering. Learn at your own pace, put it into practice."
        action={
          <button className="button" onClick={() => go("projects")}>
            <Icon name="plus" /> Find a project
          </button>
        }
      />
      <div className="dashboard-grid" data-reveal>
        <section className="continue-card">
          <div className="eyebrow">
            <span className="live-dot" /> KEEP THE MOMENTUM
          </div>
          <h2>{next?.title ?? "Your selected path is complete"}</h2>
          <p>
            {next?.why ??
              "Explore another domain or combine your skills into a portfolio project."}
          </p>
          <div className="inline-meta">
            <span>
              <Icon name="book" size={15} />
              {next
                ? domains.find((d) => d.id === next.domainId)?.title
                : "Choose your next challenge"}
            </span>
            <span>
              <Icon name="clock" size={15} />
              {next
                ? `${next.studyHours + next.practiceHours}h study + practice`
                : "Self-paced"}
            </span>
            <Badge tone="green">{next?.priority ?? "Ready to build"}</Badge>
          </div>
          <button
            className="button primary"
            onClick={() => go(next ? `lesson/${next.id}` : "projects")}
          >
            {next ? "Continue learning" : "Build a project"}
            <Icon name="arrow" />
          </button>
        </section>
        <section className="panel team-preview">
          <div className="section-heading">
            <h2>Your learning crew</h2>
            <a href="#/team">
              View team <Icon name="arrow" size={14} />
            </a>
          </div>
          {state.profiles.map((member, i) => {
            const t = totals(
              lessons.filter((l) =>
                member.selectedDomains.includes(l.domainId),
              ),
              state.progress[member.id],
              member.knownLessons,
            );
            return (
              <div className="member-row" key={member.id}>
                <span className={`avatar tone-${i % 4}`}>
                  {member.displayName.slice(0, 2).toUpperCase()}
                </span>
                <div>
                  <strong>
                    {member.displayName}
                    {member.id === user.id ? <small> · You</small> : null}
                  </strong>
                  <span>
                    {member.onboarded
                      ? `${t.done} lessons complete`
                      : "Path not set up yet"}
                  </span>
                </div>
                <span className="mono">{t.percent}%</span>
              </div>
            );
          })}
          <div className="small muted">
            {store.cloud
              ? "Private to your team."
              : "Local profiles for planning; invite friends after cloud setup."}
          </div>
        </section>
      </div>
      <div className="stats-grid" data-reveal>
        <Stat
          label="Your learning progress"
          value={`${total.percent}%`}
          caption={`${total.done} of ${total.total} lessons complete`}
          icon="route"
          meter={total.percent}
        />
        <Stat
          label="Your understanding"
          value={confidence.percent == null ? "—" : `${confidence.percent}%`}
          caption={`${confidence.rated}/${confidence.total} lessons rated · self-assessed`}
          icon="layers"
        />
        <Stat
          label="Projects in progress"
          value={String(active.length).padStart(2, "0")}
          caption="Ideas becoming real things"
          icon="code"
        />
        <Stat
          label="Weekly commitment"
          value={`${user.hours}h`}
          caption={`≈ ${Math.ceil(remaining / user.hours)} weeks of remaining practice`}
          icon="clock"
        />
      </div>
      <div className="section-heading spacious">
        <div>
          <h2>Your learning path</h2>
          <p>Foundations to production. No locked chapters.</p>
        </div>
        <a href="#/roadmap">
          Explore all domains <Icon name="arrow" size={15} />
        </a>
      </div>
      <div className="domain-grid">
        {domains
          .filter((d) => user.selectedDomains.includes(d.id))
          .map((d) => (
            <DomainCard key={d.id} id={d.id} state={state} />
          ))}
      </div>
      <section className="project-callout">
        <div className="callout-icon">
          <Icon name="layers" size={28} />
        </div>
        <div>
          <div className="eyebrow">KNOW IT? BUILD WITH IT.</div>
          <h2>Turn your skills into something real.</h2>
          <p>
            Select ML, Deep Learning, FastAPI, Docker—or your own combination.
            Get ten projects that put every skill to work.
          </p>
        </div>
        <button className="button" onClick={() => go("projects")}>
          Open project builder <Icon name="arrow" />
        </button>
      </section>
      <p className="small muted">
        Progress is self-reported. Already-known lessons count as complete;{" "}
        {total.skipped} skipped lessons remain separate.
      </p>
    </>
  );
}
function Stat({
  label,
  value,
  caption,
  icon,
  meter,
}: {
  label: string;
  value: string;
  caption: string;
  icon: string;
  meter?: number;
}) {
  return (
    <div className="panel stat">
      <div className="stat-label">
        {label}
        <Icon name={icon} />
      </div>
      <div className="stat-value">{value}</div>
      <div className="small muted">{caption}</div>
      {meter !== undefined ? <Meter value={meter} label={label} /> : null}
    </div>
  );
}
function DomainCard({ id, state }: { id: string; state: Workspace | null }) {
  const d = domains.find((x) => x.id === id)!;
  const user = state?.profiles.find((p) => p.id === state.userId);
  const list = domainLessons(id);
  const t = totals(
    list,
    user ? state?.progress[user.id] : {},
    user?.knownLessons,
  );
  const confidence = confidenceTotals(
    list,
    user ? state?.progress[user.id] : {},
  );
  return (
    <a href={`#/roadmap/${id}`} className="panel domain-card">
      <div className="domain-card-top">
        <span className="domain-icon mono">
          {String(domains.findIndex((d) => d.id === id) + 1).padStart(2, "0")}
        </span>
        <Badge>{list.length} lessons</Badge>
      </div>
      <h3>{d.title}</h3>
      <p>{d.description}</p>
      <div className="domain-progress">
        <span>
          {t.done}/{t.total} completed
        </span>
        <strong>{t.percent}%</strong>
      </div>
      <Meter value={t.percent} label={`${d.title} progress`} />
      <div className="domain-card-foot">
        <span>
          {confidence.percent == null
            ? "Understanding: not rated"
            : `Understanding: ${confidence.percent}%`}{" "}
          · {confidence.rated}/{list.length} rated
        </span>
        <Icon name="arrow" size={16} />
      </div>
      <div className="stage-open">
        Open this stage <Icon name="arrow" size={14} />
      </div>
    </a>
  );
}

function PipelineNode({
  id,
  state,
  branch = false,
  outsidePath = false,
}: {
  id: string;
  state: Workspace | null;
  branch?: boolean;
  outsidePath?: boolean;
}) {
  const domain = domains.find((d) => d.id === id)!;
  const user = state?.profiles.find((p) => p.id === state.userId);
  const list = domainLessons(id);
  const t = totals(
    list,
    user ? state?.progress[user.id] : {},
    user?.knownLessons,
  );
  const understanding = confidenceTotals(
    list,
    user ? state?.progress[user.id] : {},
  );
  const shared = !branch && placesOf(id).length > 1;
  return (
    <div
      className={`pipeline-node ${branch ? "branch" : ""} ${shared ? "shared" : ""} ${outsidePath ? "outside-path" : ""}`}
    >
      <a className="pipeline-node-link" href={`#/roadmap/${id}`}>
        <span className="eyebrow">
          {branch
            ? "OPTIONAL BRANCH"
            : shared
              ? "SHARED · STUDIED ONCE"
              : "ROADMAP STEP"}
          {outsidePath ? " · NOT IN MY PATH" : ""}
        </span>
        <h3>
          {domain.title}
          <Icon name="arrow" size={17} />
        </h3>
        <p>{branch ? domain.description : domain.guide.goal}</p>
        <div className="domain-progress">
          <span>
            {t.done}/{t.total} lessons · {t.skipped} skipped
          </span>
          <strong>{t.percent}%</strong>
        </div>
        <Meter value={t.percent} label={`${domain.title} completion`} />
        <span className="small muted">
          Understanding:{" "}
          {understanding.percent == null
            ? "not rated"
            : `${understanding.percent}%`}{" "}
          · {understanding.rated}/{list.length} rated
        </span>
      </a>
      <details className="pipeline-topics-disclosure">
        <summary>{domain.modules.length} modules · Explore topics</summary>
        <div
          className="pipeline-topics"
          aria-label={`${domain.title} starting lessons`}
        >
          {domain.modules.map((m) => (
            <a href={`#/lesson/${m.lessons[0].id}`} key={m.title}>
              {m.title}
            </a>
          ))}
        </div>
      </details>
    </div>
  );
}

export function Roadmap({
  state,
  search,
  selected,
}: {
  state: Workspace | null;
  search: string;
  selected?: string;
}) {
  const user = state?.profiles.find((p) => p.id === state.userId);
  const [filter, setFilter] = useState("all");
  const [priority, setPriority] = useState("all");
  const query = search.trim().toLowerCase();
  const chosen = domains.find((d) => d.id === selected);
  const places = chosen ? placesOf(chosen.id) : [];
  const previousId = chosen ? neighbourOf(chosen.id, -1) : undefined;
  const nextId = chosen ? neighbourOf(chosen.id, 1) : undefined;
  const requires = places.find((p) => p.roadmap.requires)?.roadmap.requires;
  const stageLessons = chosen
    ? domainLessons(chosen.id)
    : lessons
        .filter((l) => catalog.pipeline.some((s) => s.domain === l.domainId))
        .filter(
          (l) => filter === "all" || user?.selectedDomains.includes(l.domainId),
        );
  const progress = user ? (state?.progress[user.id] ?? {}) : {};
  const stageTotals = totals(stageLessons, progress, user?.knownLessons);
  const pending = stageLessons.find((l) => {
    const status = user ? statusFor(l.id, user, progress) : "Not started";
    return !complete(status) && status !== "Skipped";
  });
  const list = chosen ? [chosen] : domains;
  const showLessons = Boolean(chosen || query || priority !== "all");
  return (
    <>
      <SectionTitle
        eyebrow="THE COMPLETE CURRICULUM"
        title={
          chosen
            ? `Step ${(places[0]?.step ?? 0) + 1} · ${chosen.title}`
            : "Three roadmaps. One curriculum."
        }
        description={
          chosen?.description ??
          "AI Engineering and Data Engineering share a foundation you study once. AI + Data Engineering is the advanced roadmap after either one. Click any node to open its lessons."
        }
        action={
          chosen ? (
            <button className="button" onClick={() => go("roadmap")}>
              All domains
            </button>
          ) : (
            <Badge tone="green">{lessons.length} researched lessons</Badge>
          )
        }
      />
      <section
        className="panel journey-guide"
        aria-label="Step-by-step learning guide"
        data-reveal
      >
        <div className="eyebrow">
          {chosen
            ? places
                .map(
                  (p) =>
                    `${p.roadmap.title.toUpperCase()} · STEP ${p.step + 1} OF ${p.roadmap.domains.length}`,
                )
                .join(" · ")
            : "YOUR STEP-BY-STEP ROUTE"}
        </div>
        <h2>
          {chosen ? chosen.guide.goal : "Pick a roadmap. Shared steps count once."}
        </h2>
        {chosen ? (
          <>
            <p>
              <strong>Stage checkpoint:</strong> {chosen.guide.checkpoint}
            </p>
            <p className="muted">
              {catalog.pipeline.find((s) => s.domain === chosen.id)?.outcome}
              {requires ? ` ${requires}` : ""}
            </p>
            <div className="inline-meta">
              <span>
                {stageTotals.done}/{stageTotals.total} lessons completed
              </span>
              <span>{stageTotals.skipped} skipped</span>
              <span>{stageTotals.percent}% complete</span>
            </div>
            <Meter
              value={stageTotals.percent}
              label={`${chosen.title} stage completion`}
            />
          </>
        ) : (
          <details className="roadmap-help">
            <summary>How to use this roadmap</summary>
            <p>
              The supplied Andrew skills map is the framework;{" "}
              <a
                className="text-link"
                href="https://roadmap.sh/ai-engineer"
                target="_blank"
                rel="noreferrer"
              >
                roadmap.sh
              </a>{" "}
              supplements it. Choose AI Engineering or Data Engineering; both
              start from the same Python, engineering, mathematics/data and
              backend lessons, which you study once. After finishing either,
              continue with the advanced AI + Data Engineering roadmap.
            </p>
          </details>
        )}
        {chosen ? (
          <ol className="learning-loop">
            <li>Open the next lesson</li>
            <li>Study concepts and videos</li>
            <li>Build and check the exercise</li>
            <li>Save understanding and evidence</li>
            <li>Continue to the next step</li>
          </ol>
        ) : null}
        {pending ? (
          <a
            className="button primary"
            href={
              chosen
                ? `#/lesson/${pending.id}`
                : `#/roadmap/${pending.domainId}`
            }
          >
            {chosen
              ? `Continue: ${pending.title}`
              : `Continue: ${domains.find((d) => d.id === pending.domainId)?.title}`}{" "}
            <Icon name="arrow" />
          </a>
        ) : (
          <p>
            All lessons are completed, known or skipped. Review skipped lessons
            or build a capstone.
          </p>
        )}
        <p className="small muted">
          Self-assessment is separate from completion. No stage is locked.
        </p>
      </section>
      <div className="toolbar">
        <div className="tabs" role="group" aria-label="Roadmap filters">
          {[
            ["all", "All domains"],
            ["path", "My path"],
          ].map(([v, label]) => (
            <button
              key={v}
              className={filter === v ? "selected" : ""}
              aria-pressed={filter === v}
              onClick={() => setFilter(v)}
            >
              {label}
            </button>
          ))}
        </div>
        <label>
          Priority{" "}
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="all">All priorities</option>
            {["Core", "Useful next", "Advanced"].map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>
        <span className="small muted">
          Prerequisites guide you. They never lock a lesson.
        </span>
      </div>
      {!chosen && !query && priority === "all" ? (
        <section
          className="pipeline-map"
          aria-label="AI, Data and AI + Data engineering roadmaps"
          data-reveal
        >
          <div className="pipeline-legend">
            <span>
              <i /> Main route
            </span>
            <span>
              <i className="optional" /> Optional depth / project choice
            </span>
            <span>
              <i className="shared" /> Shared step · studied once
            </span>
            <span>Arrows guide order, never lock access</span>
          </div>
          <div className="pipeline-terminal">START · Choose a user problem</div>
          {catalog.roadmaps.map((roadmap, phaseIndex) => (
            <section
              className="pipeline-phase"
              data-phase={phaseIndex}
              key={roadmap.id}
              aria-labelledby={`pipeline-phase-${phaseIndex}`}
            >
              <header className="pipeline-phase-header">
                <span className="phase-number mono">
                  {String(phaseIndex + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="eyebrow">
                    ROADMAP {phaseIndex + 1} / {catalog.roadmaps.length}
                  </span>
                  <h2 id={`pipeline-phase-${phaseIndex}`}>{roadmap.title}</h2>
                  <p>
                    {roadmap.requires ??
                      `${roadmap.domains.length} steps. Shared steps count in every roadmap that lists them.`}
                  </p>
                </div>
              </header>
              {roadmap.domains
                .map((id) => catalog.pipeline.find((s) => s.domain === id)!)
                .map((step, i) => (
                  <div className="pipeline-row" key={step.id}>
                    <div className="pipeline-step">
                      <span className="mono">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2>{domains.find((d) => d.id === step.domain)?.title}</h2>
                      <details className="pipeline-step-info">
                        <summary>What you’ll build</summary>
                        <p>{step.outcome}</p>
                      </details>
                    </div>
                    <div className="pipeline-main">
                      <PipelineNode
                        id={step.domain}
                        state={state}
                        outsidePath={
                          filter === "path" &&
                          !user?.selectedDomains.includes(step.domain)
                        }
                      />
                    </div>
                    <div className="pipeline-branches">
                      {step.choices
                        .filter(
                          (id) =>
                            filter === "all" ||
                            user?.selectedDomains.includes(id),
                        )
                        .map((id) => (
                          <PipelineNode key={id} id={id} state={state} branch />
                        ))}
                    </div>
                  </div>
                ))}
            </section>
          ))}
          <a className="pipeline-terminal finish" href="#/projects">
            BUILD YOUR CAPSTONE <Icon name="arrow" />
          </a>
        </section>
      ) : null}
      {(showLessons ? list : [])
        .filter((d) => filter === "all" || user?.selectedDomains.includes(d.id))
        .map((domain) => {
          const modules = domain.modules
            .map((module) => ({
              ...module,
              lessons: module.lessons.filter(
                (l) =>
                  (priority === "all" || l.priority === priority) &&
                  (!query ||
                    [l.title, l.why, ...l.concepts.map((c) => c.name)]
                      .join(" ")
                      .toLowerCase()
                      .includes(query)),
              ),
            }))
            .filter((m) => m.lessons.length);
          if (!modules.length) return null;
          return (
            <section key={domain.id} className="curriculum-section">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">
                    {String(domains.indexOf(domain) + 1).padStart(2, "0")} /
                    DOMAIN
                  </span>
                  <h2>{domain.title}</h2>
                </div>
                <button
                  className="button subtle"
                  onClick={() => go(`projects/${domain.id}`)}
                >
                  10 project ideas <Icon name="arrow" size={15} />
                </button>
              </div>
              {modules.map((module) => (
                <details
                  className="panel module"
                  key={module.title}
                  open={Boolean(
                    query || module.lessons.some((l) => l.id === pending?.id),
                  )}
                >
                  <summary>
                    <Icon name="book" />
                    <span>
                      Module{" "}
                      {domain.modules.findIndex(
                        (m) => m.title === module.title,
                      ) + 1}{" "}
                      · {module.title}
                    </span>
                    <span className="small muted">
                      {module.lessons.length} lessons
                    </span>
                  </summary>
                  <div className="lesson-list">
                    {module.lessons.map((l) => {
                      const status = user
                        ? statusFor(l.id, user, state?.progress[user.id])
                        : "Not started";
                      const understanding = confidenceTotals(
                        [l],
                        user ? state?.progress[user.id] : {},
                      ).percent;
                      return (
                        <a
                          href={`#/lesson/${l.id}`}
                          key={l.id}
                          className="lesson-row"
                        >
                          <span
                            className={`lesson-number ${complete(status) ? "done" : ""}`}
                          >
                            {complete(status) ? (
                              <Icon name="check" size={15} />
                            ) : (
                              String(
                                domainLessons(domain.id).findIndex(
                                  (x) => x.id === l.id,
                                ) + 1,
                              ).padStart(2, "0")
                            )}
                          </span>
                          <div>
                            <h3>{l.title}</h3>
                            <p>
                              {l.concepts.length} concepts · {l.studyHours}h
                              study + {l.practiceHours}h practice
                            </p>
                          </div>
                          <Badge
                            tone={l.priority === "Core" ? "green" : "muted"}
                          >
                            {l.priority}
                          </Badge>
                          <span className="small muted nowrap">
                            {l.studyHours + l.practiceHours}h
                          </span>
                          <Badge>{status}</Badge>
                          <span className="small muted nowrap">
                            {understanding == null
                              ? "Unrated"
                              : `${understanding}% understood`}
                          </span>
                          <Icon name="arrow" size={16} />
                        </a>
                      );
                    })}
                  </div>
                </details>
              ))}
            </section>
          );
        })}
      {query &&
      !lessons.some((l) =>
        [l.title, l.why, ...l.concepts.map((c) => c.name)]
          .join(" ")
          .toLowerCase()
          .includes(query),
      ) ? (
        <div className="panel empty">
          No matching lessons. Try a concept such as softmax, Docker or
          evaluation.
        </div>
      ) : null}
      {chosen ? (
        <div className="stage-navigation">
          <button className="button" onClick={() => go("roadmap")}>
            All stages
          </button>
          {previousId ? (
            <a className="button" href={`#/roadmap/${previousId}`}>
              ← Previous step:{" "}
              {domains.find((d) => d.id === previousId)?.title}
            </a>
          ) : null}
          {nextId ? (
            <button
              className="button primary"
              onClick={() => go(`roadmap/${nextId}`)}
            >
              Next step: {domains.find((d) => d.id === nextId)?.title}
              <Icon name="arrow" />
            </button>
          ) : null}
        </div>
      ) : null}
      {state && !chosen ? <CustomTopics state={state} readonly /> : null}
    </>
  );
}

export function LessonPage({
  lesson,
  state,
  user,
  run,
  busy,
}: {
  lesson: Lesson;
  state: Workspace;
  user: Profile;
  run: Run;
  busy: boolean;
}) {
  const saved = state.progress[user.id]?.[lesson.id];
  const [draft, setDraft] = useState<Progress>(() => ({
    ...store.emptyProgress,
    ...saved,
    status: statusFor(lesson.id, user, state.progress[user.id]),
  }));
  const [dirty, setDirty] = useState(false);
  const [studyView, setStudyView] = useState("learn");
  const update = (patch: Partial<Progress>) => {
    setDraft((d) => ({ ...d, ...patch }));
    setDirty(true);
  };
  const missing = lesson.prerequisites.filter(
    (id) => !complete(statusFor(id, user, state.progress[user.id])),
  );
  const index = lessons.findIndex((l) => l.id === lesson.id);
  const stage = domains.find((d) => d.id === lesson.domainId)!;
  const stageList = domainLessons(stage.id);
  const lessonStep = stageList.findIndex((l) => l.id === lesson.id);
  const nextId = neighbourOf(stage.id, 1);
  const following =
    stageList[lessonStep + 1] ?? (nextId ? domainLessons(nextId)[0] : undefined);
  return (
    <>
      <a href={`#/roadmap/${lesson.domainId}`} className="back-link">
        ← {domains.find((d) => d.id === lesson.domainId)?.title} /{" "}
        {lesson.module}
      </a>
      <SectionTitle
        eyebrow="LEARN → PRACTICE → BUILD"
        title={lesson.title}
        description={lesson.why}
        action={
          <Badge tone={lesson.priority === "Core" ? "green" : "muted"}>
            {lesson.priority}
          </Badge>
        }
      />
      <div
        className="study-navigation"
        role="group"
        aria-label="Lesson sections"
      >
        {[
          ["learn", "01", "Understand", `${lesson.concepts.length} concepts`],
          ["watch", "02", "Resources", "Videos & reading"],
          ["practice", "03", "Practice", "Build the exercise"],
        ].map(([id, number, label, caption]) => (
          <button
            key={id}
            type="button"
            aria-pressed={studyView === id}
            className={studyView === id ? "selected" : ""}
            onClick={() => setStudyView(id)}
          >
            <span className="study-step">{number}</span>
            <span>
              <strong>{label}</strong>
              <small>{caption}</small>
            </span>
          </button>
        ))}
      </div>
      <div className="lesson-progress-shortcut">
        <span className="small muted">
          Lesson {lessonStep + 1} of {stageList.length} · {stage.title}
        </span>
        <button
          type="button"
          className="text-button"
          onClick={() => {
            const form = document.getElementById("lesson-progress");
            form?.focus();
            form?.scrollIntoView({ block: "start" });
          }}
        >
          Update my progress <Icon name="arrow" size={15} />
        </button>
      </div>
      <div className="lesson-layout">
        <article className="lesson-content">
          <div className="panel lesson-intro" hidden={studyView !== "learn"}>
            <div className="inline-meta">
              <span>
                <Icon name="clock" />
                {lesson.studyHours}h study
              </span>
              <span>
                <Icon name="code" />
                {lesson.practiceHours}h practice
              </span>
              <span>{lesson.concepts.length} concept checks</span>
            </div>
            <h2>Before you start</h2>
            {lesson.prerequisites.length ? (
              <p>
                {lesson.prerequisites.map((id) => (
                  <a key={id} className="text-link" href={`#/lesson/${id}`}>
                    {lessonById.get(id)?.title}
                  </a>
                ))}
              </p>
            ) : (
              <p>No prerequisites. This is a starting point.</p>
            )}
            {missing.length ? (
              <div className="hint">
                You haven’t completed {missing.length} suggested prerequisite
                {missing.length > 1 ? "s" : ""}. You can still study this
                lesson.
              </div>
            ) : (
              <div className="small muted">
                You can move freely between topics. Prerequisites are guidance.
              </div>
            )}
          </div>
          <section
            className="panel content-panel"
            hidden={studyView !== "learn"}
          >
            <div className="section-heading">
              <h2>Understand the concepts</h2>
              <Badge>
                {draft.checked.length}/{lesson.concepts.length}
              </Badge>
            </div>
            {lesson.concepts.map((concept, i) => (
              <div className="concept" key={concept.name}>
                <label className="check-label">
                  <input
                    type="checkbox"
                    checked={draft.checked.includes(concept.name)}
                    onChange={() =>
                      update({
                        checked: draft.checked.includes(concept.name)
                          ? draft.checked.filter((x) => x !== concept.name)
                          : [...draft.checked, concept.name],
                      })
                    }
                  />
                  <span className="mono muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <strong>{concept.name}</strong>
                </label>
                <p>{concept.explanation}</p>
                <ConfidenceControl
                  label={`${concept.name} understanding`}
                  value={draft.conceptConfidence?.[concept.name]}
                  onChange={(value) =>
                    update({
                      conceptConfidence: {
                        ...draft.conceptConfidence,
                        [concept.name]: value,
                      },
                    })
                  }
                />
                <div className="example">
                  <span>TRY TO EXPLAIN THIS</span>
                  <p>{concept.example}</p>
                </div>
                <details className="concept-videos">
                  <summary>
                    Watch videos for {concept.name} · {concept.videos.length}{" "}
                    sources
                  </summary>
                  {concept.videos.map((v) => (
                    <VideoCard key={v.url} video={v} compact />
                  ))}
                </details>
              </div>
            ))}
          </section>
          <section
            className="panel content-panel"
            hidden={studyView !== "watch"}
          >
            <h2>YouTube: focused lessons & full courses</h2>
            <p className="muted">
              Each concept above has its own video selection. These are the
              lesson’s main videos and longer courses.
            </p>
            {lesson.videos.map((v) => (
              <VideoCard key={v.url} video={v} />
            ))}
            <div className="video-disclaimer">
              Free videos. Paid tools, cloud hosting and certificates promoted
              in a course are optional. Use the local lab and current official
              docs; course APIs may have changed. No unverified timestamps are
              shown.
            </div>
          </section>
          <section
            className="panel content-panel"
            hidden={studyView !== "watch"}
          >
            <h2>Free written sources</h2>
            <p className="muted">
              Start with the first resource. Use the alternatives for another
              explanation.
            </p>
            {lesson.resources.map((r, i) => (
              <a
                key={r.url}
                className="resource-card"
                href={r.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="resource-number">{i + 1}</span>
                <div>
                  <strong>{r.title}</strong>
                  <p>{r.access}</p>
                  <small>{r.extras}</small>
                </div>
                <Icon name="external" />
              </a>
            ))}
          </section>
          <section
            className="panel content-panel lab"
            hidden={studyView !== "practice"}
          >
            <div className="eyebrow">MAKE IT CONCRETE</div>
            <h2>{lesson.exercise.title}</h2>
            <p>{lesson.exercise.brief}</p>
            <h3>Deliverables</h3>
            <ul>
              {lesson.exercise.deliverables.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <h3>Completion criteria</h3>
            <ul>
              {lesson.exercise.acceptance.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <div className="hint">
              CPU-friendly practice. Where a live model is optional, use
              recorded responses or the toy implementation described in the lab.
            </div>
          </section>
          <div className="study-next-action">
            <span className="small muted">
              {studyView === "learn"
                ? "Ready for another explanation?"
                : studyView === "watch"
                  ? "Put what you learned into practice."
                  : "Add your evidence and save your progress."}
            </span>
            {studyView !== "practice" ? (
              <button
                className="button primary"
                type="button"
                onClick={() =>
                  setStudyView(studyView === "learn" ? "watch" : "practice")
                }
              >
                {studyView === "learn" ? "Watch & read" : "Start the exercise"}
                <Icon name="arrow" />
              </button>
            ) : null}
          </div>
          <div className="lesson-pagination">
            {index > 0 ? (
              <a href={`#/lesson/${lessons[index - 1].id}`}>
                ← Previous lesson
              </a>
            ) : (
              <span />
            )}
            {following ? (
              <a
                href={
                  following.domainId === lesson.domainId
                    ? `#/lesson/${following.id}`
                    : `#/roadmap/${following.domainId}`
                }
              >
                {following.domainId === lesson.domainId
                  ? `Next: ${following.title}`
                  : `Next stage: ${domains.find((d) => d.id === following.domainId)?.title}`}{" "}
                →
              </a>
            ) : (
              <a href="#/projects">Choose a capstone →</a>
            )}
          </div>
        </article>
        <aside className="lesson-aside">
          <form
            id="lesson-progress"
            tabIndex={-1}
            aria-label="Your lesson progress"
            className="panel save-panel"
            onSubmit={(e) => {
              e.preventDefault();
              void run(async () => {
                await store.saveProgress(state, lesson.id, draft);
                setDirty(false);
              }, "Lesson progress saved");
            }}
          >
            <div className="eyebrow">YOUR PROGRESS</div>
            <h2>Your progress</h2>
            <label>
              Lesson status
              <select
                value={draft.status}
                onChange={(e) =>
                  update({ status: e.target.value as Progress["status"] })
                }
              >
                {statuses.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <ConfidenceControl
              label="Overall lesson / tool understanding"
              value={draft.confidence ?? undefined}
              onChange={(value) => update({ confidence: value })}
            />
            <p className="small muted">
              Rate how well you feel you understand this topic. This does not
              change lesson completion.
            </p>
            <label>
              Private notes
              <textarea
                rows={5}
                value={draft.notes}
                placeholder="What clicked? What still needs practice?"
                maxLength={20000}
                onChange={(e) => update({ notes: e.target.value })}
              />
            </label>
            <label>
              Exercise evidence
              <input
                type="url"
                value={draft.evidence}
                placeholder="https://github.com/…"
                onChange={(e) => update({ evidence: e.target.value })}
              />
            </label>
            <p className="small muted">
              Completion is self-reported. Your notes stay private in online
              mode; evidence links are visible to teammates.
            </p>
            <button className="button primary full" disabled={busy}>
              {busy ? "Saving…" : "Save progress"}
              <Icon name="check" />
            </button>
            <div className="small muted">
              {dirty
                ? "Unsaved changes"
                : "Saved status: " +
                  (saved?.status ??
                    statusFor(lesson.id, user, state.progress[user.id]))}
            </div>
          </form>
          <div className="panel project-sidebar">
            <div className="eyebrow">
              STAGE {domains.indexOf(stage) + 1} · LESSON {lessonStep + 1}/
              {stageList.length}
            </div>
            <h3>{stage.title}</h3>
            <p>
              {following?.domainId === stage.id
                ? `Up next: ${following.title}`
                : `Stage checkpoint: ${stage.guide.checkpoint}`}
            </p>
            {following ? (
              <a
                className="button full"
                href={
                  following.domainId === stage.id
                    ? `#/lesson/${following.id}`
                    : `#/roadmap/${following.domainId}`
                }
              >
                {following.domainId === stage.id ? "Next lesson" : "Next stage"}{" "}
                <Icon name="arrow" />
              </a>
            ) : (
              <a className="button full" href="#/projects">
                Build a capstone
              </a>
            )}
            {dirty ? (
              <p className="small muted">
                Save your unsaved progress below before continuing.
              </p>
            ) : null}
          </div>
          <div className="panel project-sidebar">
            <Icon name="layers" size={26} />
            <h3>Put this skill to work.</h3>
            <p>
              Ten project ideas with steps, deliverables and acceptance checks.
            </p>
            <button
              className="button full"
              onClick={() => go(`projects/${lesson.id}`)}
            >
              Explore projects <Icon name="arrow" />
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}
function PublicLesson({ lesson, run }: { lesson: Lesson; run: Run }) {
  return (
    <>
      <a href={`#/roadmap/${lesson.domainId}`} className="back-link">
        ← Back to domain
      </a>
      <SectionTitle
        eyebrow="FREE LEARNING CONTENT"
        title={lesson.title}
        description={lesson.why}
      />
      <section className="panel content-panel">
        <h2>Concepts</h2>
        {lesson.concepts.map((c) => (
          <div className="concept" key={c.name}>
            <h3>{c.name}</h3>
            <p>{c.explanation}</p>
            <div className="example">
              <p>{c.example}</p>
            </div>
            <details className="concept-videos">
              <summary>Watch videos for {c.name}</summary>
              {c.videos.map((v) => (
                <VideoCard key={v.url} video={v} compact />
              ))}
            </details>
          </div>
        ))}
        <h2>YouTube lessons & full courses</h2>
        {lesson.videos.map((v) => (
          <VideoCard key={v.url} video={v} />
        ))}
        <h2>Free resources</h2>
        {lesson.resources.map((r) => (
          <a
            key={r.url}
            className="resource-card"
            href={r.url}
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <strong>{r.title}</strong>
              <p>{r.access}</p>
            </div>
            <Icon name="external" />
          </a>
        ))}
        <h2>{lesson.exercise.title}</h2>
        <p>{lesson.exercise.brief}</p>
        <ul>
          {lesson.exercise.acceptance.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <button
          className="button primary"
          onClick={() => void run(store.signIn)}
        >
          Sign in to save progress
        </button>
      </section>
    </>
  );
}

function Settings({
  state,
  user,
  run,
  busy,
}: {
  state: Workspace;
  user: Profile;
  run: Run;
  busy: boolean;
}) {
  const [draft, setDraft] = useState({ ...user });
  const [teamName, setTeamName] = useState("AI Engineering Crew");
  const [token, setToken] = useState(
    new URLSearchParams(location.search).get("invite") ??
      sessionStorage.getItem("forge-pending-invite") ??
      "",
  );
  const [invite, setInvite] = useState("");
  const [invites, setInvites] = useState<
    { id: string; expires_at: string; revoked: boolean }[]
  >([]);
  useEffect(() => {
    if (state.team?.role === "owner")
      void store
        .invitations()
        .then(setInvites)
        .catch(() => setInvites([]));
  }, [state.team?.id, invite]);
  const toggleDomain = (id: string) =>
    setDraft((p) => ({
      ...p,
      selectedDomains: p.selectedDomains.includes(id)
        ? p.selectedDomains.filter((x) => x !== id)
        : [...p.selectedDomains, id],
    }));
  return (
    <>
      <SectionTitle
        eyebrow={
          user.onboarded ? "WORKSPACE SETTINGS" : "START WITH WHERE YOU ARE"
        }
        title={
          user.onboarded
            ? "Your path, your pace."
            : "Let’s set up your learning path."
        }
        description="Different starting points. One shared goal. You can change these choices anytime."
      />
      <form
        className="panel content-panel"
        onSubmit={(e) => {
          e.preventDefault();
          void run(async () => {
            await store.saveProfile(state, { ...draft, onboarded: true });
            go(store.cloud && !state.team && token ? "settings" : "dashboard");
          }, "Learning path saved");
        }}
      >
        <div className="form-row">
          <label>
            Display name
            <input
              value={draft.displayName}
              required
              maxLength={80}
              onChange={(e) =>
                setDraft({ ...draft, displayName: e.target.value })
              }
            />
          </label>
          <label>
            Hours per week
            <input
              type="number"
              min={1}
              max={80}
              step={1}
              required
              value={draft.hours}
              onChange={(e) =>
                setDraft({ ...draft, hours: Number(e.target.value) })
              }
            />
          </label>
        </div>
        <h2>Choose your domains</h2>
        <p className="muted">
          Start small or select everything. This changes your personal
          dashboard, not access to lessons.
        </p>
        <div className="selection-grid">
          {domains.map((d) => (
            <label
              className={`selection-card ${draft.selectedDomains.includes(d.id) ? "selected" : ""}`}
              key={d.id}
            >
              <input
                type="checkbox"
                checked={draft.selectedDomains.includes(d.id)}
                onChange={() => toggleDomain(d.id)}
              />
              <span>
                <strong>{d.title}</strong>
                <small>
                  {d.modules.flatMap((m) => m.lessons).length} lessons
                </small>
              </span>
            </label>
          ))}
        </div>
        <details className="known-skills">
          <summary>Already know something? Mark it here.</summary>
          <p className="small muted">
            These lessons count as already known. Any status explicitly saved on
            a lesson takes precedence.
          </p>
          {domains.map((d) => (
            <details key={d.id}>
              <summary>{d.title}</summary>
              <div className="check-grid">
                {domainLessons(d.id).map((l) => (
                  <label key={l.id}>
                    <input
                      type="checkbox"
                      checked={draft.knownLessons.includes(l.id)}
                      onChange={() =>
                        setDraft((p) => ({
                          ...p,
                          knownLessons: p.knownLessons.includes(l.id)
                            ? p.knownLessons.filter((x) => x !== l.id)
                            : [...p.knownLessons, l.id],
                        }))
                      }
                    />
                    {l.title}
                  </label>
                ))}
              </div>
            </details>
          ))}
        </details>
        <button className="button primary" disabled={busy}>
          {busy
            ? "Saving…"
            : user.onboarded
              ? "Save learning path"
              : "Start my learning path"}
          <Icon name="arrow" />
        </button>
      </form>
      <section className="panel content-panel">
        <h2>
          {store.cloud ? "Team & account" : "Local workspace & online setup"}
        </h2>
        {!store.cloud ? (
          <>
            <p>
              All four profiles share this browser’s storage. This is a local
              planning workspace, not live collaboration between devices.
            </p>
            <p>
              To enable private team sync: create a Supabase Free project, apply{" "}
              <code>supabase/migrations/001_workspace.sql</code>, configure
              GitHub OAuth, and set the two public values in{" "}
              <code>.env.local</code>. Follow <code>docs/SETUP.md</code> for
              Cloudflare Pages deployment.
            </p>
            <div className="inline-actions">
              <button
                className="button"
                onClick={() =>
                  download(
                    "forge-workspace.json",
                    JSON.stringify(state, null, 2),
                  )
                }
              >
                Export workspace backup
              </button>
              <label className="button">
                Import backup
                <input
                  className="sr-only"
                  type="file"
                  accept="application/json,.json"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file)
                      void run(async () => {
                        const parsed = JSON.parse(
                          await file.text(),
                        ) as Workspace;
                        validateWorkspace(parsed);
                        if (
                          confirm(
                            "Replace this browser’s workspace with this backup? Export the current workspace first if needed.",
                          )
                        )
                          store.localSave(parsed);
                      }, "Backup import finished");
                  }}
                />
              </label>
            </div>
          </>
        ) : (
          <>
            <p>
              Signed in as {user.displayName}.{" "}
              {state.team
                ? `Team: ${state.team.name}.`
                : "Create your private team or accept an invitation."}
            </p>
            {!state.team ? (
              <div className="form-row">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    void run(() => store.createTeam(teamName), "Team created");
                  }}
                >
                  <label>
                    New team name
                    <input
                      value={teamName}
                      maxLength={80}
                      required
                      onChange={(e) => setTeamName(e.target.value)}
                    />
                  </label>
                  <button className="button primary" disabled={busy}>
                    Create team
                  </button>
                </form>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    void run(async () => {
                      await store.acceptInvite(token);
                      sessionStorage.removeItem("forge-pending-invite");
                      history.replaceState(
                        {},
                        "",
                        location.pathname + location.hash,
                      );
                    }, "Joined the team");
                  }}
                >
                  <label>
                    Invitation token
                    <input
                      value={token}
                      required
                      onChange={(e) => setToken(e.target.value)}
                    />
                  </label>
                  <button className="button" disabled={busy}>
                    Join team
                  </button>
                  {token ? (
                    <button
                      type="button"
                      className="text-button"
                      onClick={() => {
                        sessionStorage.removeItem("forge-pending-invite");
                        history.replaceState(
                          {},
                          "",
                          location.pathname + location.hash,
                        );
                        setToken("");
                      }}
                    >
                      Discard invitation
                    </button>
                  ) : null}
                </form>
              </div>
            ) : state.team.role === "owner" ? (
              <>
                <button
                  className="button"
                  disabled={busy}
                  onClick={() =>
                    void run(async () => {
                      const t = await store.createInvite();
                      setInvite(
                        `${location.origin}${location.pathname}?invite=${encodeURIComponent(t)}#/settings`,
                      );
                    }, "Invitation created; valid for seven days")
                  }
                >
                  Create invitation link
                </button>
                {invite ? (
                  <label>
                    Share this link with your teammates
                    <input
                      readOnly
                      value={invite}
                      onFocus={(e) => e.target.select()}
                    />
                  </label>
                ) : null}
                {invites.map((i) => (
                  <div className="invite-row" key={i.id}>
                    <span>
                      Expires {new Date(i.expires_at).toLocaleDateString()} ·{" "}
                      {i.revoked ? "Revoked" : "Active"}
                    </span>
                    <button
                      className="button subtle"
                      disabled={i.revoked || busy}
                      onClick={() =>
                        void run(async () => {
                          await store.revokeInvite(i.id);
                          setInvites(await store.invitations());
                        }, "Invitation revoked")
                      }
                    >
                      Revoke
                    </button>
                  </div>
                ))}
              </>
            ) : null}
            <button
              className="button"
              onClick={() =>
                void run(async () => {
                  await store.db!.auth.signOut();
                }, "Signed out")
              }
            >
              Sign out
            </button>
          </>
        )}
      </section>
      <CustomTopics state={state} run={run} busy={busy} />
    </>
  );
}

function Checklist({
  nodes,
  onToggle,
  disabled = false,
}: {
  nodes: ChecklistNode[];
  onToggle?: (id: string) => void;
  disabled?: boolean;
}) {
  return (
    <ul className="nested-checklist">
      {nodes.map((n) => (
        <li key={n.id}>
          {n.children.length ? (
            <strong>{n.label}</strong>
          ) : (
            <label>
              <input
                type="checkbox"
                checked={n.done}
                disabled={disabled || !onToggle}
                onChange={() => onToggle?.(n.id)}
              />
              {n.label}
            </label>
          )}
          {n.children.length ? (
            <Checklist
              nodes={n.children}
              onToggle={onToggle}
              disabled={disabled}
            />
          ) : null}
        </li>
      ))}
    </ul>
  );
}
function CustomTopics({
  state,
  run,
  busy,
  readonly = false,
}: {
  state: Workspace;
  run?: Run;
  busy?: boolean;
  readonly?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [hours, setHours] = useState(4);
  const [mapping, setMapping] = useState("");
  const [source, setSource] = useState("");
  const [checks, setChecks] = useState(
    "Understand the core idea\n  Explain it with a worked example\n  Check one edge case\nBuild a small demonstration",
  );
  const save = (e: FormEvent) => {
    e.preventDefault();
    void run?.(async () => {
      const resources = source
        .split("\n")
        .filter((x) => x.trim())
        .map((line) => {
          const [name, url] = line.split("|").map((x) => x.trim());
          if (!name || !url)
            throw new Error("Use one resource per line: Title | https://…");
          return {
            title: name,
            url: safeUrl(url, false),
            access: "User-added source; verify free access",
            extras: "Not researched by the catalog",
          };
        });
      if (!resources.length) throw new Error("Add at least one source.");
      await store.saveTopic(state, {
        id: crypto.randomUUID(),
        ownerId: state.userId,
        title,
        hours,
        mapping,
        resources,
        checklist: parseChecklist(checks),
      });
      setOpen(false);
      setTitle("");
    }, "Custom topic added");
  };
  const custom = readonly
    ? state.custom.filter((t) => t.ownerId === state.userId)
    : state.custom;
  return (
    <section className="custom-section">
      <div className="section-heading spacious">
        <div>
          <h2>Your custom topics</h2>
          <p>
            Add something new. Connect it to a known skill for tailored
            projects.
          </p>
        </div>
        {readonly ? (
          <a href="#/settings">
            Add a topic <Icon name="plus" />
          </a>
        ) : (
          <button className="button" onClick={() => setOpen(!open)}>
            <Icon name="plus" />
            {open ? "Close form" : "Add topic"}
          </button>
        )}
      </div>
      {open ? (
        <form className="panel content-panel" onSubmit={save}>
          <div className="form-row">
            <label>
              Topic title
              <input
                required
                maxLength={120}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label>
              Estimated hours
              <input
                type="number"
                min={1}
                max={500}
                step={1}
                required
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
              />
            </label>
          </div>
          <label>
            Map to a catalog skill (optional)
            <select
              value={mapping}
              onChange={(e) => setMapping(e.target.value)}
            >
              <option value="">Unmapped — general practice projects</option>
              <optgroup label="Domains">
                {domains.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.title}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Specific lessons">
                {lessons.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.title}
                  </option>
                ))}
              </optgroup>
            </select>
          </label>
          <label>
            Sources: one Title | URL per line
            <textarea
              rows={3}
              required
              value={source}
              placeholder="Official tutorial | https://…"
              onChange={(e) => setSource(e.target.value)}
            />
          </label>
          <label>
            Concept checklist: indent subitems with two spaces
            <textarea
              rows={6}
              required
              value={checks}
              onChange={(e) => setChecks(e.target.value)}
            />
          </label>
          <button className="button primary" disabled={busy}>
            Save custom topic
          </button>
        </form>
      ) : null}
      {custom.length ? (
        <div className="custom-grid">
          {custom.map((t) => {
            const total = checklistTotals(t.checklist);
            const owner = state.profiles.find((p) => p.id === t.ownerId);
            return (
              <section className="panel content-panel" key={t.id}>
                <div className="section-heading">
                  <h3>{t.title}</h3>
                  <Badge>
                    {total.done}/{total.total} checks
                  </Badge>
                </div>
                <p className="small muted">
                  {owner?.displayName} · {t.hours}h ·{" "}
                  {t.mapping
                    ? "Mapped to " +
                      (lessonById.get(t.mapping)?.title ??
                        domains.find((d) => d.id === t.mapping)?.title)
                    : "General practice; no researched mapping"}
                </p>
                <Checklist
                  nodes={t.checklist}
                  disabled={busy || !run || t.ownerId !== state.userId}
                  onToggle={(id) =>
                    void run?.(
                      () =>
                        store.saveTopic(state, {
                          ...t,
                          checklist: toggleNode(t.checklist, id),
                        }),
                      "Checklist saved",
                    )
                  }
                />
                <div className="custom-sources">
                  {t.resources.map((r) => (
                    <a
                      key={r.url}
                      href={r.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {r.title} <Icon name="external" size={13} />
                    </a>
                  ))}
                </div>
                <div className="inline-actions">
                  <button
                    className="button subtle"
                    onClick={() => go(`projects/${t.id}`)}
                  >
                    10 projects <Icon name="arrow" size={14} />
                  </button>
                  {t.ownerId !== state.userId && run ? (
                    <button
                      className="button subtle"
                      disabled={busy}
                      onClick={() =>
                        void run(async () => {
                          const clear = (
                            nodes: ChecklistNode[],
                          ): ChecklistNode[] =>
                            nodes.map((n) => ({
                              ...n,
                              done: false,
                              children: clear(n.children),
                            }));
                          await store.saveTopic(state, {
                            ...t,
                            id: crypto.randomUUID(),
                            ownerId: state.userId,
                            checklist: clear(t.checklist),
                          });
                        }, "Topic copied to your path")
                      }
                    >
                      Copy to my path
                    </button>
                  ) : null}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="panel empty">
          Your path can grow beyond the catalog. Add a topic when you discover
          something new.
        </div>
      )}
    </section>
  );
}

export function ProjectBuilder({
  state,
  user,
  run,
  busy,
  initialSkill,
}: {
  state: Workspace;
  user: Profile;
  run: Run;
  busy: boolean;
  initialSkill?: string;
}) {
  const [selected, setSelected] = useState<string[]>(
    initialSkill ? [initialSkill] : [],
  );
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(10);
  useEffect(() => {
    setVisibleCount(10);
    setExpanded(null);
  }, [selected]);
  useEffect(() => {
    if (initialSkill) setSelected([initialSkill]);
  }, [initialSkill]);
  const allSkills = [
    ...domains.map((d) => ({ id: d.id, title: d.title, domainId: d.id })),
    ...lessons,
    ...state.custom
      .filter((t) => t.ownerId === user.id)
      .map((t) => {
        const mapped =
          lessons.find((l) => l.id === t.mapping) ??
          domains.find((d) => d.id === t.mapping);
        return {
          id: t.id,
          title: t.title,
          mapping: t.mapping,
          domainId: mapped
            ? "domainId" in mapped
              ? mapped.domainId
              : mapped.id
            : undefined,
          concepts:
            "concepts" in (mapped ?? {})
              ? (mapped as Lesson).concepts
              : undefined,
        };
      }),
  ];
  const chosen = selected
    .map((id) => allSkills.find((s) => s.id === id))
    .filter((s) => s !== undefined);
  const allBriefs = recommendAll(chosen) as Brief[];
  const briefs = allBriefs.slice(0, visibleCount);
  const toggle = (id: string) =>
    setSelected((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id],
    );
  const start = async (brief: Brief) => {
    await store.createProject(state, {
      id: crypto.randomUUID(),
      ownerId: user.id,
      brief,
      status: "Planned",
      participants: [user.id],
      milestones: [],
      repoUrl: "",
      demoUrl: "",
      evidence: "",
      revision: 0,
    });
    go("team");
  };
  return (
    <>
      <SectionTitle
        eyebrow="KNOWLEDGE BECOMES CAPABILITY THROUGH PRACTICE"
        title="What will you build next?"
        description="Explore 150 authored projects. Connect your skills, build a real system and take a detailed learning prompt to your AI mentor."
      />
      <div className="builder-layout">
        <aside className="panel skill-picker">
          <div className="section-heading">
            <h2>Select your skills</h2>
            <Badge>{selected.length}</Badge>
          </div>
          <label className="search full">
            <Icon name="search" />
            <input
              aria-label="Filter project skills"
              placeholder="ML, Docker, softmax…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <div className="small muted">
            You can choose skills you’re still learning.
          </div>
          <div className="skill-scroll">
            <div className="eyebrow">DOMAINS</div>
            {allSkills
              .slice(0, domains.length)
              .filter((s) =>
                s.title.toLowerCase().includes(query.toLowerCase()),
              )
              .map((s) => (
                <label key={s.id} className="skill-choice">
                  <input
                    type="checkbox"
                    checked={selected.includes(s.id)}
                    onChange={() => toggle(s.id)}
                  />
                  <span>{s.title}</span>
                </label>
              ))}
            <div className="eyebrow">SPECIFIC SKILLS</div>
            {allSkills
              .slice(domains.length)
              .filter((s) =>
                [
                  s.title,
                  ...Object.values(projectTools)
                    .filter((t) => t.lessons.includes(s.id))
                    .map((t) => t.title),
                  ...("concepts" in s
                    ? (s.concepts?.map((c) => c.name) ?? [])
                    : []),
                ]
                  .join(" ")
                  .toLowerCase()
                  .includes(query.toLowerCase()),
              )
              .map((s) => (
                <label key={s.id} className="skill-choice">
                  <input
                    type="checkbox"
                    checked={selected.includes(s.id)}
                    onChange={() => toggle(s.id)}
                  />
                  <span>
                    {s.title}
                    <small>
                      {lessonById.has(s.id)
                        ? statusFor(s.id, user, state.progress[user.id])
                        : "Custom topic"}
                    </small>
                  </span>
                </label>
              ))}
          </div>
          {selected.length ? (
            <button
              className="button subtle full"
              onClick={() => setSelected([])}
            >
              Clear selection
            </button>
          ) : null}
        </aside>
        <div className="project-results">
          <div className="selected-skills">
            {chosen.map((s) => (
              <button
                key={s.id}
                className="skill-chip"
                onClick={() => toggle(s.id)}
                aria-label={`Remove ${s.title}`}
              >
                {s.title}
                <Icon name="close" size={13} />
              </button>
            ))}
          </div>
          {briefs.length ? (
            <>
              <div className="section-heading">
                <h2>
                  {briefs.length} of {allBriefs.length} project ideas
                </h2>
                <Badge tone="green">No AI credits needed</Badge>
              </div>
              <p className="small muted">
                Library matches come first, followed by adapted projects and
                composed practice patterns. Every selected skill has a task,
                deliverable and check.
              </p>
              {briefs.map((brief, i) => {
                const instances = state.projects.filter(
                  (p) => p.brief.id === brief.id,
                );
                const missing = [
                  ...selected.flatMap(
                    (id) => lessonById.get(id)?.prerequisites ?? [],
                  ),
                  ...(brief.prerequisiteSkills ?? []),
                ].filter(
                  (id, i, a) =>
                    a.indexOf(id) === i &&
                    !complete(statusFor(id, user, state.progress[user.id])),
                );
                return (
                  <section className="panel project-card" key={brief.id}>
                    <div className="project-card-heading">
                      <span className="project-index">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="inline-meta">
                          <Badge>{brief.difficulty}</Badge>
                          <Badge>{brief.source ?? "Legacy project"}</Badge>
                          <span className="small muted">≈ {brief.hours}h</span>
                        </div>
                        <h3>{brief.title}</h3>
                      </div>
                      <Icon name="layers" size={23} />
                    </div>
                    <p>{brief.problem}</p>
                    <div className="project-output">
                      <strong>Build:</strong> {brief.output}
                    </div>
                    {brief.general ? (
                      <div className="hint">
                        Contains an unmapped custom topic: general practice, not
                        researched topic-specific advice.
                      </div>
                    ) : null}
                    {missing.length ? (
                      <p className="small muted">
                        Suggested preparation:{" "}
                        {missing
                          .map(
                            (id) =>
                              lessonById.get(id)?.title ??
                              domains.find((d) => d.id === id)?.title ??
                              id,
                          )
                          .join(", ")}
                        . You can still start.
                      </p>
                    ) : null}
                    {instances.length ? (
                      <div className="claimed">
                        {instances.map((p) => (
                          <div key={p.id}>
                            <span className="live-dot" />
                            <strong>
                              {
                                state.profiles.find((m) => m.id === p.ownerId)
                                  ?.displayName
                              }
                            </strong>{" "}
                            started this · {p.status}
                            {!p.participants.includes(user.id) ? (
                              <button
                                className="text-button"
                                disabled={busy}
                                onClick={() =>
                                  void run(
                                    () => store.joinProject(state, p.id),
                                    "Joined the project",
                                  )
                                }
                              >
                                Join
                              </button>
                            ) : (
                              <a href="#/team">Open your project</a>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : null}
                    <div className="project-card-actions">
                      <button
                        className="button subtle"
                        aria-expanded={expanded === brief.id}
                        onClick={() =>
                          setExpanded(expanded === brief.id ? null : brief.id)
                        }
                      >
                        {expanded === brief.id
                          ? "Hide brief"
                          : "Read full brief"}{" "}
                        <Icon name="arrow" size={14} />
                      </button>
                      <button
                        className="button primary"
                        disabled={busy}
                        onClick={() =>
                          void run(() => start(brief), "Project started")
                        }
                      >
                        {instances.length
                          ? "Start my own copy"
                          : "Start this project"}{" "}
                        <Icon name="plus" size={15} />
                      </button>
                    </div>
                    {expanded === brief.id ? (
                      <BriefDetail
                        brief={brief}
                        learning={learnerContext(
                          brief,
                          lessons,
                          user,
                          state.progress[user.id],
                        )}
                      />
                    ) : null}
                  </section>
                );
              })}
              {visibleCount < allBriefs.length ? (
                <button
                  className="button full"
                  onClick={() => setVisibleCount((n) => n + 10)}
                >
                  Show more · next{" "}
                  {Math.min(10, allBriefs.length - visibleCount)} projects
                </button>
              ) : (
                <p className="small muted" role="status">
                  You have reached the end of these recommendations. Change your
                  skills to explore other projects.
                </p>
              )}
            </>
          ) : (
            <section className="panel empty builder-empty">
              <div className="empty-art">
                <Icon name="layers" size={42} />
              </div>
              <h2>A project should connect what you know.</h2>
              <p>
                Select skills on the left. Try ML + Deep Learning + FastAPI +
                Docker for a complete model-to-service project.
              </p>
              <button
                className="button"
                onClick={() => setSelected(["ml", "dl", "fastapi", "docker"])}
              >
                Try this combination <Icon name="arrow" />
              </button>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
export function BriefDetail({
  brief,
  learning = [],
}: {
  brief: Brief;
  learning?: ReturnType<typeof learnerContext>;
}) {
  return (
    <div className="brief-detail">
      {brief.audience ? (
        <>
          <h4>Overview</h4>
          <p>
            <b>For:</b> {brief.audience}
          </p>
        </>
      ) : null}
      {brief.learningGoals ? (
        <>
          <h4>What you will learn</h4>
          <ul>
            {brief.learningGoals.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </>
      ) : null}
      {brief.prerequisiteSkills?.length ? (
        <p className="hint">
          Additional project background:{" "}
          {brief.prerequisiteSkills
            .map(
              (id) =>
                lessonById.get(id)?.title ??
                domains.find((d) => d.id === id)?.title ??
                id,
            )
            .join(", ")}
          . Learn the minimum as you reach each milestone; navigation stays
          unrestricted.
        </p>
      ) : null}
      {brief.boundaries ? (
        <details>
          <summary>Scope and limitations</summary>
          <ul>
            {brief.boundaries.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </details>
      ) : null}
      <h4>Free data & tools</h4>
      <p>{brief.data}</p>
      {brief.resources?.length ? (
        <ul>
          {brief.resources.map((r) => (
            <li key={r.url}>
              <a href={safeUrl(r.url)} target="_blank" rel="noreferrer">
                {r.title}
              </a>
              <p className="small muted">{r.access}</p>
            </li>
          ))}
        </ul>
      ) : null}
      <p className="small muted">
        Use Python/NumPy/scikit-learn/PyTorch on CPU as relevant. Model
        responses can be recorded fixtures. No paid APIs required.
      </p>
      {brief.dataFlow ? (
        <details className="project-flow">
          <summary>Architecture and data flow</summary>
          <ol>
            {brief.dataFlow.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ol>
        </details>
      ) : null}
      <h4>How every skill contributes</h4>
      {brief.integration.map((i) => (
        <div className="integration" key={i.skillId}>
          <strong>{i.skillTitle}</strong>
          <p>{i.task}</p>
          <p>
            <b>Deliverable:</b> {i.deliverable}
          </p>
          <p className="small">
            <b>Check:</b> {i.check}
          </p>
        </div>
      ))}
      <h4>Build plan</h4>
      <ol>
        {brief.milestones.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ol>
      <h4>Acceptance checks</h4>
      <ul>
        {brief.acceptance.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <h4>Documentation checklist</h4>
      <ul>
        {brief.documentation.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <MentorPanel key={brief.id} brief={brief} learning={learning} />
    </div>
  );
}

function MentorPanel({
  brief,
  learning,
}: {
  brief: Brief;
  learning: ReturnType<typeof learnerContext>;
}) {
  const [copyState, setCopyState] = useState("idle");
  const [preview, setPreview] = useState(false);
  const text = mentorPrompt(brief, learning);
  useEffect(() => {
    setCopyState("idle");
  }, [text]);
  const download = () => {
    const file = promptDownload(brief, learning);
    const url = URL.createObjectURL(new Blob([file.text], { type: file.type }));
    const link = document.createElement("a");
    link.href = url;
    link.download = file.filename;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  return (
    <section className="mentor-panel" aria-label="AI learning mentor prompt">
      <span className="eyebrow">LEARN BY BUILDING</span>
      <h4>Your AI mentor handoff</h4>
      <p>
        A detailed English prompt with this project, your selected skills and
        self-reported learning signals. Your AI will explain, give one exercise
        at a time and review your attempt before continuing.
      </p>
      <p className="small muted">
        Generated locally. No AI request is sent. Private notes, evidence links
        and team details are excluded.
      </p>
      <div className="mentor-actions">
        <button
          className="button primary"
          disabled={copyState === "copying"}
          onClick={async () => {
            setCopyState("copying");
            setCopyState(await copyMentorPrompt(text, navigator.clipboard));
          }}
        >
          Copy mentor prompt
        </button>
        <button className="button subtle" onClick={download}>
          Download .md
        </button>
        <button
          className="text-button"
          aria-expanded={preview}
          onClick={() => setPreview((v) => !v)}
        >
          {preview ? "Hide prompt" : "Preview prompt"}
        </button>
      </div>
      <p role="status" className="small">
        {copyState === "copied"
          ? "Prompt copied. Paste it into your preferred AI assistant."
          : copyState === "manual"
            ? "Could not access the clipboard. Select and copy the text below manually."
            : copyState === "copying"
              ? "Copying…"
              : ""}
      </p>
      {preview || copyState === "manual" ? (
        <label className="mentor-preview">
          English mentor prompt
          <textarea
            readOnly
            value={text}
            rows={16}
            onFocus={(e) => {
              if (copyState === "manual") e.currentTarget.select();
            }}
          />
        </label>
      ) : null}
    </section>
  );
}

function TeamPage({
  state,
  user,
  run,
  busy,
}: {
  state: Workspace;
  user: Profile;
  run: Run;
  busy: boolean;
}) {
  const [filter, setFilter] = useState("all");
  const visible = state.projects.filter(
    (p) => filter === "all" || p.participants.includes(user.id),
  );
  return (
    <>
      <SectionTitle
        eyebrow="BUILD BETTER, TOGETHER"
        title="Your team workspace."
        description={
          store.cloud
            ? (state.team?.name ?? "Create or join a private team in Settings.")
            : "Four local profiles. Connect online accounts later to collaborate across devices."
        }
        action={
          <button className="button" onClick={() => go("projects")}>
            <Icon name="plus" /> Find a project
          </button>
        }
      />
      <div className="team-members">
        {state.profiles.map((p, i) => {
          const all = totals(
            lessons.filter((l) => p.selectedDomains.includes(l.domainId)),
            state.progress[p.id],
            p.knownLessons,
          );
          return (
            <section className="panel team-member" key={p.id}>
              <div className="member-row">
                <span className={`avatar tone-${i % 4}`}>
                  {p.displayName.slice(0, 2).toUpperCase()}
                </span>
                <div>
                  <h3>{p.displayName}</h3>
                  <span>
                    {p.id === user.id
                      ? "You"
                      : p.onboarded
                        ? "Learning at their own pace"
                        : "Path not set up"}
                  </span>
                </div>
              </div>
              <div className="domain-progress">
                <span>{all.done} lessons complete</span>
                <strong>{all.percent}%</strong>
              </div>
              <Meter
                value={all.percent}
                label={`${p.displayName} overall progress`}
              />
              <p className="small muted">
                {p.lastLesson
                  ? `Last visited: ${lessonById.get(p.lastLesson)?.title ?? p.lastLesson}`
                  : "No lesson visited yet"}
              </p>
              <details>
                <summary>Progress by domain</summary>
                {domains.map((d) => {
                  const t = totals(
                    domainLessons(d.id),
                    state.progress[p.id],
                    p.knownLessons,
                  );
                  const confidence = confidenceTotals(
                    domainLessons(d.id),
                    state.progress[p.id],
                  );
                  return (
                    <div key={d.id} className="domain-summary">
                      <span>{d.title}</span>
                      <strong>
                        {t.done}/{t.total} ·{" "}
                        {confidence.percent == null
                          ? "unrated"
                          : `${confidence.percent}% understood`}
                      </strong>
                    </div>
                  );
                })}
              </details>
            </section>
          );
        })}
      </div>
      <div className="section-heading spacious">
        <div>
          <h2>Projects becoming real</h2>
          <p>Join a teammate, or build your own version of an idea.</p>
        </div>
        <div className="tabs">
          {[
            ["all", "Team projects"],
            ["mine", "My projects"],
          ].map(([id, label]) => (
            <button
              key={id}
              aria-pressed={filter === id}
              className={filter === id ? "selected" : ""}
              onClick={() => setFilter(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      {visible.length ? (
        <div className="team-projects">
          {visible.map((p) => (
            <ProjectEditor
              key={p.id}
              project={p}
              state={state}
              run={run}
              busy={busy}
            />
          ))}
        </div>
      ) : (
        <section className="panel empty">
          <Icon name="code" size={36} />
          <h2>Your first project starts here.</h2>
          <p>
            Pick the skills you want to practice and choose one of ten concrete
            briefs.
          </p>
          <button className="button primary" onClick={() => go("projects")}>
            Open project builder <Icon name="arrow" />
          </button>
        </section>
      )}
    </>
  );
}
function ProjectEditor({
  project,
  state,
  run,
  busy,
}: {
  project: ProjectInstance;
  state: Workspace;
  run: Run;
  busy: boolean;
}) {
  const [draft, setDraft] = useState(project);
  const [expanded, setExpanded] = useState(false);
  const canEdit = project.participants.includes(state.userId);
  return (
    <section className="panel content-panel">
      <div className="section-heading">
        <h3>{project.brief.title}</h3>
        <Badge tone={project.status === "Completed" ? "green" : "muted"}>
          {project.status}
        </Badge>
      </div>
      <p>{project.brief.problem}</p>
      <p className="small muted">
        Started by{" "}
        {state.profiles.find((p) => p.id === project.ownerId)?.displayName}.
        Participants:{" "}
        {project.participants
          .map((id) => state.profiles.find((p) => p.id === id)?.displayName)
          .join(", ")}
      </p>
      {!canEdit ? (
        <button
          className="button"
          disabled={busy}
          onClick={() =>
            void run(
              () => store.joinProject(state, project.id),
              "Joined project",
            )
          }
        >
          Join this project
        </button>
      ) : null}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void run(async () => {
            await store.saveProject(state, draft);
            setDraft({ ...draft, revision: draft.revision + 1 });
          }, "Project saved");
        }}
      >
        {canEdit && project.revision !== draft.revision ? (
          <div className="hint">
            This project changed on another device. Your draft is retained.{" "}
            <button
              type="button"
              className="text-button"
              onClick={() => setDraft(project)}
            >
              Load latest saved version
            </button>
          </div>
        ) : null}
        <fieldset disabled={!canEdit || busy}>
          <legend className="sr-only">Project progress</legend>
          <label>
            Status
            <select
              value={draft.status}
              onChange={(e) =>
                setDraft({
                  ...draft,
                  status: e.target.value as ProjectInstance["status"],
                })
              }
            >
              {["Planned", "In progress", "Completed"].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <h4>Milestone checklist</h4>
          <div className="milestone-list">
            {project.brief.milestones.map((m, i) => (
              <label key={i}>
                <input
                  type="checkbox"
                  checked={draft.milestones.includes(`step-${i}`)}
                  onChange={() =>
                    setDraft({
                      ...draft,
                      milestones: draft.milestones.includes(`step-${i}`)
                        ? draft.milestones.filter((x) => x !== `step-${i}`)
                        : [...draft.milestones, `step-${i}`],
                    })
                  }
                />
                {m}
              </label>
            ))}
          </div>
          <div className="form-row">
            <label>
              Repository URL
              <input
                type="url"
                value={draft.repoUrl}
                placeholder="https://github.com/…"
                onChange={(e) =>
                  setDraft({ ...draft, repoUrl: e.target.value })
                }
              />
            </label>
            <label>
              Demo URL
              <input
                type="url"
                value={draft.demoUrl}
                placeholder="https://…"
                onChange={(e) =>
                  setDraft({ ...draft, demoUrl: e.target.value })
                }
              />
            </label>
          </div>
          <label>
            Completion evidence / results
            <textarea
              rows={3}
              maxLength={20000}
              value={draft.evidence}
              onChange={(e) => setDraft({ ...draft, evidence: e.target.value })}
            />
          </label>
          {canEdit ? (
            <button className="button primary" disabled={busy}>
              Save project progress
            </button>
          ) : null}
        </fieldset>
      </form>
      <div className="inline-actions">
        {project.repoUrl ? (
          <a
            className="text-link"
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Repository <Icon name="external" size={14} />
          </a>
        ) : null}
        {project.demoUrl ? (
          <a
            className="text-link"
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Demo <Icon name="external" size={14} />
          </a>
        ) : null}
        <button
          className="text-button"
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Hide" : "Read"} full project brief
        </button>
        <button
          className="text-button"
          disabled={busy}
          onClick={() =>
            void run(async () => {
              await store.createProject(state, {
                ...project,
                id: crypto.randomUUID(),
                ownerId: state.userId,
                participants: [state.userId],
                status: "Planned",
                milestones: [],
                repoUrl: "",
                demoUrl: "",
                evidence: "",
                revision: 0,
              });
            }, "Independent project copy started")
          }
        >
          Start my own copy
        </button>
      </div>
      {expanded ? (
        <BriefDetail
          brief={project.brief}
          learning={learnerContext(
            project.brief,
            lessons,
            state.profiles.find((p) => p.id === state.userId) ?? {
              knownLessons: [],
            },
            state.progress[state.userId],
          )}
        />
      ) : null}
    </section>
  );
}
