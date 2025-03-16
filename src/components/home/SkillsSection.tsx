
import { CheckCircle } from 'lucide-react';
import { useState } from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Salesforce',
      skills: ['Sales Cloud', 'Service Cloud', 'Marketing Cloud', 'Apex', 'Lightning Web Components']
    },
    {
      title: 'Development',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'API Integration', 'Git']
    },
    {
      title: 'Business',
      skills: ['CRM Strategy', 'Business Analysis', 'Process Optimization', 'Project Management', 'Team Leadership']
    }
  ];

  // Let's create an array to track hover state for each category
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-portfolio-gray-light dark:bg-portfolio-navy-deep">
      <div className="section-container">
        <h2 className="section-title dark:text-white">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-portfolio-navy p-6 rounded-lg shadow-sm transition-transform duration-300 ease-in-out"
              style={{ 
                transform: hoveredIndex === index ? 'translateY(-5px)' : 'none',
                boxShadow: hoveredIndex === index ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' : ''
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3 className="text-xl font-semibold mb-4 text-portfolio-blue dark:text-portfolio-teal-light">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-portfolio-teal dark:text-portfolio-teal-light mr-2 shrink-0" />
                    <span className="dark:text-white">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
