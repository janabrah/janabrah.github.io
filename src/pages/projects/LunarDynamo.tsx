import { LUNAR_DYNAMO as meta } from './metas';

export default function LunarDynamo() {
  return (
    <div className="page project-page" style={{ backgroundImage: `url('${meta.background}')` }}>
      <div className="page-overlay">
        <article className="page-content">
          <h1>{meta.title}</h1>
          <p>
            The Moon once had a magnetic field, as evidenced by magnetized rocks returned
            by the Apollo missions. Understanding how this ancient dynamo operated provides
            insights into the thermal and chemical evolution of the lunar interior.
          </p>
          <p>
            My research investigates the mechanisms that could have powered and sustained
            the lunar dynamo over billions of years of lunar history.
          </p>
        </article>
      </div>
    </div>
  );
}
