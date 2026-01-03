import { CobyPage } from '../../components/PageWrappers';
import {
  PageHeader,
  LinkCard,
  CardGrid,
} from '../../components/PageComponents';
import { UNDERGRAD_PROJECTS, UNDERGRAD_TEACHING } from './undergrad/metas';
import type { ProjectMeta } from '../../types';

const UNDERGRAD_SECTIONS: ProjectMeta[] = [
  {
    id: 'undergrad-research',
    path: '/career/undergrad/research',
    title: 'Research',
    children: UNDERGRAD_PROJECTS,
  },
  {
    id: 'undergrad-teaching',
    path: '/career/undergrad/teaching',
    title: 'Teaching',
    children: UNDERGRAD_TEACHING,
  },
];

export default function Undergrad() {
  return (
    <CobyPage>
      <PageHeader
        title='Undergrad'
        description='I attended Caltech with a double major in Physics and Geophysics, with a minor in English. My coursework was generally physics-focused and I spent my summers doing research in geology and planetary science labs: the first two summers at Caltech in the Kirschvink and Stevenson labs and the third at MIT in the Weiss lab.'
      />
      <CardGrid className='career-links'>
        {UNDERGRAD_SECTIONS.map((section) => (
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
