import { ForwardPage } from '../../../components/PageWrappers';
import {
  PageHeader,
  LinkCard,
  CardGrid,
} from '../../../components/PageComponents';
import { FORWARD_SOFTWARE_PROJECTS } from './metas';

export default function ForwardSoftware() {
  return (
    <ForwardPage>
      <PageHeader
        title='Forward Software Engineering'
        description='I moved over to be a software engineer where I continued building scalable tools for operations, as well as contributing to software infrastructure and IT systems. I worked primarily in Javascript, largely in the Google Apps Script environment.'
      />
      <CardGrid>
        {FORWARD_SOFTWARE_PROJECTS.map((project) => (
          <LinkCard
            key={project.path}
            to={project.path}
            title={project.title}
            description={project.summary}
          />
        ))}
      </CardGrid>
    </ForwardPage>
  );
}
