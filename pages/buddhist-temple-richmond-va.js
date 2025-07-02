import pages from '../seo-pages.json';
import SeoPage from '../components/SeoPage';

const data = pages.find(p => p.slug === 'buddhist-temple-richmond-va');

export default function BuddhistTempleRichmondVa() {
  return (
    <SeoPage title={data.title} description={data.description} heading={data.heading}>
      <p>Won Buddhism of Richmond is a Korean Buddhist temple located in Mechanicsville, just outside Richmond. Our temple offers meditation services, Dharma talks, and community gatherings.</p>
      <p>Everyone is welcome to visit and learn about Buddhism in a friendly environment.</p>
      <p><a href="/">Back to Home</a></p>
    </SeoPage>
  );
}
