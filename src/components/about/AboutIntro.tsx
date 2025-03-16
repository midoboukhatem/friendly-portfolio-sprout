
const AboutIntro = () => {
  return (
    <div className="bg-white dark:bg-portfolio-navy p-8 rounded-lg shadow-sm flex flex-col items-center">
      <img 
        src="/lovable-uploads/d6298303-8ef4-4da9-ac22-d93860d5d1c2.png" 
        alt="Profile Avatar"
        className="rounded-full w-48 h-48 object-cover border-4 border-portfolio-teal-light mb-8"
      />
      
      <div className="max-w-3xl text-center">
        <h3 className="text-2xl font-semibold mb-6 text-portfolio-blue dark:text-portfolio-teal-light">Hello Trailblazers & Problem-Solvers!</h3>
        <p className="text-lg mb-4 dark:text-white">
          Yes, I'm calling you that for a reason! Like you, I thrive on solving challenges and making business processes more efficient. My career has taken me across Russia, the U.S., France, and Morocco, where I've gained hands-on experience in CRM, marketing, business analysis, commerce, and data-driven decision-making.
        </p>
        <p className="text-lg mb-4 dark:text-white">
          I began my journey as a CRM & Marketing Analyst, where I analyzed customer behavior and engagement strategies to optimize marketing campaigns and sales processes. Working in hospitality, technology, and consulting sectors, I developed a deep understanding of how data can drive business success. Over time, I realized that automation, process optimization, and structured data management could transform businesses, leading me to Salesforce.
        </p>
        <p className="text-lg mb-8 dark:text-white">
          Since then, I've earned multiple Salesforce certifications, worked on CRM optimization, business process automation, and data analysis, and helped teams improve cross-functional collaboration through data-driven insights. Whether it's automating workflows, streamlining sales and marketing efforts, or leveraging data for smarter decision-making, I'm passionate about creating scalable, efficient solutions.
        </p>
      </div>
      
      <div className="mt-8 w-full max-w-4xl">
        <div className="bg-portfolio-gray-light dark:bg-portfolio-navy-deep p-4 rounded-lg">
          <img 
            src="/lovable-uploads/88a75376-7a89-4b3d-aa57-480485607310.png" 
            alt="Career Roadmap"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
