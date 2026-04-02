import { motion } from "framer-motion";
import { Award, ShieldCheck, FileText, Trophy } from "lucide-react";

const CERTIFICATIONS = [
  "Okta Certified Professional",
  "SailPoint Identity Security Leader Credential",
  "SailPoint Identity Security Professional Credential",
  "Oracle Cloud Infrastructure 2025 Certified Multicloud Architect Professional",
  "Oracle Analytics Cloud 2025 Professional",
  "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
  "Alteryx Designer Core Certified",
];

const AWARDS = [
  {
    title: "Best Product Design for Sign Language App",
    event: "HackTrix Hackathon, IEEE SRM SB",
    date: "Mar 2024"
  },
  {
    title: "3rd Prize for Smart Dustbin",
    event: "IoT Expo'23, ASEAN-India",
    date: "Mar 2023"
  },
  {
    title: "1st Place for IoT Safety Solution",
    event: "Safe-a-Thon 2.0, VIT Vellore",
    date: "Dec 2021"
  }
];

const PUBLICATIONS = [
  {
    title: "DDoS Protection System for Cloud using AWS and Machine Learning",
    publisher: "IEEE Xplore"
  },
  {
    title: "AI4BCancer: Breast Cancer Classification using AutoML - TPOT with PCA",
    publisher: "IEEE Xplore"
  },
  {
    title: "AI-Driven Dynamic Fuzz Testing for IoT Security",
    publisher: "Springer"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground flex items-center gap-3">
            <Award className="w-8 h-8 text-primary" />
            Credentials_&_Honors
          </h2>
          <div className="h-1 w-20 bg-primary/50" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <h3 className="font-display text-xl font-bold text-foreground">Certifications</h3>
            </div>
            <ul className="space-y-4">
              {CERTIFICATIONS.map((cert, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                  <span className="text-primary font-bold">✓</span>
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <Trophy className="w-6 h-6 text-primary" />
              <h3 className="font-display text-xl font-bold text-foreground">Awards</h3>
            </div>
            <ul className="space-y-6">
              {AWARDS.map((award, i) => (
                <li key={i} className="group">
                  <h4 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">{award.title}</h4>
                  <div className="flex flex-col text-xs font-mono text-muted-foreground mt-1 gap-1">
                    <span>{award.event}</span>
                    <span className="bg-background border border-border w-fit px-2 py-0.5 rounded">{award.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <FileText className="w-6 h-6 text-primary" />
              <h3 className="font-display text-xl font-bold text-foreground">Publications</h3>
            </div>
            <ul className="space-y-6">
              {PUBLICATIONS.map((pub, i) => (
                <li key={i} className="group">
                  <h4 className="font-medium text-foreground text-sm leading-relaxed group-hover:text-primary transition-colors">{pub.title}</h4>
                  <p className="text-xs font-mono text-muted-foreground mt-2 bg-primary/10 text-primary w-fit px-2 py-1 rounded">
                    {pub.publisher}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
