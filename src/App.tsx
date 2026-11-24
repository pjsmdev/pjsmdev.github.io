import Header from './components/layout/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Footer from './components/layout/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
      </main>

      <Footer />
    </>
  )
}

export default App