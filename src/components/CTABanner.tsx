import { Button } from "./ui/button";
import { ArrowRight, Mail, Phone, Globe } from "lucide-react";
import { motion } from "motion/react";

const contacts = [
  { icon: Mail, label: "info@almadata.kz" },
  { icon: Phone, label: "+7 701 137 22 33" },
  { icon: Globe, label: "www.almadata.kz" },
];

export function CTABanner() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/15 to-primary/10 animate-gradient"></div>
      <div className="absolute inset-0 backdrop-blur-3xl"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-card/55 px-6 py-10 shadow-2xl shadow-black/20 backdrop-blur-xl md:px-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl tracking-tight mb-6">
            Готовы снизить TCO и усилить
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient"> infrastructure support</span>
            ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Almadata сочетает enterprise refurbished поставки, TPM support и DevOps услуги для надежной работы
            критичных сервисов бизнеса.
          </p>
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {contacts.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-muted-foreground">
                <item.icon className="mx-auto mb-2 h-4 w-4 text-primary" />
                {item.label}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-accent-foreground hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 active:scale-95 group text-lg px-8 py-6"
              asChild
            >
              <a href="#contacts">
                Получить консультацию
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 active:scale-95 text-lg px-8 py-6"
              asChild
            >
              <a href="#packages">Запросить предложение</a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            TPM support · поддержка серверов 24x7 · SLA 2/4/8 · мультивендорная поддержка
          </p>
        </motion.div>
      </div>
    </section>
  );
}
