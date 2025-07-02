import pages from '../seo-pages.json';
import SeoPage from '../components/SeoPage';

const data = pages.find(p => p.slug === 'tai-chi-richmond-va');

export default function TaiChiRichmondVa() {
  return (
    <SeoPage title={data.title} description={data.description} heading={data.heading}>
      <p>Our temple offers Tai Chi classes to promote balance, health, and mindfulness. Classes are taught by experienced instructors and open to all skill levels.</p>
      <p><a href="/">Back to Home</a></p>
    </SeoPage>
  );
}
