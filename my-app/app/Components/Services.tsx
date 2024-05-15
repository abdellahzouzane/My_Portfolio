import { CodeBracketIcon } from "@heroicons/react/16/solid"
import { CodeBracketSquareIcon, RocketLaunchIcon } from "@heroicons/react/20/solid"


const Services = () => {

    return (
      <div id="services" className="bg-[#121212] pt-[4rem] scroll-container md:pt-[8rem] pb-[5rem]">
        <p className="heading">
          Mes <span className="text-yellow-400">Services</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
          <div data-aos="fade-right">
            <div className="bg-red-400 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
              <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-white" />
              <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">Front-End</h1>
              <p className="text-[25px] text-[#d3d2d2] font-normal">
                <ul>NEXT.JS</ul>
                <ul>HTML</ul>
                <ul>REACT.JS</ul>
                <ul>CSS</ul>
                <ul>REACT NATIVE</ul>
                <ul>FIGMA</ul>
                <ul>JAVASCRIPT</ul>
              </p>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-delay="300">
            <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
              <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-white" />
              <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">BACK-End</h1>
              <p className="text-[25px] text-[#d3d2d2] font-normal">
                <ul>PYTHON</ul>
                <ul>TYPESCRIPT</ul>
                <ul>MYSQL</ul>
                <ul>LINUX</ul>
                <ul>POSTGRESQL</ul>
                <ul>Git</ul>
                <ul>FLASK</ul>
                <ul>FASTAPI</ul>
              </p>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="500">
            <div className="bg-green-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
              <CodeBracketIcon className="w-[6rem] h-[6rem] mx-auto text-white" />
              <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">QUALITÉS</h1>
              <p className="text-[25px] text-[#d3d2d2] font-normal">
                <ul>AUTONOMIE</ul>
                <ul>CURIOSITÉ</ul>
                <ul>PERSÉVÉRANT</ul>
                <ul>ESPRIT D'ÉQUIPE</ul>
                <ul>GESTION DU STRESS</ul>
                <ul>À l'ÉCOUTE</ul>
                <ul>COMMUNICATION</ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    )



}
export default Services