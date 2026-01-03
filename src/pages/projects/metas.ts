import type { ProjectMeta } from '../../types';

export const EUROPA_SHAPE: ProjectMeta = {
  id: 'europa-shape',
  path: '/career/planetary-science/projects/europa-shape',
  title: "Europa's Global Shape",
  description:
    "Measuring Europa's long wavelength shape using UV stellar occultations on the Europa Clipper Mission.",
  background: '/images/europa-background-invert.jpg',
};

export const LUNAR_DYNAMO: ProjectMeta = {
  id: 'lunar-dynamo',
  path: '/career/planetary-science/projects/lunar-dynamo',
  title: 'Lunar Dynamo',
  description:
    'Investigating the mechanisms that powered the ancient lunar magnetic field.',
  background: '/images/lunar-dynamo-background.gif',
};

export const FERROVOLCANISM: ProjectMeta = {
  id: 'ferrovolcanism',
  path: '/career/planetary-science/projects/ferrovolcanism',
  title: 'Ferrovolcanism',
  description:
    'Exploring volcanic eruptions of molten iron on metallic asteroids.',
  background: '/images/Ferrovolcanism-Art-Crop.jpg',
};

export const PLANETARY_ROTATION: ProjectMeta = {
  id: 'planetary-rotation',
  path: '/career/planetary-science/projects/planetary-rotation',
  title: 'Planetary Rotation',
  description: 'Studying the rotational dynamics of planetary bodies.',
};

export const PLANETESIMAL_FORMATION: ProjectMeta = {
  id: 'planetesimal-formation',
  path: '/career/planetary-science/projects/planetesimal-formation',
  title: 'Planetesimal Formation',
  description:
    'Understanding how the building blocks of planets formed in the early solar system.',
  background: '/images/moderately-volatile-background.png',
};

export const EM_COUPLING: ProjectMeta = {
  id: 'em-coupling',
  path: '/career/planetary-science/projects/em-coupling',
  title: 'Electromagnetic Core-Mantle Coupling',
  description:
    'Investigating electromagnetic interactions between planetary cores and mantles.',
  background: '/images/em-coupling-background.jpg',
};

export const PROJECT_METAS: ProjectMeta[] = [
  EUROPA_SHAPE,
  LUNAR_DYNAMO,
  FERROVOLCANISM,
  PLANETARY_ROTATION,
  PLANETESIMAL_FORMATION,
  EM_COUPLING,
];
