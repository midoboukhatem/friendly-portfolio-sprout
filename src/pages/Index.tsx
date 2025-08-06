import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { useTheme } from "@/hooks/use-theme";

const Index = () => {
  const { theme } = useTheme();

  return (
    <section 
      className={`relative h-screen w-full overflow-hidden bg-cover bg-center transition-all duration-500
        ${theme === "dark" ? "bg-dark-theme" : "bg-light-theme"}`}
    >
      {/* Hero Section - Fully Centered Text */}
      <motion.div 
        className="absolute top-36 left-24 max-w-xs text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="text-sm leading-relaxed text-gray-700 mb-2">
          I'm a tech-savvy creative passionate about building clean, functional, and user-friendly digital experiences.
        </p>
        <p className="text-sm font-bold text-gray-700">
          Let's turn ideas into reality.
        </p>
      </motion.div>

      {/* Animated Social Icons */}
      <div className="fixed bottom-8 w-full px-8 flex justify-between items-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <ul className="flex space-x-2">
            <li>
              <a 
                href="https://www.linkedin.com/in/mohamedboukhatem/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
              >
                <i className="fa fa-linkedin text-sm"></i>
              </a>
            </li>
            <li>
              <a 
                href="https://www.salesforce.com/trailblazer/medboukhatem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
              >
                <i className="fa fa-cloud text-sm"></i>
              </a>
            </li>
            <li>
              <a 
                href="mailto:midoboukhatem@gmail.com"
                className="w-8 h-8 flex items-center justify-center bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
              >
                <i className="fa fa-envelope text-sm"></i>
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.p 
          className="text-sm font-bold text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Based in France
        </motion.p>
      </div>
    </section>
  );
};

export default Index;
