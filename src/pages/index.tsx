import { Inter } from 'next/font/google'
import LandingPage from './hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <LandingPage />
    </main>
  )
}
