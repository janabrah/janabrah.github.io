import { CobyPage } from '../../components/PageWrappers';
import { LUNAR_DYNAMO } from './metas';

export default function LunarDynamo() {
  return (
    <CobyPage className='project-page' background={LUNAR_DYNAMO.background}>
      <h1>{LUNAR_DYNAMO.title}</h1>
      <p>
        The Moon once had a magnetic field, as evidenced by magnetized rocks
        returned by the Apollo missions. Understanding how this ancient dynamo
        operated provides insights into the thermal and chemical evolution of
        the lunar interior.
      </p>
      <p>
        My research investigates the mechanisms that could have powered and
        sustained the lunar dynamo over billions of years of lunar history.
      </p>
    </CobyPage>
  );
}
