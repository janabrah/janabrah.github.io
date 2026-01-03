import { CobyPage } from '../../components/PageWrappers';
import {
  PageHeader,
  LinkCard,
  CardGrid,
} from '../../components/PageComponents';
import { CAREER_ITEMS } from '../../config/career';

export default function Career() {
  return (
    <CobyPage>
      <PageHeader title='Career' />
      <CardGrid className='career-links'>
        {CAREER_ITEMS.map((item) => (
          <LinkCard key={item.id} project={item} className='career-link-card' />
        ))}
      </CardGrid>
    </CobyPage>
  );
}
