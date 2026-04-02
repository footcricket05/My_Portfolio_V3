import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";

const ROLES = [
  "Security Engineer",
  "Software Developer",
  "IoT Engineer",
  "AI/ML Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex flex-col justify-center relative pt-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[30rem] h-[30rem] bg-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-mono mb-6 sm:mb-8" data-testid="hero-badge">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
            <span className="whitespace-nowrap">Available for opportunities</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 sm:mb-6 text-foreground">
            Shaurya Singh Srinet
          </h1>

          <div className="h-10 sm:h-12 md:h-16 mb-4 sm:mb-6 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="font-mono text-base sm:text-2xl md:text-3xl text-muted-foreground"
              >
                &gt; {ROLES[roleIndex]}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-6 sm:h-8 md:h-10 ml-2 align-middle bg-primary"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mb-8 sm:mb-12 leading-relaxed">
            Driving client-focused Security Engineering in Digital Trust and Privacy at Deloitte USI, with a passion for building secure, scalable solutions and exploring the latest in cybersecurity and software development.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors font-mono tracking-wide text-center text-sm sm:text-base"
              data-testid="hero-cta-contact"
            >
              Initiate Handshake
            </a>
            <a
              href="https://drive.google.com/file/d/1Dsn0b_fU_3DQmZmMEkm1NhpkuYgrP_x-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-secondary text-secondary-foreground font-medium rounded hover:bg-secondary/90 transition-colors font-mono tracking-wide flex items-center justify-center gap-2 text-sm sm:text-base"
              data-testid="hero-cta-resume"
            >
              <Download className="w-4 sm:w-5 h-4 sm:h-5" />
              View Resume
            </a>
            <div className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
              <a
                href="https://github.com/footcricket05"
                target="_blank"
                rel="noreferrer"
                className="p-2 sm:p-3 text-muted-foreground hover:text-foreground border border-border rounded hover:bg-muted transition-all"
                data-testid="hero-link-github"
                aria-label="GitHub"
              >
                <Github className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a
                href="https://linkedin.com/in/shaurya-srinet"
                target="_blank"
                rel="noreferrer"
                className="p-2 sm:p-3 text-muted-foreground hover:text-foreground border border-border rounded hover:bg-muted transition-all"
                data-testid="hero-link-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a
                href="mailto:ssrinet@deloitte.com?subject=Let's%20Connect"
                className="p-2 sm:p-3 text-muted-foreground hover:text-foreground border border-border rounded hover:bg-muted transition-all"
                data-testid="hero-link-email"
                aria-label="Email"
                role="link"
              >
                <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
