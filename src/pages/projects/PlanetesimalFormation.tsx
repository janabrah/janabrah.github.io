import { CobyPage } from '../../components/PageWrappers';
import { PLANETESIMAL_FORMATION as meta } from './metas';

export default function PlanetesimalFormation() {
  return (
    <CobyPage className="project-page" background={meta.background}>
      <h1>{meta.title}</h1>
      <p>
        Planetesimals are the building blocks of planets. Understanding how they formed
        in the early solar system is crucial for understanding the diversity of planets
        and small bodies we observe today.
      </p>
      <p>
        My research investigates the physical and chemical processes involved in
        planetesimal formation, including the role of moderately volatile elements.
      </p>
    </CobyPage>
  );
}
