import { cn } from "./lib/utils";
import { Menu, X, Github, Linkedin, Gitlab, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anaj-krishna-7a08bb2a7/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/anaj-krishna",
    icon: Github,
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/anajkrishna77",
    icon: Gitlab,
  },
  {
    name: "Kaggle",
    href: "https://www.kaggle.com/anajkrishna",
    icon: null, // Will render "K"
  },
  {
    name: "Mail",
    href: "mailto:anajkrishna36@gmail.com",
    icon: Mail,
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking a nav link
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/70 backdrop-blur-md border-b border-white/10"
            : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* MOBILE: Social Icons in navbar */}
          <div className="flex md:hidden items-center gap-2">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group p-[2px] rounded-full overflow-hidden flex-shrink-0"
              >
                <span className="absolute inset-0 bg-[linear-gradient(90deg,#4285F4,#EA4335,#FBBC05,#34A853,#4285F4)] bg-[length:400%_100%] animate-ai-glow opacity-80 group-hover:opacity-100" />
                <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-black/80 backdrop-blur text-white">
                  {link.icon ? (
                    <link.icon size={16} />
                  ) : (
                    <span className="font-bold text-sm">K</span>
                  )}
                </span>
              </a>
            ))}
          </div>

          {/* DESKTOP: Social icons + Brand + Nav links */}
          <div className="hidden md:flex items-center justify-between w-full">
            <div className="flex items-center space-x-4">
              {/* Social Icons */}
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group p-[2px] rounded-full overflow-hidden"
                >
                  <span className="absolute inset-0 bg-[linear-gradient(90deg,#4285F4,#EA4335,#FBBC05,#34A853,#4285F4)] bg-[length:400%_100%] animate-ai-glow opacity-80 group-hover:opacity-100" />
                  <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-black/80 backdrop-blur text-white">
                    {link.icon ? (
                      <link.icon size={18} />
                    ) : (
                      <span className="font-bold">K</span>
                    )}
                  </span>
                </a>
              ))}

              {/* Brand */}
              <a href="#hero" className="text-xl font-bold text-foreground ml-2">
                <span className="text-glow">Anaj Krishna</span>{" "}
                <span className="text-primary">Portfolio</span>
              </a>
            </div>

            {/* Nav Links */}
            <div className="flex space-x-8">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50 relative"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={cn(
          "fixed inset-0 z-30 md:hidden bg-background/95 backdrop-blur-lg transition-all duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {/* Mobile Nav Links */}
          <div className="flex flex-col items-center space-y-6">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={handleNavClick}
                className="text-2xl font-semibold text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Social Icons */}
          <div className="flex items-center justify-center gap-4 pt-8 border-t border-white/10 w-full max-w-sm">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group p-[2px] rounded-full overflow-hidden flex-shrink-0"
              >
                <span className="absolute inset-0 bg-[linear-gradient(90deg,#4285F4,#EA4335,#FBBC05,#34A853,#4285F4)] bg-[length:400%_100%] animate-ai-glow opacity-80 group-hover:opacity-100" />
                <span className="relative flex items-center justify-center w-11 h-11 rounded-full bg-black/80 backdrop-blur text-white">
                  {link.icon ? (
                    <link.icon size={20} />
                  ) : (
                    <span className="font-bold text-lg">K</span>
                  )}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};