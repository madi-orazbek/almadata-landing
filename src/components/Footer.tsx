import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Mail, Phone, Globe } from "lucide-react";
import { motion } from "motion/react";

const footerLinks = {
  services: [
    { label: "Refurbished серверы", href: "#services" },
    { label: "Независимая поддержка ИТ-оборудования", href: "#services" },
    { label: "Поддержка 24×7", href: "#services" },
    { label: "DevOps услуги", href: "#devops" },
  ],
  resources: [
    { label: "Поддержка инфраструктуры", href: "#" },
    { label: "SLA и отчётность", href: "#" },
    { label: "Поддерживаемые вендоры", href: "#" },
    { label: "Техническая документация", href: "#" },
  ],
  company: [
    { label: "О компании", href: "#" },
    { label: "Отраслевые кейсы", href: "#cases" },
    { label: "Контакты", href: "#contacts" },
    { label: "Поддержка", href: "#" },
  ],
  legal: [
    { label: "Условия обслуживания", href: "#" },
    { label: "Политика конфиденциальности", href: "#" },
    { label: "SLA", href: "#" },
  ],
};

const contacts = [
  { icon: Mail, label: "Эл. почта", value: "onepoint360.kz@gmail.com" },
  { icon: Phone, label: "Телефон", value: "+7 778 101 8007" },
  { icon: Globe, label: "Сайт", value: "www.onepoint.kz" },
];

export function Footer() {
  return (
    <footer id="contacts" className="border-t border-border/50 bg-gradient-to-b from-white/60 to-zinc-100 relative overflow-hidden dark:from-[#090909] dark:to-[#141414]">
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-black/4 blur-3xl dark:bg-white/6"></div>
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-black/3 blur-3xl dark:bg-white/5"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          <motion.div className="lg:col-span-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-black via-zinc-700 to-zinc-500">
                <div className="h-3 w-3 rounded-full bg-white" />
              </div>
              <div>
                <span className="font-semibold text-lg">Onepoint</span>
                <p className="text-xs text-muted-foreground">Партнёр по жизненному циклу ИТ-инфраструктуры</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md text-sm">
              Onepoint помогает компаниям эффективно развивать и поддерживать ИТ-инфраструктуру, сочетая поставку
              Enterprise Refurbished оборудования, независимую поддержку и DevOps-экспертизу.
            </p>

            <div className="mb-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {contacts.map((item) => (
                <div key={item.label} className="flex h-full min-h-[88px] items-center gap-3 rounded-2xl border border-black/8 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-white/[0.05]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                    <div className="mt-1 text-sm break-all">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid max-w-md grid-cols-1 items-stretch gap-2 sm:grid-cols-[minmax(0,1fr)_auto]">
              <Input
                placeholder="Email для связи"
                className="h-11 w-full bg-white/80 border-black/10 focus:border-black/30 dark:bg-white/[0.06] dark:border-white/10 dark:focus:border-white/20"
              />
              <Button
                asChild
                className="h-11 bg-gradient-to-b from-white to-zinc-100 text-black border border-black/10 hover:shadow-lg hover:shadow-black/8 transition-all duration-300 dark:border-white/12 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-black dark:text-white dark:hover:shadow-white/10"
              >
                <a href="https://wa.me/77781018007" target="_blank" rel="noreferrer">
                  Связаться
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h4 className="font-medium mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-foreground transition-colors duration-200 hover:translate-x-1 inline-block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h4 className="font-medium mb-4">Материалы</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-foreground transition-colors duration-200 hover:translate-x-1 inline-block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h4 className="font-medium mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-foreground transition-colors duration-200 hover:translate-x-1 inline-block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h4 className="font-medium mb-4">Документы</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-foreground transition-colors duration-200 hover:translate-x-1 inline-block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <Separator className="mb-8 bg-border/50" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">© 2026 Onepoint. Все права защищены.</p>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>Независимая поддержка</span>
            <span>·</span>
            <span>Поддержка инфраструктуры</span>
            <span>·</span>
            <span>Услуги DevOps</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
