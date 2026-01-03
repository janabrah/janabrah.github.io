import { CobyPage } from '../components/PageWrappers';
import { PageHeader, LinkCard, CardGrid } from '../components/PageComponents';
import { PROJECT_METAS } from './projects/metas';

export default function Projects() {
  return (
    <CobyPage className='projects-page' background='/images/biking.jpeg'>
      <PageHeader title='Research Projects' />
      <CardGrid>
        {PROJECT_METAS.map((project) => (
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
