import { ForwardPage } from '../../../components/PageWrappers';
import {
  PageHeader,
  LinkCard,
  CardGrid,
} from '../../../components/PageComponents';
import { FORWARD_OPERATIONS_PROJECTS } from './metas';

export default function ForwardOperations() {
  return (
    <ForwardPage>
      <PageHeader
        title='Forward Operations'
        description='I started at Forward in the operations team, owning scheduling and onboarding for our remote fleet of healthcare workers.'
      />
      <CardGrid>
        {FORWARD_OPERATIONS_PROJECTS.map((project) => (
          <LinkCard key={project.id} project={project} />
        ))}
      </CardGrid>
    </ForwardPage>
  );
}
