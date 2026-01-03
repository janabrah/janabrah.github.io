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
        description='I attended Caltech with a double major in Physics and Geophysics, with a minor in English. My coursework was generally physics-focused and I spent my summers doing research in geology and planetary science labs: the first two summers at Caltech in the Kirschvink and Stevenson labs and the third at MIT in the Weiss lab.'
      />
      <CardGrid>
        {UNDERGRAD_PROJECTS.map((project) => (
          <LinkCard
            key={project.path}
            to={project.path}
            title={project.title}
            description={project.summary}
          />
        ))}
      </CardGrid>
    </CobyPage>
  );
}
