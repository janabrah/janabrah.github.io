import { Link } from 'react-router-dom';
import { CobyPage } from '../components/PageWrappers';

export default function NotFound() {
  return (
    <CobyPage className='not-found'>
      <h2>404</h2>
      <p>You seem lost, like me at the end of my PhD.</p>
      <Link to='/' className='back-home'>
        Pivot (back to home)
      </Link>
    </CobyPage>
  );
}
