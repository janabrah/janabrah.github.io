import type { ProjectMeta } from '../../../types';

export const TRIDENT: ProjectMeta = {
  id: 'trident',
  path: '/career/meter/trident',
  title: 'Trident',
  description: 'Internal inventory management application.',
};

export const PROJECT_MANAGEMENT: ProjectMeta = {
  id: 'project-management',
  path: '/career/meter/project-management',
  title: 'Project Management Tool',
  description: 'In-house project management tool to track network installs.',
};

export const NETWORK_DIAGNOSTICS: ProjectMeta = {
  id: 'network-diagnostics',
  path: '/career/meter/network-diagnostics',
  title: 'Network Diagnostics',
  description:
    "Network health diagnostic tool to determine if networks are working and why they aren't.",
};

export const DASHBOARD: ProjectMeta = {
  id: 'dashboard',
  path: '/career/meter/dashboard',
  title: 'Meter Dashboard',
  description: 'Contributing to make our networking dashboard more powerful.',
};

export const METER_PROJECTS: ProjectMeta[] = [
  TRIDENT,
  PROJECT_MANAGEMENT,
  NETWORK_DIAGNOSTICS,
  DASHBOARD,
];
