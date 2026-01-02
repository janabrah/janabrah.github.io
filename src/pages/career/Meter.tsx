import { Link } from 'react-router-dom';
import { MeterPage } from '../../components/PageWrappers';
import { METER_PROJECTS } from './meter/metas';

export default function Meter() {
  return (
    <MeterPage>
      <h1>Meter</h1>
      <p>
        At Meter I work on "operations engineering". I'm a software engineer
        embedded in the ops team, working to help operators scale their impact
        as we grow.
      </p>

      <div className='projects-grid'>
        {METER_PROJECTS.map((project) => (
          <Link key={project.path} to={project.path} className='project-card'>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
          </Link>
        ))}
      </div>
    </MeterPage>
  );
}
