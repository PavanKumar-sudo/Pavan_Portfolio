const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Angular", "TypeScript", "JavaScript", "Tailwind", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Java", "Spring Boot", "Node.js", "Express.js", "Go"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis"],
  },
  {
    title: "Cloud",
    skills: ["AWS", "GCP"],
  },
  {
    title: "DevOps",
    skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "ArgoCD"],
  },
  {
    title: "Architecture",
    skills: ["Microservices", "REST", "GraphQL", "Kafka"],
  },
  {
    title: "Testing",
    skills: ["JUnit", "Mockito", "Jest", "Cucumber"],
  },
  {
    title: "CI/CD & IAC",
    skills: ["Terraform", "Ansible", "Helm", "CloudFormation"],
  },
  {
    title: "Monitoring",
    skills: ["Prometheus", "Grafana", "ELK", "CloudWatch"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full"></div>
                  <h3 className="text-xl font-bold text-primary">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-secondary text-sm text-foreground rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
