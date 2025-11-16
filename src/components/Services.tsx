import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Server,
  Cloud,
  Database,
  GitBranch,
  Gauge,
  Workflow,
  Layers,
} from "lucide-react";
import ServiceCard, { type Service } from "./ServiceCard";

// Example JSON-like services configuration used by the section
export const services: Service[] = [
  {
    id: "frontend",
    name: "Frontend Engineering",
    label: "Frontend · UI",
    description:
      "Crafting responsive, accessible, and delightful interfaces using React, TypeScript, and modern design systems.",
    proficiency: 80,
    icon: <Code2 className="h-4 w-4" />,
    gradient: "from-purple-50/90 via-fuchsia-50/80 to-sky-50/90",
  },
  {
    id: "backend",
    name: "Backend & APIs",
    label: "Backend · APIs",
    description:
      "Designing robust REST and GraphQL services with Java, Spring Boot, and optimized data access layers.",
    proficiency: 75,
    icon: <Server className="h-4 w-4" />,
    gradient: "from-sky-50/90 via-cyan-50/80 to-emerald-50/90",
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    label: "Cloud · DevOps",
    description:
      "Building secure, cloud-native solutions on AWS with CI/CD pipelines, observability, and automation.",
    proficiency: 70,
    icon: <Cloud className="h-4 w-4" />,
    gradient: "from-amber-50/90 via-orange-50/80 to-rose-50/90",
  },
  {
    id: "fullstack",
    name: "Full Stack Solutions",
    label: "Full Stack",
    description:
      "Owning features end‑to‑end—from UX and API design to deployment and performance optimization.",
    proficiency: 85,
    icon: <Layers className="h-4 w-4" />,
    gradient: "from-indigo-50/90 via-blue-50/80 to-teal-50/90",
  },
  {
    id: "data",
    name: "Database & Data Design",
    label: "SQL · NoSQL",
    description:
      "Modeling performant relational and document data stores with resilient migrations and indexing strategies.",
    proficiency: 78,
    icon: <Database className="h-4 w-4" />,
    gradient: "from-emerald-50/90 via-teal-50/80 to-sky-50/90",
  },
  {
    id: "platform",
    name: "Platform & Reliability",
    label: "K8s · CI/CD",
    description:
      "Containerizing workloads, managing Kubernetes, and setting up resilient delivery pipelines with GitOps.",
    proficiency: 74,
    icon: <Workflow className="h-4 w-4" />,
    gradient: "from-slate-50/90 via-slate-50/80 to-indigo-50/90",
  },
  {
    id: "performance",
    name: "Performance & Optimization",
    label: "Perf · Tuning",
    description:
      "Profiling and fine‑tuning applications to keep latency low, throughput high, and costs predictable.",
    proficiency: 72,
    icon: <Gauge className="h-4 w-4" />,
    gradient: "from-yellow-50/90 via-amber-50/80 to-orange-50/90",
  },
  {
    id: "delivery",
    name: "CI/CD & Automation",
    label: "Pipelines",
    description:
      "Automating builds, tests, and deployments with GitHub Actions, Jenkins, and cloud-native tooling.",
    proficiency: 76,
    icon: <GitBranch className="h-4 w-4" />,
    gradient: "from-rose-50/90 via-pink-50/80 to-purple-50/90",
  },
];

type Skill = {
  id: string;
  label: string;
  value: number;
  accent: string; // Tailwind gradient classes
};

const skills: Skill[] = [
  {
    id: "skill-frontend",
    label: "Frontend",
    value: 80,
    accent: "from-purple-500 via-fuchsia-500 to-sky-500",
  },
  {
    id: "skill-backend",
    label: "Backend",
    value: 75,
    accent: "from-sky-500 via-blue-500 to-emerald-400",
  },
  {
    id: "skill-cloud",
    label: "Cloud",
    value: 70,
    accent: "from-cyan-500 via-teal-400 to-emerald-400",
  },
  {
    id: "skill-fullstack",
    label: "Full Stack",
    value: 85,
    accent: "from-indigo-500 via-purple-500 to-sky-500",
  },
];

type SkillBarProps = {
  label: string;
  value: number;
  accent: string;
  index: number;
  animate: boolean;
};

const SkillBar = ({ label, value, accent, index, animate }: SkillBarProps) => {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 sm:text-xs">
        <span className="text-slate-800">{label}</span>
        <span>{clamped}%</span>
      </div>
      <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-white/40">
        {/* Light reflection layer */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/10 to-transparent opacity-90" />
        <div
          className={
            "relative h-full rounded-full bg-gradient-to-r " +
            accent +
            " shadow-[0_0_16px_rgba(59,130,246,0.35)]"
          }
          style={{
            width: animate ? `${clamped}%` : "0%",
            transition: "width 0.85s ease-out",
            transitionDelay: `${index * 120}ms`,
          }}
        />
      </div>
    </div>
  );
};

const SkillCoverageBlock = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      {/* Decorative blobs / bokeh */}
      <div className="pointer-events-none absolute -left-10 -top-8 h-16 w-16 rounded-full bg-purple-300/35 blur-2xl" />
      <div className="pointer-events-none absolute -right-6 -top-10 h-20 w-20 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -inset-x-10 -bottom-10 h-32 bg-gradient-to-r from-purple-300/25 via-blue-300/20 to-cyan-200/25 blur-3xl" />

      {/* Glassmorphism card */}
      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/40 px-6 py-5 text-xs text-slate-600 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(148,163,184,0.55)] sm:px-7 sm:py-6 sm:text-sm">
        {/* Soft internal gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-white/25 to-white/10 opacity-90" />

        <div className="relative space-y-4">
          <p className="text-sm font-semibold tracking-tight text-slate-900 sm:text-[0.95rem]">
            Skill Coverage Overview
          </p>

          <div className="space-y-3">
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.id}
                label={skill.label}
                value={skill.value}
                accent={skill.accent}
                index={index}
                animate={animate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(224,231,255,0.92) 0%, rgba(243,232,255,0.94) 48%, rgba(224,242,254,0.96) 100%), url('https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background orbs & grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-10 h-60 w-60 rounded-full bg-purple-300/20 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(15,23,42,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15,23,42,0.08) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section header */}
          <header className="mb-10 flex flex-col items-start gap-6 sm:mb-12 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-slate-600 shadow-sm backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_0_4px_rgba(168,85,247,0.35)]" />
                Services
              </div>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-[2.5rem]">
                  <span className="gradient-text">What I help teams ship</span>
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  From frontend polish to backend reliability, I partner with
                  product and engineering teams to ship modern, production‑ready
                  experiences.
                </p>
              </div>
            </div>

            {/* Modern skill coverage block */}
            <SkillCoverageBlock />
          </header>

          {/* Services grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onViewDetails={() => {
                  const projectsSection = document.getElementById("projects");
                  projectsSection?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
