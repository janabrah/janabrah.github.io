import { CobyPage } from '../../components/PageWrappers';
import {
  PageHeader,
  LinkCard,
  CardGrid,
} from '../../components/PageComponents';

export default function PlanetaryScience() {
  return (
    <CobyPage>
      <PageHeader
        title='Planetary Science'
        description='I earned my PhD in Planetary Science from UC Santa Cruz, following an undergraduate degree from Caltech in Physics, Geophysics, and English. My research focused on the interiors and evolution of planetary bodies.'
      />
      <CardGrid className='career-links'>
        <LinkCard
          to='/career/planetary-science/projects'
          title='Projects'
          className='career-link-card'
        />
        <LinkCard
          to='/career/planetary-science/publications'
          title='Publications'
          className='career-link-card'
        />
      </CardGrid>
    </CobyPage>
  );
}
