import { Link } from 'react-router-dom';

const projects = [
  {
    path: '/career/planetary-science/projects/europa-shape',
    title: "Europa's Global Shape",
    description: 'Measuring Europa\'s long wavelength shape using UV stellar occultations on Europa Clipper.',
  },
  {
    path: '/career/planetary-science/projects/lunar-dynamo',
    title: 'Lunar Dynamo',
    description: 'Investigating the mechanisms that powered the ancient lunar magnetic field.',
  },
  {
    path: '/career/planetary-science/projects/ferrovolcanism',
    title: 'Ferrovolcanism',
    description: 'Exploring volcanic eruptions of molten iron on metallic asteroids.',
  },
  {
    path: '/career/planetary-science/projects/planetary-rotation',
    title: 'Planetary Rotation',
    description: 'Studying the rotational dynamics of planetary bodies.',
  },
  {
    path: '/career/planetary-science/projects/planetesimal-formation',
    title: 'Planetesimal Formation',
    description: 'Understanding how the building blocks of planets formed in the early solar system.',
  },
  {
    path: '/career/planetary-science/projects/em-coupling',
    title: 'Electromagnetic Core-Mantle Coupling',
    description: 'Investigating electromagnetic interactions between planetary cores and mantles.',
  },
];

export default function Projects() {
  return (
    <div className="page projects-page" style={{ backgroundImage: "url('/images/biking.jpeg')" }}>
      <div className="page-overlay">
        <article className="page-content">
          <h1>Research Projects</h1>
          <div className="projects-grid">
            {projects.map((project) => (
              <Link key={project.path} to={project.path} className="project-card">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </Link>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
