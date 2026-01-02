import { CobyPage } from '../../components/PageWrappers';
import { EM_COUPLING as meta } from './metas';

export default function EMCoupling() {
  return (
    <CobyPage className='project-page' background={meta.background}>
      <h1>{meta.title}</h1>
      <p>
        The electromagnetic interaction between a planet's liquid metallic core
        and its overlying mantle can significantly affect the planet's
        rotational dynamics and thermal evolution.
      </p>
      <p>
        This research explores the mechanisms and consequences of
        electromagnetic core-mantle coupling in terrestrial planets and moons.
      </p>
    </CobyPage>
  );
}
