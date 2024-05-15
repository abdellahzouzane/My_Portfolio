import { DevicePhoneMobileIcon, EnvelopeIcon} from "@heroicons/react/20/solid"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
      <div id="contact">
        <div className="pt-[5rem] pb-[4rem] bg-[#0f0e0e]">
          <h1 className="heading">
            CONT<span className="text-yellow-400">ACT</span>
          </h1>
          <div className="grid border-p-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
            <div className="flex items-center space-x-6">
              <div className="md:w-[6.5rem] md;h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black"
                />
              </div>
              <div>
                <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">Linkedin</h1>
                <p className="text-[17px] w-[90%] text-white opacity-60">
                  <a href="https://www.linkedin.com/in/abdellah-zouzane-479528226/">Abdellah Zouzane</a>
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="md:w-[6.5rem] md;h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
                <DevicePhoneMobileIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
              </div>
              <div>
                <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">Téléphone</h1>
                <p className="text-[17px] w-[90%] text-white opacity-60">
                  <a href="tel:+33665771825">+33 06 65 77 18 25</a>
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="md:w-[6.5rem] md;h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
                <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
              </div>
              <div>
                <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">E-mail</h1>
                <p className="text-[17px] w-[90%] text-white opacity-60">
                  <a href="mailto:Abdellahzouzane@gmail.com">Abdellahzouzane@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="md:w-[6.5rem] md;h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
                <FontAwesomeIcon icon={faGithub} className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
              </div>
              <div>
                <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">GitHub</h1>
                <p className="text-[17px] w-[90%] text-white opacity-60">
                  <a href="https://www.github.com/abdellahzouzane/">Abdellah Zouzane</a>
                </p>
              </div>
            </div>
          </div>
          <div className="w-[80%] mt-[1.5rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between border-t border-white">
            <div className="text-[16px] mb-[2rem] md:mb-0 text-white opacity-20">
              © {new Date().getFullYear()} ABDEL.DEV All rights reserved.
            </div>
            <div className="flex items-center space-x-10">
              <p className="text-[16px] text-white opacity-20">Terms & Condition</p>
              <p className="text-[16px] text-white opacity-20">Privacy Policy</p>
              <p className="text-[16px] text-white opacity-20">Sitemap</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default  Footer