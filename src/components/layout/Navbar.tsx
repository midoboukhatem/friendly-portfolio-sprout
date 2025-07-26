import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Briefcase, Award } from 'lucide-react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-md bg-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
        <NavLink to="/" className="flex items-center">
  <img 
    src="/logo5.png" 
    alt="Logo" 
    className="h-10 w-auto transition-all duration-300"
  />
</NavLink>

          <nav className="hidden md:flex items-center space-x-6">
            {[
              { to: "/", label: "Home", icon: <Home size={18} /> },
              { to: "/about", label: "About", icon: <User size={18} /> },
              { to: "/projects", label: "Projects", icon: <Briefcase size={18} /> },
              { to: "/certifications", label: "Certifications", icon: <Award size={18} /> }
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => cn(
                  "flex items-center px-4 py-2 text-sm rounded-md transition-colors duration-300 gap-2",
                  isActive ? "text-[#009EDB] font-medium" : "text-gray-800 hover:text-[#009EDB]"
                )}
              >
                {item.icon} <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
