import AboutIntro from '../components/about/AboutIntro';
import SocialButtons from '@/components/layout/SocialButtons';

const About = () => {
  return (
    <section id="about" className="about-page min-h-screen py-12 flex flex-col">
      <div className="section-container flex-grow">
        <AboutIntro />
      </div>
      <SocialButtons />
    </section>
  );
};

export default About;
