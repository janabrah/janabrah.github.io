import { MeterPage } from '../../components/PageWrappers';
import {
  PageHeader,
  LinkCard,
  CardGrid,
} from '../../components/PageComponents';
import { METER_PROJECTS } from './meter/metas';

export default function Meter() {
  return (
    <MeterPage>
      <PageHeader
        title='Meter'
        description={`At Meter I work on "operations engineering". I'm a software engineer embedded in the ops team, working to help operators scale their impact as we grow. ~80% of my code is in Typescript/React and 20% is in Go working in our Graphql internal API.`}
      />
      <CardGrid>
        {METER_PROJECTS.map((project) => (
          <LinkCard
            key={project.path}
            to={project.path}
            title={project.title}
            description={project.summary}
          />
        ))}
      </CardGrid>
    </MeterPage>
  );
}
