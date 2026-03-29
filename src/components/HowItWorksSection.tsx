import { motion } from "motion/react";
import { ClipboardList, Wrench, CheckCircle2, Headphones } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Requirements Analysis",
    description: "Comprehensive assessment of your infrastructure needs, capacity planning, and technical specifications.",
    step: "01"
  },
  {
    icon: Wrench,
    title: "Deployment & Integration",
    description: "Professional installation, configuration, and integration of servers and equipment into your environment.",
    step: "02"
  },
  {
    icon: CheckCircle2,
    title: "Testing & Validation",
    description: "Rigorous testing procedures to ensure all systems meet performance, security, and reliability standards.",
    step: "03"
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Continuous monitoring, maintenance, and technical support with guaranteed response times.",
    step: "04"
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
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
            Service{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              delivery process
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Structured approach ensuring quality and reliability at every stage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines for desktop */}
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
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 relative z-10">
                  <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {step.step}
                  </span>
                </div>
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-2xl bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:scale-110 transition-all duration-300">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                
                {/* Content */}
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
