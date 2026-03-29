import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function CTABanner() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 animate-gradient"></div>
      <div className="absolute inset-0 backdrop-blur-3xl"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl tracking-tight mb-6">
            Ready to optimize your{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              infrastructure
            </span>
            ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our technical team to discuss your infrastructure requirements and 
            receive a comprehensive proposal tailored to your organization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 active:scale-95 group text-lg px-8 py-6"
            >
              Request Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 active:scale-95 text-lg px-8 py-6"
            >
              View Case Studies
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            Enterprise contracts available · Custom SLA agreements · Dedicated support teams
          </p>
        </motion.div>
      </div>
    </section>
  );
}
