import type { ProjectMeta } from '../../../types';

// Research Projects
export const H_CHONDRITE: ProjectMeta = {
  id: 'h-chondrite',
  path: '/career/undergrad/h-chondrite',
  title: 'H Chondrite Magnetic History',
};

export const MERCURY_DENSITY: ProjectMeta = {
  id: 'mercury-density',
  path: '/career/undergrad/mercury-density',
  title: "Mercury's Density Asymmetry",
};

export const HUMAN_MAGNETORECEPTION: ProjectMeta = {
  id: 'human-magnetoreception',
  path: '/career/undergrad/human-magnetoreception',
  title: 'Human Magnetoreception',
};

export const UNDERGRAD_PROJECTS: ProjectMeta[] = [
  H_CHONDRITE,
  MERCURY_DENSITY,
  HUMAN_MAGNETORECEPTION,
];

// Teaching
export const INTRO_GEOLOGY: ProjectMeta = {
  id: 'intro-geology',
  path: '/career/undergrad/intro-geology',
  title: 'Intro Geology',
  description: '2015, 2016',
};

export const INTRO_GEOPHYSICS_UNDERGRAD: ProjectMeta = {
  id: 'intro-geophysics-undergrad',
  path: '/career/undergrad/intro-geophysics',
  title: 'Intro Geophysics',
  description: '2017',
};

export const COOKING: ProjectMeta = {
  id: 'cooking',
  path: '/career/undergrad/cooking',
  title: 'Cooking',
  description: '2016',
};

export const UNDERGRAD_TEACHING: ProjectMeta[] = [
  INTRO_GEOLOGY,
  INTRO_GEOPHYSICS_UNDERGRAD,
  COOKING,
];
