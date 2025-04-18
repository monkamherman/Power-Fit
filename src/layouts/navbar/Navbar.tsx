import { FaBars } from "react-icons/fa"; 
import { FaTimesCircle } from "react-icons/fa"; 
import { BiDumbbell } from "react-icons/bi"; 
// components/Navbar.js
import React,{useState} from 'react';
import ThemeToggle from './ModeToggle';

interface IThemeToggle {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

const Navbar: React.FC<IThemeToggle> = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <i className=" text-2xl text-red-600 mr-2">
                <BiDumbbell />
              </i>
              <span className="text-xl font-bold text-gray-900 dark:text-white">PowerFit</span>
            </div>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <a href="#" className="text-gray-900 dark:text-gray-300 hover:text-red-600 px-3 py-2 font-medium">Accueil</a>
            <a href="#programmes" className="text-gray-900 dark:text-gray-300 hover:text-red-600 px-3 py-2 font-medium">Programmes</a>
            <a href="#coachs" className="text-gray-900 dark:text-gray-300 hover:text-red-600 px-3 py-2 font-medium">Nos coachs</a>
            <a href="#contact" className="text-gray-900 dark:text-gray-300 hover:text-red-600 px-3 py-2 font-medium">Contact</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition duration-300">
              S'inscrire
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-500 dark:text-gray-300 hover:text-red-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={` ${mobileMenuOpen ? <FaTimesCircle /> : <FaBars />} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-gray-900 dark:text-gray-300 hover:text-red-600 block px-3 py-2 font-medium">Accueil</a>
          <a href="#programmes" className="text-gray-900 dark:text-gray-300 hover:text-red-600 block px-3 py-2 font-medium">Programmes</a>
          <a href="#coachs" className="text-gray-900 dark:text-gray-300 hover:text-red-600 block px-3 py-2 font-medium">Nos coachs</a>
          <a href="#contact" className="text-gray-900 dark:text-gray-300 hover:text-red-600 block px-3 py-2 font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;