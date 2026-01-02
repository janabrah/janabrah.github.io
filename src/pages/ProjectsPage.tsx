import { Link } from 'react-router-dom';
import { PROJECT_METAS } from './projects/metas';

export default function Projects() {
  return (
    <div className="page projects-page" style={{ backgroundImage: "url('/images/biking.jpeg')" }}>
      <div className="page-overlay">
        <article className="page-content">
          <h1>Research Projects</h1>
          <div className="projects-grid">
            {PROJECT_METAS.map((project) => (
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
