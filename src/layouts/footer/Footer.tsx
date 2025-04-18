import React from 'react'
import { Link } from 'react-router-dom'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import FlickeringGrid from "@/components/ui/flickering-grid";
import { TextAnimate } from "@/components/ui/text-animate";
// import { FootersLinks, SocialLink } from '@/core/mocks/footer.mock'

/**
 * Functional component for rendering a footer
 * @parmams
 * @returns JSX element representing the footer
 * */

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <i className="fas fa-dumbbell mr-2 text-red-500"></i> PowerFit
          </h3>
          <p className="text-gray-400">
            La salle de sport premium à Paris depuis 2012. Équipements haut de gamme et coachs experts pour vous accompagner.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Accueil</a></li>
            <li><a href="#programmes" className="text-gray-400 hover:text-white transition duration-300">Programmes</a></li>
            <li><a href="#coachs" className="text-gray-400 hover:text-white transition duration-300">Nos coachs</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Musculation</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Cours collectifs</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Coaching perso</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Espace détente</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4">
            Abonnez-vous pour recevoir nos offres spéciales et conseils fitness.
          </p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Votre email" 
              className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 w-full"
            />
            <button 
              type="submit" 
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-md"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 mb-4 md:mb-0">
          &copy; 2023 PowerFit. Tous droits réservés.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
      <div className="border-t border-t-foreground/40 w-full px-1 py-[3px] space-x-1 font-light text-sm flex justify-center bg-foreground/50">
        <span>Designed and developped by</span>

        <TooltipProvider
          delayDuration={100}
        >
          <Tooltip>
            <TooltipTrigger>
              <Link
                to={'https://www.linkedin.com/in/hermanmoukam/'}
                target='_blank'
                rel="noopener noreferrer"
                className='font-normal text-primary/70 hover:text-primary/70 hover:underline duration-200 text-nowrap'
              >
                Herman Moukam
              </Link>
            </TooltipTrigger>

            <TooltipContent className='px-6 py-2 relative bg-footer border border-footer-foreground text-footer-foreground text-xs'>
              <p className='relative z-30 space-y-3 leading-4'>
                <p className="flex flex-col gap-2">
                  <span className="bg-footer w-fit">
                    <TextAnimate animation="slideLeft" by="character">
                      Hello, I am Herman Moukam,
                    </TextAnimate>
                  </span>
                  <p className="">
                    <span className="bg-footer">
                      I am a passionate <b>full-stack web</b> developer,
                    </span>
                    <br />
                    <span className="bg-footer">
                      specializing in crafting efficient and tailored digital solutions.
                    </span>
                    <br />
                    <span className="bg-footer">
                      An expert in transforming ideas into modern applications,
                    </span>
                    <br />
                    <span className="bg-footer">
                      I combine creativity with technical precision.
                    </span>
                    <br />
                    <span className="bg-footer">
                      Always seeking innovation, I am committed to tackling
                    </span>
                    <br />
                    <span className="bg-footer">
                      digital challenges with professionalism and efficiency.
                    </span>
                  </p>
                </p>

                <p className="flex items-center gap-10">
                  <p className="bg-footer flex flex-col leading-3 w-fit">
                    <span>Do you want to</span>
                    <span>contact me ?</span>
                  </p>

                  {/* Contact Informations */}
                  <div className="leading-4">
                    <p className="bg-footer w-fit">
                      Linkedin:
                      <Link
                        to={'https://www.linkedin.com/in/hermanmoukam/'}
                        target='_blank'
                        className='font-medium text-primary/85 hover:text-primary duration-200 text-nowrap'
                      >
                        <TextAnimate animation="blurIn" className='inline ml-2'>
                          My LinkedIn profile
                        </TextAnimate>
                      </Link>
                    </p>

                    <p className="bg-footer w-fit">
                      Whatsapp:
                      <Link
                        to={'https://wa.me/237658852731?text=bonjour%20Herman%20Moukam'}
                        target='_blank'
                        rel="noopener noreferrer"
                        className='font-medium text-primary/85 hover:text-primary duration-200 text-nowrap'
                      >
                        <TextAnimate animation="blurIn" by="character" className='inline ml-2'>
                          +237 658 852 731
                        </TextAnimate>
                      </Link>
                    </p>
                  </div>
                </p>
              </p>

              <FlickeringGrid
                className="z-0 absolute inset-0 size-full"
                squareSize={4}
                gridGap={6}
                color="#2f22f2"
                maxOpacity={0.3}
                flickerChance={0.8}
                height={800}
                width={800}
              />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </footer>
  )
}

export default Footer
