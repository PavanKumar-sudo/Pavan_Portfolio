import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
              <span className="inline-block w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
              Available for new opportunities
            </Badge>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                Hey, <span className="italic font-serif">there</span>
              </h1>
              <div className="space-y-2">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                  I AM
                  <br />
                  PAVAN KUMAR
                </h2>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Full stack developer with 6 years of experience building scalable, secure, and cloud-native applications across banking, healthcare, and automotive domains.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="gradient-purple hover:opacity-90 text-white rounded-full px-8"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/PavanKumar-sudo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/pavan-vinjamuri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Photo and Title */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Pavan Kumar Vinjamuri"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <p className="text-xl sm:text-2xl font-bold leading-tight">
                  FULL STACK
                  <br />
                  DEVELOPER
                </p>
              </div>
            </div>

            <div className="mt-16 text-right animate-slide-in">
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm ml-auto">
                Specialized in Java, Spring Boot, React, and Cloud-Native Engineering with expertise in Microservices Architecture
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
