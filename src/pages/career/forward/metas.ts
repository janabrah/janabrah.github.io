import type { ProjectMeta } from '../../../types';

export const SCHEDULING: ProjectMeta = {
  id: 'scheduling',
  path: '/career/forward/operations/scheduling',
  title: 'Scheduling System',
  description: 'Owned scheduling for remote healthcare worker fleet.',
};

export const ONBOARDING: ProjectMeta = {
  id: 'onboarding',
  path: '/career/forward/operations/onboarding',
  title: 'Onboarding System',
  description: 'Owned onboarding for remote healthcare worker fleet.',
};

export const ALLOCATIONS: ProjectMeta = {
  id: 'allocations',
  path: '/career/forward/software/allocations',
  title: 'Allocations',
  description: 'Scheduling tool for operations.',
};

export const FORWARD_INVENTORY: ProjectMeta = {
  id: 'forward-inventory',
  path: '/career/forward/software/inventory',
  title: 'Inventory App',
  description: 'Inventory management for operations.',
};

export const INFRASTRUCTURE: ProjectMeta = {
  id: 'infrastructure',
  path: '/career/forward/software/infrastructure',
  title: 'Software Infrastructure',
  description: 'Contributing to software infrastructure systems.',
};

export const IT_SYSTEMS: ProjectMeta = {
  id: 'it-systems',
  path: '/career/forward/software/it-systems',
  title: 'IT Systems',
  description: 'Contributing to IT systems.',
};

export const FORWARD_OPERATIONS_PROJECTS: ProjectMeta[] = [
  SCHEDULING,
  ONBOARDING,
];

export const FORWARD_SOFTWARE_PROJECTS: ProjectMeta[] = [
  ALLOCATIONS,
  FORWARD_INVENTORY,
  INFRASTRUCTURE,
  IT_SYSTEMS,
];

export const FORWARD_ALL_PROJECTS: ProjectMeta[] = [
  ...FORWARD_OPERATIONS_PROJECTS,
  ...FORWARD_SOFTWARE_PROJECTS,
];
