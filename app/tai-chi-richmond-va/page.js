import SeoPage from '../../components/SeoPage'
import Link from 'next/link'
import pages from '../../seo-pages.json'

const data = pages.find(p => p.slug === 'tai-chi-richmond-va')

export const metadata = {
  title: data?.title,
  description: data?.description,
}

export default function TaiChiRichmondVa() {
  return (
    <SeoPage title={data.title} description={data.description} heading={data.heading}>
      <p>Our temple offers Tai Chi classes to promote balance, health, and mindfulness. Classes are taught by experienced instructors and open to all skill levels.</p>
      <p><Link href="/">Back to Home</Link></p>
    </SeoPage>
  )
}
