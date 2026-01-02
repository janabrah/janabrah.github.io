import HoverCard from '../components/HoverCard';

export default function Home() {
  return (
    <div
      className='page home-page'
      style={{ backgroundImage: "url('/images/Ferrovolcanism-Art-Crop.jpg')" }}
    >
      <div className='page-overlay'>
        <article className='page-content'>
          <div className='about-section'>
            <img
              src='/images/website-headshot.jpg'
              alt='Jacob Abrahams'
              className='headshot'
            />
            <div className='about-text'>
              <h1>About Me</h1>
              <p>
                Hi! I'm Jacob Abrahams (everyone calls me Coby), a software
                engineer and former planetary scientist. I work trying to solve
                hard problems at ambitious startups. In a previous life I got a
                PhD from UC Santa Cruz and an undergraduate degree from Caltech
                in Physics and Geophysics.
              </p>
              <p>
                At Meter I work on "operations engineering". I'm a software
                engineer embedded in the ops team, working to help operators
                scale their impact as we grow. I own our inventory app, Trident,
                I'm building an in-house project management tool to track
                network installs and replace our old dispersed spreadsheet
                tracking method, I built our primary network health dianostic
                tool to figure out whether networks are working and why they
                aren't, and I help contribute to make our networking dashboard
                more powerful.
              </p>
              <p>
                Prior to Meter, I worked at Forward, where we tried to build
                "The world's best healthcare, for billions of people, for free"
                (a moonshot that didn't work out, but was worth trying for). I
                started in the operations team there, owning scheduling and
                onboarding for our remote fleet of healthcare workers. Then I
                moved over to be a software engineer where I continued building
                scalable tools for operations, as well as contributing to our
                software infrastructure and IT systems.
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
                ,{' '}
                <HoverCard projectId='ferrovolcanism'>ferrovolcanism</HoverCard>
                ,{' '}
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
        </article>
      </div>
    </div>
  );
}
