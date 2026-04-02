import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Chief Technology Officer / SDE",
    company: "Stick & Dot",
    period: "Present",
    type: "Full-time",
    highlights: [
      "Lead and manage a talented engineering team",
      "Architect and deliver AI/ML-driven solutions at scale",
      "Align technology strategy with business goals to drive innovation",
      "Spearhead cutting-edge Generative AI and ML projects",
      "Design scalable systems for long-term growth",
    ],
    accent: "from-primary to-blue-500",
  },
  {
    role: "Research Intern",
    company: "DRDO — Centre for AI & Robotics",
    period: "Past",
    type: "Internship",
    highlights: [
      "Analyzed vessel density across ports within India's EEZ using AIS data",
      "Implemented HPA for Kubernetes clusters via Prometheus GPU metrics — 40% resource optimization",
      "Integrated Neo4j, PostgreSQL, and HBase using Apache NiFi — 35% efficiency improvement",
      "Collaborated on neuroscience project with Harvard University and Christ University",
      "Worked on: Understanding Human Cognition towards Urban Environment through Neuroscience",
    ],
    accent: "from-violet-500 to-purple-500",
  },
  {
    role: "Intern",
    company: "ONEMi.in (Kissht.com)",
    period: "Past",
    type: "Internship",
    highlights: [
      "Contributed to fintech platform engineering",
      "Built and maintained core product features",
    ],
    accent: "from-emerald-500 to-teal-500",
  },
  {
    role: "Web Development Intern",
    company: "Oasis Infobyte",
    period: "Past",
    type: "Internship",
    highlights: [
      "Developed and deployed web applications",
      "Gained hands-on full-stack development experience",
    ],
    accent: "from-orange-500 to-amber-500",
  },
  {
    role: "Sales Representative",
    company: "TechAnalogy",
    period: "Past",
    type: "Part-time",
    highlights: [
      "Tech product sales and client relationship management",
    ],
    accent: "from-pink-500 to-rose-500",
  },
  {
    role: "Joint Secretary",
    company: "Ramanujan Maths Club (RMC), SRMIST",
    period: "During College",
    type: "Leadership",
    highlights: [
      "Led club initiatives and events at SRMIST",
      "Organized mathematical competitions and workshops",
    ],
    accent: "from-cyan-500 to-sky-500",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest mb-3">02. EXPERIENCE</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Where I've Worked</h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`experience-card-${i}`}
                className="pl-12 md:pl-20 relative group"
              >
                <div className={`absolute left-2 md:left-5 top-6 w-5 h-5 rounded-full border-2 border-primary bg-background flex items-center justify-center`}>
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.accent}`} />
                </div>

                <div className="bg-card border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/5">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <p className={`font-mono text-sm bg-gradient-to-r ${exp.accent} bg-clip-text text-transparent font-medium mt-1`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="font-mono text-xs px-3 py-1 rounded-full border border-white/10 text-muted-foreground">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                        <span className="text-primary mt-1 flex-shrink-0">▹</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
