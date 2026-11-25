import Header from './components/layout/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import TechSkills from './sections/TechSkills'
import Footer from './components/layout/Footer'
import './App.css'
import Projects from './sections/Projects'
import Writeups from './sections/Writeups'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <TechSkills />
        <Projects />
        <Writeups />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App