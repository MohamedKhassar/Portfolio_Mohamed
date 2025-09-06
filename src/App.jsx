import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
// import Reviews from "./components/Reviews"
import Skills from "./components/Skills"
import Work from "./components/Work"
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Analytics } from "@vercel/analytics/react"
import Certificates from "./components/Certificates"
gsap.registerPlugin(ScrollTrigger);


const App = () => {
  return (
    <ReactLenis root>
      <Analytics />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Work />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default App