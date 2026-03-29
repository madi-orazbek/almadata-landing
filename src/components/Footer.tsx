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
    <footer id="contacts" className="border-t border-border/50 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          <motion.div className="lg:col-span-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                <div className="h-3 w-3 rounded-full bg-background" />
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
                <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
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
              <Input placeholder="Email для связи" className="max-w-xs bg-background/50 border-border/50 focus:border-primary/50" />
              <Button className="bg-gradient-to-r from-primary to-accent text-accent-foreground hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                Связаться
              </Button>
            </div>

            <div className="flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-muted/50 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-transparent hover:border-primary/30"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
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
