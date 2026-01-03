import { CobyPage } from '../../../components/PageWrappers';
import {
  PageHeader,
  LinkCard,
  CardGrid,
} from '../../../components/PageComponents';
import { UNDERGRAD_TEACHING } from './metas';

export default function UndergradTeaching() {
  return (
    <CobyPage>
      <PageHeader
        title='Undergrad Teaching'
        description='Teaching experience from my undergraduate years at Caltech.'
      />
      <CardGrid>
        {UNDERGRAD_TEACHING.map((project) => (
          <LinkCard key={project.id} project={project} />
        ))}
      </CardGrid>
    </CobyPage>
  );
}
