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
    title: "Enterprise Refurbished Servers",
    description: "Восстановленные и протестированные enterprise servers с поставкой из наличия за 1–2 недели для масштабирования и вторичных контуров.",
    badge: "Core",
  },
  {
    icon: Settings,
    title: "TPM (Third-Party Maintenance)",
    description: "Независимая TPM support: экономия до 70% против OEM, поддержка после EOSL и мультивендорная поддержка в одном контракте.",
    badge: "Core",
  },
  {
    icon: HeadphonesIcon,
    title: "Поддержка серверов 24x7",
    description: "Круглосуточная техническая поддержка, мониторинг инфраструктуры, реагирование по SLA и восстановление сервисов.",
    badge: "Premium",
  },
  {
    icon: Network,
    title: "Buffer Stock / ЗИП",
    description: "Буферный склад запчастей рядом с площадкой заказчика, автоматическое пополнение и быстрое восстановление оборудования.",
    badge: "Premium",
  },
  {
    icon: Database,
    title: "Backup / DR / VDI",
    description: "Инфраструктура для backup, DR-контуров, VDI и тестовых сред с прогнозируемой стоимостью владения.",
    badge: "Enterprise",
  },
  {
    icon: Gauge,
    title: "Infrastructure Optimization",
    description: "Аудит инфраструктуры, оптимизация ресурсов и план развития мощностей без избыточных капитальных затрат.",
    badge: "Enterprise",
  },
  {
    icon: Shield,
    title: "SLA и гарантия",
    description: "Гибкие SLA 2/4/8 часов, выезд инженеров при необходимости и гарантия до 10 лет по условиям договора.",
    badge: "Enterprise",
  },
  {
    icon: Clock,
    title: "DevOps as a Service",
    description: "DevOps услуги: CI/CD, Kubernetes, IaC, observability, centralized logging и DevSecOps для стабильной эксплуатации.",
    badge: "DevOps",
  },
];

const summary = [
  "Поставка оборудования под проект и сроки бизнеса",
  "Одна точка входа для поддержки нескольких вендоров",
  "Буферный склад и SLA под критичные сервисы",
  "DevOps-практики для устойчивой эксплуатации",
];

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
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Almadata</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Поставка refurbished серверов, third-party maintenance, infrastructure support и DevOps экспертиза
            для enterprise-инфраструктуры.
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
      </div>
    </section>
  );
}
