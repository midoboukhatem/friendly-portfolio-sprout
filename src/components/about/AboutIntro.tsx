const AboutIntro = () => {
  return (
    <div className="p-8 rounded-lg shadow-sm flex flex-col items-center">
      {/* 📜 Text Section Below */}
      <div className="max-w-4xl text-justify mt-6">
        <h3 
          className="text-xl font-semibold mb-2 text-[#2c2c2c]" 
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}  
        >
          ✨ About Me
        </h3>
        <p className="text-base mb-4 dark:text-white">
          Hi, I’m Mohamed, a Salesforce Consultant who loves solving complex problems and turning them into simple, impactful solutions. I’ve built my career across France, Russia, Morocco, and the U.S., helping teams improve the way they work with CRM, marketing, and data-driven decision-making. Along the way, I’ve earned certifications in Salesforce Administration, Business Analysis and Agile.
        </p>
        <h3 
          className="text-xl font-bold mt-6 mb-2 text-[#2c2c2c]" 
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}  
        >
          💡 My Core Values
        </h3>
        <ul className="list-disc list-inside text-base mb-4 dark:text-white"> 
          <li>Curiosity: I love exploring how things work and asking the right questions to uncover solutions.</li>
          <li>Collaboration: I believe the best outcomes happen when diverse minds come together.</li>
          <li>Efficiency: I’m driven by building systems that save time and create real business impact.</li>
        </ul>
        <h3 
          className="text-xl font-bold mt-6 mb-2 text-[#2c2c2c]"  // Reduced from text-3xl to text-xl
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}  
        >
          🌍 Outside of Work
        </h3>
        <p className="text-base mb-4 dark:text-white">
          When I’m not configuring Salesforce or analyzing data, you’ll usually find me:
        </p>
        <ul className="list-disc list-inside text-base mb-8 dark:text-white">
          <li>🏋️‍♂️ Working out (fitness is my way to stay balanced and focused).</li>
          <li>🎨 Exploring creative projects (design, websites, or just brainstorming new ideas).</li>
          <li>🌿 Visiting museums and discovering new places ; curiosity doesn’t stop at work.</li>
        </ul>
        <p className="text-base mt-4 mb-2 dark:text-white">
          Fun fact: I speak four languages (English, Arabic, French, and Russian), which has helped me connect with people from all around the world.
        </p>
      </div>
    </div>
  );
};

export default AboutIntro;