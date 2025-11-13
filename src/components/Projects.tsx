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
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              Showcase of recent work demonstrating full-stack expertise and cloud-native architecture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-secondary text-foreground rounded-md border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/PavanKumar-sudo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8"
              >
                <Github className="mr-2 h-4 w-4" />
                View All Projects on GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
