import { CobyPage } from '../components/PageWrappers';
import {
  LINKEDIN_URL,
  TWITTER_URL,
  ORCID_URL,
  GOOGLE_SCHOLAR_URL,
} from '../config/social';

export default function Contact() {
  return (
    <CobyPage className='contact-page'>
      <h1>Contact Information</h1>
      <p>Email me at jacobnabrahams(at)gmail[dot]com</p>
      <p>
        I'm also on{' '}
        <a href={LINKEDIN_URL} target='_blank' rel='noopener noreferrer'>
          LinkedIn
        </a>
        , Twitter at{' '}
        <a href={TWITTER_URL} target='_blank' rel='noopener noreferrer'>
          @cobyabr
        </a>
        , and I have occasionally-updated pages with{' '}
        <a href={ORCID_URL} target='_blank' rel='noopener noreferrer'>
          ORCID
        </a>{' '}
        and{' '}
        <a href={GOOGLE_SCHOLAR_URL} target='_blank' rel='noopener noreferrer'>
          Google Scholar
        </a>
        .
      </p>
    </CobyPage>
  );
}
