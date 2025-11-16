import { Code2, Cloud, Database, Shield, Zap, Rocket } from "lucide-react";

export default function About() {
  return (
    <section 
      id="about" 
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
        <div className="max-w-5xl mx-auto">
          
          {/* ⭐ Modern Section Header */}
          <div className="text-center mb-16 md:mb-20 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mt-4 mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent relative z-10">
                About <span className="text-gray-900">Me</span>
              </span>
              {/* Text shadow/glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent blur-xl opacity-30 -z-0">
                About Me
              </span>
            </h2>
            <div className="flex justify-center items-center gap-3 mt-6">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-purple-600 rounded-full"></div>
              <div className="h-1.5 w-24 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-full shadow-lg"></div>
              <div className="h-1 w-12 bg-gradient-to-r from-teal-600 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* MAIN BIO PARAGRAPH */}
          <div className="mb-10 md:mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4 max-w-4xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
                I'm a Java Full Stack Developer with a strong engineering foundation and <span className="font-bold text-purple-600">6 years of experience</span> building cloud-native, high-performance systems across banking, healthcare, and automotive domains. I specialize in designing <span className="font-bold text-purple-600">Spring Boot, Node.js microservices</span> that run at scale on <span className="font-bold text-purple-600">AWS, Azure and GCP</span>—optimizing distributed systems to deliver <span className="font-bold text-purple-600">35% </span>faster response times, <span className="font-bold text-purple-600">20% </span>fewer production incidents, and <span className="font-bold text-purple-600">40ms</span>lower DB latency at BMO Bank.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
                I build modern, component-driven frontends in <span className="font-bold text-purple-600">React and Angular</span>, shipping <span className="font-bold text-purple-600">100+</span> reusable UI components that consistently improve user flow efficiency by <span className="font-bold text-purple-600">25–30%</span>. My work spans event-driven architectures with<span className="font-bold text-purple-600"> Kafka</span>, enterprise CI/CD automation with  <span className="font-bold text-purple-600">Jenkins, ArgoCD, GitHub Actions</span>, and <span className="font-bold text-purple-600">cloud migration</span> initiatives with zero data loss
              </p>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
                I bring a deep focus on <span className="font-bold text-purple-600">clean engineering, security (HIPAA, OWASP), and reliability</span> solving complex problems with a balance of speed, precision, and system-level thinking.
              </p>
            </div>
          </div>

          {/* EDUCATION SECTION */}
          <div className="mb-10 md:mb-12 animate-fade-in" style={{ animationDelay: '0.25s' }}>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                <span className="text-purple-600">Education</span>
              </h3>
              <div 
                className="glass rounded-2xl p-6 md:p-8 shadow-soft-lg border border-white/50 backdrop-blur-md transition-all duration-300 cursor-pointer"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(196, 181, 253, 0.3)';
                  e.currentTarget.style.borderColor = 'rgba(196, 181, 253, 0.8)';
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(196, 181, 253, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '';
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      Master of Science in Computer Science
                    </h4>
                    <p className="text-base md:text-lg text-gray-700 font-medium">
                      University of Colorado Denver, Denver, USA
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm md:text-base text-purple-600 font-semibold">
                      Jan 2023 - May 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STAT CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            <StatCard
              value="6+"
              label="Years Experience"
              delay="0.35s"
            />
            <StatCard
              value="40+"
              label="Projects Completed"
              delay="0.4s"
            />
            <StatCard
              value="10+"
              label="Technologies Mastered"
              delay="0.45s"
            />
            <StatCard
              value="99.99%"
              label="System Uptime"
              delay="0.5s"
            />
          </div>

          {/* TECH STACK SHOWCASE */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Technology <span className="text-purple-600">Expertise</span>
              </h3>
              <p className="text-gray-600">Technologies I work with daily</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Java", icon: Code2, color: "text-orange-600" },
                { name: "Spring Boot", icon: Rocket, color: "text-green-600" },
                { name: "React", icon: Zap, color: "text-blue-600" },
                { name: "TypeScript", icon: Code2, color: "text-blue-500" },
                { name: "AWS", icon: Cloud, color: "text-orange-500" },
                { name: "Kubernetes", icon: Database, color: "text-blue-600" },
                { name: "Docker", icon: Cloud, color: "text-cyan-600" },
                { name: "Node.js", icon: Code2, color: "text-green-600" },
                { name: "Terraform", icon: Cloud, color: "text-purple-600" },
                { name: "MongoDB", icon: Database, color: "text-green-600" },
                { name: "PostgreSQL", icon: Database, color: "text-blue-700" },
                { name: "Security", icon: Shield, color: "text-red-600" },
              ].map((tech, index) => (
                <TechCard
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                  color={tech.color}
                  delay={`${0.1 * index}s`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Stat Card Component
interface StatCardProps {
  value: string;
  label: string;
  delay?: string;
}

const StatCard = ({ value, label, delay = "0s" }: StatCardProps) => (
  <div 
    className="relative group animate-fade-in hover-lift"
    style={{ animationDelay: delay }}
  >
    <div 
      className="relative glass rounded-2xl p-6 md:p-8 text-center shadow-soft-lg border border-white/50 backdrop-blur-md transition-all duration-300 cursor-pointer"
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(196, 181, 253, 0.3)';
        e.currentTarget.style.borderColor = 'rgba(196, 181, 253, 0.8)';
        e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(196, 181, 253, 0.3)';
        const valueEl = e.currentTarget.querySelector('p:first-of-type');
        const labelEl = e.currentTarget.querySelector('p:last-of-type');
        if (valueEl) (valueEl as HTMLElement).style.color = '#6b21a8';
        if (labelEl) (labelEl as HTMLElement).style.color = '#6b21a8';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '';
        e.currentTarget.style.borderColor = '';
        e.currentTarget.style.boxShadow = '';
        const valueEl = e.currentTarget.querySelector('p:first-of-type');
        const labelEl = e.currentTarget.querySelector('p:last-of-type');
        if (valueEl) (valueEl as HTMLElement).style.color = '';
        if (labelEl) (labelEl as HTMLElement).style.color = '';
      }}
    >
      <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent mb-2 transition-colors">
        {value}
      </p>
      <p className="text-sm md:text-base text-gray-700 font-medium transition-colors">{label}</p>
    </div>
  </div>
);

// Tech Card Component
interface TechCardProps {
  name: string;
  icon: React.ElementType;
  color: string;
  delay?: string;
}

const TechCard = ({ name, icon: Icon, color, delay = "0s" }: TechCardProps) => (
  <div
    className="group relative animate-fade-in hover-lift"
    style={{ animationDelay: delay }}
  >
    <div 
      className="glass rounded-xl p-4 text-center shadow-soft border border-white/50 backdrop-blur-xl cursor-pointer transition-all duration-300"
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(196, 181, 253, 0.3)';
        e.currentTarget.style.borderColor = 'rgba(196, 181, 253, 0.8)';
        e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(196, 181, 253, 0.3)';
        const iconEl = e.currentTarget.querySelector('svg');
        const textEl = e.currentTarget.querySelector('p');
        if (iconEl) iconEl.style.color = '#6b21a8';
        if (textEl) textEl.style.color = '#6b21a8';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '';
        e.currentTarget.style.borderColor = '';
        e.currentTarget.style.boxShadow = '';
        const iconEl = e.currentTarget.querySelector('svg');
        const textEl = e.currentTarget.querySelector('p');
        if (iconEl) iconEl.style.color = '';
        if (textEl) textEl.style.color = '';
      }}
    >
      <Icon className={`h-6 w-6 ${color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
      <p className="text-xs font-semibold text-gray-700 transition-colors">{name}</p>
    </div>
  </div>
);