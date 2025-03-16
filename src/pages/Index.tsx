
import { ArrowRight, Briefcase, FileCode, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

import HeroImage from '../components/home/HeroImage';
import SkillsSection from '../components/home/SkillsSection';

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-portfolio-blue-light to-portfolio-blue py-16 md:py-24 overflow-hidden">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 text-white mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                Hi, I'm <span className="text-portfolio-teal-light">Your Name</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Salesforce Administrator & Developer specializing in business solutions
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="bg-white text-portfolio-blue px-6 py-3 rounded-md font-medium inline-flex items-center group">
                  Learn More <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                </Link>
                <Link to="/projects" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
                  View Projects
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <HeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/about" className="bg-portfolio-gray-light rounded-lg p-8 text-center card-hover">
              <Briefcase size={48} className="mx-auto mb-4 text-portfolio-blue" />
              <h3 className="text-xl font-semibold mb-2">About Me</h3>
              <p className="text-gray-600 mb-4">Learn about my professional journey and skills</p>
              <span className="text-portfolio-blue inline-flex items-center">
                View Profile <ArrowRight size={16} className="ml-1" />
              </span>
            </Link>
            <Link to="/projects" className="bg-portfolio-gray-light rounded-lg p-8 text-center card-hover">
              <FileCode size={48} className="mx-auto mb-4 text-portfolio-blue" />
              <h3 className="text-xl font-semibold mb-2">Projects</h3>
              <p className="text-gray-600 mb-4">Discover my work and achievements</p>
              <span className="text-portfolio-blue inline-flex items-center">
                Browse Projects <ArrowRight size={16} className="ml-1" />
              </span>
            </Link>
            <Link to="/certifications" className="bg-portfolio-gray-light rounded-lg p-8 text-center card-hover">
              <Award size={48} className="mx-auto mb-4 text-portfolio-blue" />
              <h3 className="text-xl font-semibold mb-2">Certifications</h3>
              <p className="text-gray-600 mb-4">View my professional certifications</p>
              <span className="text-portfolio-blue inline-flex items-center">
                See Credentials <ArrowRight size={16} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />
    </>
  );
};

export default Index;
