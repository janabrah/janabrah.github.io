import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';

const projects = [
  { path: '/projects/europa-shape', label: "Europa's Global Shape" },
  { path: '/projects/lunar-dynamo', label: 'Lunar Dynamo' },
  { path: '/projects/ferrovolcanism', label: 'Ferrovolcanism' },
  { path: '/projects/planetary-rotation', label: 'Planetary Rotation' },
  { path: '/projects/planetesimal-formation', label: 'Planetesimal Formation' },
  { path: '/projects/em-coupling', label: 'Electromagnetic Core-Mantle Coupling' },
];

export default function Layout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const isProjectActive = () => location.pathname.startsWith('/projects');

  return (
    <div className="layout">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            J<span>acob Abrahams</span>
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <Link
              to="/"
              className={isActive('/') ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              About Me
            </Link>
            <Link
              to="/contact"
              className={isActive('/contact') ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="dropdown">
              <Link
                to="/projects"
                className={`dropdown-toggle ${isProjectActive() ? 'active' : ''}`}
              >
                Projects
              </Link>
              <div className="dropdown-menu">
                {projects.map((project) => (
                  <Link
                    key={project.path}
                    to={project.path}
                    className={isActive(project.path) ? 'active' : ''}
                    onClick={() => setMenuOpen(false)}
                  >
                    {project.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/publications"
              className={isActive('/publications') ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Publications
            </Link>
            <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
              CV
            </a>
          </nav>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Jacob Abrahams</p>
      </footer>
    </div>
  );
}
