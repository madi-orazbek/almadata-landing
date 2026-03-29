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
  Settings
} from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

const features = [
  {
    icon: Server,
    title: "Server Infrastructure",
    description: "Enterprise-grade server solutions including rack servers, blade systems, and modular infrastructure tailored to your requirements.",
    badge: "Core"
  },
  {
    icon: Database,
    title: "Storage Systems",
    description: "Scalable storage arrays, SAN/NAS solutions, and backup systems ensuring data integrity and availability.",
    badge: "Core"
  },
  {
    icon: Network,
    title: "Network Equipment",
    description: "Complete networking solutions from switches and routers to load balancers and network security appliances.",
    badge: "Core"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Technical Support",
    description: "Round-the-clock technical assistance with guaranteed response times and dedicated support team.",
    badge: "Premium"
  },
  {
    icon: Settings,
    title: "Infrastructure Management",
    description: "Comprehensive management services including monitoring, maintenance, and optimization of your IT infrastructure.",
    badge: "Premium"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Implementation of security measures and compliance with industry standards including ISO 27001 and government regulations.",
    badge: "Enterprise"
  },
  {
    icon: Gauge,
    title: "Performance Monitoring",
    description: "Real-time monitoring and analytics of infrastructure performance with proactive issue detection and resolution.",
    badge: "Premium"
  },
  {
    icon: Clock,
    title: "SLA Guarantees",
    description: "Guaranteed uptime with clear service level agreements and comprehensive incident response procedures.",
    badge: "Enterprise"
  }
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
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
        {/* Cursor-aware glow effect */}
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
      {/* Background decoration */}
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
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              infrastructure services
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Complete solutions for enterprise IT infrastructure deployment, management, and support 
            with guaranteed service levels.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
