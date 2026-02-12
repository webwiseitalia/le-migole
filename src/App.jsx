import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Venue from './components/Venue'
import Menu from './components/Menu'
import Reservations from './components/Reservations'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
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
