import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const shouldUseDark = savedTheme === "dark";
    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/88 backdrop-blur-xl border-b border-border/70 shadow-lg shadow-black/5 dark:shadow-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="border-b border-black/5 bg-white/60 backdrop-blur-md dark:border-white/8 dark:bg-white/[0.03]">
        <div className="container mx-auto flex h-10 items-center justify-between px-4 text-xs text-muted-foreground lg:px-8">
          <div className="hidden sm:flex items-center gap-4">
            <span>Refurbished серверы</span>
            <span>Поддержка 24×7</span>
            <span>Услуги DevOps</span>
          </div>
          <div className="flex items-center gap-4">
            <span>onepoint360.kz@gmail.com</span>
            <span className="hidden sm:inline">+7 778 101 8007</span>
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
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-black via-zinc-800 to-zinc-500 shadow-md shadow-black/10 dark:from-white dark:via-zinc-200 dark:to-zinc-500 dark:shadow-white/10">
              <div className="h-3 w-3 rounded-full bg-white dark:bg-black"></div>
            </div>
            <div>
              <div className="font-semibold text-lg leading-none">Onepoint</div>
              <div className="hidden text-[11px] text-muted-foreground sm:block">Партнёр по жизненному циклу ИТ-инфраструктуры</div>
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
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-black via-blue-600 to-transparent transition-all duration-300 group-hover:w-full dark:from-white dark:via-blue-400"></span>
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="border border-black/8 bg-white/70 hover:bg-white dark:border-white/10 dark:bg-white/[0.05] dark:hover:bg-white/[0.08]"
            onClick={toggleTheme}
            aria-label={isDark ? "Включить светлую тему" : "Включить тёмную тему"}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" className="hidden md:inline-flex hover:bg-black/5 dark:hover:bg-white/[0.05]" asChild>
            <a href="#contacts">Контакты</a>
          </Button>
          <Button className="border border-black/10 bg-gradient-to-b from-white to-zinc-100 text-black hover:shadow-lg hover:shadow-black/10 transition-all duration-300 hover:scale-105 active:scale-95 dark:border-white/12 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-black dark:text-white dark:hover:shadow-white/10" asChild>
            <a href="#contacts">
            Запросить предложение
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
