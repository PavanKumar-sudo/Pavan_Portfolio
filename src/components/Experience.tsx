import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Java Full Stack Developer",
    company: "BMO Harris Bank, USA",
    period: "Aug 2024 – Present",
    description: [
      "React front-end development with reusable components",
      "Spring Boot 3.3 microservices with Java 21",
      "Kafka event-driven systems",
      "PostgreSQL optimization and caching strategy",
      "Kubernetes deployments (AWS EKS)",
      "CI/CD with Jenkins & ArgoCD",
      "99.99% test coverage for critical services",
    ],
  },
  {
    title: "Engineer",
    company: "Renault Nissan Technology & Business Centre, Chennai",
    period: "Jan 2021 – Dec 2022",
    description: [
      "React.js UIs and Spring Boot APIs",
      "MongoDB query optimization",
      "Migrated on-prem apps to AWS",
      "GitHub Actions CI/CD automation",
      "Kafka producers/consumers",
      "Blue-green deployments",
    ],
  },
  {
    title: "Software Engineer",
    company: "CVS Health, Hyderabad",
    period: "Jan 2018 – Dec 2020",
    description: [
      "Angular front-end development",
      "Node.js backend APIs",
      "HIPAA & OWASP secure implementations",
      "Oracle query optimization",
      "GKE deployments & Cloud Build CI/CD",
      "Automated testing with JUnit, Mockito, Cucumber",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-secondary/20">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">My Journey</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-primary mb-6">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-1 bg-accent rounded-full"></div>
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="w-12 h-1 bg-accent rounded-full"></div>
            </div>
          </div>

          <div className="relative">
            {/* Enhanced Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full bg-gradient-to-b from-accent/30 via-primary/30 to-accent/30"></div>

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative animate-fade-in ${
                    index % 2 === 0 ? "lg:pr-[52%]" : "lg:pl-[52%]"
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Enhanced Timeline dot */}
                  <div className="hidden lg:flex absolute top-8 left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <div className="absolute w-8 h-8 bg-accent/20 rounded-full animate-ping"></div>
                    <div className="relative w-6 h-6 bg-gradient-to-br from-accent to-primary rounded-full border-4 border-background shadow-xl"></div>
                  </div>

                  {/* Card */}
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div
                      className={`relative bg-card/70 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 ${
                        index % 2 === 0 ? "lg:mr-12" : "lg:ml-12"
                      }`}
                    >
                      <div className="flex items-start gap-6">
                        <div className="p-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Briefcase className="h-7 w-7 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex flex-wrap gap-3 mb-4">
                            <div className="flex items-center gap-2 text-foreground font-semibold">
                              <MapPin className="h-4 w-4 text-accent" />
                              <span>{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2 text-accent font-medium">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-3 mt-6">
                            {exp.description.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-3 group/item">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                                <p className="text-sm text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
