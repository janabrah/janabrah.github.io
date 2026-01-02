// Forward Operations projects
export const SCHEDULING = {
  id: 'scheduling',
  path: '/career/forward/operations/scheduling',
  title: 'Scheduling System',
  summary: 'Owned scheduling for remote healthcare worker fleet.',
  background: undefined,
};

export const ONBOARDING = {
  id: 'onboarding',
  path: '/career/forward/operations/onboarding',
  title: 'Onboarding System',
  summary: 'Owned onboarding for remote healthcare worker fleet.',
  background: undefined,
};

// Forward Software projects
export const ALLOCATIONS = {
  id: 'allocations',
  path: '/career/forward/software/allocations',
  title: 'Allocations',
  summary: 'Scheduling tool for operations.',
  background: undefined,
};

export const FORWARD_INVENTORY = {
  id: 'forward-inventory',
  path: '/career/forward/software/inventory',
  title: 'Inventory App',
  summary: 'Inventory management for operations.',
  background: undefined,
};

export const INFRASTRUCTURE = {
  id: 'infrastructure',
  path: '/career/forward/software/infrastructure',
  title: 'Software Infrastructure',
  summary: 'Contributing to software infrastructure systems.',
  background: undefined,
};

export const IT_SYSTEMS = {
  id: 'it-systems',
  path: '/career/forward/software/it-systems',
  title: 'IT Systems',
  summary: 'Contributing to IT systems.',
  background: undefined,
};

export const FORWARD_OPERATIONS_PROJECTS = [SCHEDULING, ONBOARDING];

export const FORWARD_SOFTWARE_PROJECTS = [ALLOCATIONS, FORWARD_INVENTORY, INFRASTRUCTURE, IT_SYSTEMS];

export const FORWARD_ALL_PROJECTS = [
  ...FORWARD_OPERATIONS_PROJECTS,
  ...FORWARD_SOFTWARE_PROJECTS,
];

export const FORWARD_PROJECTS_BY_ID = Object.fromEntries(
  FORWARD_ALL_PROJECTS.map((p) => [p.id, p])
) as Record<string, typeof SCHEDULING>;
