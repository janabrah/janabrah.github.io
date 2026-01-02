import { CobyPage } from '../components/PageWrappers';
import HoverCard from '../components/HoverCard';

export default function Home() {
  return (
    <CobyPage className='home-page'>
      <div className='about-section'>
        <img
          src='/images/website-headshot.jpg'
          alt='Jacob Abrahams'
          className='headshot'
        />
        <div className='about-text'>
          <h1>About Me</h1>
          <p>
            Hi! I'm Jacob Abrahams (everyone calls me Coby), a software engineer
            and former planetary scientist. I work trying to solve hard problems
            at ambitious startups. In a previous life I got a PhD from UC Santa
            Cruz and an undergraduate degree from Caltech in Physics and
            Geophysics.
          </p>
          <p>
            At Meter I work on "operations engineering". I'm a software engineer
            embedded in the ops team, working to help operators scale their
            impact as we grow. I own our inventory app,{' '}
            <HoverCard projectId='trident'>Trident</HoverCard>, I'm building an
            in-house{' '}
            <HoverCard projectId='project-management'>
              project management tool
            </HoverCard>{' '}
            to track network installs and replace our old dispersed spreadsheet
            tracking method, I built a{' '}
            <HoverCard projectId='network-diagnostics'>
              network health diagnostic tool
            </HoverCard>{' '}
            which has become the front door to assessing network health for
            several teams, and I help contribute to make our{' '}
            <HoverCard projectId='dashboard'>networking dashboard</HoverCard>{' '}
            more powerful.
          </p>
          <p>
            Prior to Meter, I worked at Forward, where we tried to build "The
            world's best healthcare, for billions of people, for free" (a
            moonshot that didn't work out, but I'm glad we tried it). I started
            in the operations team there, owning{' '}
            <HoverCard projectId='scheduling'>scheduling</HoverCard> and{' '}
            <HoverCard projectId='onboarding'>onboarding</HoverCard> for our
            remote fleet of healthcare workers. Then I moved over to be a
            software engineer where I continued building scalable tools for
            operations, including our{' '}
            <HoverCard projectId='allocations'>scheduling tool</HoverCard> and
            our{' '}
            <HoverCard projectId='forward-inventory'>inventory app</HoverCard>,
            as well as contributing to our{' '}
            <HoverCard projectId='infrastructure'>
              software infrastructure
            </HoverCard>{' '}
            and <HoverCard projectId='it-systems'>IT systems</HoverCard>.
          </p>
          <p>
            As a scientist, my research has focused on various aspects of
            planetary science, including{' '}
            <HoverCard projectId='europa-shape'>
              Europa's global shape
            </HoverCard>
            ,{' '}
            <HoverCard projectId='lunar-dynamo'>
              lunar dynamo mechanisms
            </HoverCard>
            , <HoverCard projectId='ferrovolcanism'>ferrovolcanism</HoverCard>,{' '}
            <HoverCard projectId='planetary-rotation'>
              planetary rotation
            </HoverCard>
            , and{' '}
            <HoverCard projectId='em-coupling'>
              electromagnetic core-mantle coupling
            </HoverCard>
            .
          </p>
        </div>
      </div>
    </CobyPage>
  );
}
