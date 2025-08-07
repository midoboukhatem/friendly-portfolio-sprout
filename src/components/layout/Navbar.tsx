import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300"
      )}
    >
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center relative">
          <NavLink to="/" className="text-2xl font-bold text-gray-700 hover:text-gray-800 flex items-center">
            medbou.
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            {[
              { to: "/", label: "HOME" },
              { to: "/about", label: "ABOUT" },
              { to: "/projects", label: "PROJECTS" },
              { to: "/certifications", label: "CERTIFICATIONS" }
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => cn(
                  "text-base tracking-wide transition-all duration-300 text-gray-700 hover:text-gray-800",
                  isActive ? "font-bold" : "font-medium"
                )}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-gray-800 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-6">
            {[
              { to: "/", label: "HOME" },
              { to: "/about", label: "ABOUT" },
              { to: "/projects", label: "PROJECTS" },
              { to: "/certifications", label: "CERTIFICATIONS" }
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => cn(
                  "block py-2 text-base tracking-wide transition-all duration-300 text-gray-700 hover:text-gray-800",
                  isActive ? "font-bold" : "font-medium"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
