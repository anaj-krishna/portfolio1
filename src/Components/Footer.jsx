import { ArrowUp, Github, Linkedin, Mail, MapPin } from "lucide-react";

/* ---------- Custom Icons (no extra libs) ---------- */
const GitLabIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 22.545l4.5-13.84h-9zM2.2 9.57L1 13.11l11 9.435L2.2 9.57zm19.6 0L23 13.11 12 22.545 21.8 9.57zM20.1 1.455l-3.6 11.07h7.2zM3.9 1.455l3.6 11.07h-7.2z" />
  </svg>
);

const KaggleIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 3v18h3V3H5zm4.5 9 6.5 9h3.5l-6.9-9.6L18.5 3h-3.3l-5.7 9z" />
  </svg>
);

/* ---------- Footer ---------- */
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-card via-card/95 to-secondary/20 border-t border-border/50">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      <div className="relative">
        <div className="container mx-auto max-w-6xl px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

            {/* Brand */}
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
                Full-stack developer and AI enthusiast passionate about creating
                innovative solutions that bridge technology and real-world impact.
              </p>

              {/* Social Icons */}
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
                  href="https://gitlab.com/anajkrishna77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <GitLabIcon />
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
                  href="https://www.kaggle.com/anajkrishna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <KaggleIcon />
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
                <a href="#about" className="block text-muted-foreground hover:text-primary">About</a>
                <a href="#skills" className="block text-muted-foreground hover:text-primary">Skills</a>
                <a href="#projects" className="block text-muted-foreground hover:text-primary">Projects</a>
                <a href="#contact" className="block text-muted-foreground hover:text-primary">Contact</a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Get in Touch</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MapPin size={14} />
                  <span>Ernakulam, Kerala</span>
                </div>
                <a
                  href="mailto:anajkrishna36@gmail.com"
                  className="flex items-center space-x-2 hover:text-primary"
                >
                  <Mail size={14} />
                  <span>anajkrishna36@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Bottom */}
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Anaj Krishna. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="group relative p-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-all duration-300 hover:scale-110 border border-primary/10"
            >
              <ArrowUp
                size={18}
                className="text-primary group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
