const AboutIntro = () => {
  return (
    <div className="p-8 rounded-lg shadow-sm flex flex-col items-center">
      
      {/* 🚀 Image at the Top */}
      <div className="mt-6 w-full max-w-4xl">
        <div className="p-1 rounded-lg">
          <img 
            src="/about me image.webp" 
            alt="About Me"
            className="w-full max-h-[400px] object-contain"
          />
        </div>
      </div>

      {/* 📜 Text Section Below */}
      <div className="max-w-4xl text-center mt-6">
        <h3 
          className="text-3xl font-semibold mb-2 text-black"  // Updated class for black color
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}  // Added to match the font from Projects page
        >
          Hello, Trailblazers & Problem-Solvers!
        </h3>
        <p className="text-lg mb-4 dark:text-white">
          Yes, I'm calling you that for a reason! Like you, I thrive on solving challenges and making business processes more efficient.
          My career has taken me across Russia, the U.S., France, and Morocco, where I've gained hands-on experience in CRM, marketing, 
          business analysis, commerce, and data-driven decision-making.
        </p>
        <p className="text-lg mb-4 dark:text-white">
          I began my journey as a CRM & Marketing Analyst, where I analyzed customer behavior and engagement strategies to optimize marketing campaigns 
          and sales processes. Working in hospitality, technology, and consulting sectors, I developed a deep understanding of how data can drive business success. 
          Over time, I realized that automation, process optimization, and structured data management could transform businesses, leading me to Salesforce.
        </p>
        <p className="text-lg mb-0 dark:text-white">
          Since then, I've earned multiple Salesforce certifications, worked on CRM optimization, business process automation, and data analysis, 
          and helped teams improve cross-functional collaboration through data-driven insights. Whether it's automating workflows, 
          streamlining sales and marketing efforts, or leveraging data for smarter decision-making, I'm passionate about creating scalable, efficient solutions.
        </p>
      </div>

      {/* 📌 Image at the Bottom */}
      <div className="mt-3 w-full max-w-4xl">
        <div className="p-0 rounded-lg">
          <img 
            src="/My roadmap1.webp" 
            alt="Career Roadmap"
            className="w-full max-h-[700px] object-contain"
            onError={(e) => {
              console.error('Failed to load image:', e);
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
      </div>

    </div>
  );
};

export default AboutIntro;
