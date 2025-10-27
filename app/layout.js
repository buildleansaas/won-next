import '../styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const metadata = {
  title: {
    default: 'Won Buddhism of Richmond',
    template: '%s | Won Buddhism of Richmond',
  },
  description:
    'Welcome to the Won Buddhist Temple of Richmond where we teach Won-Buddhism and mindful practice for everyday life.',
  icons: {
    icon: '/static/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
