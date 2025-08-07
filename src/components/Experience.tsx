import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Purchase Admin Coordinator",
      company: "PCD Saudi Arabia Co",
      location: "Saudi Arabia",
      period: "June 2024 - June 2025",
      type: "Current Position",
      description: "Leveraging advanced data analytics, SAP products, and business intelligence to enhance purchasing processes and drive operational efficiency.",
      achievements: [
        "Enhanced purchasing processes through data-driven insights",
        "Implemented advanced SAP solutions for procurement optimization",
        "Developed business intelligence dashboards for strategic decision-making",
        "Improved stakeholder engagement and communication protocols"
      ],
      technologies: ["SAP", "Business Intelligence", "Data Analytics", "Process Optimization"]
    },
    {
      title: "Purchase Admin Coordinator",
      company: "Chalhoub Group",
      location: "Middle East",
      period: "January 2016 - June 2024",
      type: "8+ Years",
      description: "Utilized Oracle E-Business Suite and Microsoft Power BI to streamline operations and optimize purchasing workflows across multiple business units.",
      achievements: [
        "Streamlined purchasing operations using Oracle E-Business Suite",
        "Created comprehensive Power BI dashboards for procurement insights",
        "Reduced processing time by 40% through workflow optimization",
        "Managed vendor relationships and contract negotiations",
        "Implemented quality assurance protocols for purchasing processes"
      ],
      technologies: ["Oracle E-Business Suite", "Microsoft Power BI", "Process Management", "Vendor Management"]
    },
    {
      title: "Administrative Assistant",
      company: "Chalhoub Group",
      location: "Middle East",
      period: "July 2007 - December 2015",
      type: "8+ Years",
      description: "Gained foundational experience in administration and ERP systems while developing expertise in customer service and organizational development.",
      achievements: [
        "Developed foundational ERP system expertise",
        "Provided superior customer service across multiple departments",
        "Assisted in organizational development initiatives",
        "Maintained high-quality documentation and reporting standards",
        "Supported cross-functional teams in administrative processes"
      ],
      technologies: ["ERP Systems", "Documentation", "Customer Service", "Administrative Processes"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Over 15 years of progressive experience in data analytics, procurement, and business operations
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 hover:shadow-elegant transition-all duration-300 border-border/50 animate-slide-up">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-4 gap-6">
                    {/* Left Column - Company Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        <span className="font-semibold text-foreground">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{exp.location}</span>
                      </div>
                      <Badge 
                        variant="secondary"
                        className="bg-primary/10 text-primary"
                      >
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Right Column - Role Details */}
                    <div className="lg:col-span-3">
                      <h3 className="text-xl font-semibold text-foreground mb-3">{exp.title}</h3>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-medium text-foreground mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-3">Technologies & Tools:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge 
                              key={i}
                              variant="outline"
                              className="border-primary/30 text-primary hover:bg-primary/10"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;