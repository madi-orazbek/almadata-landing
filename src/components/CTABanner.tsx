import { Button } from "./ui/button";
import { ArrowRight, Mail, Phone, Globe } from "lucide-react";
import { motion } from "motion/react";

const contacts = [
  { icon: Mail, label: "info@onepoint.kz" },
  { icon: Phone, label: "+7 701 137 22 33" },
  { icon: Globe, label: "www.onepoint.kz" },
];

export function CTABanner() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-zinc-100 to-zinc-200 animate-gradient dark:from-[#050505] dark:via-[#111111] dark:to-[#1a1a1a]"></div>
      <div className="absolute inset-0 backdrop-blur-3xl"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-black/6 blur-3xl animate-pulse dark:bg-white/8"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl rounded-[2rem] border border-black/8 bg-white/72 px-6 py-10 shadow-2xl shadow-black/8 backdrop-blur-xl md:px-10 dark:border-white/10 dark:bg-white/[0.05] dark:shadow-white/6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl tracking-tight mb-6">
            Готовы снизить TCO и усилить
            <span className="text-brand-gradient animate-gradient"> поддержку ИТ-инфраструктуры</span>
            ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Onepoint сочетает поставки Enterprise Refurbished, независимую поддержку ИТ-оборудования и услуги DevOps для надёжной работы
            критичных сервисов бизнеса.
          </p>
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {contacts.map((item) => (
              <div key={item.label} className="rounded-2xl border border-black/8 bg-gradient-to-b from-white to-zinc-100 px-4 py-4 text-sm text-muted-foreground dark:border-white/10 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-black">
                <item.icon className="mx-auto mb-2 h-4 w-4 text-black dark:text-white" />
                {item.label}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-b from-white to-zinc-100 text-black border border-black/10 hover:shadow-2xl hover:shadow-black/8 transition-all duration-300 hover:scale-105 active:scale-95 group text-lg px-8 py-6 dark:border-white/12 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-black dark:text-white dark:hover:shadow-white/10"
              asChild
            >
              <a href="#contacts">
                Оставить заявку
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-black/10 bg-white/40 hover:bg-white hover:border-black/20 transition-all duration-300 hover:scale-105 active:scale-95 text-lg px-8 py-6 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.06] dark:hover:border-white/20"
              asChild
            >
              <a href="#packages">Запросить предложение</a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            Поддержка 24×7 · Гарантия до 10 лет · SLA с фиксированными метриками · Мультивендорное сопровождение
          </p>
        </motion.div>
      </div>
    </section>
  );
}
