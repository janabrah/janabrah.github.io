import { PLANETESIMAL_FORMATION as meta } from './metas';

export default function PlanetesimalFormation() {
  return (
    <div className="page project-page" style={{ backgroundImage: `url('${meta.background}')` }}>
      <div className="page-overlay">
        <article className="page-content">
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
        </article>
      </div>
    </div>
  );
}
