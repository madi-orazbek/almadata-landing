import { useState } from "react";
import { Button } from "./ui/button";
import { Copy, Check, Server, Workflow, Shield, ChartNoAxesCombined } from "lucide-react";
import { motion } from "motion/react";

const specExample = `DevOps & Infrastructure Stack

Cloud: AWS, Azure
Virtualization: Proxmox VE, VMware
OS: Linux, Windows
Containers: Kubernetes, Docker Swarm
IaC: Terraform, Ansible, Helm
Observability: Prometheus, Grafana, Loki, ELK
CI/CD: Jenkins, GitLab CI, Argo CD, Bitbucket Pipelines
Security: Vault, Keycloak
Data: PostgreSQL, MS SQL Server
Web: IIS, Apache, Nginx`;

const pillars = [
  {
    icon: Workflow,
    title: "CI/CD и delivery",
    description: "Пайплайны, release-процессы, GitOps и автоматизация выката между средами.",
  },
  {
    icon: Shield,
    title: "Надежность и безопасность",
    description: "Policy, secrets management, доступы, аудит и DevSecOps-практики.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Наблюдаемость и SLA",
    description: "Monitoring, centralized logging, алертинг и контроль стабильности сервисов.",
  },
];

export function CodeSection() {
  const [copied, setCopied] = useState(false);
  const [specLines, setSpecLines] = useState<string[]>([]);

  const handleCopy = () => {
    navigator.clipboard.writeText(specExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const displaySpecs = () => {
    setSpecLines([]);
    const lines = [
      "Анализ CI/CD контура...",
      "✓ Проверка IaC и Kubernetes выполнена",
      "✓ Мониторинг и centralized logging спроектированы",
      "✓ Backup / recovery сценарии согласованы",
      "✓ DevSecOps требования учтены",
      "План внедрения готов",
    ];

    lines.forEach((line, index) => {
      setTimeout(() => {
        setSpecLines((prev) => [...prev, line]);
      }, index * 500);
    });
  };

  return (
    <section id="devops" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6">
              DevOps as a
              <span className="text-brand-gradient"> Service</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              15+ лет в IT и 5+ лет в DevOps: автоматизация CI/CD, инфраструктура как код, observability,
              безопасность и стабильная эксплуатация enterprise платформ.
            </p>
            <div className="grid gap-4 mb-8">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <pillar.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">{pillar.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{pillar.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Внедрение и автоматизация CI/CD",
                "Kubernetes / Docker и IaC (Terraform, Ansible)",
                "Monitoring, centralized logging, DevSecOps",
                "Обучение команды и автоматизация deployment",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
            <Button
              onClick={displaySpecs}
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Server className="mr-2 h-4 w-4" />
              Показать DevOps стек
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="relative rounded-[2rem] border border-primary/20 bg-card/60 backdrop-blur-sm shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <Button size="sm" variant="ghost" onClick={handleCopy} className="h-7 text-xs hover:bg-primary/10 transition-all duration-200">
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 mr-1" />
                      Скопировано
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 mr-1" />
                      Копировать
                    </>
                  )}
                </Button>
              </div>

              <div className="p-6 font-mono text-sm overflow-x-auto">
                {specLines.length > 0 ? (
                  <div className="space-y-2">
                    {specLines.map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className={line.startsWith("✓") ? "text-green-400" : line.startsWith("План") ? "text-primary" : "text-muted-foreground"}
                      >
                        {line}
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <pre className="text-xs md:text-sm leading-relaxed">
                    <code>{specExample}</code>
                  </pre>
                )}
              </div>

              <div className="border-t border-white/10 bg-background/30 px-6 py-5">
                <p className="text-sm leading-6 text-muted-foreground">
                  Подключаемся как к существующему production-контуру, так и к запуску новой инфраструктуры: от аудита и
                  проектирования до handover и операционной поддержки.
                </p>
              </div>

              <div className="absolute inset-0 rounded-[2rem] opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-[2rem] border-2 border-primary/0 hover:border-primary/30 transition-all duration-500"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
