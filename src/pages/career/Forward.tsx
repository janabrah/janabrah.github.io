import { ForwardPage } from '../../components/PageWrappers';
import {
  PageHeader,
  LinkCard,
  CardGrid,
} from '../../components/PageComponents';
import {
  FORWARD_OPERATIONS_PROJECTS,
  FORWARD_SOFTWARE_PROJECTS,
} from './forward/metas';
import type { ProjectMeta } from '../../types';

const FORWARD_SECTIONS: ProjectMeta[] = [
  {
    id: 'forward-operations',
    path: '/career/forward/operations',
    title: 'Operations',
    description: '2022-2023',
    children: FORWARD_OPERATIONS_PROJECTS,
  },
  {
    id: 'forward-software',
    path: '/career/forward/software',
    title: 'Software Engineering',
    description: '2023-2024',
    children: FORWARD_SOFTWARE_PROJECTS,
  },
];

export default function Forward() {
  return (
    <ForwardPage>
      <PageHeader
        title='Forward'
        description='I started in the operations team, owning scheduling and onboarding for our remote fleet of healthcare workers. Then I moved over to be a software engineer where I continued building scalable tools for operations, including our scheduling tool and our inventory app, as well as contributing to our software infrastructure and IT systems.'
      />
      <CardGrid className='career-links'>
        {FORWARD_SECTIONS.map((section) => (
          <LinkCard
            key={section.id}
            project={section}
            className='career-link-card'
          />
        ))}
      </CardGrid>
    </ForwardPage>
  );
}
