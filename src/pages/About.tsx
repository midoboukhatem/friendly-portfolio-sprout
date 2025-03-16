
import TimelineSection from '../components/about/TimelineSection';
import AboutIntro from '../components/about/AboutIntro';

const About = () => {
  return (
    <>
      <section className="bg-portfolio-navy dark:bg-portfolio-navy-deep py-12">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">About Me</h1>
        </div>
      </section>
      
      <section className="py-12 bg-white dark:bg-portfolio-navy">
        <div className="section-container">
          <AboutIntro />
        </div>
      </section>
      
      <TimelineSection />
      
      <section className="py-16 bg-portfolio-gray-light dark:bg-portfolio-navy-deep">
        <div className="section-container">
          <h2 className="section-title dark:text-white">My Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-portfolio-navy p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-portfolio-blue dark:text-portfolio-teal-light">Problem Solver</h3>
              <p className="text-gray-700 dark:text-gray-200">I approach challenges with creativity and determination, finding efficient solutions to complex problems.</p>
            </div>
            <div className="bg-white dark:bg-portfolio-navy p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-portfolio-blue dark:text-portfolio-teal-light">Continuous Learner</h3>
              <p className="text-gray-700 dark:text-gray-200">I'm passionate about staying current with emerging technologies and industry best practices.</p>
            </div>
            <div className="bg-white dark:bg-portfolio-navy p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-portfolio-blue dark:text-portfolio-teal-light">Team Player</h3>
              <p className="text-gray-700 dark:text-gray-200">I thrive in collaborative environments, valuing clear communication and diverse perspectives.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
