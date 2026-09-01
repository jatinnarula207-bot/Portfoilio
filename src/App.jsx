import Navbar from './components/Navbar'
import CodeRail from './components/CodeRail'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import DSA from './components/DSA'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-ash-100 font-body">
      <Navbar />
      <CodeRail />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <DSA />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
