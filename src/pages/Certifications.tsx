
import { Award } from 'lucide-react';

const Certifications = () => {
  return (
    <>
      <section className="bg-portfolio-navy dark:bg-portfolio-navy-deep py-12">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">My Certifications</h1>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-portfolio-navy-deep">
        <div className="section-container">
          <h2 className="section-title dark:text-white">Professional Credentials</h2>
          <div className="flex flex-col items-center justify-center space-y-6 py-12">
            <Award size={64} className="text-portfolio-blue dark:text-portfolio-teal" />
            <p className="text-xl text-center max-w-3xl dark:text-white">
              I'm currently updating my certification section. Check back soon to see my professional credentials!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;
