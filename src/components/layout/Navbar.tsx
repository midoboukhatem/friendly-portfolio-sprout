
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/use-theme';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-portfolio-navy-deep/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <NavLink to="/" className="flex items-center">
              <span className="text-xl font-bold text-portfolio-blue dark:text-portfolio-teal-light font-heading">Portfolio</span>
            </NavLink>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-portfolio-blue dark:hover:text-portfolio-teal"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-4 items-center">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "nav-link-active dark:text-portfolio-teal-light" : "nav-link dark:text-gray-300"}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? "nav-link-active dark:text-portfolio-teal-light" : "nav-link dark:text-gray-300"}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => isActive ? "nav-link-active dark:text-portfolio-teal-light" : "nav-link dark:text-gray-300"}
            >
              Projects
            </NavLink>
            <NavLink
              to="/certifications"
              className={({ isActive }) => isActive ? "nav-link-active dark:text-portfolio-teal-light" : "nav-link dark:text-gray-300"}
            >
              Certifications
            </NavLink>
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="flex flex-col p-4 pb-6 space-y-4 bg-white dark:bg-portfolio-navy border-t dark:border-gray-800">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "nav-link-active dark:text-portfolio-teal-light" : "nav-link dark:text-gray-300"}
            end
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? "nav-link-active dark:text-portfolio-teal-light" : "nav-link dark:text-gray-300"}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? "nav-link-active dark:text-portfolio-teal-light" : "nav-link dark:text-gray-300"}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/certifications"
            className={({ isActive }) => isActive ? "nav-link-active dark:text-portfolio-teal-light" : "nav-link dark:text-gray-300"}
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
