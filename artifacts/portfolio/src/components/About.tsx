import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SiGithub, SiX } from "react-icons/si";
import { MapPin, Users, Star, Linkedin } from "lucide-react";

const INTERESTS = [
  "IoT", "AI/ML", "Cloud & DevOps", "Networks",
  "Cybersecurity", "Agentic AI", "Generative AI", "Robotics"
];

const STATS = [
  { icon: Users, value: "500+", label: "LinkedIn Connections" },
  { icon: Star, value: "11", label: "Recommendations" },
  { icon: SiGithub, value: "72+", label: "GitHub Followers" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="font-mono text-primary text-sm tracking-widest mb-3">01. ABOUT</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Who I Am</h2>
        <div className="mt-4 h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm Shaurya, a tech enthusiast and IoT major from{" "}
            <span className="text-foreground font-medium">SRMIST, Chennai</span>. Currently
            serving as <span className="text-primary font-medium">CTO at Stick & Dot</span>,
            where I lead AI/ML-driven engineering teams and architect systems for long-term growth.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            I've done research at <span className="text-foreground font-medium">DRDO's Centre for AI & Robotics</span>,
            built fintech systems at <span className="text-foreground font-medium">ONEMi.in (Kissht.com)</span>,
            and collaborated on a neuroscience project with{" "}
            <span className="text-foreground font-medium">Harvard University and Christ University</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Passionate about IoT, Generative AI, and Cybersecurity — currently learning{" "}
            <span className="text-primary font-medium">Agentic AI</span> and deepening my
            understanding of cybersecurity systems.
          </p>

          <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm pt-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Chennai, India</span>
          </div>

          <div className="flex items-center gap-4 pt-2">
            {[
              { icon: SiGithub, href: "https://github.com/footcricket05", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/shaurya-srinet", label: "LinkedIn" },
              { icon: SiX, href: "https://twitter.com/ShauryaSrinet", label: "Twitter" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`about-link-${s.label.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={s.label}
              >
                <s.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-8"
        >
          <div className="grid grid-cols-3 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-card border border-white/10 rounded-xl p-5 text-center hover:border-primary/30 transition-colors"
              >
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div>
            <p className="font-mono text-sm text-muted-foreground mb-4">INTERESTS &amp; FOCUS AREAS</p>
            <div className="flex flex-wrap gap-3">
              {INTERESTS.map((interest, i) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                  data-testid={`interest-tag-${interest.toLowerCase().replace(/\s+/g, "-")}`}
                  className="font-mono text-sm px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary hover:bg-primary/15 transition-colors cursor-default"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
