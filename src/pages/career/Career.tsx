import { CobyPage } from '../../components/PageWrappers';
import {
  PageHeader,
  LinkCard,
  CardGrid,
} from '../../components/PageComponents';
import { METER_PROJECTS } from './meter/metas';
import { UNDERGRAD_PROJECTS } from './undergrad/metas';

const CAREER_CARDS = [
  {
    path: '/career/meter',
    label: 'Meter',
    description: '2024-present',
    preview: METER_PROJECTS,
  },
  {
    path: '/career/forward',
    label: 'Forward',
    description: '2022-2024',
    preview: [
      { title: 'Operations', path: '/career/forward/operations' },
      { title: 'Software Engineering', path: '/career/forward/software' },
    ],
  },
  {
    path: '/career/planetary-science',
    label: 'Planetary Science',
    description: '2017-2022',
    preview: [
      { title: 'Projects', path: '/career/planetary-science/projects' },
      { title: 'Publications', path: '/career/planetary-science/publications' },
    ],
  },
  {
    path: '/career/undergrad',
    label: 'Undergrad',
    description: '2013-2017',
    preview: UNDERGRAD_PROJECTS,
  },
];

export default function Career() {
  return (
    <CobyPage>
      <PageHeader title='Career' />
      <CardGrid className='career-links'>
        {CAREER_CARDS.map((item) => (
          <LinkCard
            key={item.path}
            to={item.path}
            title={item.label}
            description={item.description}
            className='career-link-card'
            preview={item.preview}
          />
        ))}
      </CardGrid>
    </CobyPage>
  );
}
