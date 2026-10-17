import data from "./data/catalog.json";
import type { Catalog, Domain, Lesson, Concept, VideoResource } from "./types";
type CompactLesson = Omit<Lesson, "videos" | "concepts"> & {
  videoUrls: string[];
  concepts: (Omit<Concept, "videos"> & { videoUrls: string[] })[];
};
type Serialized = {
  stages: Catalog['stages'];
  version: number;
  pipeline: Catalog["pipeline"];
  domains: {
    id: string;
    title: string;
    description: string;
    guide: Domain["guide"];
    modules: { title: string; lessonIds: string[] }[];
  }[];
  lessons: CompactLesson[];
  videos: Record<string, VideoResource>;
};
const serialized = data as unknown as Serialized;
const lessons: Lesson[] = serialized.lessons.map((l) => ({
  ...l,
  videos: l.videoUrls.map((url) => serialized.videos[url]),
  concepts: l.concepts.map((c) => ({
    ...c,
    videos: c.videoUrls.map((url) => ({
      ...serialized.videos[url],
      watchFor: `Focus on ${c.name.toLowerCase()}. Then reproduce the lesson example: ${c.example}`,
    })),
  })),
}));
export const catalog: Catalog = {
  stages: serialized.stages,
  version: serialized.version,
  pipeline: serialized.pipeline,
  lessons,
  domains: serialized.domains.map((d) => ({
    ...d,
    modules: d.modules.map((m) => ({
      title: m.title,
      lessons: m.lessonIds.map((id) => lessons.find((l) => l.id === id)!),
    })),
  })),
};
