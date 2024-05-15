
import Image from 'next/image'
import SkilsItem from './SkilsItem'

const About = () => {
  
  return (
    <div id="a-propos-de-moi" className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        {' '}
        À propos <span className="text-yellow-400"> de moi</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkilsItem
            title="Baccalauréat"
            year="2020 - 2023"
            lolo="Obtention du Baccalauréat S avec mention assez bien, lycée Gustave Monod à Enghien-les-Bains."
          />
        </div>
        <div>
          <SkilsItem
            title="En cours"
            year="2023 - 2027"
            roro="Actuellement en Année Préparatoire à l'ETNA pour poursuivre vers un Bachelor plus tard."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="450"
          className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[500px] h-[300px] relative right-[-40rem]"
        >
          <Image
            src="/images/imageportfolio.jpg"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[1] w-[30%] h-[%] objectif-contain"
          />
        </div>
      </div>
    </div>
  )

}
export default About
