import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center h-screen w-full overflow-hidden">
      {/* Hero Section - Fully Centered Text */}
      <div className="flex flex-col items-center justify-center w-full max-w-3xl h-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground dark:text-white drop-shadow-lg">
          HELLO <span className="text-[#009EDB]">SALESFORCE COMMUNITY!</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-foreground dark:text-white drop-shadow-md">
          I specialize in Salesforce administration and business analysis, optimizing processes, automating workflows, and enhancing CRM strategies. 
          With a data-driven mindset and a passion for efficiency and user adoption, I help teams streamline operations and drive business growth. 
          Always learning, always improving—let's build something great together!
        </p>

        {/* Resume & Cover Letter Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/about">
              <Button 
                variant="default" 
                size="lg"
                className="group font-medium text-base transition-all duration-500 rounded-md dark:bg-black dark:text-white dark:hover:bg-gray-900 
                          bg-[#009EDB] text-white hover:bg-blue-600 flex items-center gap-2"
              >
                <Sparkles className="transition-all duration-300 group-hover:rotate-12" size={18} />
                Resume
                <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" size={18} />
              </Button>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/projects">
              <Button 
                variant="default" 
                size="lg"
                className="group font-medium text-base transition-all duration-500 rounded-md dark:bg-black dark:text-white dark:hover:bg-gray-900 
                          bg-[#009EDB] text-white hover:bg-blue-600 flex items-center gap-2"
              >
                <FileText className="transition-all duration-300 group-hover:scale-110" size={18} />
                Cover Letter
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer Links (Persistent Across Pages) */}
      <footer className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-6">
        <a href="#" className="flex flex-col items-center text-foreground hover:text-[#009EDB] transition">
          <div className="bg-white/80 p-3 rounded-full mb-1 shadow-md hover:bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </div>
          <span className="text-xs font-medium">LinkedIn</span>
        </a>
        <a href="#" className="flex flex-col items-center text-foreground hover:text-[#009EDB] transition">
          <div className="bg-white/80 p-3 rounded-full mb-1 shadow-md hover:bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </div>
          <span className="text-xs font-medium">Trailhead</span>
        </a>
        <a href="mailto:your-email@example.com" className="flex flex-col items-center text-foreground hover:text-[#009EDB] transition">
          <div className="bg-white/80 p-3 rounded-full mb-1 shadow-md hover:bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1 0-2-.9-2-2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <span className="text-xs font-medium">Email</span>
        </a>
      </footer>
    </section>
  );
};

export default Index;
