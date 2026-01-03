import type { ProjectMeta } from '../types';
import { METER_PROJECTS } from '../pages/career/meter/metas';
import { UNDERGRAD_PROJECTS } from '../pages/career/undergrad/metas';

export const CAREER_ITEMS: ProjectMeta[] = [
  {
    id: 'meter',
    path: '/career/meter',
    title: 'Meter',
    description: '2024-present',
    children: METER_PROJECTS,
  },
  {
    id: 'forward',
    path: '/career/forward',
    title: 'Forward',
    description: '2022-2024',
    children: [
      {
        id: 'forward-ops',
        title: 'Operations',
        path: '/career/forward/operations',
      },
      {
        id: 'forward-sw',
        title: 'Software Engineering',
        path: '/career/forward/software',
      },
    ],
  },
  {
    id: 'planetary-science',
    path: '/career/planetary-science',
    title: 'Planetary Science',
    description: '2017-2022',
    children: [
      {
        id: 'ps-projects',
        title: 'Projects',
        path: '/career/planetary-science/projects',
      },
      {
        id: 'ps-publications',
        title: 'Publications',
        path: '/career/planetary-science/publications',
      },
    ],
  },
  {
    id: 'undergrad',
    path: '/career/undergrad',
    title: 'Undergrad',
    description: '2013-2017',
    children: UNDERGRAD_PROJECTS,
  },
];
