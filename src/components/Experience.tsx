import { Briefcase } from "lucide-react";

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
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent via-primary to-accent opacity-20"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative animate-fade-in ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:text-right"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg"></div>

                  <div
                    className={`bg-card border border-border rounded-2xl p-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="flex items-start space-x-4 md:space-x-0">
                      <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                        <Briefcase className="h-6 w-6 text-accent" />
                      </div>
                      <div className={`flex-1 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                        <h3 className="text-xl font-bold text-primary mb-1">{exp.title}</h3>
                        <p className="text-foreground font-medium mb-2">{exp.company}</p>
                        <p className="text-sm text-accent font-semibold mb-4">{exp.period}</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-accent mr-2">▸</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
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
