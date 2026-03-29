import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Github, Twitter, Linkedin, Youtube, Mail, Phone, Globe } from "lucide-react";
import { motion } from "motion/react";

const footerLinks = {
  services: [
    { label: "Refurbished серверы", href: "#services" },
    { label: "TPM support", href: "#services" },
    { label: "Поддержка 24x7", href: "#services" },
    { label: "DevOps услуги", href: "#devops" },
  ],
  resources: [
    { label: "Infrastructure support", href: "#" },
    { label: "SLA и отчётность", href: "#" },
    { label: "Vendor coverage", href: "#" },
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

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const contacts = [
  { icon: Mail, label: "Email", value: "info@almadata.kz" },
  { icon: Phone, label: "Phone", value: "+7 701 137 22 33" },
  { icon: Globe, label: "Website", value: "www.almadata.kz" },
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
                <span className="font-semibold text-lg">Almadata</span>
                <p className="text-xs text-muted-foreground">Infrastructure lifecycle partner</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md text-sm">
              Almadata помогает компаниям эффективно развивать и поддерживать IT-инфраструктуру, сочетая поставку
              enterprise refurbished оборудования, независимую TPM-поддержку и DevOps-экспертизу.
            </p>

            <div className="mb-6 grid gap-3">
              {contacts.map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-black/8 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-white/[0.05]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.label}</div>
                    <div className="text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mb-6">
              <Input placeholder="Email для связи" className="max-w-xs bg-white/80 border-black/10 focus:border-black/30 dark:bg-white/[0.06] dark:border-white/10 dark:focus:border-white/20" />
              <Button className="bg-gradient-to-b from-white to-zinc-100 text-black border border-black/10 hover:shadow-lg hover:shadow-black/8 transition-all duration-300 dark:border-white/12 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-black dark:text-white dark:hover:shadow-white/10">
                Связаться
              </Button>
            </div>

            <div className="flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/70 hover:bg-white flex items-center justify-center transition-all duration-300 hover:scale-110 border border-black/8 hover:border-black/20 dark:border-white/10 dark:bg-white/[0.05] dark:hover:bg-white/[0.08] dark:hover:border-white/20"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-black dark:group-hover:text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h4 className="font-medium mb-4">Services</h4>
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
            <h4 className="font-medium mb-4">Resources</h4>
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
            <h4 className="font-medium mb-4">Company</h4>
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
            <h4 className="font-medium mb-4">Legal</h4>
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
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">© 2026 Almadata. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>TPM support</span>
            <span>·</span>
            <span>Infrastructure support</span>
            <span>·</span>
            <span>DevOps services</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
