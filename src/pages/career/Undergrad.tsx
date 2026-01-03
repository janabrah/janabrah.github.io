import { Link } from 'react-router-dom';
import { CobyPage } from '../../components/PageWrappers';
import { UNDERGRAD_PROJECTS } from './undergrad/metas';

export default function Undergrad() {
  return (
    <CobyPage>
      <h1>Undergrad</h1>
      <p>Research projects from my undergraduate studies.</p>

      <div className='projects-grid'>
        {UNDERGRAD_PROJECTS.map((project) => (
          <Link key={project.path} to={project.path} className='project-card'>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
          </Link>
        ))}
      </div>
    </CobyPage>
  );
}
