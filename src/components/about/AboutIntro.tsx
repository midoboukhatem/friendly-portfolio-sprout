import SocialButtons from '@/components/layout/SocialButtons';
import { useState } from 'react';

const AboutIntro = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [valuesOpen, setValuesOpen] = useState(false);
  const [outsideOpen, setOutsideOpen] = useState(false);

  const toggleOnMobileOnly = (toggleFn: (v: boolean) => void) => {
    if (typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches) {
      return;
    }
    toggleFn(true);
  };

  return (
    <div className="p-8 rounded-lg shadow-sm flex flex-col items-center">
      <div className="max-w-4xl mt-6 md:flex md:gap-6 md:items-stretch">
        {/* About Me */}
        <div
          className="bg-[#e6ba38] dark:bg-[#e6ba38] text-black border border-gray-200 dark:border-gray-300 rounded-xl p-4 mb-6 md:mb-0 min-h-[10rem] md:flex-1 cursor-pointer transition-all group relative"
          role="button"
          aria-expanded={aboutOpen}
          tabIndex={0}
          onClick={() => toggleOnMobileOnly(setAboutOpen)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleOnMobileOnly(setAboutOpen);
            }
          }}
        >
          {/* Title */}
          <div className={`${aboutOpen ? 'hidden' : 'flex'} items-center justify-center text-center w-full h-full md:flex md:absolute md:inset-0 md:opacity-100 md:group-hover:opacity-0 md:transition-opacity`}>
            <h3
              className="text-xl font-semibold mb-0 text-[#2c2c2c]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              🧑‍💼 About Me
            </h3>
          </div>

          {/* Content */}
          <div className={`${aboutOpen ? 'flex' : 'hidden'} items-center justify-center text-center w-full h-full md:flex md:items-center md:justify-center md:h-full md:opacity-0 md:group-hover:opacity-100 md:transition-opacity`}>
            <p className="text-base mb-0 dark:text-white">
              Hi, I’m Mohamed, a Salesforce Consultant who loves solving complex problems and turning them
              into simple, impactful solutions. I’ve built my career across France, Russia, Morocco, and the
              U.S., helping teams improve the way they work with CRM, marketing, and data-driven
              decision-making. Along the way, I’ve earned certifications in Salesforce Administration,
              Business Analysis and Agile.
            </p>
          </div>
        </div>

        {/* My Core Values */}
        <div
          className="bg-[#e6ba38] dark:bg-[#e6ba38] text-black border border-gray-200 dark:border-gray-300 rounded-xl p-4 mb-6 md:mb-0 min-h-[10rem] md:flex-1 cursor-pointer transition-all group relative"
          role="button"
          aria-expanded={valuesOpen}
          tabIndex={0}
          onClick={() => toggleOnMobileOnly(setValuesOpen)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleOnMobileOnly(setValuesOpen);
            }
          }}
        >
          {/* Title */}
          <div className={`${valuesOpen ? 'hidden' : 'flex'} items-center justify-center text-center w-full h-full md:flex md:absolute md:inset-0 md:opacity-100 md:group-hover:opacity-0 md:transition-opacity`}>
            <h3
              className="text-xl font-bold mt-0 mb-0 text-[#2c2c2c]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              ⚙️ My Core Values
            </h3>
          </div>

          {/* Content */}
          <div className={`${valuesOpen ? 'flex' : 'hidden'} items-center justify-center text-center w-full h-full md:flex md:items-center md:justify-center md:h-full md:opacity-0 md:group-hover:opacity-100 md:transition-opacity`}>
            <ul className="list-disc list-inside text-base mb-0 dark:text-white">
              <li>Curiosity: I love exploring how things work and asking the right questions to uncover solutions.</li>
              <li>Collaboration: I believe the best outcomes happen when diverse minds come together.</li>
              <li>Efficiency: I’m driven by building systems that save time and create real business impact.</li>
            </ul>
          </div>
        </div>

        {/* Outside of Work */}
        <div
          className="bg-[#e6ba38] dark:bg-[#e6ba38] text-black border border-gray-200 dark:border-gray-300 rounded-xl p-4 min-h-[10rem] md:flex-1 cursor-pointer transition-all group relative"
          role="button"
          aria-expanded={outsideOpen}
          tabIndex={0}
          onClick={() => toggleOnMobileOnly(setOutsideOpen)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleOnMobileOnly(setOutsideOpen);
            }
          }}
        >
          {/* Title */}
          <div className={`${outsideOpen ? 'hidden' : 'flex'} items-center justify-center text-center w-full h-full md:flex md:absolute md:inset-0 md:opacity-100 md:group-hover:opacity-0 md:transition-opacity`}>
            <h3
              className="text-xl font-bold mt-0 mb-0 text-[#2c2c2c]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              🌍 Outside of Work
            </h3>
          </div>

          {/* Content */}
          <div className={`${outsideOpen ? 'flex' : 'hidden'} items-center justify-center text-center w-full h-full md:flex md:items-center md:justify-center md:h-full md:opacity-0 md:group-hover:opacity-100 md:transition-opacity`}>
            <div>
              <p className="text-base mb-4 dark:text-white">
                When I’m not configuring Salesforce or analyzing data, you’ll usually find me:
              </p>
              <ul className="list-disc list-inside text-base mb-8 dark:text-white">
                <li>🏋️‍♂️ Working out (fitness is my way to stay balanced and focused).</li>
                <li>🖥️ Exploring creative projects (design, websites, or just brainstorming new ideas).</li>
                <li>🏛️ Visiting museums and discovering new places; curiosity doesn’t stop at work.</li>
              </ul>
              <p className="text-base mt-6 mb-3 dark:text-white">
  <strong>Fun fact:</strong> I speak four languages (English, Arabic, French, and Russian), which has helped me
  connect with people from all around the world.
</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 hidden md:block"><SocialButtons /></div>
    </div>
  );
};

export default AboutIntro;