import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, ArrowRight, Code2, Cloud, Zap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-primary/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(270_70%_60%/0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(220_60%_15%/0.08),transparent_50%)]"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-accent/20 rounded-full px-5 py-2.5 shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-sm font-medium text-accent">Available for new opportunities</span>
            </div>

            {/* Main Heading - Enhanced */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extralight tracking-tight text-foreground/90 animate-fade-in">
                  Hey, <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-accent">there</span>
                </h1>
              </div>
              
              <div className="relative inline-block group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h2 className="relative text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1]">
                  <span className="text-primary">I'M PAVAN</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-primary text-6xl sm:text-7xl lg:text-8xl">KUMAR</span>
                </h2>
                <div className="absolute -bottom-2 left-0 w-40 h-2.5 bg-gradient-to-r from-accent via-purple-400 to-accent rounded-full shadow-lg shadow-accent/50"></div>
              </div>
            </div>

            {/* Description with enhanced glass card */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-accent/30 via-primary/20 to-accent/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-75 group-hover:opacity-100"></div>
              <div className="relative bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-xl border border-accent/30 rounded-3xl p-8 shadow-2xl hover:shadow-accent/20 transition-all duration-500">
                <p className="text-xl leading-relaxed">
                  <span className="text-foreground/70">Full Stack Developer with </span>
                  <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-accent text-2xl">6+ years</span>
                  <span className="text-foreground/70"> of experience building </span>
                  <span className="font-bold text-foreground">scalable, secure, and cloud-native</span>
                  <span className="text-foreground/70"> applications across </span>
                  <span className="font-semibold text-primary">banking, healthcare, and automotive</span>
                  <span className="text-foreground/70"> domains.</span>
                </p>
              </div>
            </div>

            {/* Tech Stack Pills - Enhanced */}
            <div className="flex flex-wrap gap-4">
              <div className="group flex items-center gap-3 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border border-primary/30 rounded-full px-6 py-3 shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300">
                <div className="p-1.5 bg-primary/20 rounded-full">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <span className="text-base font-semibold text-foreground">Java & Spring Boot</span>
              </div>
              <div className="group flex items-center gap-3 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border border-accent/30 rounded-full px-6 py-3 shadow-lg hover:shadow-accent/30 hover:scale-105 transition-all duration-300">
                <div className="p-1.5 bg-accent/20 rounded-full">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <span className="text-base font-semibold bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">React & TypeScript</span>
              </div>
              <div className="group flex items-center gap-3 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border border-primary/30 rounded-full px-6 py-3 shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300">
                <div className="p-1.5 bg-primary/20 rounded-full">
                  <Cloud className="h-5 w-5 text-primary" />
                </div>
                <span className="text-base font-semibold text-foreground">AWS & Kubernetes</span>
              </div>
            </div>

            {/* CTA Buttons - Enhanced */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                onClick={() => scrollToSection("projects")}
                className="relative bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-white rounded-full px-8 py-6 text-base font-semibold shadow-2xl shadow-primary/30 hover:shadow-accent/40 transition-all duration-500 group border-0"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                className="relative bg-card/50 backdrop-blur-md border-2 border-accent/40 hover:bg-accent/10 hover:border-accent/60 text-foreground rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-accent/30 transition-all duration-300 group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/PavanKumar-sudo"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-accent hover:bg-accent/10 transition-all hover:scale-110 shadow-md hover:shadow-xl"
              >
                <Github className="h-5 w-5 text-foreground group-hover:text-accent transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/pavan-vinjamuri"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-accent hover:bg-accent/10 transition-all hover:scale-110 shadow-md hover:shadow-xl"
              >
                <Linkedin className="h-5 w-5 text-foreground group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Content - Enhanced Photo Section */}
          <div className="relative animate-scale-in lg:justify-self-end">
            {/* Floating accent cards */}
            <div className="absolute -top-8 -left-8 bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-md rounded-3xl p-6 border border-accent/20 shadow-2xl animate-fade-in z-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Code2 className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">6+</p>
                  <p className="text-xs text-muted-foreground">Years Exp</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-md rounded-3xl p-6 border border-primary/20 shadow-2xl animate-fade-in z-10" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Cloud className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">20+</p>
                  <p className="text-xs text-muted-foreground">Tech Stack</p>
                </div>
              </div>
            </div>

            {/* Main photo with enhanced styling */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-primary/20 to-accent/20 rounded-[2.5rem] blur-2xl"></div>
              <div className="relative overflow-hidden rounded-[2rem] border-4 border-card/50 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Pavan Kumar Vinjamuri"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Title card overlay */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%]">
                <div className="relative">
                  <div className="absolute -inset-1 gradient-purple rounded-2xl blur-lg opacity-75"></div>
                  <div className="relative gradient-purple text-white p-6 rounded-2xl shadow-2xl">
                    <p className="text-center text-2xl sm:text-3xl font-black leading-tight tracking-tight">
                      FULL STACK
                      <br />
                      DEVELOPER
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialization text */}
            <div className="mt-20 animate-slide-in" style={{ animationDelay: "0.4s" }}>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-primary">Specialized in:</span> Java, Spring Boot, React & Cloud-Native Engineering with expertise in Microservices Architecture
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating orbs */}
      <div className="absolute top-1/4 -right-48 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-48 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
