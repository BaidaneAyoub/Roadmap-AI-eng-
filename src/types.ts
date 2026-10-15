export type Status =
  "Not started" | "Learning" | "Completed" | "Already known" | "Skipped";
export interface Resource {
  title: string;
  url: string;
  access: string;
  extras: string;
}
export interface VideoResource extends Resource {
  creator: string;
  format: string;
  explains: string;
  useful: string;
  source: string;
  watchFor?: string;
  scope?: string;
}
export interface Concept {
  name: string;
  explanation: string;
  example: string;
  videos: VideoResource[];
}
export interface Lesson {
  id: string;
  domainId: string;
  module: string;
  title: string;
  summary: string;
  why: string;
  concepts: Concept[];
  prerequisites: string[];
  priority: string;
  studyHours: number;
  practiceHours: number;
  resources: Resource[];
  videos: VideoResource[];
  exercise: {
    title: string;
    brief: string;
    deliverables: string[];
    acceptance: string[];
  };
}
export interface Domain {
  id: string;
  title: string;
  description: string;
  guide: { phase: string; goal: string; checkpoint: string; bridge: string };
  modules: { title: string; lessons: Lesson[] }[];
}
export interface Catalog {
  version: number;
  domains: Domain[];
  lessons: Lesson[];
  pipeline: {
    id: string;
    title: string;
    domain: string;
    choices: string[];
    outcome: string;
  }[];
}
export interface Profile {
  id: string;
  displayName: string;
  hours: number;
  selectedDomains: string[];
  knownLessons: string[];
  lastLesson: string;
  onboarded: boolean;
}
export interface Progress {
  status: Status;
  checked: string[];
  notes: string;
  evidence: string;
  confidence?: number | null;
  conceptConfidence?: Record<string, number>;
}
export interface ChecklistNode {
  id: string;
  label: string;
  done: boolean;
  children: ChecklistNode[];
}
export interface CustomTopic {
  id: string;
  ownerId: string;
  title: string;
  hours: number;
  mapping: string;
  resources: Resource[];
  checklist: ChecklistNode[];
}
export interface Brief {
  id: string;
  patternId: string;
  title: string;
  problem: string;
  data: string;
  output: string;
  skills: string[];
  difficulty: string;
  hours: number;
  integration: {
    skillId: string;
    skillTitle: string;
    task: string;
    check: string;
    deliverable: string;
    general: boolean;
  }[];
  milestones: string[];
  acceptance: string[];
  documentation: string[];
  general: boolean;
}
export interface ProjectInstance {
  id: string;
  ownerId: string;
  brief: Brief;
  status: "Planned" | "In progress" | "Completed";
  participants: string[];
  milestones: string[];
  repoUrl: string;
  demoUrl: string;
  evidence: string;
  revision: number;
}
export interface Team {
  id: string;
  name: string;
  ownerId: string;
  role: string;
}
export interface Workspace {
  version: 1;
  userId: string;
  profiles: Profile[];
  progress: Record<string, Record<string, Progress>>;
  custom: CustomTopic[];
  projects: ProjectInstance[];
  team: Team | null;
}
