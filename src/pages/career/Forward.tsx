import { Link } from 'react-router-dom';

export default function Forward() {
  return (
    <div className="page">
      <div className="page-overlay">
        <article className="page-content">
          <h1>Forward</h1>
          <p>
            At Forward, we tried to build "The world's best healthcare, for billions
            of people, for free" — a moonshot that didn't work out, but was worth
            trying for.
          </p>

          <div className="career-links">
            <Link to="/career/forward/operations" className="career-link-card">
              <h2>Operations</h2>
              <p>2022-2023</p>
            </Link>
            <Link to="/career/forward/software" className="career-link-card">
              <h2>Software Engineering</h2>
              <p>2023-2024</p>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
