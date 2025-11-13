import { Code2, Server, Cloud, Database, GitBranch, Gauge, Workflow, Sparkles } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "End-to-end web application development with modern frameworks and best practices.",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Server,
    title: "Backend & Microservices",
    description: "Scalable REST and GraphQL APIs with microservices architecture.",
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Responsive, interactive UIs with React and Angular.",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description: "Cloud-native solutions on AWS and GCP with infrastructure automation.",
    gradient: "from-orange-500/10 to-amber-500/10",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipeline Setup",
    description: "Automated deployment pipelines with Jenkins, GitHub Actions, and ArgoCD.",
    gradient: "from-red-500/10 to-rose-500/10",
  },
  {
    icon: Workflow,
    title: "Kubernetes & Docker",
    description: "Container orchestration and deployment with Docker and Kubernetes.",
    gradient: "from-indigo-500/10 to-violet-500/10",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Efficient database schemas and query optimization for SQL and NoSQL.",
    gradient: "from-teal-500/10 to-cyan-500/10",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Application performance tuning and scalability improvements.",
    gradient: "from-yellow-500/10 to-orange-500/10",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden bg-secondary/20">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">What I Do</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-primary mb-6">
              Services I <span className="gradient-text">Offer</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-1 bg-accent rounded-full"></div>
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="w-12 h-1 bg-accent rounded-full"></div>
            </div>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              Comprehensive software development services from ideation to deployment
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="relative h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className={`relative h-full bg-gradient-to-br ${service.gradient} backdrop-blur-xl border border-border/50 rounded-3xl p-6 hover:shadow-2xl transition-all hover:-translate-y-2`}>
                      {/* Top accent bar */}
                      <div className="w-16 h-1.5 bg-gradient-to-r from-accent to-primary rounded-full mb-6 group-hover:w-20 transition-all"></div>
                      
                      {/* Icon */}
                      <div className="p-3 bg-card/70 backdrop-blur-sm rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Hover indicator */}
                      <div className="mt-4 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        <Sparkles className="h-4 w-4" />
                        <span className="text-xs font-semibold">Learn More</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="inline-block relative">
              <div className="absolute -inset-2 gradient-purple rounded-2xl blur-xl opacity-50"></div>
              <div className="relative bg-card/70 backdrop-blur-xl border border-accent/30 rounded-2xl px-8 py-6">
                <p className="text-sm text-muted-foreground mb-2">Ready to start your project?</p>
                <p className="text-lg font-bold gradient-text">Let's build something amazing together</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
