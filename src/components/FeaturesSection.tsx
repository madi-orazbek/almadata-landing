import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Server,
  Database,
  Shield,
  Clock,
  Network,
  HeadphonesIcon,
  Gauge,
  Settings,
} from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

const features = [
  {
    icon: Server,
    title: "Enterprise Refurbished",
    description: "Enterprise Refurbished — это восстановленное и протестированное оборудование корпоративного класса, подготовленное к эксплуатации по регламенту.",
    badge: "Ключевое",
  },
  {
    icon: Settings,
    title: "Независимая поддержка ИТ-оборудования",
    description: "Экономия до 70%, поддержка после окончания гарантии, один контракт на всех вендоров и гибкие SLA.",
    badge: "Ключевое",
  },
  {
    icon: HeadphonesIcon,
    title: "Поддержка 24×7 и SLA",
    description: "Поддержка и мониторинг 24×7, фиксированное время реакции и восстановления, выезд инженеров.",
    badge: "Приоритет",
  },
  {
    icon: Network,
    title: "Буферный склад комплектующих",
    description: "Запас комплектующих у клиента, быстрая замена, автоматическое пополнение и минимизация простоев.",
    badge: "Приоритет",
  },
  {
    icon: Database,
    title: "Refurbished серверы",
    description: "Экономия 40–70%, производительность корпоративного уровня, полная диагностика и тестирование, гарантия до 5 лет.",
    badge: "Инфраструктура",
  },
  {
    icon: Gauge,
    title: "Экспертиза",
    description: "AWS, Kubernetes, автоматизация CI/CD и оптимизация инфраструктуры для стабильной эксплуатации.",
    badge: "Экспертиза",
  },
  {
    icon: Shield,
    title: "SLA и гарантия",
    description: "Гарантия до 10 лет, журнал инцидентов, выполненные работы и рекомендации по повышению надёжности.",
    badge: "Гарантии",
  },
  {
    icon: Clock,
    title: "Услуги DevOps",
    description: "Автоматизация CI/CD, инфраструктура как код, Kubernetes, мониторинг, логирование и резервное копирование.",
    badge: "DevOps",
  },
];

const summary = [
  "Быстрая поставка 1–2 недели и готовность к работе",
  "Один контракт для мультивендорной инфраструктуры",
  "Гарантия до 10 лет и фиксированные SLA",
  "Поддержка Onepoint 24×7 для критичных сервисов",
];

const usageAreas = ["Расширение мощностей", "Резервные системы", "VDI", "Тестовые среды", "Масштабирование"];
const vendors = ["HPE", "Dell", "Lenovo", "Huawei", "IBM", "Cisco", "NetApp", "Pure Storage", "Fujitsu", "Hitachi", "Juniper", "Fortinet"];
const supportBenefits = ["Глобальная сеть складов", "Быстрая замена комплектующих", "Инженеры высокой квалификации"];

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        ref={cardRef}
        className="relative h-full overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/20 border-border hover:border-primary/50"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 100, 255, 0.15), transparent)`,
            }}
          />
        )}

        <CardHeader className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
              <feature.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <Badge variant="secondary" className="text-xs bg-secondary/50">
              {feature.badge}
            </Badge>
          </div>
          <CardTitle className="text-lg">{feature.title}</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <CardDescription>{feature.description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
            Ключевые направления
            <span className="text-brand-gradient"> Onepoint</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Поставка Enterprise Refurbished серверов, независимая поддержка ИТ-оборудования и услуги DevOps
            для корпоративной инфраструктуры.
          </p>
        </motion.div>
        <div className="mb-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {summary.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-muted-foreground backdrop-blur-sm">
              {item}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20">
            <h3 className="mb-3 text-xl font-semibold">Где используется</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {usageAreas.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20">
            <h3 className="mb-3 text-xl font-semibold">Поддерживаемые вендоры</h3>
            <p className="text-sm leading-7 text-muted-foreground">{vendors.join(", ")}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20">
            <h3 className="mb-3 text-xl font-semibold">Преимущества поддержки</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {supportBenefits.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
