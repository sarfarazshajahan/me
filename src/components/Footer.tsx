import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Sarfaraz <span className="text-primary">Shajahan</span>
              </h3>
              <p className="text-muted-foreground mb-4">
                Data Analyst & Business Intelligence Specialist helping organizations 
                transform data into actionable insights.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/sarfaraz-shajahan-506620359/"
                  className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 text-primary" />
                </a>
                <a 
                  href="mailto:sarfaraz.shajahan@email.com"
                  className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                </a>
                <a 
                  href="tel:+966XXXXXXXXX"
                  className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <a 
                  href="#about" 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
                <a 
                  href="#experience" 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Experience
                </a>
                <a 
                  href="#skills" 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Skills
                </a>
                <a 
                  href="#projects" 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Expertise</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Data Analytics</li>
                <li>Business Intelligence</li>
                <li>SAP Solutions</li>
                <li>Process Optimization</li>
                <li>Dashboard Development</li>
                <li>Technical Reporting</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © {currentYear} Sarfaraz Shajahan. All rights reserved. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;