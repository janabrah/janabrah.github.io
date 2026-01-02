import { Link } from 'react-router-dom';
import { CAREER_ITEMS } from '../../config/career';

export default function Career() {
  return (
    <div className="page">
      <div className="page-overlay">
        <article className="page-content">
          <h1>Career</h1>
          <div className="career-links">
            {CAREER_ITEMS.map((item) => (
              <Link key={item.path} to={item.path} className="career-link-card">
                <h2>{item.label}</h2>
                {item.description && <p>{item.description}</p>}
              </Link>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
