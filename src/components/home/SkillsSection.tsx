
import { CheckCircle } from 'lucide-react';

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

  return (
    <section className="py-16 bg-portfolio-gray-light">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm"
              x-data="{ hovered: false }"
              x-on:mouseenter="hovered = true"
              x-on:mouseleave="hovered = false"
            >
              <h3 className="text-xl font-semibold mb-4 text-portfolio-blue">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-portfolio-teal mr-2 shrink-0" />
                    <span>{skill}</span>
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
