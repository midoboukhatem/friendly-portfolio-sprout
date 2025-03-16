
import TimelineSection from '../components/about/TimelineSection';
import AboutIntro from '../components/about/AboutIntro';

const About = () => {
  return (
    <>
      <section className="bg-portfolio-navy py-12">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">About Me</h1>
        </div>
      </section>
      
      <AboutIntro />
      
      <TimelineSection />
      
      <section className="py-16 bg-portfolio-gray-light">
        <div className="section-container">
          <h2 className="section-title">My Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-portfolio-blue">Problem Solver</h3>
              <p className="text-gray-700">I approach challenges with creativity and determination, finding efficient solutions to complex problems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-portfolio-blue">Continuous Learner</h3>
              <p className="text-gray-700">I'm passionate about staying current with emerging technologies and industry best practices.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-portfolio-blue">Team Player</h3>
              <p className="text-gray-700">I thrive in collaborative environments, valuing clear communication and diverse perspectives.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
