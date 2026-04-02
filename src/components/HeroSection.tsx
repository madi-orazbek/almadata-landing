import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, ShieldCheck, TimerReset, Wrench, ServerCog } from "lucide-react";
import { motion } from "motion/react";

const metrics = [
  { value: "до 70%", label: "экономия против OEM-поддержки" },
  { value: "1-2 недели", label: "типовой срок поставки из наличия" },
  { value: "24x7", label: "режим поддержки критичных систем" },
  { value: "SLA 2/4/8", label: "модели реакции под бизнес-приоритет" },
];

const highlights = [
  {
    icon: ServerCog,
    title: "Refurbished enterprise servers",
    description: "Серверы и СХД для DR, backup, VDI, масштабирования и вторичных контуров.",
  },
  {
    icon: ShieldCheck,
    title: "Third-Party Maintenance",
    description: "Поддержка после EOSL, мультивендорная модель и прогнозируемый бюджет эксплуатации.",
  },
  {
    icon: TimerReset,
    title: "24x7 infrastructure support",
    description: "Диагностика, буферный склад, выезд инженеров и восстановление сервисов по SLA.",
  },
  {
    icon: Wrench,
    title: "DevOps services",
    description: "CI/CD, IaC, Kubernetes, observability и эксплуатация production-сред.",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(239,239,239,0.88)_28%,transparent_60%),radial-gradient(circle_at_85%_12%,rgba(245,245,245,0.9),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f6f6f6_55%,#efefef_100%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),rgba(255,255,255,0.03)_24%,transparent_60%),radial-gradient(circle_at_85%_12%,rgba(255,255,255,0.05),transparent_28%),linear-gradient(180deg,#050505_0%,#101010_55%,#171717_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/12" />

      <div className="container relative z-10 mx-auto px-4 pb-20 pt-14 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <Badge className="mb-6 border border-black/10 bg-white/80 px-4 py-2 text-black hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/[0.08]">
                onepoint: enterprise infrastructure support
              </Badge>
            </motion.div>

            <motion.h1
              className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              Refurbished servers,{" "}
              <span className="text-brand-gradient">
                TPM support
              </span>{" "}
              и DevOps-экспертиза для enterprise-инфраструктуры
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
            >
              Помогаем компаниям снижать TCO, продлевать жизненный цикл оборудования и удерживать стабильность
              критичных сервисов через поставку корпоративного железа, независимую поддержку 24x7 и зрелые DevOps-практики.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-b from-white to-zinc-100 px-8 text-black border border-black/10 shadow-lg shadow-black/8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/10 dark:border-white/12 dark:bg-gradient-to-b dark:from-zinc-900 dark:to-black dark:text-white dark:hover:shadow-white/10"
                asChild
              >
                <a href="#contacts">
                  Получить консультацию
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-black/10 bg-white/50 px-8 backdrop-blur-sm transition-all duration-300 hover:border-black/20 hover:bg-white/80 dark:border-white/12 dark:bg-white/[0.03] dark:hover:border-white/20 dark:hover:bg-white/[0.06]"
                asChild
              >
                <a href="#services">Смотреть направления</a>
              </Button>
            </motion.div>

            <motion.div
              className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
            >
              {metrics.map((item) => (
                <div key={item.label} className="rounded-2xl border border-black/8 bg-white/65 p-4 backdrop-blur-sm shadow-sm shadow-black/3 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-white/4">
                  <div className="text-2xl font-semibold text-foreground">{item.value}</div>
                  <div className="mt-1 text-sm leading-6 text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-black/6 blur-3xl dark:bg-white/8" />
            <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-black/8 blur-3xl dark:bg-white/10" />
            <div className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-white/68 p-6 shadow-2xl shadow-black/8 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.05] dark:shadow-white/6">
              <div className="flex items-start justify-between gap-4 rounded-2xl border border-black/8 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.04]">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Operating model</p>
                  <h3 className="mt-3 text-2xl font-semibold">Одна команда на весь жизненный цикл инфраструктуры</h3>
                </div>
                <div className="rounded-2xl bg-black px-3 py-2 text-sm text-white dark:bg-white dark:text-black">24x7</div>
              </div>

              <div className="mt-5 grid gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-black/8 bg-gradient-to-br from-white to-zinc-50 p-5 transition-colors duration-300 hover:border-black/15 hover:bg-white dark:border-white/10 dark:bg-gradient-to-br dark:from-zinc-950 dark:to-zinc-900 dark:hover:border-white/18"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold">{item.title}</h4>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-black/8 bg-gradient-to-r from-zinc-100 via-white to-zinc-100 p-5 dark:border-white/10 dark:bg-gradient-to-r dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900">
                <p className="text-sm leading-6 text-foreground/90">
                  Поддерживаем HPE, Dell, Lenovo, Huawei, IBM, Cisco, NetApp, EMC и другие вендорные платформы в рамках
                  единой модели сопровождения.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
