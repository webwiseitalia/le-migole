import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Venue from './components/Venue'
import Menu from './components/Menu'
import Reservations from './components/Reservations'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Story />
      <Venue />
      <Menu />
      <Reservations />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
