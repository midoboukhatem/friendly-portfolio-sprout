
import { FileCode, ExternalLink, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Projects = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projects = [
    {
      id: "project1",
      title: "Sales Cloud Implementation",
      description: "Complete Sales Cloud implementation for a financial services company",
      technologies: ["Sales Cloud", "Process Builder", "Lightning Components"],
      details: "Led a complete Sales Cloud implementation for a financial services company with 200+ users. Designed custom sales processes, built approval workflows, and created dashboard analytics to provide real-time insights for management.",
      image: "lovable-uploads/67788e89-aad3-45ed-8ebc-d9c955b39ebe.png"
    },
    {
      id: "project2",
      title: "Service Cloud Optimization",
      description: "Service process redesign and automation suite",
      technologies: ["Service Cloud", "Flow Builder", "Einstein Bots"],
      details: "Redesigned customer service processes and implemented Service Cloud with automated case routing, knowledge base integration, and self-service portal. Reduced average case resolution time by 35%.",
      image: "lovable-uploads/88a75376-7a89-4b3d-aa57-480485607310.png"
    },
    {
      id: "project3",
      title: "Marketing Cloud Integration",
      description: "Cross-cloud integration between Sales and Marketing Cloud",
      technologies: ["Marketing Cloud", "Journey Builder", "API Integration"],
      details: "Designed and implemented a seamless integration between Sales Cloud and Marketing Cloud, allowing for personalized customer journeys based on sales activities and customer interactions.",
      image: "lovable-uploads/76fc40c0-cc4b-4269-a802-4868c37d710e.png"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-portfolio-navy-deep">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="card-hover overflow-hidden dark:bg-portfolio-navy/80 dark:border-portfolio-teal-light/20 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="bg-white/10 text-white border-white/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-portfolio-blue dark:text-portfolio-teal-light">
                  {project.title}
                </CardTitle>
                <CardDescription className="dark:text-white/70">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={project.id} className="border-b-0">
                    <AccordionTrigger className="text-sm text-portfolio-blue dark:text-portfolio-teal hover:no-underline py-2">
                      <span className="flex items-center gap-2">
                        <MessageSquare size={16} />
                        Project Details
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm dark:text-white/80">
                      {project.details}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>

              <CardFooter className="pt-0 flex justify-end">
                <Button variant="outline" size="sm" className="gap-1 dark:border-portfolio-teal-light/30 dark:text-portfolio-teal-light dark:hover:bg-portfolio-teal-light/10">
                  View Project <ExternalLink size={14} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
