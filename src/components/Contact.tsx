import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { LINKS } from "@/config/links";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("EmailJS env vars are not configured");
      toast.error("Email service is not configured. Please try again later.");
      return;
    }

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        toast.success("Message on its way ✉️", {
          description: "Thanks for reaching out — I usually reply within 24 hours.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("EmailJS error:", response);
        toast.error("Hmm, that didn’t quite send", {
          description: "Please try again in a moment or email me directly.",
        });
      }
    } catch (error) {
      console.error("EmailJS exception:", error);
      toast.error("Unable to send your message right now", {
        description: "Check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative w-full py-20 md:py-28 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 50%, #e0f2fe 100%)' }}
    >
      {/* ⭐ Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          {/* ⭐ Modern Section Header */}
          <div className="text-center mb-16 md:mb-20 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mt-4 mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent relative z-10">
                Get In <span className="text-gray-900">Touch</span>
              </span>
              {/* Text shadow/glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent blur-xl opacity-30 -z-0">
                Get In Touch
              </span>
            </h2>
            <p className="text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex justify-center items-center gap-3 mt-6">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-purple-600 rounded-full"></div>
              <div className="h-1.5 w-24 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-full shadow-lg"></div>
              <div className="h-1 w-12 bg-gradient-to-r from-teal-600 to-transparent rounded-full"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:pavankumarvinjamuri584@gmail.com"
                    className="group relative block"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-teal-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center space-x-4 p-5 glass rounded-2xl border border-purple-200/50 backdrop-blur-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: `linear-gradient(135deg, rgba(250, 245, 255, 0.9), rgba(240, 250, 255, 0.8))`,
                      }}
                    >
                      <div className="p-3 bg-white/90 backdrop-blur-xl rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Mail className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">Email</p>
                        <p className="font-semibold text-gray-900">pavankumarvinjamuri584@gmail.com</p>
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+17204537665"
                    className="group relative block"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-teal-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center space-x-4 p-5 glass rounded-2xl border border-purple-200/50 backdrop-blur-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: `linear-gradient(135deg, rgba(250, 245, 255, 0.9), rgba(240, 250, 255, 0.8))`,
                      }}
                    >
                      <div className="p-3 bg-white/90 backdrop-blur-xl rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Phone className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-medium">Phone</p>
                        <p className="font-semibold text-gray-900">720-453-7665</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href={LINKS.linkedinProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/30 via-blue-400/30 to-teal-400/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative p-5 glass rounded-2xl border border-purple-200/50 backdrop-blur-xl hover:border-purple-400 hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, rgba(250, 245, 255, 0.9), rgba(240, 250, 255, 0.8))`,
                      }}
                    >
                      <Linkedin className="h-6 w-6 text-purple-600" />
                    </div>
                  </a>
                  <a
                    href={LINKS.githubProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/30 via-blue-400/30 to-teal-400/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative p-5 glass rounded-2xl border border-purple-200/50 backdrop-blur-xl hover:border-purple-400 hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, rgba(250, 245, 255, 0.9), rgba(240, 250, 255, 0.8))`,
                      }}
                    >
                      <Github className="h-6 w-6 text-purple-600" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Availability badge */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/30 via-blue-400/30 to-teal-400/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white rounded-2xl p-6 shadow-xl">
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
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-teal-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <form onSubmit={handleSubmit} className="relative space-y-6 glass border border-purple-200/50 rounded-3xl p-8 shadow-2xl backdrop-blur-xl"
                  style={{
                    background: `linear-gradient(135deg, rgba(250, 245, 255, 0.95), rgba(240, 250, 255, 0.9))`,
                  }}
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-purple-200/50 focus:border-purple-400 bg-white/80 backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-purple-200/50 focus:border-purple-400 bg-white/80 backdrop-blur-sm"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="border-purple-200/50 focus:border-purple-400 min-h-[180px] bg-white/80 backdrop-blur-sm"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 hover:from-purple-700 hover:via-blue-700 hover:to-teal-700 text-white py-6 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative mt-24 pt-8 border-t border-purple-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              © 2025 Pavan Kumar Vinjamuri | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
