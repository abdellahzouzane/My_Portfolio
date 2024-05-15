import { XMarkIcon } from '@heroicons/react/20/solid'
import { Link as ScrollLink } from 'react-scroll'

interface Props {
  nav: boolean
  closeNav: () => void
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? 'translate-x-0' : 'translate-x-[-100%]'

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center text-white font-bold gap-8 text-2xl">
        <ScrollLink to="home" smooth={true} duration={500} onClick={closeNav}>
          ACCUEIL
        </ScrollLink>
        <ScrollLink to="a-propos-de-moi" smooth={true} duration={500} onClick={closeNav}>
          À PROPOS DE MOI
        </ScrollLink>
        <ScrollLink to="services" smooth={true} duration={500} onClick={closeNav}>
          SERVICES
        </ScrollLink>
        <ScrollLink to="projets" smooth={true} duration={500} onClick={closeNav}>
          PROJETS
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500} onClick={closeNav}>
          CONTACT
        </ScrollLink>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[10000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-red-400"
      >
        <XMarkIcon />
      </div>
    </div>
  )
}

export default MobileNav
