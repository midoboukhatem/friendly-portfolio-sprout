
import { useState } from 'react';
import { Award, CheckCircle, ChevronRight, BarChart } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Certifications = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const certifications = [
    {
      id: "cert1",
      name: "Salesforce Administrator",
      date: "April 2023",
      description: "Certified professional in Salesforce administration, data management, and platform configuration.",
      skills: ["User Management", "Security", "Data Management", "Process Automation"]
    },
    {
      id: "cert2",
      name: "Platform App Builder",
      date: "June 2023",
      description: "Certified in designing, building, and implementing custom applications using the Salesforce Platform.",
      skills: ["App Design", "Object Relationships", "User Experience", "Business Logic"]
    },
    {
      id: "cert3",
      name: "Sales Cloud Consultant",
      date: "August 2023",
      description: "Specialized certification for implementing Sales Cloud solutions to meet business requirements.",
      skills: ["Sales Process Design", "Opportunity Management", "Product Configuration", "Sales Analytics"]
    }
  ];

  const superbadges = [
    {
      id: "badge1",
      name: "Process Automation Specialist",
      description: "Demonstrated advanced skills in Flow Builder, Process Builder, and Approval Processes.",
      points: 15000
    },
    {
      id: "badge2",
      name: "Security Specialist",
      description: "Mastery in implementing complex security models, encryption, and sharing configurations.",
      points: 17500
    },
    {
      id: "badge3",
      name: "Advanced Admin Skills",
      description: "Expertise in advanced administration features including territory management and forecasting.",
      points: 12500
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-portfolio-navy-deep">
      <div className="section-container">
        <Tabs defaultValue="certifications" className="w-full">
          <TabsList className="grid grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="certifications" className="flex items-center gap-2">
              <Award size={16} />
              Certifications
            </TabsTrigger>
            <TabsTrigger value="superbadges" className="flex items-center gap-2">
              <BarChart size={16} />
              Superbadges
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="certifications" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <Card key={cert.id} className="dark:bg-portfolio-navy/80 dark:border-portfolio-teal-light/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="rounded-full bg-portfolio-teal-light/20 p-2">
                        <Award className="h-5 w-5 text-portfolio-teal-light" />
                      </div>
                      <Badge variant="outline" className="bg-portfolio-blue/10 border-portfolio-blue/20 text-portfolio-blue dark:bg-portfolio-teal-light/10 dark:border-portfolio-teal-light/20 dark:text-portfolio-teal-light">
                        {cert.date}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-portfolio-blue dark:text-portfolio-teal-light">
                      {cert.name}
                    </CardTitle>
                    <CardDescription className="dark:text-white/70">
                      {cert.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Collapsible
                      open={openItems[cert.id]}
                      onOpenChange={() => toggleItem(cert.id)}
                    >
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="flex items-center gap-2 w-full justify-between p-2 text-sm text-portfolio-blue dark:text-portfolio-teal-light hover:bg-portfolio-blue/5 dark:hover:bg-portfolio-teal-light/5">
                          <span>View Skills</span>
                          <ChevronRight className={`h-4 w-4 transition-transform ${openItems[cert.id] ? 'rotate-90' : ''}`} />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pt-2">
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map(skill => (
                            <div key={skill} className="flex items-center gap-1 text-xs dark:text-white/80">
                              <CheckCircle size={12} className="text-portfolio-blue dark:text-portfolio-teal-light" />
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full dark:border-portfolio-teal-light/30 dark:text-portfolio-teal-light dark:hover:bg-portfolio-teal-light/10"
                    >
                      View Credential
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="superbadges" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {superbadges.map((badge) => (
                <Card key={badge.id} className="overflow-hidden dark:bg-portfolio-navy/80 dark:border-portfolio-teal-light/20">
                  <div className="bg-gradient-to-r from-portfolio-blue to-portfolio-teal h-2"></div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl font-bold text-portfolio-blue dark:text-portfolio-teal-light">
                      <div className="rounded-full bg-portfolio-blue/10 dark:bg-portfolio-teal-light/10 p-1.5">
                        <BarChart className="h-5 w-5 text-portfolio-blue dark:text-portfolio-teal-light" />
                      </div>
                      {badge.name}
                    </CardTitle>
                    <CardDescription className="dark:text-white/70">
                      {badge.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 dark:text-white/50">Points Earned:</span>
                      <span className="font-bold text-portfolio-blue dark:text-portfolio-teal-light">{badge.points.toLocaleString()}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-50 dark:bg-portfolio-navy-deep/50">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full dark:border-portfolio-teal-light/30 dark:text-portfolio-teal-light dark:hover:bg-portfolio-teal-light/10"
                    >
                      View in Trailhead
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Certifications;
