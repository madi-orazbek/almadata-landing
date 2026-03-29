import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export function HeroSection() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const cards = scene.querySelectorAll('.floating-card');
    
    const animateCards = () => {
      cards.forEach((card, index) => {
        const element = card as HTMLElement;
        const time = Date.now() * 0.001;
        const offset = index * 0.5;
        
        const x = Math.sin(time + offset) * 30;
        const y = Math.cos(time + offset * 1.2) * 20;
        const rotateX = Math.sin(time + offset) * 10;
        const rotateY = Math.cos(time + offset * 0.8) * 15;
        
        element.style.transform = `
          translate3d(${x}px, ${y}px, 0) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg)
        `;
      });
      
      requestAnimationFrame(animateCards);
    };
    
    animateCards();
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Radial gradient glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl"
          style={{
            transform: `translate(-50%, 0) translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl"
          style={{
            transform: `translate3d(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px, 0)`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-6 px-4 py-2 bg-primary/10 border-primary/20 hover:bg-primary/20 transition-colors duration-300">
            ✨ Enterprise-grade infrastructure solutions
          </Badge>
        </motion.div>
        
        <motion.h1
          className="mx-auto max-w-4xl text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Centralized IT infrastructure{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
            management
          </span>{" "}
          and support
        </motion.h1>
        
        <motion.p
          className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Professional server deployment, storage systems, and networking infrastructure 
          with comprehensive technical support. One point of contact for complete control.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            Request Consultation
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
            View Infrastructure
          </Button>
        </motion.div>
        
        {/* 3D Graphics Scene */}
        <motion.div
          className="relative mx-auto max-w-5xl h-96 lg:h-[500px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div 
            ref={sceneRef}
            className="relative w-full h-full"
            style={{ perspective: '1000px' }}
          >
            {/* Central Hub */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-3xl shadow-2xl flex items-center justify-center z-10 animate-glow">
              <div className="w-16 h-16 bg-background/90 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg"></div>
              </div>
            </div>
            
            {/* Floating Design System Components */}
            
            {/* Button Component Card */}
            <div className="floating-card absolute top-16 left-20 w-40 h-24 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg p-4 transform-gpu hover:border-primary/50 transition-colors duration-300">
              <div className="text-xs text-muted-foreground mb-2">Button</div>
              <div className="space-y-2">
                <div className="h-3 bg-gradient-to-r from-primary to-accent rounded w-16"></div>
                <div className="h-3 bg-muted rounded w-20"></div>
              </div>
            </div>
            
            {/* Color Tokens Card */}
            <div className="floating-card absolute top-32 right-16 w-36 h-28 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg p-4 transform-gpu hover:border-primary/50 transition-colors duration-300">
              <div className="text-xs text-muted-foreground mb-2">Colors</div>
              <div className="grid grid-cols-4 gap-1">
                <div className="w-4 h-4 bg-primary rounded"></div>
                <div className="w-4 h-4 bg-accent rounded"></div>
                <div className="w-4 h-4 bg-chart-2 rounded"></div>
                <div className="w-4 h-4 bg-chart-3 rounded"></div>
                <div className="w-4 h-4 bg-chart-4 rounded"></div>
                <div className="w-4 h-4 bg-chart-5 rounded"></div>
                <div className="w-4 h-4 bg-secondary rounded"></div>
                <div className="w-4 h-4 bg-muted rounded"></div>
              </div>
            </div>
            
            {/* Typography Card */}
            <div className="floating-card absolute bottom-20 left-12 w-44 h-32 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg p-4 transform-gpu hover:border-primary/50 transition-colors duration-300">
              <div className="text-xs text-muted-foreground mb-2">Typography</div>
              <div className="space-y-2">
                <div className="h-4 bg-foreground/90 rounded w-32"></div>
                <div className="h-3 bg-foreground/70 rounded w-28"></div>
                <div className="h-2 bg-foreground/50 rounded w-24"></div>
              </div>
            </div>
            
            {/* Component Library Card */}
            <div className="floating-card absolute bottom-24 right-20 w-38 h-36 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg p-4 transform-gpu hover:border-primary/50 transition-colors duration-300">
              <div className="text-xs text-muted-foreground mb-2">Components</div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded"></div>
                  <div className="h-2 bg-muted rounded flex-1"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent rounded"></div>
                  <div className="h-2 bg-muted rounded flex-1"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-chart-2 rounded"></div>
                  <div className="h-2 bg-muted rounded flex-1"></div>
                </div>
              </div>
            </div>
            
            {/* Spacing Tokens */}
            <div className="floating-card absolute top-20 right-32 w-32 h-20 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg p-4 transform-gpu hover:border-primary/50 transition-colors duration-300">
              <div className="text-xs text-muted-foreground mb-2">Spacing</div>
              <div className="space-y-1">
                <div className="h-1 bg-primary rounded w-4"></div>
                <div className="h-1 bg-primary rounded w-8"></div>
                <div className="h-1 bg-primary rounded w-12"></div>
                <div className="h-1 bg-primary rounded w-16"></div>
              </div>
            </div>
            
            {/* Icon Library */}
            <div className="floating-card absolute bottom-32 left-32 w-36 h-24 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg p-4 transform-gpu hover:border-primary/50 transition-colors duration-300">
              <div className="text-xs text-muted-foreground mb-2">Icons</div>
              <div className="grid grid-cols-4 gap-2">
                <div className="w-4 h-4 bg-foreground/20 rounded"></div>
                <div className="w-4 h-4 bg-foreground/30 rounded"></div>
                <div className="w-4 h-4 bg-foreground/40 rounded"></div>
                <div className="w-4 h-4 bg-foreground/50 rounded"></div>
              </div>
            </div>
            
            {/* Documentation Card */}
            <div className="floating-card absolute top-40 left-40 w-40 h-28 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg p-4 transform-gpu hover:border-primary/50 transition-colors duration-300">
              <div className="text-xs text-muted-foreground mb-2">Docs</div>
              <div className="space-y-1">
                <div className="h-2 bg-muted rounded w-full"></div>
                <div className="h-2 bg-muted rounded w-3/4"></div>
                <div className="h-2 bg-muted rounded w-5/6"></div>
                <div className="h-2 bg-muted rounded w-2/3"></div>
              </div>
            </div>
            
            {/* Version Control */}
            <div className="floating-card absolute top-12 right-48 w-34 h-26 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl shadow-lg p-4 transform-gpu hover:border-primary/50 transition-colors duration-300">
              <div className="text-xs text-muted-foreground mb-2">Versions</div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-xs">v2.1.0</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="text-xs">v2.0.5</div>
                </div>
              </div>
            </div>
            
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(100, 100, 255)" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="rgb(150, 100, 255)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="rgb(100, 100, 255)" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" />
              <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
              <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1s' }} />
              <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            </svg>
            
            {/* Background Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trusted By Section */}
        <motion.div
          className="mt-20 pt-12 border-t border-border/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground mb-8">Trusted by government and industrial enterprises</p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {["MosEnergy", "RosTech", "TransCorp", "InfraBuild", "StateNet", "IndustryTech"].map((company, index) => (
              <div
                key={index}
                className="text-xl font-semibold hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}