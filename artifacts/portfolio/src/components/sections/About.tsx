import { motion } from "framer-motion";
import { Terminal, MapPin, Building, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground flex items-center gap-3">
            <Terminal className="w-8 h-8 text-primary" />
            System.whoami()
          </h2>
          <div className="h-1 w-20 bg-primary/50" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 text-muted-foreground text-lg leading-relaxed"
          >
            <p>
              I'm <strong className="text-foreground font-semibold">Shaurya Singh Srinet</strong>, a Cybersecurity Analyst currently driving impactful security engineering at Deloitte USI. I specialize in Identity Governance and Administration (IGA), ensuring that the right people have the right access at the right time.
            </p>
            <p>
              My background bridges the gap between infrastructure security and cutting-edge research. I've designed AI-driven DDoS protection systems and integrated complex data pipelines, operating at the intersection of security, cloud architecture, and machine learning.
            </p>
            <p>
              When I'm not writing access policies or analyzing SOC compliance, I'm researching IoT security paradigms or simulating network attacks to build more resilient defenses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border p-8 rounded-xl shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Terminal className="w-32 h-32" />
            </div>
            
            <h3 className="font-mono text-xl font-semibold mb-6 text-foreground border-b border-border pb-4">
              Quick Specs
            </h3>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded text-primary mt-1">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Current Role</p>
                  <p className="text-muted-foreground">Cybersecurity Analyst @ Deloitte USI</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded text-primary mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Base of Operations</p>
                  <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded text-primary mt-1">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Education</p>
                  <p className="text-muted-foreground">B.Tech CSE (IoT Specialization)<br/>SRMIST KTR (GPA: 9.47/10)</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
