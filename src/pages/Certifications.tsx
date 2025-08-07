import React, { useRef } from 'react';
import { Eye } from 'lucide-react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SocialButtons from '@/components/layout/SocialButtons';

const Certifications = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const certifications = [
    {
      id: "cert1",
      name: "Salesforce Certified Administrator",
      date: "November 2023",
      description: "Validated expertise in user management, security, automation, and data analytics on the Salesforce Platform.",
      image: "/certs/Salesforce Certified Administrator.png",
      link: "/certs/Salesforce Certified Administrator.pdf"
    },
    {
      id: "cert2",
      name: "Salesforce Certified Business Analyst",
      date: "February 2025",
      description: "Demonstrates skills in gathering requirements, stakeholder collaboration, and delivering business value through Salesforce solutions.",
      image: "/certs/Salesforce Certified Business Analyst.png",
      link: "/certs/Salesforce Certified Business Analyst.pdf"
    },
    {
      id: "cert3",
      name: "Salesforce Certified AI Associate",
      date: "November 2024",
      description: "Foundational understanding of artificial intelligence and its application within Salesforce technologies.",
      image: "/certs/Salesforce Certified AI Associate.png",
      link: "/certs/Salesforce Certified AI Associate.pdf"
    },
    {
      id: "cert4",
      name: "Atlassian Agile Project Management Certificate",
      date: "December 2024",
      description: "Covers agile fundamentals, Jira project management, and career foundations for leadership in modern teams.",
      image: "/certs/Atlassian Agile Project Management Professional Certificate.png",
      link: "/certs/Atlassian Agile Project Management Professional Certificate.pdf"
    },
    {
      id: "cert5",
      name: "Professional Scrum Product Owner I (PSPO I)",
      date: "March 2025",
      description: "Validates understanding of Scrum principles and ability to maximize product value as a Product Owner.",
      image: "/certs/Professional Scrum Product Owner I.png",
      link: "/certs/Professional Scrum Product Owner I.pdf"
    }
  ];

  return (
    <section className="pt-32 pb-10 min-h-screen flex flex-col bg-white dark:bg-black">
      <div className="flex-grow w-full max-w-screen-xl px-4 mx-auto" ref={containerRef}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {certifications.map(cert => (
          <Card key={cert.id} className="group bg-white dark:bg-white text-black border border-gray-200 dark:border-gray-300 overflow-hidden rounded-xl">
            <div className="flex flex-col items-end pr-2 pt-2">
              <Badge className="mb-2 text-black dark:text-white border border-blue-200 dark:border-blue-400 bg-white dark:bg-black">
                {cert.date}
              </Badge>
              <div className="w-full h-48 flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <CardHeader>
              <CardTitle className="text-lg font-bold text-[#009EDB] dark:text-[#009EDB]">
                {cert.name}
              </CardTitle>
              <CardDescription className="text-black dark:text-black mt-1">
                {cert.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center gap-2">
                  <Eye className="w-4 h-4" /> View Certificate
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
        </div>
      </div>
      <SocialButtons />
    </section>
  );
};

export default Certifications;
