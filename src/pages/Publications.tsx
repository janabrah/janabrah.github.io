import { CobyPage } from '../components/PageWrappers';

export default function Publications() {
  return (
    <CobyPage className="publications-page" background="/images/agu-background.jpg">
      <h1>Publications and Presentations</h1>
      <p>
        For an up-to-date list of publications, please visit my{' '}
        <a
          href="https://scholar.google.com/citations?user=kerVazMAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Scholar
        </a>{' '}
        or{' '}
        <a
          href="https://orcid.org/0000-0003-2270-0801"
          target="_blank"
          rel="noopener noreferrer"
        >
          ORCID
        </a>{' '}
        profiles.
      </p>
    </CobyPage>
  );
}
