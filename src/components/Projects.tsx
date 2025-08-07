import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, Database, TrendingUp, Settings } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SAP Procurement Analytics Dashboard",
      description: "Comprehensive business intelligence solution for procurement processes using SAP data integration and Power BI visualization.",
      image: "/api/placeholder/600/400",
      technologies: ["SAP", "Power BI", "SQL", "Data Modeling"],
      category: "Business Intelligence",
      icon: BarChart3,
      features: [
        "Real-time procurement metrics tracking",
        "Vendor performance analytics",
        "Cost optimization insights",
        "Automated reporting system"
      ],
      impact: "Reduced procurement processing time by 35% and improved vendor selection accuracy by 50%"
    },
    {
      title: "Oracle EBS Operations Optimization",
      description: "Streamlined operations workflow using Oracle E-Business Suite with custom analytics and process automation.",
      image: "/api/placeholder/600/400",
      technologies: ["Oracle EBS", "Power BI", "Process Automation", "Data Analytics"],
      category: "Process Optimization",
      icon: Settings,
      features: [
        "Automated workflow processes",
        "Performance monitoring dashboards",
        "Quality assurance protocols",
        "Stakeholder reporting system"
      ],
      impact: "Achieved 40% reduction in processing time and 25% improvement in operational efficiency"
    },
    {
      title: "Purchase Order Analytics System",
      description: "Advanced analytics system for purchase order management with predictive insights and real-time monitoring.",
      image: "/api/placeholder/600/400",
      technologies: ["Power BI", "Excel VBA", "Data Visualization", "Statistical Analysis"],
      category: "Data Analytics",
      icon: Database,
      features: [
        "Purchase order trend analysis",
        "Budget variance tracking",
        "Supplier performance metrics",
        "Predictive spend analysis"
      ],
      impact: "Improved budget accuracy by 30% and enhanced supplier relationship management"
    },
    {
      title: "Business Intelligence Reporting Suite",
      description: "Comprehensive BI reporting solution providing strategic insights across multiple business functions and departments.",
      image: "/api/placeholder/600/400",
      technologies: ["Power BI", "SAP", "Data Integration", "Dashboard Design"],
      category: "Business Intelligence",
      icon: TrendingUp,
      features: [
        "Executive-level dashboards",
        "Departmental KPI tracking",
        "Automated data refresh",
        "Mobile-responsive design"
      ],
      impact: "Enhanced decision-making speed by 60% and improved cross-departmental visibility"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing key projects that demonstrate expertise in data analytics, business intelligence, and process optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50 overflow-hidden animate-slide-up">
                <CardHeader className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <project.icon className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-6 pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-medium text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-medium text-foreground mb-1 text-sm">Impact:</h4>
                    <p className="text-sm text-muted-foreground">{project.impact}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge 
                          key={i}
                          variant="outline"
                          className="border-primary/30 text-primary hover:bg-primary/10 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work or collaborating on a project?
            </p>
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-elegant transition-all duration-300"
            >
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;