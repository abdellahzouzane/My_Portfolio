import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'

const Hero = () => {
  const imageurl = 'https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171867_X85WpWCcMzNsoMWtMxiZQspKzaOwCyuK.jpg'
  return (
    <div
      id="home"
      className="h-[88vh] bg-image[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center scroll-container bg-black"
    >
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[15px] h-[%] items-center">
        <h1 className="text-[35px] md:text-[50px] text-white font-bold mt-[55px]">
          BONJOUR, JE SUIS <span className="text-yellow-400">ABDELLAH !</span>
        </h1>
        <div className="mt-7">
          <TextEffect />
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[400px]">
          <Image src="/images/oui.jpg" alt="user" layout="fill" className="object-cover rounded-full" />
        </div>
        <div>
          <h2 className="mt-[1.5rem] text-[20px] text-[#ffffff92] ">
            Je suis un passionné du développement web avec de la créativité et une forte passion pour la création
            d'expériences utilisateur exceptionnelles. Actuellement à la recherche d'une alternance dans le domaine du
            développement web, je suis motivé, autonome et prêt à relever de nouveaux défis.
          </h2>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] flex items-center space-x-2 rounded-[20px]">
              <a href="/développeur web.pdf">
                <p>Télécharger CV</p>
              </a>

              <ArrowDownTrayIcon className="w-[1.7rem]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
