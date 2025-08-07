import { Button } from "@/components/ui/button";
import { ChevronDown, Download, ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 bg-[size:40px_40px] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto animate-fade-in">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-elegant border-4 border-primary/20 bg-gradient-primary p-1">
                <img 
                  src={profilePhoto} 
                  alt="Sarfaraz Shajahan" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="text-center lg:text-left flex-1">
            <div className="mb-6">
              <span className="text-primary font-medium text-lg mb-4 block">Hello, I'm</span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
                Sarfaraz Shajahan
              </h1>
              <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold">
                  Data Analyst & Business Intelligence Specialist
                </span>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl lg:max-w-none leading-relaxed">
              Transforming complex data into actionable insights with expertise in SAP, Power BI, 
              and advanced analytics. Currently enhancing purchasing processes at PCD Saudi Arabia Co.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button
              size="lg" 
              className="bg-gradient-primary hover:shadow-elegant transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Download CV
              <Download className="ml-2 h-4 w-4" />
            </Button>
            </div>
          </div>
        </div>
          
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto mt-16">
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">Companies</div>
            </div>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-float"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="h-6 w-6 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;