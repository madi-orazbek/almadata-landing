import { useState } from "react";
import { Button } from "./ui/button";
import { Copy, Check, Server } from "lucide-react";
import { motion } from "motion/react";

const specExample = `Server Configuration Specifications

Model: Enterprise Rack Server R740xd
Processors: 2× Intel Xeon Gold 6248R
Memory: 512GB DDR4 ECC 2933MHz
Storage: 8× 2TB NVMe SSD RAID 10
Network: 4× 10GbE + 2× 25GbE
Management: iDRAC9 Enterprise
Power: Redundant 1100W Platinum PSU`;

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
      "Analyzing infrastructure requirements...",
      "✓ Computing capacity validated",
      "✓ Storage requirements confirmed",
      "✓ Network topology verified",
      "✓ Power and cooling assessed",
      "Ready for deployment"
    ];
    
    lines.forEach((line, index) => {
      setTimeout(() => {
        setSpecLines(prev => [...prev, line]);
      }, index * 500);
    });
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6">
              Rapid{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                deployment
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Streamlined infrastructure deployment process with comprehensive planning, 
              installation, and validation procedures.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Pre-configured server systems",
                "Validated reference architectures",
                "Professional installation services",
                "Complete documentation package"
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
              View Sample Configuration
            </Button>
          </motion.div>

          {/* Right - Spec block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm shadow-2xl overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleCopy}
                  className="h-7 text-xs hover:bg-primary/10 transition-all duration-200"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 mr-1" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </>
                  )}
                </Button>
              </div>

              {/* Spec content */}
              <div className="p-6 font-mono text-sm overflow-x-auto">
                {specLines.length > 0 ? (
                  <div className="space-y-2">
                    {specLines.map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className={
                          line.startsWith("✓") 
                            ? "text-green-400" 
                            : line.startsWith("Ready")
                            ? "text-primary"
                            : "text-muted-foreground"
                        }
                      >
                        {line}
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <pre className="text-xs md:text-sm leading-relaxed">
                    <code>
                      <span className="text-accent">Server Configuration Specifications</span>
                      {"\n\n"}
                      <span className="text-muted-foreground">Model:</span> <span className="text-foreground">Enterprise Rack Server R740xd</span>
                      {"\n"}
                      <span className="text-muted-foreground">Processors:</span> <span className="text-foreground">2× Intel Xeon Gold 6248R</span>
                      {"\n"}
                      <span className="text-muted-foreground">Memory:</span> <span className="text-foreground">512GB DDR4 ECC 2933MHz</span>
                      {"\n"}
                      <span className="text-muted-foreground">Storage:</span> <span className="text-foreground">8× 2TB NVMe SSD RAID 10</span>
                      {"\n"}
                      <span className="text-muted-foreground">Network:</span> <span className="text-foreground">4× 10GbE + 2× 25GbE</span>
                      {"\n"}
                      <span className="text-muted-foreground">Management:</span> <span className="text-foreground">iDRAC9 Enterprise</span>
                      {"\n"}
                      <span className="text-muted-foreground">Power:</span> <span className="text-foreground">Redundant 1100W Platinum PSU</span>
                    </code>
                  </pre>
                )}
              </div>

              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 hover:border-primary/30 transition-all duration-500"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
