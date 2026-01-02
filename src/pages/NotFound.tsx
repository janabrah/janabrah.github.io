import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='page'>
      <div className='page-overlay'>
        <article className='page-content not-found'>
          <h2>404</h2>
          <p>You seem lost, like me at the end of my PhD.</p>
          <Link
            to='/'
            className='back-home'
            style={{ backgroundColor: '#1a4b8c' }}
          >
            Pivot (back to home)
          </Link>
        </article>
      </div>
    </div>
  );
}
