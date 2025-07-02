import pages from '../seo-pages.json';
import SeoPage from '../components/SeoPage';

const data = pages.find(p => p.slug === 'buddhist-temple-near-me');

export default function BuddhistTempleNearMe() {
  return (
    <SeoPage title={data.title} description={data.description} heading={data.heading}>
      <p>If you are searching for a Buddhist temple near you in the Richmond area, our temple offers a peaceful place to learn and practice.</p>
      <p>Visit us for meditation, services, and community events.</p>
      <p><a href="/">Back to Home</a></p>
    </SeoPage>
  );
}
