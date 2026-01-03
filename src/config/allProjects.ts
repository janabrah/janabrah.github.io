import type { ProjectMeta } from '../types';
import { PROJECT_METAS } from '../pages/projects/metas';
import { FORWARD_ALL_PROJECTS } from '../pages/career/forward/metas';
import { METER_PROJECTS } from '../pages/career/meter/metas';
import {
  UNDERGRAD_PROJECTS,
  UNDERGRAD_TEACHING,
} from '../pages/career/undergrad/metas';
import { PLANETARY_SCIENCE_TEACHING } from '../pages/career/planetaryscience/metas';

export const ALL_PROJECTS: ProjectMeta[] = [
  ...PROJECT_METAS,
  ...FORWARD_ALL_PROJECTS,
  ...METER_PROJECTS,
  ...UNDERGRAD_PROJECTS,
  ...UNDERGRAD_TEACHING,
  ...PLANETARY_SCIENCE_TEACHING,
];

export const ALL_PROJECTS_BY_ID: Record<string, ProjectMeta> =
  ALL_PROJECTS.reduce<Record<string, ProjectMeta>>((acc, p) => {
    acc[p.id] = p;
    return acc;
  }, {});
