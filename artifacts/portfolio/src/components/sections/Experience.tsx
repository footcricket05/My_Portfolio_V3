import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    id: 1,
    role: "Cybersecurity Analyst",
    company: "Deloitte USI",
    location: "Hyderabad, Telangana",
    period: "Sept 2025 – Present",
    details: [
      "Performed identity governance activities across SailPoint ISC, Okta, and Microsoft Entra ID, including access certifications and entitlement reviews",
      "Defined review scope and approval workflows with business and IT owners; supported SOX, SOC 1/SOC 2, and DFS audit evidence",
      "Supported application onboarding and governance configuration (roles, entitlements, access profiles, SoD) and executed AD/JDBC/hybrid recertifications"
    ]
  },
  {
    id: 2,
    role: "SDE",
    company: "Propzing",
    location: "Chennai, Tamil Nadu",
    period: "March 2025 – July 2025",
    details: []
  },
  {
    id: 3,
    role: "Software Engineer Trainee",
    company: "Centre for AI & Robotics, DRDO",
    location: "Bangalore, Karnataka",
    period: "Oct 2024 – Dec 2024",
    details: [
      "Integrated data flows across Neo4j, PostgreSQL, and HBase using Apache NiFi, enhancing software configuration management and improving efficiency by 35%",
      "Implemented Horizontal Pod Autoscaling (HPA) for Kubernetes clusters using GPU metrics with Prometheus, optimizing resource usage by 40%",
      "Analyzed vessel density across ports within India's EEZ using AIS data"
    ]
  },
  {
    id: 4,
    role: "Research Intern",
    company: "Christ University, Bangalore",
    location: "Bangalore, Karnataka",
    period: "June 2023 – March 2024",
    details: []
  },
  {
    id: 5,
    role: "Data Analyst Intern",
    company: "ONEMi.in (Kissht.com)",
    location: "Mumbai, Maharashtra",
    period: "Feb 2023 – May 2023",
    details: []
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-primary" />
            Execution_Log
          </h2>
          <div className="h-1 w-20 bg-primary/50" />
        </motion.div>

        <div className="relative border-l-2 border-border ml-4 md:ml-8 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
              data-testid={`experience-${exp.id}`}
            >
              {/* Timeline Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground font-display">
                    {exp.role}
                  </h3>
                  <div className="text-lg text-primary font-medium mt-1">
                    @ {exp.company}
                  </div>
                </div>
                <div className="flex flex-col md:items-end text-sm font-mono text-muted-foreground">
                  <span className="bg-background border border-border px-3 py-1 rounded">
                    {exp.period}
                  </span>
                  <span className="mt-2">{exp.location}</span>
                </div>
              </div>

              {exp.details.length > 0 && (
                <ul className="space-y-3 mt-4">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="text-muted-foreground flex gap-3">
                      <span className="text-primary mt-1.5 opacity-60 text-xs">▹</span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
