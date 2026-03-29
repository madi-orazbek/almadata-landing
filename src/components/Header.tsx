import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center space-x-8">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent"></div>
            <span className="font-semibold text-lg">OnePoint Support</span>
          </motion.div>
          <nav className="hidden md:flex items-center space-x-6">
            {["Services", "Infrastructure", "Support", "Clients"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex hover:bg-primary/10">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-95">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}