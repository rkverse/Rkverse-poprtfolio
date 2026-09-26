import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StatusBar from './components/StatusBar'
import AnimatedCursor from './components/AnimatedCursor'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Blogs from './sections/Blogs'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedCursor />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Blogs />
        <Contact />
      </main>
      <Footer />
      <StatusBar />
    </div>
  )
}

export default App
