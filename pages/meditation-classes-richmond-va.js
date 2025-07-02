import pages from '../seo-pages.json';
import SeoPage from '../components/SeoPage';

const data = pages.find(p => p.slug === 'meditation-classes-richmond-va');

export default function MeditationClassesRichmondVa() {
  return (
    <SeoPage title={data.title} description={data.description} heading={data.heading}>
      <p>We hold regular meditation classes open to beginners and experienced practitioners alike. Classes include guided meditation and discussion of Buddhist teachings.</p>
      <p>Check our schedule or contact us for the latest times.</p>
      <p><a href="/">Back to Home</a></p>
    </SeoPage>
  );
}
