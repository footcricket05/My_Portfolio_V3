import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SiGithub, SiPython, SiFlask, SiOpenai } from "react-icons/si";
import { ExternalLink, Shield, Image, Languages, Eye, MessageSquare, Cpu } from "lucide-react";

const PROJECTS = [
  {
    title: "FuzzAIoT",
    description:
      "Advanced security framework for IoT networks protecting against DDoS attacks using Dynamic Fuzz Testing and Graph Neural Networks for real-time threat detection and mitigation.",
    icon: Shield,
    tags: ["Python", "NS3", "Flask", "GNNs", "IoT", "Security"],
    github: "https://github.com/footcricket05",
    accent: "from-red-500/20 to-orange-500/20",
    border: "hover:border-red-500/40",
    iconColor: "text-red-400",
  },
  {
    title: "Imageify",
    description:
      "Text-to-image generation app powered by Flask and Hugging Face's Stable Diffusion Pipeline. Users type a prompt and get AI-generated images in seconds.",
    icon: Image,
    tags: ["Flask", "Hugging Face", "Stable Diffusion", "Python", "HTML/CSS/JS"],
    github: "https://github.com/footcricket05",
    accent: "from-purple-500/20 to-pink-500/20",
    border: "hover:border-purple-500/40",
    iconColor: "text-purple-400",
  },
  {
    title: "LangNexus",
    description:
      "Real-time sign language translation application built for HackTrix Hackathon 2024. Facilitates seamless communication for the deaf and hard-of-hearing community.",
    icon: Languages,
    tags: ["Python", "Computer Vision", "ML", "Real-time", "OpenCV"],
    github: "https://github.com/footcricket05",
    accent: "from-emerald-500/20 to-teal-500/20",
    border: "hover:border-emerald-500/40",
    iconColor: "text-emerald-400",
  },
  {
    title: "RetinaXpert",
    description:
      "Eye disease identification and categorization using deep neural networks and machine learning models. Targets early detection with high accuracy from medical images.",
    icon: Eye,
    tags: ["Python", "Deep Learning", "TensorFlow", "Jupyter", "Medical AI"],
    github: "https://github.com/footcricket05",
    accent: "from-cyan-500/20 to-blue-500/20",
    border: "hover:border-cyan-500/40",
    iconColor: "text-cyan-400",
  },
  {
    title: "Whisp",
    description:
      "Java-based chat application with GUI enabling real-time communication via socket programming. Users set custom usernames and exchange messages through a defined server/port.",
    icon: MessageSquare,
    tags: ["Java", "Socket Programming", "Networks", "GUI"],
    github: "https://github.com/footcricket05",
    accent: "from-amber-500/20 to-yellow-500/20",
    border: "hover:border-amber-500/40",
    iconColor: "text-amber-400",
  },
  {
    title: "Computer Vision Suite",
    description:
      "Collection of CV projects: OCR, Color Identification, Social Distancing Detector, Face Mask Detection, Traffic Sign Classification, and Fault Detection System.",
    icon: Cpu,
    tags: ["Python", "OpenCV", "Scikit-learn", "Jupyter", "IoT"],
    github: "https://github.com/footcricket05",
    accent: "from-violet-500/20 to-indigo-500/20",
    border: "hover:border-violet-500/40",
    iconColor: "text-violet-400",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest mb-3">03. PROJECTS</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Things I've Built</h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-testid={`project-card-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
              className={`group relative bg-card border border-white/10 ${project.border} rounded-xl p-6 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-5">
                  <div className={`p-3 rounded-lg bg-card border border-white/10 ${project.iconColor}`}>
                    <project.icon className="w-6 h-6" />
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`project-github-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                    aria-label={`${project.title} GitHub`}
                  >
                    <SiGithub className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-1 rounded border border-white/10 bg-background/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/footcricket05"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-github-all-projects"
            className="inline-flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-primary transition-colors border border-white/10 hover:border-primary/30 rounded-full px-6 py-3"
          >
            <SiGithub className="w-4 h-4" />
            View all projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
