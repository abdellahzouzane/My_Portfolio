import { UserCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'



const Projects = () => {
    

  return (
    <div id="projets" className="pt-[4rem] md:pt-[8rem] pb-[4rem] scroll-container bg-[#02050a]">
      <h1 className="heading">
        Mes <span className="text-yellow-400">projets</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
        <div data-aos="fade-up">
          <div className="w-[100%] relative h-[270px]">
            <Image src="/images/hyrulecastle.jpg" alt="blog" layout="fill" className="object-cover" />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              HyruleCastle
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">En collaboration avec 1 autre personne</p>
              </div>
            </div>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">-Septembre 29, 2023</ul>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">
              -Jeu de combat entre un héro et des monstres sur Back-end
            </ul>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">-Téchnologies: TypeScript</ul>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <div className="w-[100%] relative h-[270px]">
            <Image src="/images/morpion1.jpeg" alt="blog" layout="fill" className="object-cover" />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              Morpion
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">Par moi</p>
              </div>
            </div>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">-Novenbre 25, 2023</ul>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">
              -Jeu contre un robot ou il faut aligner soit 3 croix ou 3 cercles
            </ul>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">-Téchnologies: Python</ul>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
          <div className="w-[100%] relative h-[270px]">
            <Image src="/images/quiz1.jpg" alt="blog" layout="fill" className="object-cover" />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              Quiz
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">En collaboration avec 2 autres personnes</p>
              </div>
            </div>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">-Janvier 09, 2024</ul>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">
              -Quiz pour améliorer son niveau d'anglais
            </ul>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">
              -Téchnologies: Next.js, TypeScript et css
            </ul>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="900">
          <div className="w-[100%] relative h-[270px]">
            <Image src="/images/commerce.jpg" alt="blog" layout="fill" className="object-cover" />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              Site e-commerce
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">En collaboration avec 3 autres personnes </p>
              </div>
            </div>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">-En cours</ul>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">
              -Site permettant d'acheter et de vendre des biens ou des services
            </ul>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">
              -Téchnologies: Next.js, TypeScript et css
            </ul>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="1200">
          <div className="w-[100%] relative h-[270px]">
            <Image src="/images/machine.jpg" alt="blog" layout="fill" className="object-cover" />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              Machine à sous
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">Par moi</p>
              </div>
            </div>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">-Octobre 20, 2023</ul>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">
              -Jeu ou les joueurs doivent aligner des symboles pour gagner de l'argent
            </ul>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">
              -Téchnologies: Next.js, TypeScript et css
            </ul>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="1500">
          <div className="w-[100%] relative h-[270px]">
            <Image src="/images/world.png" alt="blog" layout="fill" className="object-cover" />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              World view
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">Par moi</p>
              </div>
            </div>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">-Janvier 05, 2024</ul>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">
              -Site ou je présente tous les drapeaux du monde avec une bare de recherche
            </ul>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">
              -Téchnologies: Next.js, TypeScript et css
            </ul>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="1200">
          <div className="w-[100%] relative h-[270px]">
            <Image src="/images/thecryptoapp_main.png" alt="blog" layout="fill" className="object-cover" />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              Coinapi_crypto
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">Par moi</p>
              </div>
            </div>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">-Mai 05, 2024</ul>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">
              -Api qui permet d'alerter les utilisateurs sur le cours de la crypto qu'ils ont choisi grâce à coinapi.io
            </ul>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">-Téchnologies: Flask et Python</ul>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="1200">
          <div className="w-[100%] relative h-[270px]">
            <Image src="/images/freegg.jpg" alt="blog" layout="fill" className="object-cover" />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              FreeGG
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white">Par moi</p>
              </div>
            </div>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">-Avril 20, 2024</ul>
            <ul className="text-white text-left mt-[5px] text-[12px] font-semibold">
              -Application mobile qui permet de répertorier tous les jeux gratuits, l'utilisateur peut choisir un jeu en
              fonction de la catégorie ou de la plateforme qu'il souhaite grâce à l'api free-to-game
            </ul>
            <ul className="text-white text-left mt-[5px] text-[15px] font-semibold">
              -Téchnologies: React-Native, typescript et CSS
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projects
