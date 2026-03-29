import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { motion } from "motion/react";

const testimonials = [
  {
    content: "OnePoint Support delivered a complete data center infrastructure upgrade on schedule. Their technical expertise and project management capabilities exceeded our expectations.",
    author: "Dmitry Volkov",
    role: "IT Director",
    company: "Industrial Holdings LLC",
    avatar: "DV"
  },
  {
    content: "The 24/7 support and rapid response times have been critical for our operations. OnePoint Support team demonstrated deep knowledge of enterprise infrastructure.",
    author: "Elena Petrova",
    role: "Chief Technology Officer",
    company: "State Energy Corp",
    avatar: "EP"
  },
  {
    content: "Professional approach to capacity planning and infrastructure scaling. The team provided comprehensive solutions that addressed both current needs and future growth.",
    author: "Sergei Ivanov",
    role: "Infrastructure Manager",
    company: "Transportation Systems",
    avatar: "SI"
  },
  {
    content: "Outstanding technical support and infrastructure management. OnePoint Support has become an integral part of our IT operations with their reliable and professional service.",
    author: "Marina Sokolova",
    role: "Operations Director",
    company: "Federal Data Center",
    avatar: "MS"
  },
  {
    content: "The migration to new server infrastructure was executed flawlessly with zero downtime. Exceptional planning and execution by the OnePoint Support engineering team.",
    author: "Viktor Kuznetsov",
    role: "Head of IT",
    company: "Manufacturing Group",
    avatar: "VK"
  },
  {
    content: "OnePoint Support's proactive monitoring and maintenance approach has significantly improved our infrastructure reliability and reduced operational costs.",
    author: "Olga Romanova",
    role: "IT Service Manager",
    company: "Regional Government",
    avatar: "OR"
  }
];

export function TestimonialsSection() {
  return (
    <section id="clients" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
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
            Trusted by{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              enterprise clients
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Government agencies and industrial organizations rely on our infrastructure expertise and support services.
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
                  <blockquote className="text-sm mb-6 text-muted-foreground">
                    {testimonial.content}
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10 border-2 border-primary/20">
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                        {testimonial.avatar}
                      </AvatarFallback>
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
