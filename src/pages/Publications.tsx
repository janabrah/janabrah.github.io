import { CobyPage } from '../components/PageWrappers';
import { GOOGLE_SCHOLAR_URL, ORCID_URL } from '../config/social';

export default function Publications() {
  return (
    <CobyPage
      className='publications-page'
      background='/images/agu-background.jpg'
    >
      <h1>Publications and Presentations</h1>
      <p>
        For an up-to-date list of publications, please visit my{' '}
        <a href={GOOGLE_SCHOLAR_URL} target='_blank' rel='noopener noreferrer'>
          Google Scholar
        </a>{' '}
        or{' '}
        <a href={ORCID_URL} target='_blank' rel='noopener noreferrer'>
          ORCID
        </a>{' '}
        profiles.
      </p>
    </CobyPage>
  );
}
