import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    name: "Standard Support",
    price: "Contact",
    description: "Essential support services for small deployments",
    features: [
      "Business hours support (9-18)",
      "Email and phone support",
      "4-hour response time",
      "Monthly health checks",
      "Basic monitoring included"
    ],
    cta: "Request Quote",
    popular: false
  },
  {
    name: "Professional Support",
    price: "Contact",
    description: "Comprehensive support for mission-critical systems",
    features: [
      "24/7 technical support",
      "1-hour response time",
      "Dedicated support team",
      "Weekly infrastructure reports",
      "Advanced monitoring & alerts",
      "Preventive maintenance",
      "Priority spare parts"
    ],
    cta: "Schedule Consultation",
    popular: true
  },
  {
    name: "Enterprise Support",
    price: "Custom",
    description: "Full-service infrastructure management",
    features: [
      "Dedicated infrastructure team",
      "15-minute critical response",
      "On-site support available",
      "Custom SLA agreements",
      "Capacity planning services",
      "Migration assistance",
      "Quarterly business reviews"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export function PricingSection() {
  return (
    <section id="infrastructure" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
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
            Service{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              packages
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Flexible support packages tailored to your infrastructure requirements and business objectives.
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
                    ? 'border-primary/50 shadow-2xl shadow-primary/20 bg-gradient-to-b from-card to-primary/5' 
                    : 'border-border hover:border-primary/30 hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-accent px-4 py-1 shadow-lg">
                      Recommended
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
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
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50' 
                        : 'hover:bg-primary/10'
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
