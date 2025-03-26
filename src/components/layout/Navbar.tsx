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
          <NavLink to="/" className="text-xl font-bold font-heading transition-all duration-300 text-[#009EDB] dark:text-white">
            Portfolio
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
            
            {/* Beautiful Dark Mode Toggle */}
            <button
              onClick={handleThemeToggle}
              className="relative w-14 h-8 flex items-center rounded-full p-1 bg-gray-300 dark:bg-gray-900 transition-all duration-300"
              aria-label="Toggle theme"
            >
              <div className={cn(
                "w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300 transform",
                theme === "dark" 
                  ? "translate-x-6 bg-teal-300 text-gray-900"
                  : "translate-x-0 bg-white text-gray-700"
              )}>
                {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
              </div>
            </button>

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
