
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../hooks/use-theme';
import { Switch } from '../ui/switch';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <NavLink to="/" className="flex items-center">
              <span className="text-xl font-bold text-white dark:text-white font-heading drop-shadow-md">Portfolio</span>
            </NavLink>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-portfolio-teal-light data-[state=unchecked]:bg-portfolio-blue"
              />
              <span className="text-xs text-white drop-shadow-md">
                {theme === 'dark' ? 'Dark' : 'Light'}
              </span>
            </div>
            
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white drop-shadow-md hover:text-portfolio-teal-light"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-4 items-center">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "nav-link-active text-white drop-shadow-md" : "nav-link text-white/80 drop-shadow-md hover:text-white"}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? "nav-link-active text-white drop-shadow-md" : "nav-link text-white/80 drop-shadow-md hover:text-white"}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => isActive ? "nav-link-active text-white drop-shadow-md" : "nav-link text-white/80 drop-shadow-md hover:text-white"}
            >
              Projects
            </NavLink>
            <NavLink
              to="/certifications"
              className={({ isActive }) => isActive ? "nav-link-active text-white drop-shadow-md" : "nav-link text-white/80 drop-shadow-md hover:text-white"}
            >
              Certifications
            </NavLink>
            
            <div className="flex items-center space-x-2 ml-4">
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-portfolio-teal-light data-[state=unchecked]:bg-portfolio-blue"
              />
              <span className="text-xs text-white drop-shadow-md">
                {theme === 'dark' ? 'Dark' : 'Light'}
              </span>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="flex flex-col p-4 pb-6 space-y-4 bg-white/90 dark:bg-portfolio-navy/90 backdrop-blur-md">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "nav-link-active text-portfolio-blue dark:text-portfolio-teal-light" : "nav-link text-gray-700 dark:text-gray-300"}
            end
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? "nav-link-active text-portfolio-blue dark:text-portfolio-teal-light" : "nav-link text-gray-700 dark:text-gray-300"}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? "nav-link-active text-portfolio-blue dark:text-portfolio-teal-light" : "nav-link text-gray-700 dark:text-gray-300"}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/certifications"
            className={({ isActive }) => isActive ? "nav-link-active text-portfolio-blue dark:text-portfolio-teal-light" : "nav-link text-gray-700 dark:text-gray-300"}
            onClick={() => setIsMenuOpen(false)}
          >
            Certifications
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
