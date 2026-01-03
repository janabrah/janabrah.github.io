import { CobyPage } from '../../components/PageWrappers';
import {
  PageHeader,
  LinkCard,
  CardGrid,
} from '../../components/PageComponents';
import { UNDERGRAD_PROJECTS } from './undergrad/metas';

export default function Undergrad() {
  return (
    <CobyPage>
      <PageHeader
        title='Undergrad'
        description='Research projects from my undergraduate years at Caltech (2013-2017).'
      />
      <CardGrid>
        {UNDERGRAD_PROJECTS.map((project) => (
          <LinkCard key={project.id} project={project} />
        ))}
      </CardGrid>
    </CobyPage>
  );
}
