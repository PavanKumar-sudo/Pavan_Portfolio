import { GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 animate-slide-in">
              <h3 className="text-2xl font-semibold text-primary">Full Stack Developer</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a full stack developer with 6 years of experience building scalable web applications using Java, Spring Boot, Node.js, React, and cloud technologies like AWS and Kubernetes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I have worked in banking, healthcare, and automotive domains, focusing on microservices architecture, performance optimization, and secure backend systems. I enjoy solving technical problems, improving code quality, and contributing to end-to-end development in agile teams.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans across frontend development with React and Angular, backend systems with Java and Node.js, cloud infrastructure with AWS and GCP, and DevOps practices including Docker, Kubernetes, and CI/CD pipelines.
              </p>
            </div>

            <div className="animate-fade-in">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-primary mb-2">Education</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-foreground">Master of Science in Computer Science</p>
                        <p className="text-sm text-muted-foreground">University of Colorado Denver, USA</p>
                        <p className="text-sm text-accent font-medium">Jan 2023 – May 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-card border border-border rounded-xl">
                  <p className="text-4xl font-bold gradient-text">6+</p>
                  <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
                </div>
                <div className="text-center p-6 bg-card border border-border rounded-xl">
                  <p className="text-4xl font-bold gradient-text">20+</p>
                  <p className="text-sm text-muted-foreground mt-2">Technologies</p>
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
