import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Database, TrendingUp, Users } from "lucide-react";

const About = () => {
  const skills = [
    "SAP Products", "Microsoft Power BI", "Oracle E-Business Suite", 
    "Data Analytics", "Business Intelligence", "Quality Assurance",
    "Stakeholder Engagement", "Technical Reporting", "ERP Systems"
  ];

  const highlights = [
    {
      icon: Database,
      title: "Data Analytics",
      description: "Expert in transforming raw data into meaningful insights using advanced analytics tools and methodologies."
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Proficient in creating interactive dashboards and reports with Power BI and SAP for strategic decision-making."
    },
    {
      icon: TrendingUp,
      title: "Process Optimization",
      description: "Proven track record of streamlining operations and enhancing purchasing processes through data-driven solutions."
    },
    {
      icon: Users,
      title: "Stakeholder Engagement",
      description: "Strong communication skills with experience in engaging stakeholders and delivering superior customer service."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate data analyst with a strong foundation in business operations and technical expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-foreground mb-6">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm an accomplished professional with a strong background in stakeholder engagement, 
                  technical report writing, and quality assurance. Currently serving as a Senior Purchase 
                  Admin Coordinator at PCD Saudi Arabia Co, where I leverage my skills in data analytics, 
                  SAP products, and business intelligence to enhance purchasing processes.
                </p>
                <p>
                  My career spans over 15 years, beginning as an Administrative Assistant at Chalhoub Group, 
                  where I gained foundational experience in administration and ERP systems. I then progressed 
                  to Purchase Admin Coordinator for over eight years, utilizing Oracle E-Business Suite and 
                  Microsoft Power BI to streamline operations.
                </p>
                <p>
                  I'm committed to organizational development and delivering superior customer service through 
                  effective communication and emotional intelligence. Currently expanding my expertise in data 
                  analytics to drive better business decisions.
                </p>
              </div>
            </div>

            <div className="space-y-6 animate-slide-up">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="p-4 hover:shadow-card transition-all duration-300 border-border/50">
                    <CardContent className="p-0">
                      <highlight.icon className="h-8 w-8 text-primary mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="text-center animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Technical Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;