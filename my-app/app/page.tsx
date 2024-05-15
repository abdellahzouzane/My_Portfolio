'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import Nav from './Components/Nav'
import { useEffect, useState } from 'react'
import MobileNav from './Components/MobileNav'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Projects from './Components/Projects'
import Footer from './Components/Footer'



import Link from 'next/link'


export default function Home() {

  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(false)
4
  useEffect(() =>{

    
    AOS.init({
      
      disable: false, 
      startEvent: 'DOMContentLoaded', 
      initClassName: 'aos-init', 
      animatedClassName: 'aos-animate', 
      useClassNames: false, 
      disableMutationObserver: false, 
      debounceDelay: 50, 
      throttleDelay: 99, 


      offset: 120, 
      delay: 0, 
      duration: 1000, 
      easing: 'ease', 
      once: true, 
      mirror: false,
      anchorPlacement: 'top-bottom' 
    })
  }, [])

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={closeNav} />
        <Hero />
        <div className="relative z-[30]">
          <About />
          <Services />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  )
}
