import { CobyPage } from '../../components/PageWrappers';
import {
  PageHeader,
  LinkCard,
  CardGrid,
} from '../../components/PageComponents';
import { PROJECT_METAS } from '../projects/metas';
import { PLANETARY_SCIENCE_TEACHING } from './planetaryscience/metas';
import type { ProjectMeta } from '../../types';

const PLANETARY_SCIENCE_SECTIONS: ProjectMeta[] = [
  {
    id: 'ps-projects',
    path: '/career/planetary-science/projects',
    title: 'Projects',
    children: PROJECT_METAS,
  },
  {
    id: 'ps-publications',
    path: '/career/planetary-science/publications',
    title: 'Publications',
  },
  {
    id: 'ps-teaching',
    path: '/career/planetary-science/teaching',
    title: 'Teaching',
    children: PLANETARY_SCIENCE_TEACHING,
  },
];

export default function PlanetaryScience() {
  return (
    <CobyPage>
      <PageHeader
        title='Planetary Science'
        description='I earned my PhD in Planetary Science from UC Santa Cruz, following an undergraduate degree from Caltech in Physics, Geophysics, and English. My research focused on the interiors and evolution of planetary bodies. My work was generally a mix of computational modelling and explicit analytical solutions. My modelling was mostly in Python/numpy/scipy, but I also worked in Mathematica, Matlab a little, and translated some older Fortran projects into Python.'
      />
      <CardGrid className='career-links'>
        {PLANETARY_SCIENCE_SECTIONS.map((section) => (
          <LinkCard
            key={section.id}
            project={section}
            className='career-link-card'
          />
        ))}
      </CardGrid>
    </CobyPage>
  );
}
