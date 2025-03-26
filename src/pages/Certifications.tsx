import React, { useState, useRef } from 'react';
import { Award, Trophy, BarChart, Shield, Star, Eye } from 'lucide-react';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Certifications = () => {
  const [selectedTab, setSelectedTab] = useState("certifications");
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

  const superbadges = [
    {
      id: "sb1",
      name: "Business Administration Specialist",
      description: "Brighten up a new business unit with the Salesforce tools the team needs to succeed.",
      icon: <Star className="h-6 w-6" />,
      link: "https://trailhead.salesforce.com/content/learn/superbadges/superbadge_business_specialist"
    },
    {
      id: "sb2",
      name: "Lightning Experience Reports & Dashboards Specialist",
      description: "Design powerful reports and dashboards to shine a light on your data.",
      icon: <BarChart className="h-6 w-6" />,
      link: "https://trailhead.salesforce.com/content/learn/superbadges/superbadge-lex-rd"
    },
    {
      id: "sb3",
      name: "User Authentication Settings Superbadge Unit",
      description: "Bring user authentication settings up to standard to secure your org.",
      icon: <Shield className="h-6 w-6" />,
      link: "https://trailhead.salesforce.com/content/learn/superbadges/superbadge-user-authentication-settings"
    },
    {
      id: "sb4",
      name: "Multi-Factor Authentication and Single Sign-On Settings Superbadge Unit",
      description: "Configure MFA and SSO settings based on a set of requirements.",
      icon: <Shield className="h-6 w-6" />,
      link: "https://trailhead.salesforce.com/content/learn/superbadges/superbadge-mfa-sso-settings"
    },
    {
      id: "sb5",
      name: "User Authentication Troubleshooting Superbadge Unit",
      description: "Troubleshoot user authentication issues based on a scenario.",
      icon: <Shield className="h-6 w-6" />,
      link: "https://trailhead.salesforce.com/content/learn/superbadges/superbadge-user-authentication-troubleshooting"
    },
    {
      id: "sb6",
      name: "User Authentication Specialist Superbadge",
      description: "Complete the capstone assessment to earn the User Authentication Specialist Superbadge.",
      icon: <Shield className="h-6 w-6" />,
      link: "https://trailhead.salesforce.com/content/learn/superbadges/superbadge-user-authentication"
    },
    {
      id: "sb7",
      name: "Authentication Governance Superbadge Unit",
      description: "Prepare your org to proactively monitor authentication activities.",
      icon: <Shield className="h-6 w-6" />,
      link: "https://trailhead.salesforce.com/content/learn/superbadges/superbadge_governing_authentication_sbu"
    },
    {
      id: "sb8",
      name: "Access Governance Superbadge Unit",
      description: "Monitor your org for access-related security vulnerabilities.",
      icon: <Shield className="h-6 w-6" />,
      link: "https://trailhead.salesforce.com/content/learn/superbadges/superbadge_governing_access_sbu"
    },
    {
      id: "sb9",
      name: "Security Governance Specialist Superbadge",
      description: "Complete the capstone assessment to earn the Security Governance Specialist Superbadge.",
      icon: <Shield className="h-6 w-6" />,
      link: "https://trailhead.salesforce.com/content/learn/superbadges/superbadge_security_governance_specialist"
    },
    {
      id: "sb10",
      name: "User Access Fundamentals Superbadge Unit",
      description: "Flex your security muscles by locking down record access.",
      icon: <Shield className="h-6 w-6" />,
      link: "https://trailhead.salesforce.com/content/learn/superbadges/superbadge_object_access_sbu"
    },
    {
      id: "sb11",
      name: "Extended User Access and Restriction Superbadge Unit",
      description: "Build effective sharing solutions to provide the right access to the right records.",
      icon: <Shield className="h-6 w-6" />,
      link: "https://trailhead.salesforce.com/content/learn/superbadges/superbadge_record_field_access_sbu"
    },
    {
      id: "sb12",
      name: "User Access Troubleshooting Superbadge Unit",
      description: "Troubleshoot user access issues based on a scenario.",
      icon: <Shield className="h-6 w-6" />,
      link: "https://trailhead.salesforce.com/content/learn/superbadges/superbadge_user_access_troubleshooting_sbu"
    },
    {
      id: "sb13",
      name: "User Access Specialist Superbadge",
      description: "Complete the capstone assessment to earn the User Access Specialist Superbadge.",
      icon: <Shield className="h-6 w-6" />,
      link: "https://trailhead.salesforce.com/content/learn/superbadges/superbadge_user_access_specialist"
    },
    {
      id: "sb14",
      name: "Security Specialist Superbadge",
      description: "Complete the capstone assessment to earn the Security Specialist Superbadge.",
      icon: <Shield className="h-6 w-6" />,
      link: "https://trailhead.salesforce.com/content/learn/superbadges/superbadge_security_specialist"
    },
    {
      id: "sb15",
      name: "Admin Super Set",
      description: "Complete the capstone assessment to earn the Admin Super Set.",
      icon: <Star className="h-6 w-6" />,
      link: "https://trailhead.salesforce.com/content/learn/superbadges/superbadge_admin_superset"
    },
    {
      id: "sb16",
      name: "Prompt Builder Templates Superbadge Unit",
      description: "Create Prompt Builder templates to supercharge AI-powered insights and engagement.",
      icon: <Star className="h-6 w-6" />,
      link: "https://trailhead.salesforce.com/content/learn/superbadges/superbadge_prompt_builder_templates_sbu"
    },
    {
      id: "sb17",
      name: "Agentforce for Service Superbadge Unit",
      description: "Customize an Agentforce Service Agent to handle customer inquiries and bookings.",
      icon: <Star className="h-6 w-6" />,
      link: "https://trailhead.salesforce.com/content/learn/superbadges/superbadge-agentforce-service-sbu"
    }
  ];
  

  return (
<section className="pt-32 pb-10 min-h-screen flex items-center justify-center bg-white dark:bg-black">

      <div className="w-full max-w-screen-xl px-4" ref={containerRef}>
        <Tabs defaultValue="certifications" onValueChange={setSelectedTab}>
        <TabsList className="flex w-fit mx-auto mb-12 p-1 rounded-full bg-white dark:bg-white border border-blue-300 shadow">
  <TabsTrigger
    value="certifications"
    className="flex items-center gap-2 w-48 justify-center px-4 py-2 rounded-full text-sm transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#009EDB] data-[state=active]:to-[#00C5B4] data-[state=active]:text-white"
  >
    <Award size={16} /> Certifications
  </TabsTrigger>
  <TabsTrigger
    value="superbadges"
    className="flex items-center gap-2 w-48 justify-center px-4 py-2 rounded-full text-sm transition-all data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#009EDB] data-[state=active]:to-[#00C5B4] data-[state=active]:text-white"
  >
    <Trophy size={16} /> Superbadges
  </TabsTrigger>
</TabsList>

<div className="mt-6 min-h-screen">
  <TabsContent
    value="certifications"
    className="grid grid-cols-1 md:grid-cols-3 gap-8"
  >
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
  </TabsContent>

  <TabsContent
    value="superbadges"
    className="grid grid-cols-1 md:grid-cols-3 gap-8"
  >
    {superbadges.map(badge => (
      <Card key={badge.id} className="group bg-white dark:bg-white text-black border border-gray-200 dark:border-gray-300 overflow-hidden rounded-xl flex flex-col items-center justify-center text-center px-4 py-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-200 to-teal-100 flex items-center justify-center mb-4">
          <Trophy className="h-6 w-6" />
        </div>
        <CardTitle className="text-lg font-bold text-[#009EDB] dark:text-[#009EDB]">
          {badge.name}
        </CardTitle>
        <CardDescription className="mt-2 text-black dark:text-black">
          {badge.description}
        </CardDescription>
        <CardFooter className="mt-4">
          <a href={badge.link} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">View in Trailhead</Button>
          </a>
        </CardFooter>
      </Card>
    ))}
  </TabsContent>
</div>


        </Tabs>
      </div>
    </section>
  );
};

export default Certifications;
