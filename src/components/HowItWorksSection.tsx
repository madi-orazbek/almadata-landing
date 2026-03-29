import { motion } from "motion/react";
import { ClipboardList, Wrench, Headphones, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Анализ и планирование",
    description: "Сбор данных по оборудованию, определение SLA, расчет буферного склада и план поддержки.",
    step: "01",
  },
  {
    icon: Wrench,
    title: "Формирование и запуск",
    description: "Запуск сервиса после договора, создание буферного склада и подключение профильных инженеров.",
    step: "02",
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    description: "Диагностика, удаленная помощь, выезд инженера, замена деталей и управление инцидентами.",
    step: "03",
  },
  {
    icon: BarChart3,
    title: "Мониторинг и улучшение",
    description: "Регулярные отчеты, статистика по SLA и рекомендации по профилактике и оптимизации.",
    step: "04",
  },
];

const serviceMarks = [
  "SLA 2/4/8 часов",
  "Buffer stock / ЗИП",
  "Удаленная диагностика",
  "Отчетность и рекомендации",
];

export function HowItWorksSection() {
  return (
    <section id="process" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            Процесс работы
            <span className="text-brand-gradient"> по TPM support</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Прозрачная модель взаимодействия, ориентированная на SLA, минимизацию простоев и предсказуемую эксплуатацию.
          </p>
        </motion.div>

        <div className="mx-auto mb-12 grid max-w-5xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {serviceMarks.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-card/50 px-5 py-4 text-sm text-muted-foreground backdrop-blur-sm">
              {item}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 relative z-10">
                  <span className="text-xl font-bold text-brand-gradient">{step.step}</span>
                </div>

                <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-2xl bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:scale-110 transition-all duration-300">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
