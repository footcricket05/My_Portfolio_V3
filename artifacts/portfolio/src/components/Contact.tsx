import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { SiGithub, SiX, SiInstagram } from "react-icons/si";
import { Mail, Send, User, MessageSquare, CheckCircle, Linkedin } from "lucide-react";

const SOCIALS = [
  { icon: SiGithub, label: "GitHub", href: "https://github.com/footcricket05", value: "footcricket05" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/shaurya-srinet", value: "in/shaurya-srinet" },
  { icon: SiX, label: "Twitter", href: "https://twitter.com/ShauryaSrinet", value: "@ShauryaSrinet" },
  { icon: SiInstagram, label: "Instagram", href: "https://instagram.com/shauryasrinet._", value: "@shauryasrinet._" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest mb-3">05. CONTACT</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get In Touch</h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm always open to interesting conversations, collaborations, and new opportunities.
              Whether you have a project in mind, a question, or just want to say hello — my inbox is always open.
            </p>

            <a
              href="mailto:ssrinet@deloitte.com"
              data-testid="contact-email-link"
              className="group flex items-center gap-4 p-5 bg-card border border-white/10 hover:border-primary/40 rounded-xl transition-all"
            >
              <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground mb-1">EMAIL</p>
                <p className="font-mono text-foreground group-hover:text-primary transition-colors">
                  ssrinet@deloitte.com
                </p>
              </div>
            </a>

            <div className="space-y-3">
              <p className="font-mono text-sm text-muted-foreground">FIND ME ON</p>
              {SOCIALS.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`contact-social-${social.label.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="group flex items-center gap-4 p-4 bg-card border border-white/10 hover:border-primary/30 rounded-xl transition-all"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <p className="text-xs font-mono text-muted-foreground">{social.label}</p>
                    <p className="text-sm font-mono text-foreground group-hover:text-primary transition-colors">{social.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center gap-6 bg-card border border-emerald-500/30 rounded-xl p-12 text-center"
              >
                <CheckCircle className="w-16 h-16 text-emerald-400" />
                <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you shortly.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  data-testid="button-send-another"
                  className="font-mono text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-white/10 rounded-xl p-8 space-y-5"
                data-testid="contact-form"
              >
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground flex items-center gap-2">
                    <User className="w-3 h-3" /> NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    data-testid="input-name"
                    placeholder="Your name"
                    className="w-full bg-background border border-white/10 hover:border-white/20 focus:border-primary/50 rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground flex items-center gap-2">
                    <Mail className="w-3 h-3" /> EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    data-testid="input-email"
                    placeholder="your@email.com"
                    className="w-full bg-background border border-white/10 hover:border-white/20 focus:border-primary/50 rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground flex items-center gap-2">
                    <MessageSquare className="w-3 h-3" /> MESSAGE
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    data-testid="input-message"
                    placeholder="What's on your mind?"
                    rows={5}
                    className="w-full bg-background border border-white/10 hover:border-white/20 focus:border-primary/50 rounded-lg px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  data-testid="button-send-message"
                  className="group w-full h-12 bg-primary text-primary-foreground rounded-lg font-mono text-sm font-medium flex items-center justify-center gap-3 hover:bg-primary/90 transition-all"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
