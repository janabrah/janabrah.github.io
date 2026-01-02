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
                Welcome to my personal website! I'm Jacob Abrahams, a planetary
                scientist with a PhD from UC Santa Cruz and an undergraduate
                degree from Caltech in Physics and Geophysics.
              </p>
              <p>
                My research has focused on various aspects of planetary science,
                including{' '}
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
              <p>
                I'm currently working in healthcare operations and software
                development, bringing my analytical skills from scientific
                research to new challenges.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
