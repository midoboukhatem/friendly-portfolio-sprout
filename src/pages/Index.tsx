
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <section className="relative bg-gradient-to-br from-portfolio-blue-light to-portfolio-blue dark:from-portfolio-navy dark:to-portfolio-navy-deep min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Hero Section with centered content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="section-container text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-white">
            HELLO <span className="text-portfolio-teal-light">SALESFORCE COMMUNITY!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 text-white">
            I specialize in Salesforce administration and business analysis, optimizing processes, automating workflows, and enhancing CRM strategies. With a data-driven mindset and a passion for efficiency and user adoption, I help teams streamline operations and drive business growth. Always learning, always improving—let's build something great together!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/about" className="bg-white text-portfolio-blue px-6 py-3 rounded-md font-medium inline-flex items-center group dark:bg-portfolio-teal-light dark:text-portfolio-navy">
              Resume <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
            </Link>
            <Link to="/projects" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
              Cover Letter
            </Link>
          </div>
        </div>
      </div>
      
      {/* Centered Footer Links */}
      <div className="py-8">
        <div className="flex justify-center space-x-8">
          <a href="#" className="group flex flex-col items-center text-white hover:text-portfolio-teal-light transition-colors">
            <div className="bg-white/20 dark:bg-white/10 p-3 rounded-full mb-1 group-hover:bg-white/30 transition-colors">
              <div className="h-6 w-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
            </div>
            <span className="text-xs">LinkedIn</span>
          </a>
          <a href="#" className="group flex flex-col items-center text-white hover:text-portfolio-teal-light transition-colors">
            <div className="bg-white/20 dark:bg-white/10 p-3 rounded-full mb-1 group-hover:bg-white/30 transition-colors">
              <div className="h-6 w-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
            </div>
            <span className="text-xs">Trailhead</span>
          </a>
          <a href="mailto:your-email@example.com" className="group flex flex-col items-center text-white hover:text-portfolio-teal-light transition-colors">
            <div className="bg-white/20 dark:bg-white/10 p-3 rounded-full mb-1 group-hover:bg-white/30 transition-colors">
              <div className="h-6 w-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
            </div>
            <span className="text-xs">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Index;
