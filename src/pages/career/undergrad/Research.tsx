import { CobyPage } from '../../../components/PageWrappers';
import {
  PageHeader,
  LinkCard,
  CardGrid,
} from '../../../components/PageComponents';
import { UNDERGRAD_PROJECTS } from './metas';

export default function UndergradResearch() {
  return (
    <CobyPage>
      <PageHeader
        title='Undergrad Research'
        description='Research projects from my undergraduate years at Caltech.'
      />
      <CardGrid>
        {UNDERGRAD_PROJECTS.map((project) => (
          <LinkCard key={project.id} project={project} />
        ))}
      </CardGrid>
    </CobyPage>
  );
}
