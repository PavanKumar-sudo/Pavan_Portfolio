import { Code2, Server, Database, Cloud, GitBranch, TestTube, Gauge, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Angular", "TypeScript", "JavaScript", "Tailwind", "HTML/CSS"],
    gradient: "from-blue-200/40 via-cyan-200/40 to-purple-200/40",
    iconColor: "text-blue-600",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Java", "Spring Boot", "Node.js", "Express.js", "Go"],
    gradient: "from-green-200/40 via-emerald-200/40 to-teal-200/40",
    iconColor: "text-green-600",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis"],
    gradient: "from-orange-200/40 via-amber-200/40 to-yellow-200/40",
    iconColor: "text-orange-600",
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS", "GCP", "Azure"],
    gradient: "from-purple-200/40 via-pink-200/40 to-blue-200/40",
    iconColor: "text-purple-600",
  },
  {
    title: "DevOps",
    icon: GitBranch,
    skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "ArgoCD"],
    gradient: "from-red-200/40 via-rose-200/40 to-pink-200/40",
    iconColor: "text-red-600",
  },
  {
    title: "Architecture",
    icon: Wrench,
    skills: ["Microservices", "REST", "GraphQL", "Kafka"],
    gradient: "from-indigo-200/40 via-violet-200/40 to-purple-200/40",
    iconColor: "text-indigo-600",
  },
  {
    title: "Testing",
    icon: TestTube,
    skills: ["JUnit", "Mockito", "Jest", "Cucumber"],
    gradient: "from-teal-200/40 via-cyan-200/40 to-blue-200/40",
    iconColor: "text-teal-600",
  },
  {
    title: "CI/CD & IAC",
    icon: Gauge,
    skills: ["Terraform", "Ansible", "Helm", "CloudFormation"],
    gradient: "from-yellow-200/40 via-orange-200/40 to-amber-200/40",
    iconColor: "text-yellow-600",
  },
  {
    title: "Monitoring",
    icon: Gauge,
    skills: ["Prometheus", "Grafana", "ELK", "CloudWatch"],
    gradient: "from-pink-200/40 via-purple-200/40 to-indigo-200/40",
    iconColor: "text-pink-600",
  },
];

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="relative w-full py-20 md:py-28 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 50%, #e0f2fe 100%)' }}
    >
      {/* ⭐ Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          {/* ⭐ Modern Section Header */}
          <div className="text-center mb-16 md:mb-20 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mt-4 mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent relative z-10">
                Technical <span className="text-gray-900">Skills</span>
              </span>
              {/* Text shadow/glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent blur-xl opacity-30 -z-0">
                Technical Skills
              </span>
            </h2>
            <p className="text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Comprehensive expertise across the full Software development lifecycle
            </p>
            <div className="flex justify-center items-center gap-3 mt-6">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-purple-600 rounded-full"></div>
              <div className="h-1.5 w-24 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-full shadow-lg"></div>
              <div className="h-1 w-12 bg-gradient-to-r from-teal-600 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group relative animate-fade-in hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-teal-400/20 rounded-[28px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Skill Card */}
                  <div
                    className={`relative glass rounded-[28px] p-6 md:p-8 shadow-soft-lg border border-purple-200/40 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full`}
                    style={{
                      background: `linear-gradient(135deg, rgba(250, 245, 255, 0.9), rgba(240, 250, 255, 0.8))`,
                    }}
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`h-6 w-6 md:h-7 md:w-7 ${category.iconColor}`} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 text-xs md:text-sm font-semibold rounded-full bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 border border-purple-200/50 shadow-sm hover:scale-105 hover:border-purple-300 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Highlight Card */}
          <div className="mt-16 md:mt-20 text-center animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <div className="inline-block relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/30 via-blue-400/30 to-teal-400/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Highlight Card */}
              <div 
                className="relative glass rounded-2xl p-6 md:p-8 shadow-soft-lg border border-purple-200/40 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg, rgba(250, 245, 255, 0.9), rgba(240, 250, 255, 0.8))`,
                }}
              >
                <p className="text-sm md:text-base text-gray-600 mb-2 font-medium">Always Learning & Exploring</p>
                <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  20+ Technologies & Growing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
