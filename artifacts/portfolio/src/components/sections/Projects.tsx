import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    id: "ddoswatch",
    title: "DDoSWatch",
    period: "Jan 2025 – Mar 2025",
    institution: "SRM Institute of Science and Technology",
    description: "Developed an AI-driven DDoS protection system for cloud environments combining AWS cloud tools and Machine Learning. Engineered real-time detection and mitigation pipelines with scalable automation, validated through IEEE publication.",
    tags: ["AWS", "Machine Learning", "Cloud Security", "Python", "AI"],
  },
  {
    id: "fuzzaiot",
    title: "FuzzAIoT",
    period: "Jul 2024 – Oct 2024",
    institution: "SRM Institute of Science and Technology",
    description: "Designed a security framework for detecting and mitigating DDoS attacks in IoT networks using Dynamic Fuzz Testing and Graph Neural Networks (GNNs). Conducted NS3 simulations to generate realistic traffic data for training GNN models, improving detection accuracy.",
    tags: ["Python", "NS3", "GNNs", "IoT Security", "Dynamic Fuzz Testing"],
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground flex items-center gap-3">
            <FolderGit2 className="w-8 h-8 text-primary" />
            Deployed_Architectures
          </h2>
          <div className="h-1 w-20 bg-primary/50" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors shadow-sm hover:shadow-md"
              data-testid={`project-${project.id}`}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold font-display text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-mono text-muted-foreground mt-2">
                    {project.institution} | {project.period}
                  </p>
                </div>
                <div className="p-2 bg-background border border-border rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-primary" />
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-background border border-border rounded text-xs font-mono text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
