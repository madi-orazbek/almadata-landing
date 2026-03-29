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
          ? "bg-background/85 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="border-b border-white/5 bg-white/[0.02]">
        <div className="container mx-auto flex h-10 items-center justify-between px-4 text-xs text-muted-foreground lg:px-8">
          <div className="hidden sm:flex items-center gap-4">
            <span>Refurbished servers</span>
            <span>TPM support 24x7</span>
            <span>DevOps services</span>
          </div>
          <div className="flex items-center gap-4">
            <span>info@almadata.kz</span>
            <span className="hidden sm:inline">+7 701 137 22 33</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center space-x-8">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-accent to-primary shadow-lg shadow-primary/20">
              <div className="h-3 w-3 rounded-full bg-background"></div>
            </div>
            <div>
              <div className="font-semibold text-lg leading-none">Almadata</div>
              <div className="hidden text-[11px] text-muted-foreground sm:block">Infrastructure lifecycle partner</div>
            </div>
          </motion.div>
          <nav className="hidden md:flex items-center space-x-6">
            {[
              ["Услуги", "services"],
              ["Процесс", "process"],
              ["DevOps", "devops"],
              ["Пакеты", "packages"],
              ["Кейсы", "cases"],
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex hover:bg-primary/10" asChild>
            <a href="#contacts">Контакты</a>
          </Button>
          <Button className="bg-gradient-to-r from-primary to-accent text-accent-foreground hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-105 active:scale-95" asChild>
            <a href="#contacts">
            Запросить предложение
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
