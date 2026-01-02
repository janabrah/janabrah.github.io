import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { CAREER_ITEMS } from '../config/career';
import usePageTracking from '../hooks/usePageTracking';

export default function Layout() {
  usePageTracking();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const isCareerActive = () => location.pathname.startsWith('/career');

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
                to="/career"
                className={`dropdown-toggle ${isCareerActive() ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                Career
              </Link>
              <div className="dropdown-menu">
                {CAREER_ITEMS.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={location.pathname.startsWith(item.path) ? 'active' : ''}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
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
