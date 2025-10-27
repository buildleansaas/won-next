import sanity from '../lib/sanity'
import { getSchedule } from '../api/schedule'
import { getVideos } from '../api/video'
import { getEvents } from '../api/events'
import HomePage from '../components/home/HomePage'

export const dynamic = 'force-static'

export const metadata = {
  title: 'Home',
}

export default async function Page() {
  const [events, schedule, videos] = await Promise.all([
    sanity.fetch(getEvents),
    sanity.fetch(getSchedule),
    sanity.fetch(getVideos),
  ])

  return <HomePage events={events} schedule={schedule} videos={videos} />
}
