import { EM_COUPLING as meta } from './metas';

export default function EMCoupling() {
  return (
    <div className="page project-page" style={{ backgroundImage: `url('${meta.background}')` }}>
      <div className="page-overlay">
        <article className="page-content">
          <h1>{meta.title}</h1>
          <p>
            The electromagnetic interaction between a planet's liquid metallic core and
            its overlying mantle can significantly affect the planet's rotational dynamics
            and thermal evolution.
          </p>
          <p>
            This research explores the mechanisms and consequences of electromagnetic
            core-mantle coupling in terrestrial planets and moons.
          </p>
        </article>
      </div>
    </div>
  );
}
