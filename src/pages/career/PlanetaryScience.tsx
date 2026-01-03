import { Link } from 'react-router-dom';
import { CobyPage } from '../../components/PageWrappers';

export default function PlanetaryScience() {
  return (
    <CobyPage>
      <h1>Planetary Science</h1>
      <p>
        I earned my PhD in Planetary Science from UC Santa Cruz, following an
        undergraduate degree from Caltech in Physics, Geophysics, and English.
        My research focused on the interiors and evolution of planetary bodies.
      </p>

      <div className='career-links'>
        <Link
          to='/career/planetary-science/projects'
          className='career-link-card'
        >
          <h2>Projects</h2>
        </Link>
        <Link
          to='/career/planetary-science/publications'
          className='career-link-card'
        >
          <h2>Publications</h2>
        </Link>
      </div>
    </CobyPage>
  );
}
