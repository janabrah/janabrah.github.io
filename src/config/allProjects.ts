import type { ProjectMeta } from '../types';
import { PROJECT_METAS } from '../pages/projects/metas';
import { FORWARD_ALL_PROJECTS } from '../pages/career/forward/metas';
import { METER_PROJECTS } from '../pages/career/meter/metas';
import { UNDERGRAD_PROJECTS } from '../pages/career/undergrad/metas';

export const ALL_PROJECTS: ProjectMeta[] = [
  ...PROJECT_METAS,
  ...FORWARD_ALL_PROJECTS,
  ...METER_PROJECTS,
  ...UNDERGRAD_PROJECTS,
];

export const ALL_PROJECTS_BY_ID = Object.fromEntries(
  ALL_PROJECTS.map((p) => [p.id, p]),
) as Record<string, ProjectMeta>;
