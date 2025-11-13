import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Healthcare API Platform",
    description: "High-performance REST API system with JWT authentication, built with FastAPI and PostgreSQL. Features containerized microservices deployed on GCP Cloud Run with automated CI/CD pipelines.",
    technologies: ["FastAPI", "PostgreSQL", "JWT", "Docker", "GCP Cloud Run"],
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Cloud-Native Order Processing",
    description: "Scalable microservice architecture on AWS using Go, handling high-throughput order processing with event-driven patterns. Deployed on EKS with GitOps using ArgoCD.",
    technologies: ["Go", "AWS EKS", "S3", "DynamoDB", "SQS", "ArgoCD"],
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "MLOps Credit Risk System",
    description: "End-to-end machine learning pipeline for credit risk prediction using XGBoost. Containerized FastAPI service with MLflow for model versioning, deployed to Cloud Run.",
    technologies: ["Python", "XGBoost", "FastAPI", "MLflow", "Docker", "Cloud Run"],
    gradient: "from-green-500/10 to-emerald-500/10",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Portfolio</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-primary mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-1 bg-accent rounded-full"></div>
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="w-12 h-1 bg-accent rounded-full"></div>
            </div>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              Showcase of recent work demonstrating full-stack expertise and cloud-native architecture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group animate-scale-in"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-primary/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-full bg-card/70 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
                    {/* Project header with gradient */}
                    <div className={`h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden p-6 flex flex-col justify-end`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
                      <div className="relative">
                        <h3 className="text-2xl font-bold text-primary mb-2">{project.title}</h3>
                        <div className="w-16 h-1 bg-accent rounded-full"></div>
                      </div>
                    </div>

                    {/* Project content */}
                    <div className="p-6 space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed min-h-[80px]">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium bg-secondary/70 backdrop-blur-sm text-foreground rounded-full border border-border/50 hover:border-accent transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-all"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 gradient-purple text-white hover:opacity-90 hover:scale-105 transition-all"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View all projects CTA */}
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a
              href="https://github.com/PavanKumar-sudo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="inline-block relative group">
                <div className="absolute -inset-1 gradient-purple rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <Button
                  variant="outline"
                  className="relative border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full px-8 py-6 text-base shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View All Projects on GitHub
                </Button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
