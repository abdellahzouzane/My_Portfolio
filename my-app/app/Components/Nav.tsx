import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { Link as ScrollLink } from 'react-scroll'
import MobileNav from './MobileNav' // Importation du composant MobileNav

const Nav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const openNav = () => {
    setIsMobileNavOpen(true)
  }

  const closeNav = () => {
    setIsMobileNavOpen(false)
  }

  return (
    <div>
      {/* Barre de navigation principale */}
      <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
        <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
          <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
            <ScrollLink to="home" smooth duration={500}>
              ABDEL.<span className="text-yellow-300">DEV</span>
            </ScrollLink>
          </h1>
          <div onClick={openNav} className="md:hidden">
            <Bars3Icon className="w-[2rem] h-[2rem] cursor-pointer text-white" />
          </div>
          <div className="nav-link">
            <ScrollLink to="home" smooth={true} duration={500}>
              Accueil
            </ScrollLink>
          </div>
          <div className="nav-link">
            <ScrollLink to="a-propos-de-moi" smooth={true} duration={500}>
              À propos de moi
            </ScrollLink>
          </div>
          <div className="nav-link">
            <ScrollLink to="services" smooth={true} duration={500}>
              Services
            </ScrollLink>
          </div>
          <div className="nav-link">
            <ScrollLink to="projets" smooth={true} duration={500}>
              Projets
            </ScrollLink>
          </div>
          <div className="nav-link">
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </div>
        </div>
      </div>

      {/* Affichage conditionnel du menu mobile */}
      {isMobileNavOpen && <MobileNav nav={isMobileNavOpen} closeNav={closeNav} />}
    </div>
  )
}

export default Nav
