import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { motion } from "motion/react";

const testimonials = [
  {
    content:
      "Enterprise: развёрнут TPM-контракт для мультивендорной инфраструктуры с единым окном поддержки и прозрачной отчетностью по SLA.",
    author: "Кейс 01",
    role: "Enterprise",
    company: "Инфраструктурный холдинг",
    avatar: "E1",
    result: "Единый контракт на поддержку и снижение операционной сложности.",
  },
  {
    content:
      "Banking: организована поддержка серверов 24x7, буферный склад запчастей и ускоренное восстановление критичных сервисов.",
    author: "Кейс 02",
    role: "Banking",
    company: "Финансовая организация",
    avatar: "B2",
    result: "Предсказуемое восстановление и контроль SLA для критичных систем.",
  },
  {
    content:
      "Government: подключена third-party maintenance модель после EOSL без срочного обновления всего парка оборудования.",
    author: "Кейс 03",
    role: "Government",
    company: "Государственный сектор",
    avatar: "G3",
    result: "Продлен жизненный цикл оборудования без резкого CAPEX.",
  },
  {
    content:
      "Construction / large business: поставлены refurbished серверы для резервного контура и пиковых нагрузок проекта.",
    author: "Кейс 04",
    role: "Construction",
    company: "Промышленно-строительная группа",
    avatar: "C4",
    result: "Быстрый ввод мощностей под проектные и резервные сценарии.",
  },
  {
    content:
      "Travel platforms: внедрены DevOps услуги, CI/CD и observability для стабильных релизов и контроля производительности.",
    author: "Кейс 05",
    role: "Travel platforms",
    company: "Цифровая платформа",
    avatar: "T5",
    result: "Ускорение поставки изменений и прозрачность эксплуатации.",
  },
  {
    content:
      "Large business: реализована инфраструктурная оптимизация и централизованная мультивендорная поддержка в одном договоре.",
    author: "Кейс 06",
    role: "Large business",
    company: "Корпоративный клиент",
    avatar: "L6",
    result: "Меньше подрядчиков, меньше простоев, выше управляемость.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="cases" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            Отрасли и
            <span className="text-brand-gradient"> кейсы внедрения</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Опыт работы в enterprise, banking, government, construction и travel-платформах.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
                <Card className="h-full border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 text-4xl text-primary/30">"</div>
                    <blockquote className="text-sm mb-6 text-muted-foreground">{testimonial.content}</blockquote>
                    <p className="mb-6 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-foreground/90">
                      {testimonial.result}
                    </p>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10 border-2 border-primary/20">
                        <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-primary">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">{testimonial.author}</div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
