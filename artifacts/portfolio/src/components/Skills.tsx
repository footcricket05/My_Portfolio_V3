import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiPython, SiJavascript, SiHtml5,
  SiTensorflow, SiScikitlearn, SiOpencv, SiHuggingface,
  SiKubernetes, SiDocker, SiApachenifi,
  SiPostgresql, SiGit, SiFlask,
} from "react-icons/si";
import { Brain, Award, Database, Cloud, Code, Cpu } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "AI / ML",
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/30",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "OpenCV", icon: SiOpencv },
      { name: "Hugging Face", icon: SiHuggingface },
      { name: "GNNs", icon: Brain },
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "from-cyan-500 to-blue-500",
    borderColor: "border-cyan-500/30",
    skills: [
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Docker", icon: SiDocker },
      { name: "Azure", icon: Cloud },
      { name: "Apache NiFi", icon: SiApachenifi },
    ],
  },
  {
    title: "Databases",
    color: "from-emerald-500 to-teal-500",
    borderColor: "border-emerald-500/30",
    skills: [
      { name: "Neo4j", icon: Database },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "HBase", icon: Database },
    ],
  },
  {
    title: "Languages",
    color: "from-orange-500 to-amber-500",
    borderColor: "border-orange-500/30",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Java", icon: Code },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: Cpu },
    ],
  },
  {
    title: "Tools & Frameworks",
    color: "from-rose-500 to-red-500",
    borderColor: "border-rose-500/30",
    skills: [
      { name: "Flask", icon: SiFlask },
      { name: "Git", icon: SiGit },
      { name: "Prometheus", icon: Brain },
    ],
  },
];

const CERTIFICATIONS = [
  { name: "Oracle Certified Professional", short: "Oracle", accent: "from-red-500 to-orange-500" },
  { name: "Azure Fundamentals", short: "AZ-900", accent: "from-blue-500 to-cyan-500" },
  { name: "Azure AI Fundamentals", short: "AI-900", accent: "from-purple-500 to-blue-500" },
  { name: "Azure Data Fundamentals", short: "DP-900", accent: "from-emerald-500 to-cyan-500" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest mb-3">04. SKILLS</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Tech Arsenal</h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-testid={`skills-category-${cat.title.toLowerCase().replace(/\s+/g, "-")}`}
              className={`bg-card border ${cat.borderColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300`}
            >
              <div className={`text-sm font-mono font-bold bg-gradient-to-r ${cat.color} bg-clip-text text-transparent mb-5 uppercase tracking-wider`}>
                {cat.title}
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <skill.icon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground font-mono">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="font-mono text-sm text-muted-foreground mb-6 flex items-center gap-3">
            <Award className="w-4 h-4 text-primary" />
            CERTIFICATIONS
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                data-testid={`cert-${cert.short.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative overflow-hidden rounded-xl border border-white/10 bg-card p-5 text-center group hover:border-primary/30 transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.accent} opacity-5 group-hover:opacity-10 transition-opacity`} />
                <div className={`text-2xl font-bold font-mono bg-gradient-to-r ${cert.accent} bg-clip-text text-transparent mb-2`}>
                  {cert.short}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{cert.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          <p className="font-mono text-sm text-muted-foreground mb-6">EDUCATION</p>
          <div className="bg-card border border-white/10 hover:border-primary/30 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all">
            <div>
              <h3 className="text-lg font-bold text-foreground">B.Tech — Internet of Things (IoT)</h3>
              <p className="text-primary font-mono text-sm mt-1">SRM Institute of Science and Technology (SRMIST)</p>
              <p className="text-muted-foreground text-sm mt-1">Chennai, India</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="font-mono text-xs px-3 py-1 rounded-full border border-white/10 text-muted-foreground">IoT Major</span>
              <span className="font-mono text-xs px-3 py-1 rounded-full border border-white/10 text-muted-foreground">B.Tech</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
