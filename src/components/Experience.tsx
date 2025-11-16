import { useEffect, useRef, useState } from "react";
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  Building2, 
  TrendingUp,
  Zap,
  Cloud,
  Shield,
  Puzzle,
  FlaskConical,
  Rocket
} from "lucide-react";
import renaultLogo from "@/assets/Renault-logo.jpg";
import bmoLogo from "@/assets/bmo-harris-bank-logo.jpg";
import cvsLogo from "@/assets/CVS-health-logo.jpg";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  keyImpact: string;
  skills: string[];
  description: Array<{
    text: string;
    icon: string;
  }>;
  gradient: string;
  logoColor: string;
  logoUrl?: string;
  logoBg?: string;
  logoBorder?: string;
}

const experiences: Experience[] = [
  {
    title: "Java Full Stack Developer",
    company: "BMO Harris Bank",
    location: "USA",
    period: "Aug 2024 – Present",
    keyImpact: "35% faster API performance • 20% fewer incidents • 40ms lower DB latency",
    skills: ["Java 21", "Spring Boot 3.3", "React", "PostgreSQL", "Kafka", "Kubernetes", "AWS EKS", "Jenkins", "ArgoCD"],
    description: [
      { text: "React front-end development with reusable components", icon: "⚡" },
      { text: "Spring Boot 3.3 microservices with Java 21", icon: "🚀" },
      { text: "Kafka event-driven systems", icon: "☁️" },
      { text: "PostgreSQL optimization and caching strategy", icon: "🧩" },
      { text: "Kubernetes deployments (AWS EKS)", icon: "☁️" },
      { text: "CI/CD with Jenkins & ArgoCD", icon: "🚀" },
      { text: "99.99% test coverage for critical services", icon: "🧪" },
    ],
    gradient: "from-blue-200/40 via-purple-200/40 to-teal-200/40",
    logoColor: "bg-gradient-to-br from-blue-500 to-blue-600",
    logoUrl: bmoLogo,
    logoBg: "bg-white",
    logoBorder: "border-blue-300",
  },
  {
    title: "Engineer",
    company: "Renault Nissan Technology",
    location: "Chennai, India",
    period: "Jan 2021 – Dec 2022",
    keyImpact: "Zero-downtime cloud migration • 30% faster deployments",
    skills: ["React.js", "Spring Boot", "MongoDB", "AWS", "Kafka", "GitHub Actions", "Docker"],
    description: [
      { text: "React.js UIs and Spring Boot APIs", icon: "⚡" },
      { text: "MongoDB query optimization", icon: "🧩" },
      { text: "Migrated on-prem apps to AWS", icon: "☁️" },
      { text: "GitHub Actions CI/CD automation", icon: "🚀" },
      { text: "Kafka producers/consumers", icon: "☁️" },
      { text: "Blue-green deployments", icon: "🧪" },
    ],
    gradient: "from-purple-200/40 via-pink-200/40 to-blue-200/40",
    logoColor: "bg-white",
    logoUrl: renaultLogo,
    logoBg: "bg-white",
    logoBorder: "border-orange-300",
  },
  {
    title: "Software Engineer",
    company: "CVS Health",
    location: "Hyderabad, India",
    period: "Jan 2018 – Dec 2020",
    keyImpact: "HIPAA & OWASP compliant • 25% query performance improvement",
    skills: ["Angular", "Node.js", "Oracle", "GKE", "Cloud Build", "JUnit", "Mockito", "Cucumber"],
    description: [
      { text: "Angular front-end development", icon: "⚡" },
      { text: "Node.js backend APIs", icon: "🚀" },
      { text: "HIPAA & OWASP secure implementations", icon: "🔐" },
      { text: "Oracle query optimization", icon: "🧩" },
      { text: "GKE deployments & Cloud Build CI/CD", icon: "☁️" },
      { text: "Automated testing with JUnit, Mockito, Cucumber", icon: "🧪" },
    ],
    gradient: "from-teal-200/40 via-blue-200/40 to-purple-200/40",
    logoColor: "bg-gradient-to-br from-teal-500 to-blue-500",
    logoUrl: cvsLogo,
    logoBg: "bg-white",
    logoBorder: "border-red-300",
  },
];

