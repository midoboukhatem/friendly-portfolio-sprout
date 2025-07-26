import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Briefcase, Award, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/use-theme';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      document.documentElement.setAttribute('data-theme', storedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const handleThemeToggle = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggleTheme();
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-md",
        theme === "dark" ? "bg-black" : "bg-white"
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
              { to: "/", label: "Home", icon: <Home size={18} />, color: "text-[#009EDB]" },
              { to: "/about", label: "About", icon: <User size={18} />, color: "text-gray-800 dark:text-white" },
              { to: "/projects", label: "Projects", icon: <Briefcase size={18} />, color: "text-gray-800 dark:text-white" },
              { to: "/certifications", label: "Certifications", icon: <Award size={18} />, color: "text-gray-800 dark:text-white" }
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => cn(
                  "flex items-center px-4 py-2 text-sm rounded-md transition-colors duration-300 gap-2",
                  isActive ? `${item.color} font-medium` : `${item.color} hover:text-[#009EDB]`
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
