import { CobyPage } from '../../components/PageWrappers';
import { FERROVOLCANISM } from './metas';

export default function Ferrovolcanism() {
  return (
    <CobyPage className='project-page' background={FERROVOLCANISM.background}>
      <h1>{FERROVOLCANISM.title}</h1>
      <p>
        Ferrovolcanism refers to volcanic eruptions of molten iron, which may
        occur on metallic asteroids—the exposed iron cores of differentiated
        planetesimals.
      </p>
      <p>
        This research explores the conditions under which ferrovolcanism could
        occur, the morphology of resulting surface features, and how we might
        identify evidence of ferrovolcanism on asteroids like Psyche.
      </p>
    </CobyPage>
  );
}
