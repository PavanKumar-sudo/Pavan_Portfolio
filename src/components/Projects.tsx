// ⭐ FINAL Projects.tsx — "Hover shows ONLY screenshot"

import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/config/links";
import { PROJECTS } from "@/config/projects";

// -------------------------------------------------------
// ⭐ PROJECT CARD COMPONENT
// -------------------------------------------------------
const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [magneticPosition, setMagneticPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = project.icon;

  // Scroll animation reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    cardRef.current && observer.observe(cardRef.current);
    return () => cardRef.current && observer.unobserve(cardRef.current);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const percent = (window.innerHeight - rect.top) / window.innerHeight;
      setScrollOffset(percent * 20 - 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse 3D tilt + magnetic pull
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const rotateX = (y - cy) / 10;
    const rotateY = (cx - x) / 10;

    setMousePosition({ x: rotateY, y: rotateX });
    setMagneticPosition({ x: (x - cx) * 0.15, y: (y - cy) * 0.15 });
  };

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 h-full ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: `${index * 0.1}s`,
        transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)
        translate(${magneticPosition.x}px, ${
          magneticPosition.y + scrollOffset
        }px)`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
        setMagneticPosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Outer glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/30 via-blue-400/30 to-teal-400/30 rounded-[32px] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

      {/* Floating animation wrapper */}
      <div className="transform transition-all duration-700 ease-out group-hover:-translate-y-3">

        {/* Actual card container */}
        <div
          className={`relative rounded-[32px] overflow-hidden transition-all duration-500 h-full flex flex-col ${
            isHovered
              ? "shadow-2xl scale-[1.03] border-2 border-purple-300/60 bg-white/95 backdrop-blur-2xl"
              : "shadow-lg bg-white/80 border border-purple-100/50 backdrop-blur-xl"
          }`}
        >
          {/* HEADER AREA */}
          <div className="relative overflow-hidden h-52 rounded-t-[32px]">

            {/* ⭐ Default background (shows when NOT hovered) */}
            {project.defaultBackgroundImage ? (
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  isHovered ? "opacity-0 scale-110" : "opacity-100 scale-100"
                }`}
                style={{
                  backgroundImage: `url(${project.defaultBackgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ) : (
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-opacity duration-500 ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              >
                {/* Modern abstract UI/UX pattern */}
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%),
                      radial-gradient(circle at 40% 20%, rgba(255,255,255,0.15) 0%, transparent 50%),
                      linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)
                    `,
                  }}
                />
                {/* Subtle dot pattern overlay for texture */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)`,
                    backgroundSize: '24px 24px',
                  }}
                />
                {/* Mesh gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
              </div>
            )}

            {/* ⭐ Unified overlay — SAME for all 3 cards */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>

            {/* ⭐ Hover screenshot */}
            {"backgroundImage" in project && project.backgroundImage && isHovered && (
              <div
                className="absolute inset-0 opacity-100 scale-100 transition-all duration-700"
                style={{
                  backgroundImage: `url(${project.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            )}

            {/* Icon + Title */}
            <div
              className={`relative z-10 p-6 h-full flex flex-col ${
                isHovered ? "opacity-0 translate-y-2" : "opacity-100"
              }`}
            >
              <div className="flex justify-end mb-4">
                <div className="p-3.5 rounded-2xl bg-white/95 shadow-xl backdrop-blur-xl">
                  <Icon className={`h-7 w-7 ${project.iconColor}`} />
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-extrabold text-white drop-shadow-lg">
                {project.title}
              </h3>

              <div className="h-1.5 w-20 rounded-full mt-3 bg-gradient-to-r from-purple-300 to-blue-300 shadow-lg" />
            </div>
          </div>

          {/* BODY CONTENT */}
          <div
            className={`p-6 md:p-8 space-y-6 flex flex-col flex-grow ${
              isHovered
                ? "bg-white/95 backdrop-blur-xl rounded-b-[32px]"
                : "bg-white/60 backdrop-blur-sm"
            }`}
          >
            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2.5">
              {project.technologies?.map((tech, i) => (
                <span
                  key={i}
                  className={`px-4 py-2 text-xs md:text-sm font-bold rounded-full ${
                    isHovered
                      ? "bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 border border-purple-300/50"
                      : "bg-white/80 text-purple-700 border border-purple-200/60"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 pt-3 mt-auto">
              <Button
                variant="outline"
                className="flex-1 border-purple-300 text-purple-700 bg-white/70"
                size="sm"
                onClick={() =>
                  window.open(LINKS[project.githubKey], "_blank", "noopener,noreferrer")
                }
              >
                <Github className="mr-2 h-4 w-4" /> Code
              </Button>

              <Button
                size="sm"
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                onClick={() => {
                  if (!project.liveKey) return;
                  window.open(LINKS[project.liveKey], "_blank", "noopener,noreferrer");
                }}
              >
                <ExternalLink className="mr-2 h-4 w-4" /> Live
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------
// ⭐ PROJECTS SECTION
// -------------------------------------------------------
const Projects = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const percent =
        (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setScrollProgress(percent);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="projects"
      className="relative w-full py-20 md:py-28 lg:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 50%, #e0f2fe 100%)",
      }}
    >
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 z-50 origin-left"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
            Projects
          </h2>

          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            A showcase of full-stack, cloud, and AI-powered systems.
          </p>
        </div>

        {/* Cards */}
        <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, index) => (
            <ProjectCard key={index} project={p} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 flex justify-center">
          <div className="relative w-full max-w-3xl">
            {/* Glow */}
            <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-400/25 via-blue-400/25 to-teal-400/25 blur-2xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-700" />

            <div className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 px-6 py-6 shadow-soft-lg backdrop-blur-2xl sm:px-8 sm:py-8">
              {/* Subtle gradient background */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-50/70 via-blue-50/70 to-teal-50/60 opacity-80" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/40 to-transparent" />

              <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <div className="space-y-2">
                  <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.35)]" />
                    Interested in my work?
                  </p>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
                    Like these projects? Check out everything I&apos;ve built and let&apos;s ship something together.
                  </h3>
                </div>

                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <Button
                    size="sm"
                    className="flex-1 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 px-5 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_18px_40px_rgba(79,70,229,0.45)] sm:px-6 sm:text-sm"
                    onClick={() =>
                      window.open(LINKS.githubRepositories, "_blank", "noopener,noreferrer")
                    }
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View all projects
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 rounded-full border-purple-200/80 bg-white/80 px-5 text-xs font-semibold text-purple-700 shadow-sm transition-all duration-300 hover:border-purple-300 hover:bg-purple-50/70 hover:text-purple-800 sm:px-6 sm:text-sm"
                    onClick={() => {
                      const contactSection = document.getElementById("contact");
                      contactSection?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Get in touch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
