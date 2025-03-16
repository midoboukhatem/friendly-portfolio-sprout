
import { Heart, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-portfolio-navy dark:bg-portfolio-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="mt-8 md:mt-0">
            <p className="text-center md:text-left text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Salesforce Portfolio. Made with <Heart className="inline h-4 w-4 text-red-500" /> using React & Tailwind.
            </p>
          </div>
          <div className="flex justify-center md:justify-end space-x-6 mt-4 md:mt-0">
            <a href="#" className="group flex flex-col items-center text-gray-300 hover:text-white transition-colors">
              <div className="bg-portfolio-blue/20 dark:bg-portfolio-blue/30 p-3 rounded-full mb-1 group-hover:bg-portfolio-blue/30 dark:group-hover:bg-portfolio-blue/40 transition-colors">
                <Linkedin className="h-6 w-6" />
              </div>
              <span className="text-xs">LinkedIn</span>
            </a>
            <a href="#" className="group flex flex-col items-center text-gray-300 hover:text-white transition-colors">
              <div className="bg-portfolio-teal/20 dark:bg-portfolio-teal/30 p-3 rounded-full mb-1 group-hover:bg-portfolio-teal/30 dark:group-hover:bg-portfolio-teal/40 transition-colors">
                <ExternalLink className="h-6 w-6" />
              </div>
              <span className="text-xs">Trailhead</span>
            </a>
            <a href="mailto:your-email@example.com" className="group flex flex-col items-center text-gray-300 hover:text-white transition-colors">
              <div className="bg-portfolio-blue-light/20 dark:bg-portfolio-blue-light/30 p-3 rounded-full mb-1 group-hover:bg-portfolio-blue-light/30 dark:group-hover:bg-portfolio-blue-light/40 transition-colors">
                <Mail className="h-6 w-6" />
              </div>
              <span className="text-xs">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
