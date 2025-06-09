import { ArrowUp, Heart, Github, Linkedin, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-br from-card via-card/95 to-secondary/20 border-t border-border/50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="relative">
        {/* Main footer content */}
        <div className="container mx-auto max-w-6xl px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Brand section */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Anaj Krishna
                </span>
              </div>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Full-stack developer and AI enthusiast passionate about creating innovative solutions 
                that bridge technology and real-world impact.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/anaj-krishna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/anaj-krishna-7a08bb2a7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="mailto:anajkrishna36@gmail.com"
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                  About
                </a>
                <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                  Skills
                </a>
                <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                  Projects
                </a>
                <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                  Contact
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin size={14} />
                  <span>Ernakulam, Kerala</span>
                </div>
                <a 
                  href="mailto:anajkrishna36@gmail.com"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Mail size={14} />
                  <span>anajkrishna36@gmail.com</span>
                </a>
              </div>
              <div className="pt-2">
                
                <div className="flex items-center space-x-1 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-500">Currently available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Anaj Krishna. All rights reserved.
              </p>
              
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="group relative p-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-all duration-300 hover:scale-110 border border-primary/10 hover:border-primary/20"
            >
              <ArrowUp 
                size={18} 
                className="text-primary group-hover:-translate-y-0.5 transition-transform duration-200" 
              />
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-lg group-hover:blur-xl transition-all duration-300"></div>
            </button>
          </div>
        </div>

        {/* Floating elements for visual appeal */}
        <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-2xl"></div>
      </div>
    </footer>
  );
};