import { FERROVOLCANISM as meta } from './metas';

export default function Ferrovolcanism() {
  return (
    <div className="page project-page" style={{ backgroundImage: `url('${meta.background}')` }}>
      <div className="page-overlay">
        <article className="page-content">
          <h1>{meta.title}</h1>
          <p>
            Ferrovolcanism refers to volcanic eruptions of molten iron, which may occur
            on metallic asteroids—the exposed iron cores of differentiated planetesimals.
          </p>
          <p>
            This research explores the conditions under which ferrovolcanism could occur,
            the morphology of resulting surface features, and how we might identify evidence
            of ferrovolcanism on asteroids like Psyche.
          </p>
        </article>
      </div>
    </div>
  );
}
