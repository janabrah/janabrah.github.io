import { Link } from 'react-router-dom';
import { ForwardPage } from '../../../components/PageWrappers';
import { FORWARD_SOFTWARE_PROJECTS } from './metas';

export default function ForwardSoftware() {
  return (
    <ForwardPage>
      <h1>Forward Software Engineering</h1>
      <p>
        I moved over to be a software engineer where I continued building
        scalable tools for operations, as well as contributing to software
        infrastructure and IT systems.
      </p>

      <div className="projects-grid">
        {FORWARD_SOFTWARE_PROJECTS.map((project) => (
          <Link key={project.path} to={project.path} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
          </Link>
        ))}
      </div>
    </ForwardPage>
  );
}
