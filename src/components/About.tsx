import { GraduationCap, Award, Users, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Get to know me</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-primary mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-1 bg-accent rounded-full"></div>
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="w-12 h-1 bg-accent rounded-full"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-in">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-card/70 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-2xl">
                  <h3 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-accent to-primary rounded-full"></span>
                    Full Stack Developer
                  </h3>
                  <div className="space-y-5 text-muted-foreground leading-relaxed">
                    <p>
                      I am a full stack developer with <span className="font-bold text-accent">6 years of experience</span> building scalable web applications using <span className="font-semibold text-foreground">Java, Spring Boot, Node.js, React</span>, and cloud technologies like <span className="font-semibold text-foreground">AWS and Kubernetes</span>.
                    </p>
                    <p>
                      I have worked in <span className="font-semibold text-primary">banking, healthcare, and automotive</span> domains, focusing on microservices architecture, performance optimization, and secure backend systems. I enjoy solving technical problems, improving code quality, and contributing to end-to-end development in agile teams.
                    </p>
                    <p>
                      My expertise spans across frontend development with React and Angular, backend systems with Java and Node.js, cloud infrastructure with AWS and GCP, and DevOps practices including Docker, Kubernetes, and CI/CD pipelines.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-5 hover:border-accent/50 transition-all hover:scale-105 hover:shadow-xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-accent/10 rounded-xl mb-3 group-hover:bg-accent/20 transition-colors">
                      <Rocket className="h-6 w-6 text-accent" />
                    </div>
                    <p className="text-2xl font-bold text-primary">15+</p>
                    <p className="text-xs text-muted-foreground mt-1">Projects</p>
                  </div>
                </div>
                <div className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-5 hover:border-accent/50 transition-all hover:scale-105 hover:shadow-xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-xl mb-3 group-hover:bg-primary/20 transition-colors">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-2xl font-bold text-accent">3</p>
                    <p className="text-xs text-muted-foreground mt-1">Industries</p>
                  </div>
                </div>
                <div className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-5 hover:border-accent/50 transition-all hover:scale-105 hover:shadow-xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-accent/10 rounded-xl mb-3 group-hover:bg-accent/20 transition-colors">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <p className="text-2xl font-bold text-primary">99%</p>
                    <p className="text-xs text-muted-foreground mt-1">Test Coverage</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {/* Specialized In Card */}
              <div className="relative group z-10">
                <div className="absolute -inset-2 bg-gradient-to-r from-accent/30 via-primary/20 to-accent/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-xl border border-accent/30 rounded-3xl p-8 shadow-2xl hover:shadow-accent/20 transition-all z-10">
                  <h4 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                    <Award className="h-6 w-6 text-accent" />
                    Specialized in:
                  </h4>
                  <p className="text-lg leading-relaxed text-foreground/90">
                    <span className="font-bold text-primary">Java, Spring Boot, React & Cloud Engineering</span> with expertise in <span className="font-semibold text-accent">Microservices Architecture</span>, <span className="font-semibold text-accent">AWS/GCP</span>, and <span className="font-semibold text-accent">Kubernetes</span> deployments.
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 relative z-0">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-card/70 backdrop-blur-xl border border-border/50 rounded-2xl p-6 text-center hover:shadow-2xl transition-all">
                    <div className="p-2.5 bg-accent/10 rounded-xl mb-3 inline-block">
                      <Rocket className="h-5 w-5 text-accent" />
                    </div>
                    <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-accent mb-1">6+</p>
                    <p className="text-xs font-semibold text-muted-foreground">Years Experience</p>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-card/70 backdrop-blur-xl border border-border/50 rounded-2xl p-6 text-center hover:shadow-2xl transition-all">
                    <div className="p-2.5 bg-primary/10 rounded-xl mb-3 inline-block">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary mb-1">20+</p>
                    <p className="text-xs font-semibold text-muted-foreground">Tech Stack</p>
                  </div>
                </div>
              </div>

              {/* Education Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-card/70 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl">
                      <GraduationCap className="h-7 w-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-primary mb-4">Education</h4>
                      <div className="space-y-3">
                        <div className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-accent before:rounded-full">
                          <p className="font-bold text-foreground">Master of Science</p>
                          <p className="text-sm text-foreground/80">Computer Science</p>
                          <p className="text-sm text-muted-foreground mt-1">University of Colorado Denver, USA</p>
                          <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 bg-accent/10 rounded-full">
                            <span className="text-xs font-semibold text-accent">Jan 2023 – May 2025</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Expertise Badge */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-primary via-accent to-primary text-white rounded-3xl p-6 shadow-2xl">
                  <p className="text-sm font-semibold uppercase tracking-wider mb-2 opacity-90">Core Expertise</p>
                  <p className="text-lg font-bold leading-tight">
                    Microservices • Cloud-Native • Full Stack Development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
