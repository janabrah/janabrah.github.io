import { Link } from 'react-router-dom';
import { ForwardPage } from '../../components/PageWrappers';

export default function Forward() {
  return (
    <ForwardPage>
      <h1>Forward</h1>
      <p>
        I started in the operations team, owning scheduling and onboarding for
        our remote fleet of healthcare workers. Then I moved over to be a
        software engineer where I continued building scalable tools for
        operations, including our scheduling tool and our inventory app, as well
        as contributing to our software infrastructure and IT systems.
      </p>

      <div className='career-links'>
        <Link to='/career/forward/operations' className='career-link-card'>
          <h2>Operations</h2>
          <p>2022-2023</p>
        </Link>
        <Link to='/career/forward/software' className='career-link-card'>
          <h2>Software Engineering</h2>
          <p>2023-2024</p>
        </Link>
      </div>
    </ForwardPage>
  );
}
