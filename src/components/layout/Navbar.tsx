
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <NavLink to="/" className="flex items-center">
              <span className="text-xl font-bold text-portfolio-blue font-heading">Portfolio</span>
            </NavLink>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-portfolio-blue"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
            >
              Projects
            </NavLink>
            <NavLink
              to="/certifications"
              className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
            >
              Certifications
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="flex flex-col p-4 pb-6 space-y-4 bg-white border-t">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
            end
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/certifications"
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
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
