import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  BarChart3, 
  Settings, 
  Users, 
  FileText, 
  TrendingUp,
  Brain,
  MessageSquare
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "SAP Products", level: 90, category: "ERP Systems" },
    { name: "Microsoft Power BI", level: 85, category: "Business Intelligence" },
    { name: "Oracle E-Business Suite", level: 88, category: "ERP Systems" },
    { name: "Data Analytics", level: 82, category: "Analytics" },
    { name: "Business Intelligence", level: 85, category: "Analytics" },
    { name: "Excel & VBA", level: 90, category: "Productivity Tools" }
  ];

  const softSkills = [
    {
      icon: Users,
      title: "Stakeholder Engagement",
      description: "Expert in building relationships and managing expectations across diverse stakeholder groups"
    },
    {
      icon: FileText,
      title: "Technical Writing",
      description: "Skilled in creating comprehensive technical reports and documentation"
    },
    {
      icon: Settings,
      title: "Quality Assurance",
      description: "Strong focus on maintaining high standards and implementing quality control processes"
    },
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Excellent verbal and written communication skills with emotional intelligence"
    },
    {
      icon: TrendingUp,
      title: "Process Optimization",
      description: "Proven ability to identify inefficiencies and implement improvement strategies"
    },
    {
      icon: Brain,
      title: "Analytical Thinking",
      description: "Strong analytical mindset with ability to solve complex business problems"
    }
  ];

  const certifications = [
    "SAP Certified User",
    "Microsoft Power BI Specialist",
    "Oracle E-Business Suite Certified",
    "Data Analytics Professional",
    "Business Intelligence Associate"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive blend of technical proficiency and soft skills developed over 15+ years
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Technical Skills */}
            <div className="animate-slide-up">
              <div className="flex items-center gap-3 mb-8">
                <Database className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Technical Skills</h3>
              </div>
              
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <span className="text-xs text-muted-foreground">{skill.category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="animate-slide-up">
              <div className="flex items-center gap-3 mb-8">
                <BarChart3 className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Core Competencies</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {softSkills.map((skill, index) => (
                  <Card key={index} className="p-4 hover:shadow-card transition-all duration-300 border-border/50">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-3">
                        <skill.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-foreground mb-1">{skill.title}</h4>
                          <p className="text-sm text-muted-foreground">{skill.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="text-center animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Certifications & Specializations</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium bg-accent/10 text-accent hover:bg-accent/20 transition-colors duration-300"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;