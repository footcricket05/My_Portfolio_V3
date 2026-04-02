import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone } from "lucide-react";
import { useSendContactMessage } from "@workspace/api-client-react";

export default function Contact() {
  const mutation = useSendContactMessage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    
    mutation.mutate(
      { data: formData },
      {
        onSuccess: (data) => {
          setStatus("success");
          setStatusMessage(data.message || "Message sent securely.");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        onError: (err: any) => {
          setStatus("error");
          setStatusMessage(err?.error || "Failed to establish connection. Try again.");
        }
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Initiate_Handshake
          </h2>
          <p className="text-muted-foreground font-mono">
            Open for opportunities, research collaborations, or technical discussions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
              <h3 className="font-mono text-xl font-bold text-foreground mb-6 pb-4 border-b border-border">
                Contact Vectors
              </h3>
              
              <div className="space-y-6">
                <a href="mailto:ssrinet@deloitte.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="p-3 bg-background border border-border rounded group-hover:border-primary/50 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="font-mono text-sm break-all">
                    ssrinet@deloitte.com
                  </div>
                </a>
                
                <a href="tel:+918019451133" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="p-3 bg-background border border-border rounded group-hover:border-primary/50 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="font-mono text-sm">
                    +91 8019451133
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 shadow-sm space-y-6" data-testid="contact-form">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-mono text-muted-foreground block">Identity</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-sans"
                    placeholder="John Doe"
                    data-testid="input-contact-name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-mono text-muted-foreground block">Return Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-sans"
                    placeholder="john@example.com"
                    data-testid="input-contact-email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-mono text-muted-foreground block">Header</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-sans"
                  placeholder="Subject of transmission"
                  data-testid="input-contact-subject"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-mono text-muted-foreground block">Payload</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-sans resize-y"
                  placeholder="Enter message content..."
                  data-testid="input-contact-message"
                />
              </div>

              {status === "success" && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/50 rounded-lg text-emerald-500 text-sm font-mono" data-testid="contact-success">
                  {">"} {statusMessage}
                </div>
              )}
              {status === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm font-mono" data-testid="contact-error">
                  {">"} ERROR: {statusMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-primary-foreground font-mono font-bold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="btn-submit-contact"
              >
                {mutation.isPending ? "TRANSMITTING..." : "TRANSMIT"}
                {!mutation.isPending && <Send className="w-5 h-5" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
