import { Link } from 'react-router-dom';
import { FORWARD_OPERATIONS_PROJECTS } from './metas';

export default function ForwardOperations() {
  return (
    <div className="page">
      <div className="page-overlay">
        <article className="page-content">
          <h1>Forward Operations</h1>
          <p>
            I started at Forward in the operations team, owning scheduling and
            onboarding for our remote fleet of healthcare workers.
          </p>

          <div className="projects-grid">
            {FORWARD_OPERATIONS_PROJECTS.map((project) => (
              <Link key={project.path} to={project.path} className="project-card">
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
              </Link>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
