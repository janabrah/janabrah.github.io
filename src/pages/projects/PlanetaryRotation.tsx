import { CobyPage } from '../../components/PageWrappers';
import { PLANETARY_ROTATION as meta } from './metas';

export default function PlanetaryRotation() {
  return (
    <CobyPage className='project-page'>
      <h1>{meta.title}</h1>
      <p>
        The rotational dynamics of planetary bodies provide important
        constraints on their internal structure and evolution. My work in this
        area examines how rotation rates change over time and what this tells us
        about planetary interiors.
      </p>
    </CobyPage>
  );
}
