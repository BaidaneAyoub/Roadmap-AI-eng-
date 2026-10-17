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
  commonMistake: string;
  checkQuestion: string;
  exercise: string;
  name: string;
  explanation: string;
  example: string;
  videos: VideoResource[];
}
export interface Lesson {
  learningLevel: 'Foundation' | 'Essential' | 'Specialization';
  studyOrder: number;
  mastery: 'Explain' | 'Implement' | 'Diagnose' | 'Compare';
  priorityReason: string;
  whenNeeded: string;
  canDefer: string;
  reviewedAt: string;
  isCheckpoint?: boolean;
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
  stages: {id: string; level: Lesson['learningLevel']; domainId: string; title: string; lessonIds: string[]; checkpointId: string | null}[];
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
  roadmaps: { id: string; title: string; requires?: string; domains: string[] }[];
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
  catalogVersion?: number;
  source?: string;
  audience?: string;
  learningGoals?: string[];
  boundaries?: string[];
  components?: string[];
  dataFlow?: string[];
  stages?: { title: string; deliverable: string; check: string }[];
  resources?: { title: string; url: string; access: string }[];
  prerequisiteSkills?: string[];
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
    catalogSkillId?: string;
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
