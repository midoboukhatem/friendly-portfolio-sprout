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
      id: "cert5",
      name: "Professional Scrum Product Owner I (PSPO I)",
      date: "March 2025",
      description: "Validates understanding of Scrum principles and ability to maximize product value as a Product Owner.",
      image: "/certs/Professional Scrum Product Owner I.png",
      link: "/certs/Professional Scrum Product Owner I.pdf"
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
      id: "cert4",
      name: "Atlassian Agile Project Management Certificate",
      date: "December 2024",
      description: "Covers agile fundamentals, Jira project management, and career foundations for leadership in modern teams.",
      image: "/certs/Atlassian Agile Project Management Professional Certificate.png",
      link: "/certs/Atlassian Agile Project Management Professional Certificate.pdf"
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
      id: "cert1",
      name: "Salesforce Certified Administrator",
      date: "November 2023",
      description: "Validated expertise in user management, security, automation, and data analytics on the Salesforce Platform.",
      image: "/certs/Salesforce Certified Administrator.png",
      link: "/certs/Salesforce Certified Administrator.pdf"
    }
  ];

  return (
    <section id="certifications" className="min-h-screen w-full bg-white dark:bg-black relative flex flex-col">
      {/* main */}
      <div className="relative z-10 flex flex-col flex-grow pt-36">
        {/* Allow inner scrolling on phones only; prevent scroll chaining out of this section */}
        <div
          className="w-full max-w-screen-xl px-4 mx-auto md:overflow-visible overflow-auto overscroll-contain"
          ref={containerRef}
          data-allow-scroll
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {certifications.map(cert => (
            <Card
              key={cert.id}
              className="group !bg-[#e6ba38] dark:!bg-[#e6ba38] text-black border border-gray-200 dark:border-gray-300 overflow-hidden rounded-xl flex flex-col items-center"
            >
              <div className="flex flex-col items-center w-full pt-2">
                <Badge className="mb-1 text-black dark:text-white border border-blue-200 dark:border-blue-400 bg-white dark:bg-black text-xs">
                  {cert.date}
                </Badge>
                <div className="w-full h-32 flex items-center justify-center px-2">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <CardHeader className="py-2 px-3 text-center">
                <CardTitle className="text-sm font-bold !text-[#2c2c2c] dark:!text-[#2c2c2c] text-center">
                  {cert.name}
                </CardTitle>
                <CardDescription className="text-black dark:text-black mt-1 text-xs text-center">
                  {cert.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className="mt-auto flex justify-center pb-3">
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  {/* keep button white */}
                  <Button
                    variant="outline"
                    className="flex items-center gap-1 text-xs h-8 !bg-white !text-black dark:!bg-white dark:!text-black"
                  >
                    <Eye className="w-3 h-3" /> View Certificate
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
          </div>
        </div>
      </div>
      <div className="hidden md:block"><SocialButtons /></div>
    </section>
  );
};

export default Certifications;
