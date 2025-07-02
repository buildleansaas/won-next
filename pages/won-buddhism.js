import pages from '../seo-pages.json';
import SeoPage from '../components/SeoPage';

const data = pages.find(p => p.slug === 'won-buddhism');

export default function WonBuddhismPage() {
  return (
    <SeoPage title={data.title} description={data.description} heading={data.heading}>
      <p>Won Buddhism is a modern Buddhist movement from Korea that emphasizes using our mind well in everyday life. At Won Buddhism of Richmond we study and practice these teachings together.</p>
      <p>Come explore Won Buddhism with us through meditation, Dharma talks, and community programs.</p>
      <p><a href="/">Back to Home</a></p>
    </SeoPage>
  );
}
