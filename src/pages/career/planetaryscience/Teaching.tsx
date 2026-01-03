import { CobyPage } from '../../../components/PageWrappers';
import {
  PageHeader,
  LinkCard,
  CardGrid,
} from '../../../components/PageComponents';
import { PLANETARY_SCIENCE_TEACHING } from './metas';

export default function PlanetaryScienceTeaching() {
  return (
    <CobyPage>
      <PageHeader
        title='Planetary Science Teaching'
        description='Teaching experience during my PhD at UC Santa Cruz.'
      />
      <CardGrid>
        {PLANETARY_SCIENCE_TEACHING.map((project) => (
          <LinkCard key={project.id} project={project} />
        ))}
      </CardGrid>
    </CobyPage>
  );
}
