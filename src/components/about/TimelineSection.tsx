
import { CircleCheck } from 'lucide-react';

const TimelineSection = () => {
  const timelineItems = [
    {
      year: "2023 - Present",
      title: "Senior Salesforce Developer",
      company: "Tech Solutions Inc.",
      description: "Lead developer for enterprise Salesforce implementations, managing a team of 3 developers."
    },
    {
      year: "2020 - 2023",
      title: "Salesforce Administrator",
      company: "Global Systems Corp.",
      description: "Managed Salesforce org for 200+ users, implemented automation and custom solutions."
    },
    {
      year: "2018 - 2020",
      title: "CRM Specialist",
      company: "Digital Innovations Ltd.",
      description: "Provided technical support and customizations for multiple CRM platforms."
    },
    {
      year: "2016 - 2018",
      title: "Web Developer",
      company: "Creative Web Solutions",
      description: "Developed responsive websites and web applications for various clients."
    }
  ];

  return (
    <section className="py-12">
      <div className="section-container">
        <h2 className="section-title mb-12">Professional Journey</h2>
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-portfolio-blue-light"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Year Marker */}
                <div className="flex items-center md:w-1/2 mb-4 md:mb-0">
                  <div className={`md:w-full flex ${index % 2 === 0 ? 'md:justify-end md:pr-8' : 'md:justify-start md:pl-8'}`}>
                    <span className="bg-portfolio-blue text-white px-4 py-2 rounded-full font-semibold">{item.year}</span>
                  </div>
                </div>
                
                {/* Circle Indicator */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-6 md:mt-0">
                  <CircleCheck className="h-6 w-6 text-portfolio-blue bg-white rounded-full" />
                </div>
                
                {/* Content */}
                <div className="md:w-1/2">
                  <div className={`bg-white p-6 rounded-lg shadow-sm ml-6 md:ml-0 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                    <h3 className="font-semibold text-xl text-portfolio-blue">{item.title}</h3>
                    <p className="text-portfolio-blue-dark font-medium">{item.company}</p>
                    <p className="mt-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
