import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    name: "Refurbished Servers",
    price: "По запросу",
    description: "Поставка и запуск enterprise refurbished оборудования",
    fit: "Для DR, backup, VDI, резервных и вторичных контуров",
    features: [
      "Поставка за 1–2 недели при наличии",
      "Снижение CAPEX относительно OEM",
      "Конфигурации под DR / Backup / VDI",
      "Тестирование и предпродажная проверка",
      "Гарантийные условия под проект",
    ],
    cta: "Запросить предложение",
    popular: false,
  },
  {
    name: "TPM Support 24x7",
    price: "По SLA",
    description: "Независимая поддержка серверов и СХД корпоративного класса",
    fit: "Для production-сред, где важны uptime, сроки реакции и экономия OPEX",
    features: [
      "Экономия до 70% против OEM",
      "Мультивендорная поддержка в одном контракте",
      "Поддержка после EOSL",
      "SLA 2/4/8 часов",
      "Глобальная сеть запчастей",
      "Выезд инженеров при необходимости",
      "Гарантия до 10 лет",
    ],
    cta: "Получить консультацию",
    popular: true,
  },
  {
    name: "Infrastructure & DevOps",
    price: "Custom",
    description: "Оптимизация инфраструктуры и эксплуатация через DevOps практики",
    fit: "Для платформ, которым нужны скорость релизов, наблюдаемость и зрелая эксплуатация",
    features: [
      "Infrastructure optimization",
      "CI/CD и автоматизация deployment",
      "Kubernetes / Docker / IaC",
      "Monitoring и centralized logging",
      "Backup & recovery стратегии",
      "DevSecOps и обучение команды",
      "Регулярная отчетность по SLA",
    ],
    cta: "Обсудить проект",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="packages" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            Пакеты услуг
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> для enterprise</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Гибкие модели подключения под оборудование, SLA и требования к доступности инфраструктуры.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <Card
                className={`relative h-full transition-all duration-300 ${
                  plan.popular
                    ? "border-primary/50 shadow-2xl shadow-primary/20 bg-gradient-to-b from-card to-primary/5"
                    : "border-border hover:border-primary/30 hover:shadow-xl"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-accent px-4 py-1 shadow-lg">Приоритетное решение</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">{plan.price}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{plan.fit}</p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="p-1 rounded-full bg-green-500/20 mr-3">
                          <Check className="h-3 w-3 text-green-400" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full transition-all duration-300 hover:scale-105 active:scale-95 ${
                      plan.popular ? "bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50" : "hover:bg-primary/10"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
