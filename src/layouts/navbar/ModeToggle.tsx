import { BiMoon } from "react-icons/bi"; 
import { BiSun } from "react-icons/bi"; 
// components/ThemeToggle.js
import React from 'react';

interface IThemeToggle {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

const ThemeToggle: React.FC<IThemeToggle> = ({ darkMode, setDarkMode }) => {
  return (
    <button 
      onClick={() => setDarkMode(!darkMode)}
      className="theme-toggle p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
    >
      <i className={` ${darkMode ? <BiSun /> : <BiMoon />}`}></i>
    </button>
  );
};

export default ThemeToggle;