import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-secondary/20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Let's Connect</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-primary mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-1 bg-accent rounded-full"></div>
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="w-12 h-1 bg-accent rounded-full"></div>
            </div>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:pavankumarvinjamuri584@gmail.com"
                    className="group relative block"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative flex items-center space-x-4 p-5 bg-card/70 backdrop-blur-xl border border-border/50 rounded-2xl hover:shadow-xl transition-all">
                      <div className="p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl group-hover:scale-110 transition-transform">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-semibold text-foreground">pavankumarvinjamuri584@gmail.com</p>
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+17204537665"
                    className="group relative block"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative flex items-center space-x-4 p-5 bg-card/70 backdrop-blur-xl border border-border/50 rounded-2xl hover:shadow-xl transition-all">
                      <div className="p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl group-hover:scale-110 transition-transform">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-semibold text-foreground">720-453-7665</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/pavan-vinjamuri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-accent/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative p-5 bg-card/70 backdrop-blur-xl border border-border/50 rounded-2xl hover:border-accent hover:shadow-xl transition-all group-hover:scale-110">
                      <Linkedin className="h-6 w-6 text-accent" />
                    </div>
                  </a>
                  <a
                    href="https://github.com/PavanKumar-sudo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-primary/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative p-5 bg-card/70 backdrop-blur-xl border border-border/50 rounded-2xl hover:border-accent hover:shadow-xl transition-all group-hover:scale-110">
                      <Github className="h-6 w-6 text-accent" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Availability badge */}
              <div className="relative">
                <div className="absolute -inset-1 gradient-purple rounded-2xl blur-xl opacity-50"></div>
                <div className="relative gradient-purple text-white rounded-2xl p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider mb-2">Current Status</p>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                    <p className="text-lg font-bold">Available for Opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-2xl"></div>
                <form onSubmit={handleSubmit} className="relative space-y-6 bg-card/70 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-2xl">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-border/50 focus:border-accent bg-background/50 backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-border/50 focus:border-accent bg-background/50 backdrop-blur-sm"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="border-border/50 focus:border-accent min-h-[180px] bg-background/50 backdrop-blur-sm"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gradient-purple hover:opacity-90 text-white py-6 text-base font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative mt-24 pt-8 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Pavan Kumar Vinjamuri. Built with{" "}
              <span className="text-accent font-semibold">React</span> &{" "}
              <span className="text-primary font-semibold">TypeScript</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
