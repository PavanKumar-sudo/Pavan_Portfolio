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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:pavankumarvinjamuri584@gmail.com"
                    className="flex items-center space-x-4 p-4 bg-card border border-border rounded-xl hover:border-accent hover:bg-accent/5 transition-all group"
                  >
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">pavankumarvinjamuri584@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+17204537665"
                    className="flex items-center space-x-4 p-4 bg-card border border-border rounded-xl hover:border-accent hover:bg-accent/5 transition-all group"
                  >
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium text-foreground">720-453-7665</p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Social Links</h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/pavan-vinjamuri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-card border border-border rounded-xl hover:border-accent hover:bg-accent/10 transition-all"
                  >
                    <Linkedin className="h-6 w-6 text-accent" />
                  </a>
                  <a
                    href="https://github.com/PavanKumar-sudo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-card border border-border rounded-xl hover:border-accent hover:bg-accent/10 transition-all"
                  >
                    <Github className="h-6 w-6 text-accent" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-2xl p-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-border focus:border-accent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-border focus:border-accent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-border focus:border-accent min-h-[150px]"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-purple hover:opacity-90 text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Pavan Kumar Vinjamuri. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
