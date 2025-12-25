import { cn } from "./lib/utils";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
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

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/70 backdrop-blur-md border-b border-white/10"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">

        {/* LEFT: Social buttons + Brand */}
        <div className="flex items-center space-x-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anaj-krishna-7a08bb2a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group p-[2px] rounded-full overflow-hidden"
          >
            <span className="absolute inset-0 bg-[linear-gradient(90deg,#4285F4,#EA4335,#FBBC05,#34A853,#4285F4)] bg-[length:400%_100%] animate-ai-glow opacity-80 group-hover:opacity-100" />
            <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-black/80 backdrop-blur text-white">
              <Linkedin size={18} />
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/anaj-krishna"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group p-[2px] rounded-full overflow-hidden"
          >
            <span className="absolute inset-0 bg-[linear-gradient(90deg,#8b5cf6,#ec4899,#22d3ee,#8b5cf6)] bg-[length:400%_100%] animate-ai-glow opacity-80 group-hover:opacity-100" />
            <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-black/80 backdrop-blur text-white">
              <Github size={18} />
            </span>
          </a>

          {/* Brand */}
          <a
            href="#hero"
            className="text-xl font-bold text-foreground ml-2"
          >
            <span className="text-glow">Anaj Krishna</span>{" "}
            <span className="text-primary">Portfolio</span>
          </a>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex space-x-8">
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

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* MOBILE MENU */}
        <div
          className={cn(
            "fixed inset-0 bg-black/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
