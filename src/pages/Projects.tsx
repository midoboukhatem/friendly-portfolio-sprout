
import { FileCode } from 'lucide-react';

const Projects = () => {
  return (
    <section className="py-16 bg-white dark:bg-portfolio-navy-deep">
      <div className="section-container">
        <div className="flex flex-col items-center justify-center space-y-6 py-12">
          <FileCode size={64} className="text-portfolio-blue dark:text-portfolio-teal" />
          <p className="text-xl text-center max-w-3xl dark:text-white">
            I'm currently working on some exciting Salesforce projects. Check back soon to see my latest work!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
