import { CobyPage } from '../../components/PageWrappers';
import { EUROPA_SHAPE } from './metas';

export default function EuropaShape() {
  return (
    <CobyPage className='project-page' background={EUROPA_SHAPE.background}>
      <h1>{EUROPA_SHAPE.title}</h1>
      <p>
        I am a member of the UV Spectrograph (UVS) team on the Europa Clipper
        Mission, and I am exploring how UVS can serve to improve Europa
        Clipper's ability to determine Europa's long wavelength shape.
      </p>
      <p>
        In order to search for plumes and a potential (tenuous) atmosphere
        around Europa, UVS is planning to observe stars passing behind Europa.
        Conveniently, in addition to measuring the spectrum of the starlight as
        it encounters Europa, UVS will end up very precisely measuring{' '}
        <strong>when</strong> the star disappeared behind Europa, and when it
        reappeared.
      </p>
      <p>
        My work has been to show that these precisely timed occultations can
        serve as high quality altimetry (at a single point), and have a lot of
        value for improving Europa Clipper's determination of Europa's global
        shape.
      </p>
    </CobyPage>
  );
}
