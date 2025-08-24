import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "certifications", label: "CERTIFICATIONS" },
  { id: "blog", label: "BLOG" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // IntersectionObserver scroll spy
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map(item => item.id);
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let current = 'home';
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            current = entry.target.id;
          }
        });
        setActiveSection(current);
      },
      {
        threshold: [0.3, 0.5, 0.7, 1],
        rootMargin: '-100px 0px -100px 0px',
      }
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        "bg-white/50 dark:bg-black/40 backdrop-blur-md"
      )}
      style={{ WebkitBackdropFilter: 'blur(12px)', backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center relative">
          <button onClick={() => scrollToSection('home')} className="text-2xl font-montserrat text-gray-700 hover:text-gray-800 flex items-center font-black cursor-pointer">
            medbou.
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            {NAV_ITEMS.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-base tracking-wide transition-all duration-300 font-medium cursor-pointer px-3 py-1 rounded-md",
                  activeSection === item.id
                    ? "text-black font-bold"
                    : "text-gray-700 hover:text-gray-800"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Menu Button on Right */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <button
                className="text-gray-700 hover:text-gray-800 transition-colors duration-300"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <Menu className="h-6 w-6 stroke-[3]" />
              </button>
              {isDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 z-50 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <button
                        onClick={() => scrollToSection('blog')}
                        className={cn(
                          "block w-full text-left px-4 py-2 text-sm font-medium cursor-pointer rounded-md",
                          activeSection === 'blog'
                            ? "text-black font-bold"
                            : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                        )}
                      >
                        BLOG
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

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
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "block w-full text-left py-2 text-base tracking-wide transition-all duration-300 font-medium cursor-pointer rounded-md",
                  activeSection === item.id
                    ? "text-black font-bold"
                    : "text-gray-700 hover:text-gray-800"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
