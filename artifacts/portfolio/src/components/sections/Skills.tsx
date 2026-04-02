import { motion } from "framer-motion";
import { Cpu, Server, Database, Cloud, Wrench, Shield, Zap, Lock } from "lucide-react";
import { SiPython, SiCplusplus, SiJava, SiTensorflow, SiPytorch, SiKeras, SiScikitlearn, SiPostgresql, SiMysql, SiApachekafka, SiDocker, SiKubernetes, SiTerraform, SiGit, SiGithub, SiPostman, SiAmazonaws, SiApachespark } from "react-icons/si";

const SKILL_CATEGORIES = [
  {
    id: "languages",
    title: "Languages",
    icon: <TerminalIcon className="w-5 h-5" />,
    skills: [
      { name: "Python", icon: <SiPython className="w-4 h-4" /> },
      { name: "C++", icon: <SiCplusplus className="w-4 h-4" /> },
      { name: "Java", icon: <SiJava className="w-4 h-4" /> },
      { name: "SQL", icon: <Database className="w-4 h-4" /> }
    ]
  },
  {
    id: "aiml",
    title: "AI/ML Frameworks",
    icon: <Cpu className="w-5 h-5" />,
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow className="w-4 h-4" /> },
      { name: "PyTorch", icon: <SiPytorch className="w-4 h-4" /> },
      { name: "Keras", icon: <SiKeras className="w-4 h-4" /> },
      { name: "LangChain", icon: <Zap className="w-4 h-4" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn className="w-4 h-4" /> },
      { name: "PySpark", icon: <SiApachespark className="w-4 h-4" /> }
    ]
  },
  {
    id: "backend",
    title: "Databases & Backend",
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4" /> },
      { name: "MySQL", icon: <SiMysql className="w-4 h-4" /> },
      { name: "Apache Kafka", icon: <SiApachekafka className="w-4 h-4" /> }
    ]
  },
  {
    id: "cloud",
    title: "IoT & Cloud",
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      { name: "AWS", icon: <SiAmazonaws className="w-4 h-4" /> },
      { name: "Docker", icon: <SiDocker className="w-4 h-4" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="w-4 h-4" /> },
      { name: "Terraform", icon: <SiTerraform className="w-4 h-4" /> },
      { name: "IoT Security", icon: <Shield className="w-4 h-4" /> },
      { name: "5G & Protocols", icon: <Zap className="w-4 h-4" /> }
    ]
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      { name: "SailPoint ISC", icon: <Lock className="w-4 h-4" /> },
      { name: "Okta", icon: <Shield className="w-4 h-4" /> },
      { name: "Microsoft Entra ID", icon: <Lock className="w-4 h-4" /> },
      { name: "Postman", icon: <SiPostman className="w-4 h-4" /> },
      { name: "Git", icon: <SiGit className="w-4 h-4" /> },
      { name: "GitHub", icon: <SiGithub className="w-4 h-4" /> },
      { name: "Apache NiFi", icon: <Server className="w-4 h-4" /> },
      { name: "Alteryx", icon: <Wrench className="w-4 h-4" /> }
    ]
  }
];

// Helper icon component for Languages
function TerminalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground flex items-center gap-3">
            <Cpu className="w-8 h-8 text-primary" />
            Technical_Matrix
          </h2>
          <div className="h-1 w-20 bg-primary/50" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
              data-testid={`skill-category-${category.id}`}
            >
              <div className="flex items-center gap-3 mb-6 border-b border-border pb-4 text-foreground font-display font-semibold">
                <div className="text-primary p-2 bg-primary/10 rounded">
                  {category.icon}
                </div>
                {category.title}
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 bg-background border border-border rounded hover:border-primary/50 transition-colors"
                  >
                    {skill.icon && <span className="text-muted-foreground">{skill.icon}</span>}
                    <span className="text-sm font-mono text-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
