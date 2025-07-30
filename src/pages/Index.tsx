import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { useTheme } from "@/hooks/use-theme";

const Index = () => {
  const { theme } = useTheme();

  return (
    <section 
      className={`flex flex-col items-center justify-center text-center h-screen w-full overflow-hidden bg-cover bg-center transition-all duration-500
        ${theme === "dark" ? "bg-dark-theme" : "bg-light-theme"} px-4 sm:px-8`}
    >
      {/* Hero Section - Fully Centered Text */}
      <motion.div 
        className="flex flex-col items-center justify-center w-full max-w-3xl h-full py-8 sm:py-0 mt-16 sm:mt-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated Heading */}
        <motion.h1 
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground dark:text-white drop-shadow-lg"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }} // ✅ Applied Space Grotesk font
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          HELLO <span className="text-[#009EDB]">SALESFORCE COMMUNITY!</span>
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p 
          className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-foreground dark:text-white drop-shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          I specialize in Salesforce administration and business analysis, optimizing processes, automating workflows, and enhancing CRM strategies. 
          With a data-driven mindset and a passion for efficiency and user adoption, I help teams streamline operations and drive business growth. 
          Always learning, always improving—let's build something great together!
        </motion.p>

        {/* Resume Button */}
        <motion.div 
          className="flex justify-center items-center mb-10 sm:mb-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/about">
              <Button 
                variant="default" 
                size="lg"
                className="font-medium text-base transition-all duration-500 rounded-full dark:bg-black dark:text-white dark:hover:bg-gray-900 
                          bg-[#009EDB] text-white hover:bg-blue-600"
              >
                Resume
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Index;
