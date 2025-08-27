import { motion } from "framer-motion";

type SocialButtonsProps = {
  className?: string;
};

const SocialButtons = ({ className }: SocialButtonsProps) => {
  return (
    <motion.div 
      className={`w-full flex justify-center items-center py-6 ${className ?? ''}`}
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
  );
};

export default SocialButtons;
