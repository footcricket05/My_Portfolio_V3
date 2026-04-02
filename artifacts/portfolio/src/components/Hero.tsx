import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SiGithub, SiX } from "react-icons/si";
import { Mail, Download, ArrowRight, Linkedin } from "lucide-react";

const TITLES = [
  "CTO @ Stick & Dot",
  "AI/ML Developer",
  "IoT Explorer",
  "Generative AI Enthusiast"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-[100dvh] flex flex-col justify-center relative px-6 md:px-12 lg:px-24 pt-20">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block"
        >
          <span className="font-mono text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20 text-sm tracking-wider">
            SYSTEM.INIT()
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tighter mb-4"
        >
          Shaurya <span className="text-gradient">Srinet</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-12 md:h-16 mb-8"
        >
          <h2 className="text-2xl md:text-4xl text-muted-foreground font-light flex items-center gap-4">
            <span className="text-primary">&gt;</span>
            <motion.span
              key={titleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="font-mono"
            >
              {TITLES[titleIndex]}
            </motion.span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-3 h-8 md:h-10 bg-primary block"
            />
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl text-foreground max-w-2xl mb-12 font-light leading-relaxed border-l-2 border-primary/50 pl-6 italic"
        >
          "To build revolutionary Products!"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href="#projects"
            data-testid="link-projects"
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-md bg-primary px-8 font-medium text-primary-foreground duration-300 hover:bg-primary/90"
          >
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
            <span className="flex items-center gap-2">
              View My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#"
            data-testid="link-resume"
            className="group inline-flex h-14 items-center justify-center overflow-hidden rounded-md border border-primary/30 bg-transparent px-8 font-medium text-primary transition-all hover:bg-primary/10 glow-border"
          >
            <span className="flex items-center gap-2">
              <Download className="w-4 h-4" /> Download Resume
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-6"
        >
          {[
            { icon: SiGithub, href: "https://github.com/footcricket05", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/shaurya-srinet", label: "LinkedIn" },
            { icon: SiX, href: "https://twitter.com/ShauryaSrinet", label: "Twitter" },
            { icon: Mail, href: "mailto:ssrinet@deloitte.com", label: "Email" },
          ].map((social, i) => (
            <a
              key={social.label}
              href={social.href}
              {...(social.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              data-testid={`link-social-${social.label.toLowerCase()}`}
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 right-[10%] w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
