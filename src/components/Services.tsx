import { Code2, Server, Cloud, Database, GitBranch, Gauge, Workflow, Lock } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full Stack Web Development",
    description: "End-to-end web application development with modern frameworks and best practices.",
  },
  {
    icon: Server,
    title: "Backend API & Microservices",
    description: "Scalable REST and GraphQL APIs with microservices architecture.",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Responsive, interactive UIs with React and Angular.",
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description: "Cloud-native solutions on AWS and GCP with infrastructure automation.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipeline Setup",
    description: "Automated deployment pipelines with Jenkins, GitHub Actions, and ArgoCD.",
  },
  {
    icon: Workflow,
    title: "Kubernetes & Containerization",
    description: "Container orchestration and deployment with Docker and Kubernetes.",
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    description: "Efficient database schemas and query optimization for SQL and NoSQL.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Application performance tuning and scalability improvements.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              What I <span className="gradient-text">Offer</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              Comprehensive software development services from ideation to deployment
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-1 bg-accent rounded-full mb-4 group-hover:w-16 transition-all"></div>
                <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
