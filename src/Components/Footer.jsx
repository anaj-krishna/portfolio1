import { ArrowUp, Github, Linkedin, Mail, MapPin } from "lucide-react";

/* ---------- Custom Icons ---------- */
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

  const GlowIcon = ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group w-10 h-10 flex items-center justify-center rounded-xl overflow-hidden"
    >
      <span className="absolute inset-0 bg-[linear-gradient(90deg,#4285F4,#EA4335,#FBBC05,#34A853,#4285F4)] bg-[length:400%_100%] animate-ai-glow opacity-70 group-hover:opacity-100" />
      <span className="relative flex items-center justify-center w-[36px] h-[36px] rounded-lg bg-black/80 backdrop-blur text-white transition-transform duration-300 group-hover:scale-110">
        {children}
      </span>
    </a>
  );

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
              <div className="flex items-center gap-4">
                <GlowIcon href="https://github.com/anaj-krishna">
                  <Github size={18} />
                </GlowIcon>

                <GlowIcon href="https://gitlab.com/anajkrishna77">
                  <GitLabIcon size={18} />
                </GlowIcon>

                <GlowIcon href="https://www.linkedin.com/in/anaj-krishna-7a08bb2a7/">
                  <Linkedin size={18} />
                </GlowIcon>

                <GlowIcon href="https://www.kaggle.com/anajkrishna">
                  <KaggleIcon size={18} />
                </GlowIcon>

                <GlowIcon href="mailto:anajkrishna36@gmail.com">
                  <Mail size={18} />
                </GlowIcon>
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

          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

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
