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
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);


const App = () => {
  useGSAP(()=>{
    const elements=gsap.utils.toArray(".reveal-up")
    elements.forEach((element)=>{
      gsap.to(element,{
        scrollTrigger:{
          trigger:element,
          scrub:true,
          start:"-200 bottom",
          end:"bottom 80%",
          // markers:true
        },
        y:0,
        opacity:1,
        duration:1,
        ease:"power2.inOut"
      })
    })
  })
  return (
        <ReactLenis root>

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        {/* <Reviews /> */}
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default App