const Experience = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Debug: Log logo URLs on mount
  useEffect(() => {
    console.log("Logo URLs:", {
      renault: renaultLogo,
      bmo: bmoLogo,
      cvs: cvsLogo,
    });
  }, []);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section 
      id="experience" 
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
        <div className="max-w-6xl mx-auto">
          {/* ⭐ Modern Section Header */}
          <div className="text-center mb-16 md:mb-20 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mt-4 mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent relative z-10">
                Work <span className="text-gray-900">Experience</span>
              </span>
              {/* Text shadow/glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent blur-xl opacity-30 -z-0">
                Work Experience
              </span>
            </h2>
            <p className="text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Building enterprise solutions with precision and innovation
            </p>
            <div className="flex justify-center items-center gap-3 mt-6">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-purple-600 rounded-full"></div>
              <div className="h-1.5 w-24 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-full shadow-lg"></div>
              <div className="h-1 w-12 bg-gradient-to-r from-teal-600 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line - Desktop Only */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-300/50 via-blue-300/50 to-teal-300/50 rounded-full"></div>

            {/* Experience Cards */}
            <div className="space-y-12 md:space-y-16">
              {experiences.map((exp, index) => {
                const isEven = index % 2 === 0;
                const isVisible = visibleCards.has(index);

                return (
                  <div
                    key={index}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    className={`relative ${
                      isEven ? "lg:pr-[52%]" : "lg:pl-[52%]"
                    }`}
                  >
                    {/* Timeline Node - Desktop Only */}
                    <div className="hidden lg:flex absolute top-12 left-1/2 transform -translate-x-1/2 items-center justify-center z-20">
                      <div className="absolute w-12 h-12 bg-purple-400/30 rounded-full animate-ping"></div>
                      <div className="relative w-10 h-10 bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 rounded-full border-4 border-white shadow-2xl flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full animate-glow"></div>
                      </div>
                    </div>

                    {/* Experience Card */}
                    <div
                      className={`group relative ${
                        isVisible
                          ? isEven
                            ? "animate-slide-in-left"
                            : "animate-slide-in-right"
                          : "opacity-0"
                      }`}
                      style={{
                        transition: "opacity 0.6s ease-out",
                      }}
                    >
                      {/* Glow Effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-teal-400/20 rounded-[28px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Main Card */}
                      <div
                        className={`relative glass rounded-[28px] p-8 md:p-10 shadow-soft-lg border border-purple-200/40 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                          isEven ? "lg:mr-8" : "lg:ml-8"
                        }`}
                        style={{
                          background: `linear-gradient(135deg, rgba(250, 245, 255, 0.9), rgba(240, 250, 255, 0.8))`,
                        }}
                      >
                        {/* Key Impact Badge */}
                        <div className="mb-6">
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200/50 shadow-sm">
                            <TrendingUp className="h-4 w-4 text-purple-600" />
                            <span className="text-sm font-bold text-purple-700">
                              Key Impact
                            </span>
                          </div>
                          <p className="mt-2 text-sm md:text-base font-semibold text-gray-700 leading-relaxed">
                            {exp.keyImpact}
                          </p>
                        </div>

                        {/* Header Section */}
                        <div className="flex items-start gap-6 mb-6">
                          {/* Company Logo */}
                          <div className="relative group/logo">
                            {/* Glow effect on hover - company specific colors */}
                            <div 
                              className={`absolute -inset-1 rounded-2xl blur-md opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 ${
                                exp.company === 'BMO Harris Bank' 
                                  ? 'bg-blue-200/60' 
                                  : exp.company === 'Renault Nissan Technology'
                                  ? 'bg-orange-200/60'
                                  : exp.company === 'CVS Health'
                                  ? 'bg-red-200/60'
                                  : 'bg-purple-200/60'
                              }`}
                            ></div>
                            
                            {/* Logo Container */}
                            <div
                              className={`relative w-24 h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover/logo:scale-110 transition-all duration-300 overflow-hidden ${
                                exp.logoBg || 'bg-white'
                              } border-2 ${exp.logoBorder || 'border-gray-200'} group-hover/logo:shadow-xl group-hover/logo:border-opacity-80 p-3`}
                            >
                              {exp.logoUrl && !imageErrors.has(index) ? (
                                <img
                                  src={exp.logoUrl}
                                  alt={`${exp.company} logo`}
                                  className="object-contain"
                                  style={{ 
                                    width: exp.company === 'BMO Harris Bank' ? '75%' : '85%',
                                    height: exp.company === 'BMO Harris Bank' ? '75%' : '85%',
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    backgroundColor: 'transparent', 
                                    display: 'block',
                                    objectFit: 'contain'
                                  }}
                                  onError={(e) => {
                                    console.error(`Failed to load logo for ${exp.company}:`, exp.logoUrl);
                                    setImageErrors((prev) => new Set(prev).add(index));
                                  }}
                                  onLoad={() => {
                                    console.log(`Successfully loaded logo for ${exp.company}:`, exp.logoUrl);
                                  }}
                                />
                              ) : (
                                <div className={`${exp.logoColor} w-full h-full rounded-2xl flex items-center justify-center`}>
                                  <Building2 className="h-10 w-10 md:h-12 md:w-12 text-gray-400" />
                                </div>
                              )}
                              
                              {/* Subtle gradient overlay - removed for cleaner look */}
                            </div>
                          </div>

                          {/* Title & Company Info */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                              {exp.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 mb-3">
                              <div className="flex items-center gap-2 text-gray-700 font-semibold">
                                <Briefcase className="h-4 w-4 text-purple-600" />
                                <span className="text-base md:text-lg">{exp.company}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <MapPin className="h-4 w-4 text-purple-500" />
                                <span className="text-sm md:text-base">{exp.location}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-purple-600 font-medium">
                              <Calendar className="h-4 w-4" />
                              <span className="text-sm md:text-base">{exp.period}</span>
                            </div>
                          </div>
                        </div>

                        {/* Skill Badges */}
                        <div className="mb-6 flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1.5 text-xs md:text-sm font-semibold rounded-full bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 border border-purple-200/50 shadow-sm hover:scale-105 transition-transform cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Description List */}
                        <div className="space-y-3">
                          {exp.description.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-start gap-3 group/item"
                            >
                              <span className="text-xl md:text-2xl flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform">
                                {item.icon}
                              </span>
                              <p className="text-sm md:text-base text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors flex-1">
                                {item.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
