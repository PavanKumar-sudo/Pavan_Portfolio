import { Code2, Server, Database, Cloud, GitBranch, TestTube, Gauge, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Angular", "TypeScript", "JavaScript", "Tailwind", "HTML/CSS"],
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Java", "Spring Boot", "Node.js", "Express.js", "Go"],
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis"],
    gradient: "from-orange-500/10 to-amber-500/10",
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS", "GCP"],
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "DevOps",
    icon: GitBranch,
    skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "ArgoCD"],
    gradient: "from-red-500/10 to-rose-500/10",
  },
  {
    title: "Architecture",
    icon: Wrench,
    skills: ["Microservices", "REST", "GraphQL", "Kafka"],
    gradient: "from-indigo-500/10 to-violet-500/10",
  },
  {
    title: "Testing",
    icon: TestTube,
    skills: ["JUnit", "Mockito", "Jest", "Cucumber"],
    gradient: "from-teal-500/10 to-cyan-500/10",
  },
  {
    title: "CI/CD & IAC",
    icon: Gauge,
    skills: ["Terraform", "Ansible", "Helm", "CloudFormation"],
    gradient: "from-yellow-500/10 to-orange-500/10",
  },
  {
    title: "Monitoring",
    icon: Gauge,
    skills: ["Prometheus", "Grafana", "ELK", "CloudWatch"],
    gradient: "from-pink-500/10 to-purple-500/10",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Tech Stack</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-primary mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-1 bg-accent rounded-full"></div>
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="w-12 h-1 bg-accent rounded-full"></div>
            </div>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise across the full development lifecycle
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group animate-scale-in"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="relative h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className={`relative h-full bg-gradient-to-br ${category.gradient} backdrop-blur-xl border border-border/50 rounded-3xl p-6 hover:shadow-2xl transition-all hover:-translate-y-2`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-card/70 backdrop-blur-sm rounded-2xl group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                          {category.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-card/70 backdrop-blur-sm text-sm font-medium text-foreground rounded-full border border-border/50 hover:border-accent hover:bg-accent/10 transition-all hover:scale-105"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom highlight */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="inline-block relative">
              <div className="absolute -inset-2 gradient-purple rounded-2xl blur-xl opacity-50"></div>
              <div className="relative bg-card/70 backdrop-blur-xl border border-accent/30 rounded-2xl px-8 py-6">
                <p className="text-sm text-muted-foreground mb-2">Always Learning & Exploring</p>
                <p className="text-lg font-bold gradient-text">20+ Technologies & Growing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
