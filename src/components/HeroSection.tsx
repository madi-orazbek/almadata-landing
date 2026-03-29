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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,194,255,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(96,232,186,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 pb-20 pt-14 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <Badge className="mb-6 border border-primary/20 bg-primary/10 px-4 py-2 text-primary hover:bg-primary/15">
                Almadata: enterprise infrastructure support
              </Badge>
            </motion.div>

            <motion.h1
              className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              Refurbished servers,{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
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
                className="bg-gradient-to-r from-primary to-accent px-8 text-accent-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30"
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
                className="border-border bg-card/40 px-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card/70"
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
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
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
            <div className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card/70 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-background/40 p-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Operating model</p>
                  <h3 className="mt-3 text-2xl font-semibold">Одна команда на весь жизненный цикл инфраструктуры</h3>
                </div>
                <div className="rounded-2xl bg-primary/10 px-3 py-2 text-sm text-primary">24x7</div>
              </div>

              <div className="mt-5 grid gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-primary/30 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
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

              <div className="mt-5 rounded-2xl border border-accent/20 bg-accent/10 p-5">
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
